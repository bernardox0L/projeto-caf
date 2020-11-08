import styled, { css } from 'styled-components'
import { colors } from '../../../resources/colors'

const Big = css`
  @media (min-width: 1920px) {
    font-size: 14px;
  }

  @media (max-width: 1440px) {
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`

export const RadioDefault = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :not(:last-child) {
    margin-right: 16px;
  }

  display: flex;
  position: relative;
  cursor: pointer;

  font-size: 12px;
  padding-left: 29px;
  padding-bottom: 4px;
  font-size: ${Big};
  @media (min-width: 1920px) {
    padding-left: 29px;
  }

  @media (max-width: 1440px) {
    padding-left: 25px;
  }

  @media (max-width: 1024px) {
    padding-left: 21px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    left: 0;
    background-color: #fff;
    border-radius: 50%;
    border: solid 1px #979797;
    width: 15px;
    height: 15px;
    @media (min-width: 1920px) {
      width: 15px;
      height: 15px;
    }

    @media (max-width: 1440px) {
      width: 12px;
      height: 12px;
    }

    @media (max-width: 1024px) {
      width: 8px;
      height: 8px;
    }
  }

  :hover input ~ .checkmark {
    background-color: #eee;
  }

  input:checked ~ .checkmark {
    background-color: #fff;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    width: 7px;
    height: 7px;
    @media (min-width: 1920px) {
      width: 7px;
      height: 7px;
    }

    @media (max-width: 1440px) {
      width: 6px;
      height: 6px;
    }

    @media (max-width: 1024px) {
      width: 5px;
      height: 5px;
    }
    border-radius: 50%;
    background: #d03438;
  }

  :last-child {
    margin-left: 20px;
  }
`

export const Div = styled.div`
  margin: 12px 0px;
  display: flex;
  flex-direction: column;
`

export const Check = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  left: 0;
  background-color: #fff;
  border-radius: 50%;
  border: solid 1px #979797;
  width: 15px;
  height: 15px;
  @media (min-width: 1920px) {
    width: 15px;
    height: 15px;
  }

  @media (max-width: 1440px) {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 1024px) {
    width: 8px;
    height: 8px;
  }
`

export const Checked = styled.div`
  width: 7px;
  height: 7px;
  @media (min-width: 1920px) {
    width: 7px;
    height: 7px;
  }

  @media (max-width: 1440px) {
    width: 6px;
    height: 6px;
  }

  @media (max-width: 1024px) {
    width: 5px;
    height: 5px;
  }
  border-radius: 50%;
  background: ${colors.green};
`

export const Label = styled.span`
  font-weight: bold;
  padding-bottom: 10px;
`
