import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import query from '../services/query';
import Wrapper from './Wrapper';
import { debounce } from 'lodash';

const requestSearch = (value, regex = false) => ({
    value,
    regex
});

const DESC = 'desc';
const ASC = 'asc';
const toggleDirection = (direction) => (direction === ASC) ? DESC : ASC;
const DEBOUNCE_DELAY = 500;

class Datatable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entriesToShow: 10,
            searchInput: '',
            currentPage: 0,
            orderColumnIndex: 0,
            orderColumnDirection: DESC,
            refreshing: false,

            recordsTotal: 0,
            recordsFiltered: 0,
            drawCount: 1,
            data: []
        };

        this.updateTableState = this.updateTableState.bind(this);
        this.handleSetEntriesToShow = this.handleSetEntriesToShow.bind(this);
        this.handleSetSearchInput = this.handleSetSearchInput.bind(this);
        this.handleSetPage = this.handleSetPage.bind(this);
        this.handleSetOrderColumn = this.handleSetOrderColumn.bind(this);
        this.debouncedDraw = debounce(this.debouncedDraw.bind(this), (this.props.debounceDelay || DEBOUNCE_DELAY));
    }

    getStartIndex() {
        return this.state.currentPage * this.state.entriesToShow;
    }

    updateTableState(response) {
        const { recordsTotal, recordsFiltered, data, draw } = this.getResponseData(response.data);
        this.setState({
            recordsTotal: recordsTotal,
            recordsFiltered: recordsFiltered,
            data: data,
            drawCount: (draw + 1),
            refreshing: false,
        });
    }

    getResponseData(data) {
        return (this.props.responseDataGetter) ? this.props.responseDataGetter(data) : data;
    }

    handleSetEntriesToShow(entriesToShow) {
        this.setState({
            entriesToShow
        }, () => this.draw());
    }

    handleSetSearchInput(searchInput) {
        this.setState({
            searchInput
        }, () => this.debouncedDraw());
    }

    debouncedDraw() {
        this.draw();
    }

    handleSetPage(page) {
        if (this.state.currentPage != page) {
            this.setState({
                currentPage: page
            }, () => this.draw());
        }
    }

    handleSetOrderColumn(columnIndex, columnDirection = null) {
        if (columnIndex === this.state.orderColumnIndex) {
            columnDirection = columnDirection || toggleDirection(this.state.orderColumnDirection);
        } else {
            columnDirection = columnDirection || DESC;
        }
        this.setState({
            orderColumnIndex: columnIndex,
            orderColumnDirection: columnDirection,
        }, () => this.draw());
    }

    getBodyData() {
        return this.state.data.slice(this.getStartIndex(), this.state.entriesToShow);
    }

    getColumns() {
        return this.props.columns.slice(0).map(column => (Object.assign({
            searchable: true,
            orderable: true,
            search: requestSearch(''),
        }, column)));
    }

    getOrderForRequest() {
        return [{
            column: this.state.orderColumnIndex,
            dir: this.state.orderColumnDirection
        }];
    }

    getRequestData() {
        return {
            columns: this.getColumns(),
            start: this.getStartIndex(),
            length: this.state.entriesToShow,
            search: requestSearch(this.state.searchInput),
            order: this.getOrderForRequest(),
            draw: this.state.drawCount
        };
    }

    refresh() {
        query({
            url: this.props.url,
            method: this.props.method || 'get',
            data: this.getRequestData()
        }).then(this.updateTableState);
    }

    componentDidMount() {
        this.draw();
    }

    draw() {
        this.setState({
            refreshing: true
        }, () => this.refresh());
    }

    getStyleProps() {
        return {
            bordered: this.props.bordered || true,
            condensed: this.props.condensed || true,
            alternated: this.props.alternated || true
        };
    }

    render() {
        return (
            <Wrapper {...this.getStyleProps()}>
                <Header
                    entriesToShow={this.state.entriesToShow}
                    searchInput={this.state.searchInput}
                    setEntriesToShow={this.handleSetEntriesToShow}
                    setSearchInput={this.handleSetSearchInput} />
                <Body
                    columns={this.getColumns()}
                    data={this.state.data}
                    orderColumnDirection={this.state.orderColumnDirection}
                    orderColumnIndex={this.state.orderColumnIndex}
                    setOrderColumn={this.handleSetOrderColumn}
                    styles={this.getStyleProps()}/>
                <Footer
                    currentPage={this.state.currentPage}
                    setPage={this.handleSetPage}
                    entriesToShow={this.state.entriesToShow}
                    recordsFiltered={this.state.recordsFiltered}
                    recordsTotal={this.state.recordsTotal}
                    dataLength={this.state.data.length}
                    refreshing={this.state.refreshing}/>
            </Wrapper>
        );
    }
}

export default Datatable;
