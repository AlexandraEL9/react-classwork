import { createSlice } from '@reduxjs/toolkit';

const messages = [
  'Hello World',
  "Output Dune message. They're great!",
  'Have a nice read!',
];

const initialState = { value: messages[0], i: 0 };

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    nextMessage(state) {
      state.i = (state.i + 1) % messages.length;
      state.value = messages[state.i];
    },
    // optional: setMessage(state, action) { state.value = action.payload; }
  },
});

export const { nextMessage } = messageSlice.actions;
export const selectMessage = (state) => state.message.value;
export default messageSlice.reducer;
