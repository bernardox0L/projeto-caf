import React from 'react'

const Row = (data) => {
  return (
    <tr>
      <td heading={'Tipo'}>{data.type !== '' ? data.type : '-'}</td>
      <td heading={'Status'}>{data.status !== '' ? data.status : '-'}</td>
      <td heading={'Nome do consultado'}>{data.data.name ? data.data.name : '-'}</td>
      <td heading={'Id da execução'}>{data._id}</td>
    </tr>
  )
}

export { Row }
