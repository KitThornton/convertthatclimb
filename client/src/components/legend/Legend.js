import React  from 'react';
import './Legend.css';

class Legend extends React.Component {

    render()
    {
        return (
            <div className='my-legend'>
                <div className='legend-scale'>
                    <ul className='legend-labels'>
                        <li><span style={{background: '#F1EEF6'}}/>novice</li>
                        <li><span style={{background: '#BDC9E1'}}/>beginner</li>
                        <li><span style={{background: '#74A9CF'}}/>interm.</li>
                        <li><span style={{background: '#2B8CBE'}}/>advanced</li>
                        <li><span style={{background: '#045A8D'}}/>expert</li>
                        <li><span style={{background: '#845A9E'}}/>elite</li>
                    </ul>
                </div>
                {/*<div className='legend-source'>Source: <a href="#link to source">Name of source</a></div>*/}
            </div>
        )
    }
}

export default Legend;