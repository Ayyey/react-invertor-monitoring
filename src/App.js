import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DasboardPage from './pages/dashboard-page/dashboard-page';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'
import Header from './components/header/header';
import ImportPage from './pages/import-page/import-page';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/dashboard' element={<DasboardPage></DasboardPage>}></Route>
          <Route path='/import' element={<ImportPage></ImportPage>}></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
