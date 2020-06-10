import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';
import Footer from '../Footer/Footer';

const todoItem = 'Учить React';

const App = () => (<div>
  <h1>TODOS</h1>
  <InputItem />
  <ItemList todoItem={todoItem} />
  <Footer count = {3} />
  </div>);

  export default App;