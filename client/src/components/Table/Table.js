import React, {Fragment}  from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';

import ClimbingGrades from "./ClimbingGrades";
import * as Descriptions from './GradingSystemsDescriptions'
import GradingSystemModal from "./Modal";
import './Table.css'
const {SearchBar} = Search;

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            modalTitle: '',
            modalBody: ''
        }

        this.modalShow = this.modalShow.bind();
        this.modalHide = this.modalHide.bind();
    }

    modalShow = (e) => {

        // switch case on where the click is originating
        switch (e) {
            case 'french':
                this.setState({
                    modalShow: true,
                    modalTitle: 'French',
                    modalBody: Descriptions.FrenchModalBody
                });
                break;
            case 'uiaa':
                this.setState({
                    modalShow: true,
                    modalTitle: 'UIAA',
                    modalBody: Descriptions.UIAAModalBody
                });
                break;
            default:
                this.setState({
                    modalShow: false
                })
        }
    }

    modalHide = () => {
        this.setState({
            modalShow: false,
            modalTitle: '',
            modalBody: ''
        });
    }

    render() {

        const Columns2 = [{
            dataField: 'french',
            text: 'French',
            title: true,
            headerEvents: {
                onClick: () => this.modalShow('french')
            },
            headerClasses: 'grading-system'
        }, {
            dataField: 'uiaa',
            text: 'UIAA',
            headerEvents: {
                onClick: () => this.modalShow('uiaa')
            },
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

        return (
            <Fragment>
                <ToolkitProvider
                    keyField="australian"
                    data={ClimbingGrades}
                    columns={Columns2}
                    search
                >
                    {
                        props => (
                            <div>
                                <div className='p-1'>
                                    <SearchBar {...props.searchProps} />
                                </div>
                                <div className="p-1">
                                    <BootstrapTable
                                        {...props.baseProps}
                                        hover
                                        striped
                                        condensed
                                        rowClasses={rowClasses}
                                    />
                                </div>
                            </div>
                        )
                    }
                </ToolkitProvider>

                <GradingSystemModal
                    onHide={this.modalHide}
                    show={this.state.modalShow}
                    title={this.state.modalTitle}
                    body={this.state.modalBody}
                />
            </Fragment>
        )
    }
}

const rowClasses = ( row ) => {
    let classes = null;

    switch (row.level) {
        case 'novice':
            classes = 'novice'
            break;
        case 'beginner':
            classes = 'beginner'
            break;
        case 'intermediate':
            classes = 'intermediate'
            break;
        case 'advanced':
            classes = 'advanced'
            break;
        default:
            classes = ''
    }

    return classes;
}