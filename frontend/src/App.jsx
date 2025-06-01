
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Questions from './Questions';
import AddQuestion from './AddQuestion';

function App() {

  
  return (
   <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/add" element={<AddQuestion />} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;