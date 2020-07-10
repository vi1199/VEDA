const axios = require('axios');

/**action types . can be pushed into seperate file*/
export const GET_ALL_ENQUIRIES = 'GET_ALL_ENQUIRIES'
export const GET_ALL_ENQUIRIES_SUCCESS = 'GET_ALL_ENQUIRIES_SUCCESS'
export const GET_ALL_ENQUIRIES_FAILURE = 'GET_ALL_ENQUIRIES_FAILURE'

export const GET_ENQUIRY_DETAIL = 'GET_ENQUIRY_DETAIL'
export const GET_ENQUIRY_DETAIL_SUCCESS = 'GET_ENQUIRY_DETAIL_SUCCESS'
export const GET_ENQUIRY_DETAIL_FAILURE = 'GET_ENQUIRY_DETAIL_FAILURE'

export const SAVE_DETAILS = 'SAVE_DETAILS'

export const getAllEnquiriesStart = () => ({
    type : GET_ALL_ENQUIRIES
})
export const getAllEnquiriesSuccess = (res) => ({
    type : GET_ALL_ENQUIRIES_SUCCESS,
    payload : res
})
export const getAllEnquiriesFailure = (err) => ({
    type : GET_ENQUIRY_DETAIL_FAILURE,
    payload : err
})
export const getAllEnquiries = () => {
    return (dispatch) => {
        dispatch(getAllEnquiriesStart())
        axios.get('http://www.mocky.io/v2/5c41920e0f0000543fe7b889')
        .then(res => dispatch(getAllEnquiriesSuccess(res.data)))
        .catch(err => dispatch(getAllEnquiriesFailure(err)))
    }
}
export const saveItemDetails = (item) => ({
    type : SAVE_DETAILS,
    payload : item
})

export const saveDetails = (item) => {
    console.log('called, item', item);
    
    return (dispatch) => {
        dispatch(saveItemDetails(item))
    }
}
