import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
    state = {
        inputValue: '',
        inputError: false
    };

    onButtonClick = () => {
        if (this.state.inputValue !== '') {
            this.setState({
                inputValue: ''
            });
            this.props.onClickAdd(this.state.inputValue)
        }
        else {
            this.setState({
                inputError: true
            });
    }
};

    render() {
        const { onClickAdd } = this.props;

        return (
            <div className={styles.wrap}>
                <TextField 
                    id="standard-search" 
                    label="Что нужно сделать?" 
                    type="search" 
                    value={this.state.inputValue}
                    error={this.state.inputError}
                    onChange={event => this.setState({ 
                        inputValue: event.target.value.toUpperCase(),
                        inputError: false
                    })};
                />
            <div className={styles.button}>
                <Button 
                    variant="contained"
                    fullWidth
                    onClick={this.onButtonClick}
                    >
                    Добавить задание
                </Button>
            </div>
        </div>);
        }
    }


export default InputItem;