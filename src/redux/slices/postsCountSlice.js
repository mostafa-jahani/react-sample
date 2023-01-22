import {createSlice} from "@reduxjs/toolkit";

const postsCountSlice = createSlice({
    name: 'postsCount',
    initialState: {
        count: 0
    },
    reducers: {
        setPostsCount: (state, action) => {
            state.count = action.payload
        }
    }
})

export const { setPostsCount } = postsCountSlice.actions
export default postsCountSlice.reducer