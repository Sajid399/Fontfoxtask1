import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout'
import Nextpage from './Pages/Nextpage';
import PrevPage from './Pages/PrevPage'
function App() {
  return (
    <div className="App">
     <Routes>
    <Route path="/" element={<PrevPage />} />
    <Route path="/next_page" element={<Nextpage />}  />
  </Routes>
    </div>
  );
}

export default App;
