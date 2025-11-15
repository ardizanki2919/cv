import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import CVPage from './pages/CVPage';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
