import './App.css';
import  Card from './Card';
import Colleges from './colleges.json';

function App() {
  return (
    <div className="App">
      <h1 class="heading">Colleges in North India</h1>
      <div className="container">
        {Colleges["colleges"].map((college)=>(
                <Card college={college}></Card>
        ))}
      </div>
    </div>
      
  );
}

export default App;
