import React, { useState, useEffect } from 'react'
import { SingleView } from '../../layouts/SingleView'
import { getReports } from '../../api/api-services'
import { Table } from '../../components/atomos/Table'
import { Row } from './Row'
import { useAuth } from '../../contexts/auth.context'
import { useMessage } from '../../contexts/message.context'

const ListReportsPage = ({ ...props }) => {
  const [reports, setReports] = useState([])
  const { onLogout } = useAuth()
  const { onSignal, onMessageSuccess, onMessageFailed } = useMessage()
  useEffect(() => {
    getReportsFilter()
  }, [])
  const getReportsFilter = () => {
    onSignal()
    getReports()
      .then(data => {
        setReports(data.body)
        onMessageSuccess('Dados carregados com sucesso!')
      })
      .catch(error => {
        onLogout()
        onMessageFailed('Houve um erro ao realizar sua requisição!')
      })
  }
  console.log(reports)
  return (
    <SingleView title="Lista de relatórios" 
      contentComponent={
        <div>
          <Table
            columns={[
              { displayName: 'Nome'},
              { displayName: 'Id do relatório'},
              { displayName: 'Execuções'}
            ]}
          >
            <tbody>
              {reports.map(report => {
                return (
                  <Row
                    key={report.id}
                    {...report}
                  />
                )
              })}
            </tbody>
          </Table>   
        </div>
      }
    />

  )
}

export { ListReportsPage }
    