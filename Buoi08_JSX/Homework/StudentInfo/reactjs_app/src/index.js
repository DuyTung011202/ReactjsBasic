import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]


let table =
  <table>
    <h1>Student</h1>

    {students.map(student => <tr>
      <td>{student.company}</td>
      <td>{student.contact}</td>
      <td>{student.country}</td>
    </tr>)}
  </table>

ReactDOM.createRoot(document.getElementById("root")).render(table);