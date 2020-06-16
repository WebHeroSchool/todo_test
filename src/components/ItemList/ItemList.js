import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import classnames from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({ items, value, onClickDone, onClickDelete, id }) => (<ul className={styles.wrap}>
    {items.map(item => (<li key={item.value}>
      <div className={styles.item__wrap}>
      <FormControlLabel
        control={
            <Checkbox
                checked={item.isDone}
                value="checkedB"
                color="primary"
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
        <Tooltip title="Удалить" >
          <IconButton 
            aria-label="delete"
            className={styles.button__delete}
            >
            <DeleteIcon 
              fontSize="small"
              classnames = {{ label: [styles.button__delete]}}
              onClick={() => onClickDelete(item.id)}
              />
          </IconButton>
        </Tooltip>
      </div>
      </li>
       ))}
</ul>);

export default ItemList;