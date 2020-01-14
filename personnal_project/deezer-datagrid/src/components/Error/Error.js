import React, {Component} from 'react';
import './Error.scss';
import Config from '../../Config';

export default class Error extends Component {
    render() {
        return (
            <div className="error__ctn">
                {Config.TEXT.error_message}
            </div>
        );
    }
}
