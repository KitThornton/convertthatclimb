import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import './StyleToggleButton.css'
import * as repositoryActions from "../../actions/repositoryActions";
import {connect} from "react-redux";

class StyleToggleButton extends React.Component {
    render() {
        return (
            <ToggleButtonGroup type="radio" name="radio" defaultValue={this.props.defaultValue}>
                {this.props.radios.map((radio) => (
                    <ToggleButton
                        key={`radio-${radio.name}`}
                        id={`radio-${radio.name}`}
                        variant={radio.checked ? 'secondary' : 'outline-secondary'}
                        value={radio.value}
                        onChange={(e) => {
                            this.props.onUpdateClimbingDiscipline(e.currentTarget.value)
                            this.props.onGetClimbingGrades(e.currentTarget.value)
                        }
                        }
                        className="radio"
                    >
                        {radio.name}
                         {/*<span style={{display: 'inline-block', width: '12px'}}/>*!/*/}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        grades: state.grades,
        discipline: state.discipline
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetClimbingGrades: (discipline) => dispatch(repositoryActions.getClimbingGrades(discipline)),
    onUpdateClimbingDiscipline: (discipline) => dispatch(repositoryActions.updateClimbingDiscipline(discipline))
})

export default connect(mapStateToProps, mapDispatchToProps)(StyleToggleButton)