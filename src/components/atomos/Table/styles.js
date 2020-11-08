import styled from 'styled-components'
import { colors } from '../../../resources/colors'

export const MainContainer = styled.div`
  display: block;
  width: 100%;
  overflow-x: auto;
`

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-sizing: border-box;

  thead {
    text-align: left;
  }

  th {
    font-weight: 600;
    color: red;
    vertical-align: middle;
    font-size: 15px;
    @media (max-width: 2563px) and (min-width: 1920px) {
      font-size: 15px;
    }
    @media (max-width: 1440px) {
      font-size: 13px;
    }

    @media (max-width: 1366px) {
      font-size: 12px;
    }

    @media (max-width: 1280px) {
      font-size: 11.5px;
    }

    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }

  tbody {
    > tr {
      background: #fff;
      &:nth-child(even) {
        background: #eee;
      }
    }
  }

  td {
    padding: 12px 8px;
    font-weight: normal;
    line-height: 1.42857143;
    vertical-align: middle;
    color: #303030;
    font-size: 15px;

    @media (max-width: 2563px) and (min-width: 1920px) {
      font-size: 15px;
    }

    @media (max-width: 1440px) {
      font-size: 13px;
    }

    @media (max-width: 1366px) {
      font-size: 12px;
    }

    @media (max-width: 1280px) {
      font-size: 11.5px;
    }

    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }

  @media (max-width: 767px) {
    thead {
      display: none;
    }

    tbody,
    tr {
      display: block;
    }

    tr {
      margin-bottom: 15px;
    }

    td {
      display: flex;
      justify-content: flex-end;
      position: relative;
      font-weight: 600;

      button {
        position: absolute;
        right: 10px;
        top: 0;

        @media (max-width: 767px) {
          span {
            margin-left: 5px;
          }
        }
      }

      &::before {
        content: attr(heading);
        position: absolute;
        left: 15px;
        display: block;
        color: red;
      }
    }
  }

  @media (max-width: 460px) {
    thead {
      display: none;
    }

    tbody,
    tr {
      display: block;
    }

    tr {
      margin-bottom: 12px;
    }

    td {
      display: flex;
      justify-content: flex-end;
      position: relative;

      @media (max-width: 460px) {
        :last-child {
          padding-bottom: 35px;
        }
      }

      button {
        position: absolute;
        top: 0;
        margin-right: 15px;

        @media (max-width: 460px) {
          span {
            margin: 0px 10px;
            margin-left: 5px;
          }

          svg {
            width: 1.8rem;
            height: 1.8rem;
          }
        }
      }

      &::before {
        content: attr(heading);
        position: absolute;
        left: 15px;
        display: block;
        color: red;
      }
    }
  }

  @media (max-width: 375px) {
    td {
      display: flex;
      justify-content: space-evenly;
      position: relative;
      padding-left: 8.2rem;

      button {
        right: auto;

        span {
          margin-left: 5px;
        }
      }
    }
  }
`

export const LabelColumn = styled.span`
  font-size: 15px;
  color: ${colors.green};
  font-weight: bold;
`
