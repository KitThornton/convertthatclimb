import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    modalShow: false,
    modalTitle: '',
    modalBody: '',
    grades: []
}

const executeGetClimbingGradesSuccess = (state, action) => {
    return {
        ...state,
        grades: action.data
    }
}

const executeToggleModalVisibilitySuccess = (state, action) => {
    return {
        ...state,
        modalShow: action.data
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CLIMBING_GRADES:
            return executeGetClimbingGradesSuccess(state, action)
        case ActionTypes.TOGGLE_MODAL_VISIBILITY:
            return executeToggleModalVisibilitySuccess(state, action)
        default:
            return state;
    }
}

export default reducer