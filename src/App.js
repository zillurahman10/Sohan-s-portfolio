import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Shared/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
