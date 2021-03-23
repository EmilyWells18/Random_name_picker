import { configureStore } from '@reduxjs/toolkit';
import nameReducer from '../features/counter/namePicker';

export default configureStore({
  reducer: {
    name: nameReducer,
  },
});
