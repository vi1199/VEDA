import { SAVE_DETAILS } from "../actions"

const initialState = {
    data: []
}

export const savedDetails = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DETAILS:
            return {
                ...state,
                data : action.payload
            }
        default: return state
    }
}