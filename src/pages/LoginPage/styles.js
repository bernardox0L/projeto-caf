import styled from 'styled-components'
import { loginImage } from '../../common/images'
import { Button } from '../../components/atomos/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background: #FFFFFF;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  border-bottom-right-radius: 2.5px;
  border-top-right-radius: 2.5px;
  overflow: hidden;
  background: linear-gradient(180deg,rgba(0,0,0,.75) 25%,rgba(0,0,0,.5) 75%), url(${loginImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 58.333333%;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-end;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: fit-content;


  padding: 6%;

  box-sizing: border-box;
  margin-bottom: -50px;

  @media (min-width: 1920px) {
    margin-bottom: -50px;
  }

  @media (max-width: 1440px) {
    margin-bottom: -40px;
  }

  @media (max-width: 1024px) {
    margin-bottom: -25px;
  }
`

export const CAFBrand = styled.img`
  width: 55%;
  height: auto;
  padding-bottom: 20px;
`

export const BrandView = styled.div`
  width: 90%;
`

export const Line = styled.div`
  height: 0px;
  width: 100%;
  border-bottom: 1px solid #E0E0E0;
`

export const TitleLogin = styled.h1`
  color: #323232;
  padding-bottom: 12px;
  margin-bottom: 0px;
  font-size: 30px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
`
export const TextLogin = styled.span`
  color: #606060;
  font-size: 15px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
`

export const DivInputs = styled.div`
  margin-top: 40px;
`

export const ContainerWhiteText = styled.div`
  padding-top: 3.4rem;
  padding-right: 5rem;
  max-width: 450px;
`

export const WhiteText = styled.h1`
  text-align: right;
  color: #FFFFFF;
  font-size: 50px;
  margin-bottom: 0px;
  margin-top: 10px;
  font-weight: 500;
  line-height: 1;
`

export const WhiteBody = styled.p`
  text-align: right;
  color: #FFFFFF;
  font-size: 22px;
  margin-bottom: 30px;
  margin-top: 30px;
  font-weight: 600;
  line-height: 1.3;
`

export const CustomizeButton = styled(Button)`
  font-weight: 500;
  line-height: 1.5;
  font-size: 16px;
  letter-spacing: .5px;
`