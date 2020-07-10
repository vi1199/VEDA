import {GET_ALL_ENQUIRIES_SUCCESS, GET_ALL_ENQUIRIES_FAILURE, GET_ALL_ENQUIRIES } from "../actions"

const initialState = {
    data: [],
    loading : false
}
export const enquiriesList = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ENQUIRIES:
            return {
                ...state,
                data: [],
                loading: true
            }
        case GET_ALL_ENQUIRIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case GET_ALL_ENQUIRIES_FAILURE:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        default: return state
    }
}