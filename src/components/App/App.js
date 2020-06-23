import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const initialState = {
    items: [
      { 
        value: 'Учить React',
        isDone: false,
        id: 1
      },
      {
        value: 'Работа',
        isDone: true,
        id: 2
      },
      {
        value: 'Пробежка',
        isDone: true,
        id: 3
      }
    ],

    count: 3
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect( () => {
    console.log('update');
  });
  useEffect( () => {
    console.log('mount');
  }, []);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };

        if (item.id === id) {
          newItem.isDone = !item.isDone;
        }

        return newItem;
    });

    setItems(newItemList)
  };
  
  const onClickDelete = id => {
    const newItemList = items.filter(item => {
      const newItem = {...item };
      
      if (item.id !== id) {
        return newItem;
      }
      
    });

    setItems(newItemList)
    setCount((count) => count-1)
  }

  const onClickAdd = value => {
    const newItemList = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setItems(newItemList);
    setCount((count) => count+1)
  }

    return (
      <div className={styles.wrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>To Do List</h1>
          <InputItem onClickAdd={onClickAdd} />
          <ItemList items={items} onClickDone={onClickDone} onClickDelete = {onClickDelete} />
          <Footer count = {count} />
        </div>
      </div>);
  }


export default App;