import React, {Component} from 'react';
import PropTypes from "prop-types";
import Config from "../../Config"
import './Filter.scss';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.onKeyUpFilter = this.onKeyUpFilter.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    onKeyUpFilter(event) {
        this.props.filter(event.target.value);
    }

    onFocus() {
        this.props.isFiltering(true);
    }

    onBlur(event) {
        if (!event.target.value)
            this.props.isFiltering(false);
    }

    render() {
        return (
            <div className="filter__input">
                <input onKeyUp={this.onKeyUpFilter} onBlur={this.onBlur} onFocus={this.onFocus} placeholder={Config.TEXT.filter_text}/>
            </div>
        )
    }
}

Filter.propTypes = {
    filter: PropTypes.func,
    isFiltering: PropTypes.func
};
