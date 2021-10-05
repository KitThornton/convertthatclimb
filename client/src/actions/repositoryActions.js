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

        fetch(baseUrl + 'climbingGrades')
            .then(res => res.json())
            .then(
                (result) => {
                    const restructuredArray = refactorArray(result.rows);
                    dispatch(submitGetClimbingGradesSuccess(restructuredArray));
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

// Refactor the array so that the grades are grouped by level with the
// grading systems as properties and values as the descriptions
const refactorArray = (rows) => {
    let response = [{}];

    rows.map(item =>
    {
        const index = item.level - 1;
        response[index][item.name] = item.description
        response[index]["level"] = item.level
        response[index]["expertise"] = item.expertisedescription
    });

    return response;
}