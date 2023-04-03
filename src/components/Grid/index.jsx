import React from 'react';
import './Grid.css';
import table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Grid = () => {
  return (
    <div className="container_table">
      <table className="table_format">
        <thead>
          <tr className="tr_format">
            <th >#</th>
            <th >Name</th>
            <th >Email</th>
            <th >Phone</th>
            <th ></th>
          </tr>
        </thead>
        <tbody className="Tbodyformat">
          <tr>
            <th >1</th>
            <td>MMMM</td>
            <td>m@test.com</td>
            <td>1111111111</td>
            <td>Botón editar y eliminar </td>
          </tr>
          <tr>
            <th>2</th>
            <td>OOOO</td>
            <td>o@test.com</td>
            <td>1111111111</td>
            <td>Botón editar y eliminar </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Grid };
