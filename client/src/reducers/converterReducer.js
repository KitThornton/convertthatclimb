import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    modalShow: false,
    modalTitle: '',
    modalBody: '',
    grades: [],
    discipline: 'routeClimbing',
    columns: [{}]
}

const executeGetClimbingGradesSuccess = (state, action) => {
    return {
        ...state,
        grades: action.data
    }
}

const executeUpdateModalSuccess = (state, action) => {
    return {
        ...state,
        modalShow: action.data.modalShow,
        modalTitle: action.data.modalTitle,
        modalBody: action.data.modalBody
    }
}

const executeUpdateDiscipline = (state, action) => {
    return {
        ...state,
        discipline: action.data.discipline,
        columns: action.data.columns
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CLIMBING_GRADES:
            return executeGetClimbingGradesSuccess(state, action)
        case ActionTypes.UPDATE_MODAL:
            return executeUpdateModalSuccess(state, action)
        case ActionTypes.UPDATE_DISCIPLINE:
            return executeUpdateDiscipline(state, action)
        default:
            return state;
    }
}

export default reducer