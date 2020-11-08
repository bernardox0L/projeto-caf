import React, { forwardRef, useImperativeHandle, useState } from 'react'

import Slide from '@material-ui/core/Slide'
import SnackBar from '@material-ui/core/Snackbar'

import { closeIcon, successIcon, errorIcon } from '../../../common/images/imports'

import { MessageDefault, Loading } from './styles'

function TransitionRight(props) {
  return <Slide {...props} direction="left" />
}

const Message = (props, ref) => {
  const [messageState, setMessageState] = useState({
    isOpen: false,
    message: '',
    duration: null,
    loading: true,
    success: false
  })

  const handleClose = async (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    onReset()
  }

  const onMessageSuccess = (message, duration) => {
    setMessageState({
      message,
      duration: duration || 1200,
      success: true,
      isOpen: true,
      loading: false
    })
  }

  const onMessageFailed = (message, duration) => {
    setMessageState({
      message,
      duration: duration || 2000,
      success: false,
      isOpen: true,
      loading: false
    })
  }

  const onSignal = () => {
    setMessageState({
      message: '',
      duration: null,
      success: false,
      isOpen: true,
      loading: true
    })
  }

  const onReset = () => {
    setMessageState({
      message: '',
      duration: null,
      success: false,
      isOpen: false,
      loading: true
    })
  }

  useImperativeHandle(ref, () => ({
    onMessageSuccess,
    onMessageFailed,
    onSignal,
    onReset
  }))

  return (
    <MessageDefault>
      <SnackBar
        open={messageState.isOpen}
        autoHideDuration={
          messageState.loading ? undefined : messageState.duration || 5000
        }
        onClose={handleClose}
        TransitionComponent={TransitionRight}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <div
          className={
            messageState.loading
              ? 'message loading'
              : messageState.success
              ? 'message success'
              : 'message'
          }
        >
          {messageState.loading ? (
            <Loading />
          ) : (
            <img
              alt=""
              src={messageState.success ? successIcon : errorIcon}
              className={messageState.success ? 'icon' : 'icon error'}
            />
          )}
          <div className={messageState.loading ? 'label loading' : 'label'}>
            <b color="#34384a">
              {messageState.loading
                ? 'Carregando...'
                : messageState.success
                ? 'Sucesso'
                : 'Erro'}
            </b>
            <span color="#34384a">
              {messageState.loading ? '' : messageState.message}
            </span>
          </div>
          {messageState.loading ? null : (
            <img
              alt=""
              src={closeIcon}
              className="close"
              onClick={() => handleClose()}
            />
          )}
        </div>
      </SnackBar>
    </MessageDefault>
  )
}

export default forwardRef(Message)