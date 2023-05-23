import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {
    API_TOUR, API_TOUR_ID, API_CATEGORY,
    API_BLOG, API_BLOG_ID, API_HOTEL, API_HOTEL_ID, API_COMMENT, API_TOUR_IMGS,
    API_BLOG_IMGS, API_HOTEL_IMGS
} from '../api'


export const getCategory = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_CATEGORY, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const getTour = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_TOUR, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const GetCmtTour = createAsyncThunk('get/tour/id', async (payload) => {

    const response = await axios.get(API_COMMENT + `${payload.id}`, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${payload.token}`
        }
    })
    console.log("respone", response)
    return response.data
})
export const getTourDetails = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_TOUR_ID + `/${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const getTourImg = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_TOUR_IMGS + `/${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const getHotelImg = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_HOTEL_IMGS + `/${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const getBlogImg = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_BLOG_IMGS + `/${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const getBlog = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_BLOG, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const getBlogDetails = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_BLOG_ID + `/${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const getHotel = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_HOTEL, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})
export const getHotelDetails = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_HOTEL_ID + `/${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload
        }
    })
    console.log("respone", response)
    return response.data
})

const travelSlice = createSlice({
    name: 'auth',
    initialState: {
        data: [],
        service: [],
        idUser: {}
    },
    reducers: {
        getservice: (state, action) => {
            state.service = action.payload
        }

    },
    extraReducers: (builder) => {

    }
})
const { actions, reducer } = travelSlice
export const { getservice } = actions
export default reducer