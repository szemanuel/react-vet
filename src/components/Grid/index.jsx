import React from 'react';
import './Grid.css';

const Grid = () => {
  return (
    <div className="footerPage">
     <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Fikhgkhgjhrst</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Marhgfhgfhk</td>
      <td>Ottjhgjhgo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
     
    </div>
  );
};

export { Grid };