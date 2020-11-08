import React, { useRef, useState, useEffect } from 'react'
import { SingleView } from '../../layouts/SingleView'
import { useParams } from 'react-router-dom'
import { getExecutions } from '../../api/api-services'
import { Table } from '../../components/atomos/Table'
import { Radio } from '../../components/atomos/Radio'
import { useAuth } from '../../contexts/auth.context'
import { Button } from '../../components/atomos/Button'
import { Row } from './Row'
import { useMessage } from '../../contexts/message.context'
import {
  GridTableFilter
} from './styles'
import { Form } from '@unform/web'


const ListExecutionsPage = ({ ...props }) => {
  const { reportId } = useParams()
  const formRef = useRef(null)
  const [executions, setExecutions] = useState([])
  const { onLogout } = useAuth()
  const { onSignal, onMessageSuccess, onMessageFailed } = useMessage()
  useEffect(() => {
    getExecutionsFilter()
  }, [reportId])
  const getExecutionsFilter = status => {
    onSignal()
    getExecutions(reportId, status && status.status !== 'todos' ? status : undefined)
      .then(data => {
        setExecutions(data.docs)
        onMessageSuccess('Dados carregados com sucesso!')
      })
      .catch(error => {
        onLogout()
        onMessageFailed('Houve um erro ao realizar sua requisição!')
      })
  }
  return (
    <SingleView title="Lista de execuções" 
      contentComponent={
        <GridTableFilter>
          <Table
            columns={[
              { displayName: 'Tipo'},
              { displayName: 'Status'},
              { displayName: 'Nome do consultado'},
              { displayName: 'Id da execução'}
            ]}
          >
            <tbody>
              {executions.map(execution => {
                return (
                  <Row
                    key={execution.id}
                    {...execution}
                  />
                )
              })}
            </tbody>
          </Table>
          <div style={{padding: 20}}>
            <Form ref={formRef} onSubmit={status => getExecutionsFilter(status)}>
              <h2>Filtros</h2>
              <Radio 
                label="Status"
                name="status"
                initialValue={'todos'}
                options={[
                  { label: 'Todos', value: 'todos' },
                  { label: 'Aprovado', value: 'aprovado' },
                  { label: 'Reprovado', value: 'reprovado' },
                  { label: 'Pendente', value: 'pendente' },
                  { label: 'Pendente OCR', value: 'pendente ocr' },
                  { label: 'Processando', value: 'processando' }
              ]}/>
              <Button type="submit" fullWidth>Filtrar</Button>
            </Form>
          </div>   
        </GridTableFilter>
      }
    />

  )
}

export { ListExecutionsPage }
    