import { useRef } from 'react'
import { Button } from '../../components/atomos/Button'
import { Input } from '../../components/atomos/Input'
import { logoCaf, mailIcon, lockIcon } from '../../common/images'
import { Form } from '@unform/web'
import { useAuth } from '../../contexts/auth.context'
import { routesTypes } from '../../resources/routesTypes'
import { useMessage } from '../../contexts/message.context'

import {
  Container,
  ImageContainer,
  Content,
  CAFBrand,
  BrandView,
  Line,
  TitleLogin,
  TextLogin,
  DivInputs,
  WhiteText,
  WhiteBody,
  ContainerWhiteText,
  CustomizeButton
} from './styles'


const LoginPage = ({ ...props }) => {
  const { history } = props
  const formRef = useRef(null)
  const { onLogin } = useAuth()
  const { onSignal, onMessageSuccess, onMessageFailed } = useMessage()
  const onSubmit = obj => {
    onSignal()
    onLogin(obj)
      .then(() => {
        history.push(routesTypes.CAF_ROOT)
        onMessageSuccess('Login realizado com sucesso!')
      })
      .catch(error => {
        onMessageFailed('Houve um erro na tentativa de login!')
      })
  }
  return (
    <Container>
      <Content>
          <div
            style={{
              display: 'flex',
              width: '100%',
              marginBottom: '12%'
            }}
          >
            <BrandView>
            <Form useRef={formRef} onSubmit={obj => onSubmit(obj)}>
              <CAFBrand src={logoCaf} alt="" srcSet="" />
              <Line/>
              <TitleLogin>Entre em sua conta</TitleLogin>
              <TextLogin>Olá seja bem-vindo(a), utilize seus dados de acesso para continuar:</TextLogin>
              <DivInputs>
                <Input placeholder="Digite seu email" icon={mailIcon} name="email" type="text"/>
                <Input placeholder="Digite sua senha" icon={lockIcon} name="password" type="password"/>
              </DivInputs>
              <Button fullWidth>Acessar minha conta</Button>
              </Form>
            </BrandView>
          </div>
      </Content>
      <ImageContainer>
        <ContainerWhiteText>
          <WhiteText>Conheça o</WhiteText>
          <WhiteText>seu cliente de</WhiteText>
          <WhiteText>verdade</WhiteText>
          <WhiteBody>Consulte de forma simples e rápida em diferentes fontes de dados e garanta mais segurança para o seu negócio.</WhiteBody>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <CustomizeButton transparent>Solicitar meu acesso</CustomizeButton>
          </div>
        </ContainerWhiteText>
      </ImageContainer>
    </Container>
    
  )
}

export { LoginPage }
    
  