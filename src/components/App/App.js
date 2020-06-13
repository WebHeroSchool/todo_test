import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';
import Footer from '../Footer/Footer';
import './App.css';

const items = [
  { 
    value: 'Учить React'
  },
  {
    value: 'Работа',
  },
  {
    value: 'Пробежка'
  }
];

const App = () => (
  <div className="wrap">
    <h1 className="wrap__title">TODOS</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count = {3} />
  </div>);

  export default App;