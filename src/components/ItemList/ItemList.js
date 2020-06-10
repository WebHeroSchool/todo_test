import React from 'react';
import Item from '../Item/Item';

const ItemList = ( {todoItem} ) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Работа'} /></li>
    <li><Item todoItem={'Тренировка'} /></li>
</ul>);

export default ItemList;