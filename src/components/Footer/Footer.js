import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import { StylesProvider } from '@material-ui/core';

const Footer = ({ count }) => (<footer>
    <p>Осталось выполнить дел: {count} </p>
    <div className={styles.button}>
        <Button variant="contained" color="secondary">
        Все
        </Button>
        <Button variant="contained" color="secondary">
        Активные
        </Button>
        <Button variant="contained" color="secondary">
        Завершенные
        </Button>
        <Button variant="contained" color="secondary">
        Удалить все дела
        </Button>
    </div>
</footer>);

Footer.defaultProps = {
    count: 0
}

export default Footer;