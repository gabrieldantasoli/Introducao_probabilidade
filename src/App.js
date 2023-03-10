import './App.css';
import { Header } from './Components';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="contentContainer">
          <AppRoutes />
      </div>
    </div>
  );
}

export default App;
