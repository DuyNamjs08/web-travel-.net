import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {
    API_TOUR, API_TOUR_ID, API_CATEGORY,
    API_BLOG, API_BLOG_ID, API_HOTEL, API_HOTEL_ID, API_COMMENT, API_TOUR_IMGS,
    API_BLOG_IMGS, API_HOTEL_IMGS, API_SEND_MAIL, API_SEND_MAIL_TOUR, API_IMGAGE
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
    const response = await axios.get(API_TOUR + '?ItemsPerPage=100', {
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
export const PostMail = createAsyncThunk('post/mail', async (payload) => {
    const arr = []
    arr.push(payload.RoleIds)
    const formData = new FormData();
    formData.append('name_register', payload.name_register);
    formData.append('address_register', payload.address_register);
    formData.append('phone_register', payload.phone_register);
    formData.append('email_register', payload.email_register);
    const response = await axios.post(API_SEND_MAIL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${payload.token}`
        }
    })
    console.log("respone", response)
    return response.data
})
export const PostMailTour = createAsyncThunk('post/mail', async (payload) => {
    const arr = []
    arr.push(payload.RoleIds)
    const formData = new FormData();
    formData.append('name_register', payload.name_register);
    formData.append('address_register', payload.address_register);
    formData.append('phone_register', payload.phone_register);
    formData.append('email_register', payload.email_register);
    formData.append('id_tour', payload.id_tour); 
    const response = await axios.post(API_SEND_MAIL_TOUR, formData, {
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
export const getListImg = createAsyncThunk('fetch/service', async (payload) => {
    const response = await axios.get(API_IMGAGE + `?type=${payload.type}&id=${payload.id}`, {
        headers: {
            "Content-Type": "application/json",
            "x_authorization": payload.token
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