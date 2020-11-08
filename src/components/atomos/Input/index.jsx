import React, { useRef, useEffect } from 'react'

import { useField } from '@unform/core'

import { InputDefault, Container, Icon } from './styles'

const Input = ({ children, name, type, ...props }) => {
  const inputRef = useRef(null)

  const {
    fieldName,
    registerField
  } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        marginBottom: 25,
        width: '100%'
      }}
    >
      <Container>
        <Icon src={props.icon}/>
        <InputDefault
          autoComplete="off"
          type={type}
          ref={inputRef}
          {...props}
        />
      </Container>

    </div>
  )
}

export { Input }
