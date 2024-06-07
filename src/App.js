import logo from './logo.svg';
import './App.css';
import AddAnimals from './components/AddAnimals';
import SearchAnimals from './components/SearchAnimals';
import DeleteAnimals from './components/DeleteAnimals';
import ViewAnimals from './components/ViewAnimals';

function App() {
  return (
    <div>
      <AddAnimals/>
      <SearchAnimals/>
      <DeleteAnimals/>
      <ViewAnimals/>
    </div>
  );
}

export default App;
