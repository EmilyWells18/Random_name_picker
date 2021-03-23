import { configureStore } from '@reduxjs/toolkit';
import nameReducer from '../features/picker/namePicker';

export default configureStore({
  reducer: {
    name: nameReducer,
  },
});
