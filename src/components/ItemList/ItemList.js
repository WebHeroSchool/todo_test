import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const ItemList = ({ items, value, onClickDone, onClickDelete, id }) => (<ul className={styles.wrap}>
    {items.map(item => (<li key={item.value}>
      <div className={styles.item__wrap}>
      <FormControlLabel
        control={
            <Checkbox
                checked={item.isDone}
                value="checkedB"
                color="default"
                onClick={() => onClickDone(item.id)}
            />
        }
          label={<Item 
                  value={item.value}
                  isDone={item.isDone}
                  id={item.id}
                  onClickDone={onClickDone}
                  onClickDelete={onClickDelete}
                />}
        />
        <Tooltip title="Удалить" onClick={() => onClickDelete(item.id)} >
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
      </li>
       ))}
</ul>);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;