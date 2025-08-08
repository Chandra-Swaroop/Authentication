import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top px-4">
        <div className="container-fluid">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/signup">Sign Up</Link>
            <Link className="nav-link" to="/signin">Sign In</Link>
          </div>
        </div>
      </nav>
        <AppRoutes />
    </Router>
  );
}

export default App;
