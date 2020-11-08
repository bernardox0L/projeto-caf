import React from 'react'

import { useAuth } from '../../contexts/auth.context'
import { logoutIcon } from '../../common/images'
import { Container, Header, Content, SingleViewTitle, FlexRow, DivLogout } from './styles'

function SingleView({ title, icon, contentComponent }) {
  const { onLogout } = useAuth()
  return (
    <Container>
      <Header>
        <FlexRow>
          {icon} 
          <SingleViewTitle>
            {title}
          </SingleViewTitle>
        </FlexRow>
        <DivLogout onClick={() => onLogout()}>
          <img src={logoutIcon} width="20px"/>
          Logout
        </DivLogout>
      </Header>

      <Content>{contentComponent}</Content>
    </Container>
  )
}

export { SingleView }