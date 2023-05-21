import StudentInfoComponent from './components/StudentInfoComponent.js';
import './App.css';

let list_students = [{
  id: 1,
  name: 'Tùng',
  age: 22,
  address: 'Ninh Bình'
}, {
  id: 2,
  name: 'An',
  age: 24,
  address: 'Hà Nội'
}, {
  id: 3,
  name: 'Lợi',
  age: 20,
  address: 'Hà Giang'
}
]


function App() {
  return (
    <div className="App">
      <StudentInfoComponent student={list_students} />
    </div>
  );
}

export default App;
