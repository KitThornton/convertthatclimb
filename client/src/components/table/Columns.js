import React from 'react';

class Columns extends React.Component {
    render() {
        return (
            { Columns2 }
        )
    }
}

const Columns2 = [{
    dataField: 'french',
    text: 'French',
    title: true,
    headerEvents: {
        // onClick:() => App.setModalShow(true)
    },
    headerClasses: 'grading-system'
}, {
    dataField: 'uiaa',
    text: 'UIAA',
    headerClasses: 'grading-system'
}, {
    dataField: 'yds',
    text: 'Yosemite Decimal System',
    headerClasses: 'grading-system'
}, {
    dataField: 'britishtrad',
    text: 'British Trad',
    headerClasses: 'grading-system'
}, {
    dataField: 'australian',
    text: 'Australian',
    headerClasses: 'grading-system'
}
];

export default Columns