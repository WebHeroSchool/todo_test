import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => (<span className={
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>
    {value}
</span>);


Item.defaultProps = {
    value: 'Дело не найдено',
    isDone: false,
    id: 4
  }

export default Item;