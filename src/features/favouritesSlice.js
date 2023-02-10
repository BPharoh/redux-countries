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
        clearFavourties(state, action) {
            localStorage.removeItem('Favourites')
            state.favourites = [];
        }
    }
})

export const {getFavourites, addFavourite, clearFavourties } = favouritesSlice.actions

export default favouritesSlice.reducer