import AlertComponent from './components/AlertComponent.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <AlertComponent className="alert alert-success" text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại" role="alert" />
    </div>
  );
}

export default App;
