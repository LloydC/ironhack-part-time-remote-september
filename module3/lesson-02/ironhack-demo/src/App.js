import { Button, DatePicker } from 'antd';
import Navbar from './components/Navbar';
import CatList from './components/CatList';
import Footer from './components/Footer';
import './App.css';

import catImage from './images/cat-01.jpg';
import secondCatImage from './images/cat-02.jpg';

const navigationLinks = ['Home', 'About', 'Contact', 'Team'];

const catsList = [ 
  {name: 'Leo', imageUrl: catImage, description: 'The nicest cat', showsAffection: true},
  {name: 'Libra', imageUrl: secondCatImage, description: 'The nicest cat', showsAffection: false},
]

function App() {
  return (
    <div className="App">
      <Navbar navigationLinks={navigationLinks} />
      <h1>React lecture</h1>
      <CatList catsList={catsList}/>
      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />

     <Footer />
    </div>
  );
}

export default App;
