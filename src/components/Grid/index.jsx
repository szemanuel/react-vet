import React from 'react';
import './Grid.css';
import writing from "./writing.svg"

const Grid = () => {
 console.log(writing);

  return (
    
    
    <div className="container_table">
      <table className="table_format">
        <thead>
          <tr className="tr_format">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table_bodyformat">
          <tr>
            <th>1</th>
            <td>MMMM</td>
            <td>m@test.com</td>
            <td>1111111111</td>
            <td> <img src="https://www.istockphoto.com/es/foto/cerrar-una-mano-mujer-escribiendo-en-cuaderno-gm1035462384-277203439" className="edit" /></td>
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
