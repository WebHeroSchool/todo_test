import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';
import Footer from '../Footer/Footer';

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

const App = () => (<div>
  <h1>TODOS</h1>
  <InputItem />
  <ItemList items={items} />
  <Footer count = {3} />
  </div>);

  export default App;