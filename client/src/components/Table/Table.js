import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Columns from "./Columns";
import './Table.css'
import ClimbingGrades from "./ClimbingGrades";

export default class Table extends React.Component {
    render() {

        const { SearchBar } = Search;

        return(
            <div>
                <ToolkitProvider
                    keyField="australian"
                    data={ ClimbingGrades }
                    columns={ Columns }
                    search
                >
                    {
                        props => (
                            <div>
                                {/*<h3>Input something at below input field:</h3>*/}
                                <div className='p-1'>
                                    <SearchBar { ...props.searchProps } />
                                </div>
                                <div className="p-1">
                                    <BootstrapTable
                                        { ...props.baseProps }
                                        hover
                                        striped
                                        condensed
                                    />
                                </div>
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