import logo from './assets/navLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Mynav } from './components/Mynav';
import { Man } from './components/Man';
import { Saction3 } from './components/Saction3';
import { Barber } from './components/Barber';
import { Box } from './components/Box';
import { Complete } from './components/Complete';
import Join from './components/Join';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Mynav />
      <Header />
      <Man />
      <Saction3 />
      <Barber />
      <Box />
      <Complete />
      <Join />
      <Footer />
    </div >
  );
}

export default App;
