import React, { createContext, useContext, useState, useRef } from 'react'

import Message from '../components/moleculas/Message'

const MessageContext = createContext({
  onMessageSuccess: () => {},
  onMessageFailed: () => {},
  onSignal: () => {},
  onReset: () => {}
})

const MessageProvider = ({ children }) => {
  const messageRef = useRef({
    onMessageSuccess: (message, duration) => ({ message, duration }),
    onMessageFailed: (message, duration) => ({ message, duration }),
    onSignal: () => {},
    onReset: () => {}
  })

  const onMessageSuccess = (message, duration) => {
    if (messageRef.current) {
      messageRef.current.onMessageSuccess(message, duration)
    }
  }

  const onMessageFailed = (message, duration) => {
    if (messageRef.current) {
      messageRef.current.onMessageFailed(message, duration)
    }
  }

  const onSignal = () => {
    if (messageRef.current) {
      messageRef.current.onSignal()
    }
  }

  const onReset = () => {
    if (messageRef.current) {
      messageRef.current.onReset()
    }
  }

  return (
    <MessageContext.Provider
      value={{
        onMessageSuccess,
        onMessageFailed,
        onSignal,
        onReset
      }}
    >
      <Message ref={messageRef} />
      {children}
    </MessageContext.Provider>
  )
}

const useMessage = () => {
  const context = useContext(MessageContext)

  return context
}

export { MessageProvider, useMessage }
