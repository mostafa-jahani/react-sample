import { configureStore } from '@reduxjs/toolkit';
import {postApi} from "./api/postApi";
import postCountReducer from './slices/postsCountSlice'


export const store = configureStore({
    reducer: {
        postCounts : postCountReducer,
        [postApi.reducerPath] : postApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([postApi.middleware])
});