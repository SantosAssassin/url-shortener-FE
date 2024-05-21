import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './components/header/Header';
import { FooterComponent } from './components/footer/Footer';
import { MainComponent } from './components/main/Main';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
