import React, {Fragment}  from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {connect} from "react-redux";

import * as repositoryActions from '../../actions/repositoryActions';
import * as Descriptions from '../modal/GradingSystemsDescriptions'
import GradingSystemModal from "../modal/Modal";
import './Table.css'

const {SearchBar} = Search;

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            modalTitle: '',
            modalBody: '',
            grades: []
        }

        this.modalShow = this.modalShow.bind();
        this.modalHide = this.modalHide.bind();
    }

    componentDidMount() {
        this.props.onGetClimbingGrades();
    }

    modalShow = (e) => {

        // switch case on where the click is originating
        let title, body;

        switch (e) {
            case 'french':
                title = 'French';
                body = Descriptions.FrenchModalBody
                break;
            case 'uiaa':
                title = 'UIAA';
                body = Descriptions.UIAAModalBody
                break;
            case 'yds':
                title = 'Yosemite Decimal System';
                body = Descriptions.YDSModalBody
                break;
            case 'britishtrad':
                title = 'Yosemite Decimal System';
                body = Descriptions.BritishTradModalBody;
                break;
            case 'australian':
                    title = 'Australian';
                    body = Descriptions.AustralianModalBody;
                break;
        }

        this.props.onUpdateModal({
            modalShow: true,
            modalTitle: title,
            modalBody: body
        })
    }

    modalHide = () => {
        this.props.onUpdateModal({
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
            headerClasses: 'grading-system',
            headerEvents: {
                onClick: () => this.modalShow('yds')
            },
        }, {
            dataField: 'britishtrad',
            text: 'British Trad',
            headerClasses: 'grading-system',
            headerEvents: {
                onClick: () => this.modalShow('britishtrad')
            },
        }, {
            dataField: 'australian',
            text: 'Australian',
            headerClasses: 'grading-system',
            headerEvents: {
                onClick: () => this.modalShow('australian')
            },
        }
        ];

        return (
            <Fragment>
                <ToolkitProvider
                    keyField="australian"
                    data={this.props.grades}
                    columns={Columns2}
                    search
                >
                    {
                        props => (
                            <div>
                                <div className='p-1'>
                                    <SearchBar
                                        {...props.searchProps}
                                        srText=""
                                        placeholder={"Search for a grade..."}
                                        delay={300}
                                    />
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
                    show={this.props.modalShow}
                    title={this.props.modalTitle}
                    body={this.props.modalBody}
                />
            </Fragment>
        )
    }
}

const rowClasses = ( row ) => {
    let classes;

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

const mapStateToProps = (state) => {
    return {
        modalShow: state.modalShow,
        modalTitle: state.modalTitle,
        modalBody: state.modalBody,
        grades: state.grades
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetClimbingGrades: () => dispatch(repositoryActions.getClimbingGrades()),
    onUpdateModal: (props) => dispatch(repositoryActions.toggleModalVisibility(props))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)