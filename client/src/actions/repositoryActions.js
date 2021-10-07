import * as ActionTypes from './actionTypes'
import {BoulderingGradingSystems, RouteGradingSystems} from "../components/table/Columns";
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

const submitUpdateClimbingDiscipline = (data)  => {
    return {
        type: ActionTypes.UPDATE_DISCIPLINE,
        data: data
    }
}

export const getClimbingGrades = (discipline) => {

    return (dispatch) => {

        fetch(baseUrl + 'grades/' + discipline)
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

export const updateClimbingDiscipline = (discipline) => {

    let columns;
    let data = {};

    switch (discipline) {
        case 'routeClimbing':
            columns = RouteGradingSystems;
            break;
        case 'bouldering':
            columns = BoulderingGradingSystems;
            break;
        default:
            break;
    }

    data.discipline = discipline;
    data.columns = columns;

    return (dispatch) => {
        dispatch(submitUpdateClimbingDiscipline(data))
    }
}

// Refactor the array so that the grades are grouped by level with the
// grading systems as properties and values as the descriptions
const refactorArray = (rows) => {

    let response = [{}];

    if (rows === undefined) {
        return response;
    }

    rows.map(item =>
    {
        const index = item.level - 1;

        if (response[index] === undefined) {
            response.push({});
        }

        response[index][item.name] = item.description
        response[index]["level"] = item.level
        response[index]["expertise"] = item.expertisedescription

        return response;
    });

    return response;
}