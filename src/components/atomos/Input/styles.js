import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :only-child {
    margin-bottom: 0px;
  }

  span {
    margin-left: 8px;
    color: gray;
  }
`

export const InputDefault = styled.input`
  background: white;
  border: solid 1px ${({ error }) => (error ? 'red' : '#e0e0e0')};
  border-radius: 8px;
  outline: none;
  transition: 0.3s;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${({ label }) => (label === undefined ? null : '5px')};
  padding: 8px;
  font-size: 15px;
  min-height: 37px;
  padding-left: ${({ icon }) => (icon ? '40px' : '0px')};
  line-height: 1.5;
  font-weight: 400;

  ::placeholder {
    transition: 0.3s;
    color: rgba(200, 200, 200, 1);
  }

  :focus {
    border-color: rgba(150, 150, 150, 0.8);
    ::placeholder {
      color: rgba(200, 200, 200, 0.5);
    }
  }
`

export const Icon = styled.img`
  padding-left: 10px;
  position: absolute;
  opacity: 0.3;
`