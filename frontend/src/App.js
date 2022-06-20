import './App.css';
import Submit from './pages/submit/Submit';
import {Routes, Route} from 'react-router-dom'
import Resume from './pages/resume/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Submit/>} />
        <Route path='/get' element={<Resume/>} />
        
      </Routes>
    </div>
  );
}

export default App;
