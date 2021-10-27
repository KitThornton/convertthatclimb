import React, {Fragment} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {connect} from "react-redux";
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

import * as repositoryActions from '../../actions/repositoryActions';
import GradingSystemModal from "../modal/Modal";
import {RouteClimbingLegend} from "../legend/Legend";
import StyleToggleButton from "../styleToggleButton/StyleToggleButton";
import {LoadingIndicator} from '../loadingIndicator/LoadingIndicator'
import {adjectivalGradeDict, systemToModalDict} from '../modal/GradingSystemsDescriptions'
import './Table.css'

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.modalShow = this.modalShow.bind();
        this.modalHide = this.modalHide.bind();
        this.showFullAdjectivalGrade = this.showFullAdjectivalGrade.bind();
    }

    componentDidMount() {
        this.props.onUpdateClimbingDiscipline('routeClimbing')
        this.props.onGetClimbingGrades(this.props.discipline);
    }

    showFullAdjectivalGrade(grade) {
        return grade ? adjectivalGradeDict[grade] : null;
    }

    modalShow = (system, title) => {

        let body;
        body = systemToModalDict[system];

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

    renderTooltip(cell, props) {
        return (
            <Tooltip id="button-tooltip" {...props}>
                {this.showFullAdjectivalGrade(cell)}
            </Tooltip>
        )
    }

    fullGradeName = (cell) => {

        const exist = (cell in adjectivalGradeDict);

        if (!exist) {
            return (
                <span>
                    {cell}
                </span>
            )
        } else {
            return (
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={this.renderTooltip(cell, this.props)}
                    grade={cell}
                >
                    <span className="british-trad">{cell}</span>
                </OverlayTrigger>
            )
        }
    };

    render() {

        const columns = this.props.columns.map(item => ({
                ...item,
                headerEvents: {onClick: () => this.modalShow(item.dataField, item.text)},
                headerClasses: 'grading-system',
                formatter: this.fullGradeName
            })
        );

        const radios = [
            {key: 'routeClimbing' ,name: 'Route Climbing', value: 'routeClimbing'},
            {key:  'Bouldering', name: 'Bouldering', value: 'bouldering'},
        ];

        return (
            <Fragment>
                <ToolkitProvider
                    keyField="key"
                    data={this.props.grades}
                    columns={columns}
                    search
                >
                    {
                        props => (
                            <div>
                                <Row>
                                    <Col xs={12} md={3} className="px-2 py-1">
                                        <SearchBar
                                            {...props.searchProps}
                                            srText=""
                                            placeholder={"Search for a grade..."}
                                            delay={100}
                                        />
                                    </Col>
                                    <Col xs={12} md={4} className="px-2 py-1">
                                        <StyleToggleButton
                                            radios={radios}
                                            defaultValue={"routeClimbing"}
                                        />
                                    </Col>
                                    <Col xs={12} md={5} className="px-2 py-1">
                                        <RouteClimbingLegend />
                                    </Col>
                                </Row>
                                <div className="p-1">
                                    <BootstrapTable
                                        {...props.baseProps}
                                        hover
                                        striped
                                        condensed
                                        rowClasses={rowClasses}
                                        wrapperClasses="table-responsive"
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

                <LoadingIndicator />
            </Fragment>
        )
    }
}

const {SearchBar} = Search;

const rowClasses = (row) => {
    return row.expertise
}

const mapStateToProps = (state) => {
    return {
        modalShow: state.modalShow,
        modalTitle: state.modalTitle,
        modalBody: state.modalBody,
        grades: state.grades,
        discipline: state.discipline,
        columns: state.columns
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetClimbingGrades: (discipline) => dispatch(repositoryActions.getClimbingGrades(discipline)),
    onUpdateModal: (props) => dispatch(repositoryActions.updateModal(props)),
    onUpdateClimbingDiscipline: (discipline) => dispatch(repositoryActions.updateClimbingDiscipline(discipline))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)