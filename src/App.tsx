import './App.scss';
import './common.scss';
import Footer from './components/Footer';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  const MAIN_ADDR = 'https://안녕하세요_프론트엔드_개발자_이현정입니다.com'

  return (
    <BrowserRouter>
     <Header addrMsg={MAIN_ADDR} />
      <AppRoutes/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
