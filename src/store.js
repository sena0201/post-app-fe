import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "./features/post/postSlice";

export const store = configureStore({
  reducer: {
    posts: PostSlice.reducer,
  },
});
