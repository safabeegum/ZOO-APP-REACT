import logo from './logo.svg';
import './App.css';
import AddAnimals from './components/AddAnimals';
import SearchAnimals from './components/SearchAnimals';
import DeleteAnimals from './components/DeleteAnimals';
import ViewAnimals from './components/ViewAnimals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddAnimals/>}/>
      <Route path='/search' element={<SearchAnimals/>}/>
      <Route path='/delete' element={<DeleteAnimals/>}/>
      <Route path='/viewall' element={<ViewAnimals/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
