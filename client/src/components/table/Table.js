import React, {Fragment}  from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {connect} from "react-redux";

import * as repositoryActions from '../../actions/repositoryActions';
import * as Descriptions from '../modal/GradingSystemsDescriptions'
import GradingSystemModal from "../modal/Modal";
import './Table.css'
import {GradingSystems} from "./Columns";
import Legend from "../legend/Legend";
import {Row, Col} from "react-bootstrap";
import StyleToggleButton from "../styleToggleButton/StyleToggleButton";

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
                title = 'French ss';
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
                title = 'British Traditional';
                body = Descriptions.BritishTradModalBody;
                break;
            case 'australian':
                title = 'Australian';
                body = Descriptions.AustralianModalBody;
                break;
            default:
                return;
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

        const columns = GradingSystems.map(item => ({...item,
            headerEvents: {onClick: () => this.modalShow(item.dataField)},
            headerClasses: 'grading-system'
            })
        )

        const radios = [
            { name: 'Route Climbing', value: 'routeclimbing' },
            { name: 'Bouldering', value: 'bouldering' },
        ];

        return (
            <Fragment>
                <ToolkitProvider
                    keyField="level"
                    data={this.props.grades}
                    columns={columns}
                    search
                >
                    {
                        props => (
                            <div>
                                <Row>
                                    <Col sm={3}>
                                        <SearchBar
                                            {...props.searchProps}
                                            srText=""
                                            placeholder={"Search for a grade..."}
                                            delay={100}
                                        />
                                    </Col>
                                    <Col sm={4}>
                                        <StyleToggleButton radios={radios} defaultValue={'routeclimbing'} />
                                    </Col>
                                    <Col sm={5}>
                                        <Legend />
                                    </Col>
                                </Row>
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

const rowClasses = ( row ) => { return row.expertise }

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
    onUpdateModal: (props) => dispatch(repositoryActions.updateModal(props))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)