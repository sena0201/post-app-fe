import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

// const url = "http://localhost:5000";

const initialState = {
  isLoading: false,
  data: [],
};

export const getPosts = createAsyncThunk(
  "/posts",
  async (thunkAPI) => {
    try {
      const res = await axios.get(
        "http://localhost:5000/posts"
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error!");
    }
  }
);

export const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { getPost } = PostSlice.actions;
export default PostSlice.reducer;
