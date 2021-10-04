import * as ActionTypes from './actionTypes'
const baseUrl = 'https://convertthatclimb.herokuapp.com/';

const submitGetClimbingGradesSuccess = (data) => {
    return {
        type: ActionTypes.GET_CLIMBING_GRADES,
        data: data
    }
}

const submitUpdateModalSuccess = (data)  => {
    return {
        type: ActionTypes.UPDATE_MODAL,
        data: data
    }
}

export const getClimbingGrades = () => {
    return (dispatch) => {

        fetch(baseUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch(submitGetClimbingGradesSuccess(result))
                },
                (error) => {
                    console.log(error);
                });
    }
}

export const updateModal = (props) => {

    return (dispatch) => {
        dispatch(submitUpdateModalSuccess(props))
    }
}