import SetApiKey from './pages/SetApiKey';
import './styles.css';
import {Routes, Route} from 'react-router-dom';
import Home from 'pages/home';
import City from 'pages/city';
import PrivateRoute from 'components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute> } />
      <Route path="/SetApiKey" element={<SetApiKey />} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/city/:cityId" element={<PrivateRoute><City /></PrivateRoute>} />
    </Routes>
    
  );
}

export default App;
