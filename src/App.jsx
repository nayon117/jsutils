import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Documentation from './components/documentation';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/docs/:category" element={<Documentation />} />
          <Route path="/docs/:category/:method" element={<Documentation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;