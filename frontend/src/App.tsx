import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './pages/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container />
      </div>
    </Router>
  );
}

export default App;
