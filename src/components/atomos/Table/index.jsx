import React from 'react'

import { Container, MainContainer, LabelColumn } from './styles'

const Table = ({
  columns,
  children,
  ...props
}) => {

  return (
    <MainContainer>
      <Container {...props}>
        {columns.length ? (
          <thead>
            <tr>
              {columns.map(({ displayName}) => (
                <td>
                  <LabelColumn>
                    {displayName}
                  </LabelColumn>
                </td>
              ))}
            </tr>
          </thead>
        ) : (
          <></>
        )}

        {children}
      </Container>
    </MainContainer>
  )
}

export { Table }
