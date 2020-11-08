import styled from 'styled-components'
import { colors } from '../../../resources/colors'

export const MessageDefault = styled.div`
  z-index: 500;
  .message {
    background: white;
    border-left: 5px solid red;
    border-radius: 4px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5rem;
  }

  .message.success {
    border-left: 5px solid #84be7a;
  }

  .message.loading {
    border-left: 5px solid lightgrey;
  }

  .icon {
    background: #84be7a;
    margin: 1rem;
    padding: 5px 5px 7px 7px;
    border-radius: 50%;
  }

  .icon.error {
    background: red;
    padding: 6px;
  }

  .label {
    display: flex;
    flex-direction: column;
  }

  .label.loading {
    padding-right: 1.5rem;
  }

  .close {
    padding: 1.5rem 1.5rem 1.5rem 2.5rem;
    cursor: pointer;
  }

  transform: scale;
`

export const Loading = styled.div`
  z-index: 499;
  animation: is-rotating 1s infinite;
  border: 4px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: lightgrey;
  height: 32px;
  width: 32px;
  margin: 1rem;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`
