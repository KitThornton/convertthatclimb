import * as ActionTypes from './actionTypes'
import {hasExpectedRequestMetadata} from "@reduxjs/toolkit/dist/matchers";
const baseUrl = 'https://convertthatclimb.herokuapp.com/';

const submitGetClimbingGradesSuccess = (data) => {
    return {
        type: ActionTypes.GET_CLIMBING_GRADES,
        data: data
    }
}

const submitToggleModalVisibilitySuccess = (hasExpectedRequestMetadata  => {
    return {
        type: ActionTypes.TOGGLE_MODAL_VISIBILITY,
        data: data
    }
})

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

export const toggleModalVisibility = (target) => {
    return (dispatch) => {
        dispatch(submitToggleModalVisibilitySuccess(target))
    }
}