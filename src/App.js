import './App.css';
import Header from './components/Header/Header';
import Testimonials from './components/Testimonials/Testimonials';
import Appartments from './components/Appartments/Appartments';
import Cta from './components/Cta/Cta';
import Video from './components/Video/Video';
import Maps from './components/Maps/Maps';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <Header/>
      <Testimonials/>
      <Appartments/>
      <Cta/>
      <Video/>
      <Maps/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
