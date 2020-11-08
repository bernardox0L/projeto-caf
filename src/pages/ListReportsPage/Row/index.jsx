import React from 'react'

import { CustomLink } from './styles'

const Row = (data) => {
  return (
    <tr>
      <td heading={'Nome'}>{data.name}</td>
      <td heading={'Id do relatório'}>{data._id}</td>
      <td heading={'Execuções'}>
        <CustomLink
          to={`/caf/reports/${data._id}/executions`}
          rel="noopener noreferrer"
        >
          Ver execuções
        </CustomLink>
      </td>
    </tr>
  )
}

export { Row }
