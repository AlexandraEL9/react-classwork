import { createSlice } from '@reduxjs/toolkit'; // from redux toolkit
const counterSlice = createSlice ({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer; // export the reducer to be used in the store
// This will be imported in the store.js file to add to the reducer object