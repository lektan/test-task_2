import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "developer21",
  pass: "123456",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
