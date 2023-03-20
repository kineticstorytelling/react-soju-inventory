import {createSlice} from '@reduxjs/toolkit'
import { useActionData } from 'react-router-dom'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name:"Name",
        style: "Style",
        flavor: "Flavor"
    },
    reducers:{
        chooseName: (state,action)=>{ state.name = action.payload },
        chooseStyle: (state, action) => { state.style = action.payload },
        chooseFlavor: (state, action) => { state.flavor = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseStyle, chooseFlavor} = rootSlice.actions;