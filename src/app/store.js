import { combineReducers, configureStore, createSelector, createStore } from '@reduxjs/toolkit';
import nameReducer from '../features/picker/namePicker';

function loadFromLocalStorage() {
  try{
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  }catch(err){
    return undefined;
  }
}

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch(err){
    console.log(err);
  }
}

const rootReducer = combineReducers({
    name: nameReducer,
});

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEV_TOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=> saveToLocalStorage(store.getState()));
export default store;
// export default configureStore({
//   reducer: {
//     name: nameReducer,
//   },
// });
