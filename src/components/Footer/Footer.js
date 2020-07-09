import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';


class Footer extends React.Component {
    render() {
        const { all, doneItems, activeItems, onClickFilter, filteredItems } = this.props;

        return (
                <div className={styles.title__wrap}>
                    <div className={styles.title__name}>
                        <h3 className={styles.title}>Список моих дел</h3>
                    </div>
                    <div className={styles.title__button}>
                            <button className={classnames({
                                    [styles.button]: true,
                                    [styles.selected]: filteredItems === 'Завершенные'
                                    })}
                                onClick={() => onClickFilter('Завершенные')}>
                                Завершенные <span>{doneItems}</span>
                            </button>
                            <button className={classnames({
                                    [styles.button]: true,
                                    [styles.selected]: filteredItems === 'Незавершенные'
                                    })}
                                onClick={() => onClickFilter('Незавершенные')}>
                                Незавершенные <span>{activeItems}</span>
                            </button>
                            <button className={classnames({
                                    [styles.button]: true,
                                    [styles.selected]: filteredItems === 'Все'
                                    })}
                                onClick={() => onClickFilter('Все')}>
                                Все <span>{all}</span>
                            </button>
                    </div>
                </div>
);
    }
}

Footer.propTypes = {
    all: PropTypes.number.isRequired
};

export default Footer;