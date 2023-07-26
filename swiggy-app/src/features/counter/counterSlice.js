import { createSlice } from "@reduxjs/toolkit";
export const dataSlice = createSlice({
  name: "datas",
  initialState: {
    searchData: "",
  },
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { setSearchData } = dataSlice.actions;

export default dataSlice.reducer;
