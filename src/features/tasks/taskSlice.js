import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Task 1",
    description: "Task one description",
  },
  {
    id: 2,
    name: "Task 2",
    description: "Task two description",
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
