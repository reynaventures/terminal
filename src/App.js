import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RootRoute from './Routes/RootRouter';

function App() {
  return (
    <BrowserRouter>
      <RootRoute />
    </BrowserRouter>
  );
}

export default App;
