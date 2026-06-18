import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings';
import CreateProperty from './pages/CreateProperty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
