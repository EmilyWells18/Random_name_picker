import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  names,
  selectName,
  updateInput,
  selectedName,
  previouslySelected,
  addToNames,
  removeFromNames,
  update,
} from './namePicker';
import styles from './Counter.module.css';

export function NameGenerator() {
  const prevName = useSelector(previouslySelected);
  const name = useSelector(selectedName);
  const namesList = useSelector(names);
  const input = useSelector(update);
  const dispatch = useDispatch();

  const nameList = namesList.map((n) => (
    <ul key={n} value={n}>
      {n}
    </ul>
  ))

  return (
    <div>
      <div className={styles.row}>
        <p>Team: </p>{nameList}
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Add/remove name"
          value={input}
          onChange={e => dispatch(updateInput(e.target.value))}
        />
        <div>
          <button
            className={styles.addBtn}
            aria-label="Add name"
            onClick={() => dispatch(addToNames(input))}
          >
            Add Name
          </button>
        </div>
        <br />
        <div>
          <button
            className={styles.removeBtn}
            aria-label="Remove Name"
            onClick={() => dispatch(removeFromNames(input))}
          >
            Remove Name
          </button>
        </div>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Choose Name"
          onClick={() => dispatch(selectName())}
        >
          Generate Random Name
        </button>
        <div>
          <p className={styles.value}>Taking stand up today is: {name}</p>
        </div>
        <p>Previously Selected was: {prevName}</p>
      </div>
    </div>
  );
}
