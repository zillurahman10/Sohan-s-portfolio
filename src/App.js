import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Shared/Header';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import ParticleBackground from './particleBackground';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ParticleBackground></ParticleBackground>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
