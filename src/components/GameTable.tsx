import React, {useState} from 'react';


const data = [
    0.1,0.2,0.3,0.3,0.4,0.3,0.34,0.6,
    0.1,0.2,0.3,0.3,0.4,0.3,0.34,0.6,
    0.1,0.2,0.3,0.3,0.4,0.3,0.34,0.6,
];

function GameTable() {

    const [tableData, setTableData] = useState(data);

    

    return (
        <div>
            {tableData.map(item => (
                 <th scope="col">#</th>
            ))}
            {/* 
            <table class="table table-borderless table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
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
            
            */}
        </div>
    )
}

export default GameTable
