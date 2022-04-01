import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

export default function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer 
        greeting='Disfruta de todos nuestros sabores y productos artesanales hechos con amor'/>
      <Footer />
    </>
  );
}