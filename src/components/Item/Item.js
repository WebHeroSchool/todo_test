import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

class Item extends React.Component {
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const { value, isDone } = this.props;

        return (<span className={
            classnames({
                [styles.item]: true,
                [styles.done]: isDone
            })
        }>
            {value}
        </span>);
    }
}

    Item.propTypes = {
        value: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    };

export default Item;