import './App.css';
import Header from './Componentes/Header';
import Card from './Componentes/Card';
import {img1,img2,img3, img4} from "./assets/img"
import Footer from './Componentes/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Card url= {img1} title="SPRING SEASON" description="Comienza 22/23 de septiembre en el hemisferio sur"/>
    <Card url= {img2} title="SUMMER SEASON" description="Comienza 21 de diciembre en el hemisferio sur"/>
    <Card url= {img3} title="AUTUMN SEASON" description="Comienza 21 de marzo en el hemisferio sur"/>
    <Card url= {img4} title="WINTER SEASON" description="Comienza 20/21 de junio en el hemisferio sur"/>
    <Footer/>
    </div>
  );
}

export default App;
