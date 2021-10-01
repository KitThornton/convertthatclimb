const Columns = [{
    dataField: 'french',
    text: 'French',
    title: true,
    headerEvents: {
        onClick: (e, column, columnIndex) => alert('Click on Product ID header column')
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