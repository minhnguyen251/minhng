import React, {Component} from 'react';
import 'normalize.css';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import Result from './components/Result/Result';
import Error from './components/Error/Error';
import Loading from "./components/Loading/Loading";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberScrollingToBottom: 0,
            isFiltering: false,
            isLoading: false,
            isReceivedSongs: false,
            isErrorScreen: false,
            songs: []
        }
    }

    handleLoading = () => this.setState({isLoading: !this.state.isLoading});
    handleSearchQuery = (data) => this.setState({songs: data, isReceivedSongs: true});
    handleErrorScreen = () => this.setState({isErrorScreen: true});
    handleScrollingToBottom = () => this.setState({numberScrollingToBottom: this.state.numberScrollingToBottom + 1});
    handleIsFiltering = (state) => this.setState({isFiltering: state});

    render() {
        return (
            <div className={`app__ctn ${this.state.isReceivedSongs ? 'app--submitted' : ''}`}>

                <SearchBar searchQuery={this.handleSearchQuery}
                           loading={this.handleLoading}
                           errorScreen={this.handleErrorScreen}
                           isScrollingToBottom={this.state.numberScrollingToBottom}
                           isFiltering={this.state.isFiltering}/>

                {this.state.isLoading ?
                    <Loading/>
                    : null
                }

                {this.state.isReceivedSongs ?
                    <Result songs={this.state.songs}
                            isScrollingToBottom={this.handleScrollingToBottom}
                            isFiltering={this.handleIsFiltering}/>
                    : null
                }

                {this.state.isErrorScreen ?
                    <Error/>
                    : null
                }
            </div>
        );
    }
}