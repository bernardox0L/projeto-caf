import styled from 'styled-components'
import { colors } from '../../resources/colors'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-rows: 140px 1fr;

  @media (min-width: 1920px) and (max-width: 2560px) {
    grid-template-rows: 140px 1fr;
  }

  @media (min-width: 1024px) and (max-width: 1920px) {
    grid-template-rows: 110px 1fr;
  }

  width: 100%;
  height: 100%;
`

export const Header = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  padding-left: 18px;
  padding-right: 40px;
  justify-content: space-between;

  svg,
  img {
    font-size: 32px;

    @media (min-width: 1920px) and (max-width: 2560px) {
      font-size: 32px;
    }
    @media (min-width: 1280px) and (max-width: 1440px) {
      font-size: 28px;
    }
    @media (max-width: 1024px) {
      font-size: 24px;
    }

    color: red;
    margin-right: 12px;
  }
  @media (max-width: 1023px) {
    max-width: 100vw;
  }
  @media (max-width: 426px) {
    padding-right: 1px !important;
  }
`

export const Content = styled.div`
  grid-area: content;
  background: white;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
  padding: 20px;
  height: 100%;
`

export const SingleViewTitle = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 32px;

  @media (min-width: 1920px) and (max-width: 2560px) {
    font-size: 32px;
  }

  @media (min-width: 1280px) and (max-width: 1440px) {
    font-size: 28px;
  }

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${colors.green};
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const DivLogout = styled.div`
  color: ${colors.gray};
  opacity: 0.75;
  cursor: pointer; 
  align-items: center;
  display: flex;
  flex-direction: row;
  text-decoration: underline;
  `