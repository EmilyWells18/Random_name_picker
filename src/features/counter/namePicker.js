import { createSlice } from '@reduxjs/toolkit';

export const namePicker = createSlice({
  name: 'nameReducer',
  initialState: {
    names: ["Mijahn", "TBL", "Oliwia", "Emily", "Nick"],
    chosen: " ",
    lastChosen: ""
  },
  reducers: {
    selectName: state => {
      state.lastChosen = state.chosen;
      state.chosen = state.names[Math.floor(Math.random()*state.names.length)];
    },
    updateInput: (state, action) => {
      return {
        ...state, 
        update: action.payload
        }
    },
    addToNames: (state, action) => {
      return {
        ...state,
        names: [...state.names, action.payload]
      }
    },
    removeFromNames: (state, action) => {
      return {
        ...state, 
        names: state.names.filter(n => n !== action.payload) 
      }
    },
  },
});

export const { selectName, addToNames, removeFromNames, updateInput } = namePicker.actions;
export const selectedName = state => state.name.chosen;
export const previouslySelected = state => state.name.lastChosen;
export const names = state => state.name.names;
export const update = state => state.name.update;
export default namePicker.reducer;
