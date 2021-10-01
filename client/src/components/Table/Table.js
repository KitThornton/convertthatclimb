import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

export default class Table extends React.Component {
    render() {

        const { SearchBar } = Search;

        const products = [{
            'french': 1,
            'uiaa': "I",
            'yds': "5.1 / 5.2",
            'britishtrad': "Moderate",
            'australian': "10"
        }, {
            'french': 2,
            'uiaa': 2,
            'yds': 3,
            'britishtrad': 4,
            'australian': 5
        }, {
            'french': 3,
            'uiaa': 2,
            'yds': 3,
            'britishtrad': 4,
            'australian': 5
        }, {
            'french': "4a",
            'uiaa': 2,
            'yds': 3,
            'britishtrad': 4,
            'australian': "7"
        }, {
            'french': "4b",
            'uiaa': 2,
            'yds': 3,
            'britishtrad': 4,
            'australian': "7"
        }];

        const columns = [{
            dataField: 'french',
            text: 'French',
            title: true
        }, {
            dataField: 'uiaa',
            text: 'UIAA'
        }, {
            dataField: 'yds',
            text: 'Yosemite Decimal System'
        }, {
            dataField: 'britishtrad',
            text: 'British Trad'
        }, {
            dataField: 'australian',
            text: 'Australian'
        }
        ];

        return(
            <div>
                <ToolkitProvider
                    keyField="french"
                    data={ products }
                    columns={ columns }
                    search
                >
                    {
                        props => (
                            <div>
                                {/*<h3>Input something at below input field:</h3>*/}
                                <SearchBar { ...props.searchProps } />
                                <hr />
                                <BootstrapTable
                                    { ...props.baseProps }
                                    hover
                                    striped
                                    condensed
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        )
    }
}
// Standard table
{/*<BootstrapTable*/}
{/*    keyField="id"*/}
{/*    data={ products }*/}
{/*    columns={ columns }*/}
{/*    striped*/}
{/*    hover*/}
{/*    condensed*/}
{/*/>*/}