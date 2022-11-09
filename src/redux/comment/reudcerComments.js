import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from "./type"

const initialState = {
    isLoad: false,
    comments: [],
    error: ''
}

const reducerComment = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                ...state,
                isLoad: true
            }

        case LOAD_COMMENTS:
            return {
                ...state,
                isLoad: false,
                comments: action.payload,
                error: ''
            }
        case LOAD_COMMENTS:
            return {
                ...state,
                isLoad: false,
                comments: [],
                error: action.payload
            }
        default: return state;
    }
}