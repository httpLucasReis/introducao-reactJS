import React, {Component} from 'react';

// Creating a componet 

class Table extends Component {
// Render the component I created
 render(){
    return(
      <table>
         <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Job</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
      </table>
    )
  }
}

/* We export the component as App and load it in index.js. It's a organization.*/

export default Table