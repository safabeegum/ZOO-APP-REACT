import logo from './logo.svg';
import './App.css';
import AddAnimals from './components/AddAnimals';
import SearchAnimals from './components/SearchAnimals';
import DeleteAnimals from './components/DeleteAnimals';

function App() {
  return (
    <div>
      <AddAnimals/>
      <SearchAnimals/>
      <DeleteAnimals/>
    </div>
  );
}

export default App;
