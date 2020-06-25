import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from './App.module.css';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

const App = () => {
  return (<Router>
    <div className={styles.wrap}>   

      <div className={styles.paper__wrap}>
        <Paper classes={{ root: [styles.paper] }}>
            <MenuList>
              <Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
              <Link to='/todo' className={styles.link}><MenuItem>Дела</MenuItem></Link>
              <Link to='/contacts' className={styles.link}><MenuItem>Контакты</MenuItem></Link>
            </MenuList>
          </Paper>
        </div>   

      <div className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
    
    </div>
  </Router>);
}


export default App;