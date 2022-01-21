import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import Navigation from './Navigation';
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <Router>
        <Navigation />
    </Router>
    );
}