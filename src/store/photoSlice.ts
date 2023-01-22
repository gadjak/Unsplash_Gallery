import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', () => {
    return axios.get("https://api.unsplash.com/photos/?client_id=3uat9rHxI7U9kBckIr4lCDHrQgqZo8OkM3aFZiK927c")
        .then(content => content.data)
        .catch((error) => console.error(error))
}
);

const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: [] as any,
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPhotos.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchPhotos.fulfilled, (state, action: PayloadAction) => {
            state.photos = action.payload
            state.loading = false
        })
        builder.addCase(fetchPhotos.rejected, state => {
            state.loading = false;
        })
    }
})

export default photosSlice.reducer;
