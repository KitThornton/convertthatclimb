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
            case 'yds':
                this.setState({
                    modalShow: true,
                    modalTitle: 'Yosemite Decimal System',
                    modalBody: Descriptions.YDSModalBody
                });
                break;
            case 'britishtrad':
                this.setState({
                    modalShow: true,
                    modalTitle: 'British Traditional',
                    modalBody: Descriptions.BritishTradModalBody
                });
                break;
            case 'australian':
                this.setState({
                    modalShow: true,
                    modalTitle: 'Australian',
                    modalBody: Descriptions.AustralianModalBody
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
                    show={this.state.modalShow}
                    title={this.state.modalTitle}
                    body={this.state.modalBody}
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
    onGetClimbingGrades: () => dispatch(repositoryActions.getClimbingGrades())
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)