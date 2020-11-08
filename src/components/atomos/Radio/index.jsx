import React, { useState, useEffect, useRef } from 'react'

import { useField } from '@unform/core'

import { Div, RadioDefault, Check, Checked, Label } from './styles'

const Radio = ({
  options,
  name,
  label,
  initialValue,
  ...props
}) => {
  const inputRef = useRef(null)
  const { fieldName, registerField } = useField(name)

  const [value, setValue] = useState(initialValue)

  const handleValue = (e, option) => {
    setValue(option)
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <div>
      <Label>{label}</Label>
      <Div {...props}>
        {options.map((option, key) => (
          <RadioDefault
            {...props}
            key={key}
            onClick={() => handleValue(true, option.value)}
          >
            <Check>{option.value === value && <Checked />}</Check>
            {option.label}
          </RadioDefault>
        ))}
        <input value={value} type="text" hidden name={name} ref={inputRef} />
      </Div>
    </div>
  )
}

export { Radio }
