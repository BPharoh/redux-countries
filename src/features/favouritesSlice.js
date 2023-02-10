import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        favourites: [],
    },
    reducers: {
        getFavourites(state, action){

        },
        addFavourite(state, action){
            state.favourites = [...state.favourites, action.payload]
            localStorage.setItem('favourites', JSON.stringify(state.favourites))
        },
        clearFavourites(state, action) {
            localStorage.removeItem('favourites')
            state.favourites = [];
        }
    }
})

export const {getFavourites, addFavourite, clearFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer