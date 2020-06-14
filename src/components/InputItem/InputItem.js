import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (<div className={styles.wrap}>
    <TextField 
        id="standard-search" 
        label="Что нужно сделать?" 
        type="search" 
    />
</div>);

export default InputItem;