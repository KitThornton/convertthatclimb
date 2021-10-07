import React, {Fragment} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {connect} from "react-redux";
import {Row, Col} from "react-bootstrap";

import * as repositoryActions from '../../actions/repositoryActions';
import * as Descriptions from '../modal/GradingSystemsDescriptions'
import GradingSystemModal from "../modal/Modal";
import Legend from "../legend/Legend";
import StyleToggleButton from "../styleToggleButton/StyleToggleButton";
import './Table.css'

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.modalShow = this.modalShow.bind();
        this.modalHide = this.modalHide.bind();
    }

    componentDidMount() {
        this.props.onUpdateClimbingDiscipline('routeClimbing')
        this.props.onGetClimbingGrades(this.props.discipline);
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

    render() {

        const columns = this.props.columns.map(item => ({
                ...item,
                headerEvents: {onClick: () => this.modalShow(item.dataField, item.text)},
                headerClasses: 'grading-system'
            })
        )

        const radios = [
            {name: 'Route Climbing', value: 'routeClimbing'},
            {name: 'Bouldering', value: 'bouldering'},
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
                                    <Col xs={12} md={3}>
                                        <SearchBar
                                            {...props.searchProps}
                                            srText=""
                                            placeholder={"Search for a grade..."}
                                            delay={100}
                                        />
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <StyleToggleButton
                                            radios={radios}
                                            defaultValue={"routeClimbing"}
                                        />
                                    </Col>
                                    <Col xs={12} md={5}>
                                        <Legend/>
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

const {SearchBar} = Search;

const rowClasses = (row) => {
    return row.expertise
}

const systemToModalDict = {
    uiaa: Descriptions.UIAAModalBody,
    french: Descriptions.FrenchModalBody,
    britishtrad: Descriptions.BritishTradModalBody,
    australian: Descriptions.AustralianModalBody,
    yds: Descriptions.YDSModalBody,
    britishtechnical: Descriptions.BritishTechnicalModalBody
};

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