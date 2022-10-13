/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import { useTable } from 'react-table'
import Columns from './Columns'
import { useSelector } from 'react-redux';

const Table = () => {
  const missions = useSelector((state) => state.missions);
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => missions, []);

  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    rows,
    headerGroups,
    prepareRow,
  } = tableInstance

  return (
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map((columns) => 
                  <th {...columns.getHeaderProps()}>{columns.render('Header')}</th>
                )
              }
            </tr>
          ))
        }

      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map( cell => {
                    return (<td {...cell.getCellProps()}>{cell.render('cell')}</td>)
                  })
                }
              </tr>
            )
          })
        }

      </tbody>
    </table>
  )
}

export default Table;