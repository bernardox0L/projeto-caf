import styled, { css } from 'styled-components'
import { colors } from '../../../resources/colors'

const fullWidthStyle = css`
  width: 100%;
`

export const DefaultButton = styled.button`
  font-weight: bold;
  border: ${({transparent}) => transparent ? 'solid 1px #ffffff' : 'none'};
  outline: none;
  border-radius: 2rem;
  width: fit-content;

  display: flex;
  align-items: center;

  cursor: pointer;
  letter-spacing: 0.16px;
  background: ${({transparent}) => transparent ? 'transparent' : colors.green};
  color: #FFFFFF;
  line-height: 14px;
  width: fit-content;

  ${({ fullWidth }) => fullWidth && fullWidthStyle}

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  padding: 5px 12px;
  height: 43px;
  @media (max-width: 1920px) {
    font-size: 17px;
    padding: 5px 17px;
    height: 43px;
  }

  @media (max-width: 1440px) {
    font-size: 15px;
    padding: 5px 16px;
    height: 40px;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 5px 14px;
    height: 35px;
  }

  font-family: 'Roboto'!important;

  transition: background 120ms;
`
