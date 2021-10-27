import React  from 'react';
import './Legend.css';

export class RouteClimbingLegend extends React.Component {

    render()
    {
        return (
            <div className='my-legend'>
                <div className='legend-scale'>
                    <ul className='legend-labels'>
                        <li><span style={{background: '#F1EEF6'}}/>beginner</li>
                        <li><span style={{background: '#BDC9E1'}}/>experienced</li>
                        <li><span style={{background: '#74A9CF'}}/>advanced</li>
                        <li><span style={{background: '#2B8CBE'}}/>expert</li>
                        <li><span style={{background: '#045A8D'}}/>elite</li>
                    </ul>
                </div>
                {/*<div className='legend-source'>Source: <a href="#link to source">Name of source</a></div>*/}
            </div>
        )
    }
}

export class BoulderingLegend extends React.Component {

    render()
    {
        return (
            <div className='my-legend'>
                <div className='legend-scale'>
                    <ul className='legend-labels'>
                        <li key="beginner"><span style={{background: '#F1EEF6'}}/>beginner</li>
                        {/*<li><span style={{background: '#BDC9E1'}}/>experienced</li>*/}
                        <li key="advanced"><span style={{background: '#74A9CF'}}/>advanced</li>
                        <li key="expert"><span style={{background: '#2B8CBE'}}/>expert</li>
                        <li key="elite"><span style={{background: '#045A8D'}}/>elite</li>
                    </ul>
                </div>
                {/*<div className='legend-source'>Source: <a href="#link to source">Name of source</a></div>*/}
            </div>
        )
    }
}

export default RouteClimbingLegend;