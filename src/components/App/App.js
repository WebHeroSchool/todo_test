import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
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
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };

        if (item.id === id) {
          newItem.isDone = !item.isDone;
        }

        return newItem;
    });

    this.setState({ items: newItemList });
  };
  
  onClickDelete = id => {
    const deleteItem = this.state.items.filter(item => item.id !== id);
    this.setState({ items: deleteItem});
            
  }

  render () {
    return (
      <div className={styles.wrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>To Do List</h1>
          <InputItem />
          <ItemList items={this.state.items} onClickDone = {this.onClickDone} onClickDelete = {this.onClickDelete} />
          <Footer count = {1} />
        </div>
      </div>);
  }
}

export default App;