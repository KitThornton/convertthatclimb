import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import './StyleToggleButton.css'

class StyleToggleButton extends React.Component {
    render() {
        return (
            <ToggleButtonGroup type="radio" name="radio" defaultValue={this.props.defaultValue}>
                {this.props.radios.map((radio) => (
                    <ToggleButton
                        id={`radio-${radio.name}`}
                        variant= {radio.checked ? 'secondary' : 'outline-secondary'}
                        value={radio.value}
                        // checked={radioValue === radio.value}
                        // onChange={(e) => setRadioValue(e.currentTarget.value)}
                        className="radio"
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        )
    }
}

export default StyleToggleButton