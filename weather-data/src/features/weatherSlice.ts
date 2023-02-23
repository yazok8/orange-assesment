import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IWeatherData } from "../components/interfaces/interface";
import { weatherData } from '../data/weatherData';


interface WeatherState{
    data: IWeatherData, 
    loading:boolean, 
    errors: any
    searchQuery: string | null
}

const initialState: WeatherState = {
    data: weatherData,
    loading: false, 
    errors: null, 
    searchQuery:null
}

export const weatherSlice = createSlice ({
    name: "weather", 
    initialState, 
    reducers: {
        setSearchQuery:(state, action: PayloadAction<string>)=>{
            state.searchQuery = action.payload
        }

    }, 
})

export const {setSearchQuery} = weatherSlice.actions

export default weatherSlice.reducer;