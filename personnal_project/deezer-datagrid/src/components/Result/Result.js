import React, {Component} from 'react';
import PropTypes from "prop-types";
import DataHelper from "../../helpers/DataHelper"
import Filter from "../Filter/Filter"
import './Result.scss';
import Config from '../../Config';

export default class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: '',
            itemClicked: '',
            isAscendingSort: true,
            songs: [],
        };
        // this.handleFilter = this.handleFilter.bind(this);

        /*this.onDragStart = this.onDragStart.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragging = this.onDragging.bind(this);*/

        /*this.pos = null;
        this.cell = null;
        this.pressed = false;*/
    }

    handleFilter = (val) => {
        this.setState({filterValue: val});
    };

    // Sort songs by column
    onSort = (event) => {
        const target = event.target;

        const key1 = target.getAttribute('data-key1');
        const hasParam2 = target.hasAttribute('data-key2');
        const key2 = hasParam2 ? target.getAttribute('data-key2') : 0;
        let songs = this.state.songs;
        let ascending = this.state.isAscendingSort;

        this.setState({itemClicked: key1});
        this.setState({isAscendingSort: !this.state.isAscendingSort});
        DataHelper.sortSongs(songs, key1, key2, ascending);
        this.setState({songs: songs});
    };

    /**
     *
     * @param {string} item
     * @return {string}
     */
    setClassname(item) {
        return this.state.itemClicked === item ? (this.state.isAscendingSort ? 'sort--ascending' : 'sort--descending') : 'sort--ascending';
    }

    /*onDragStart(event) {
        event.preventDefault();
        event.stopPropagation();
        this.cell = event.target.parentNode;
        this.pos = this.cell.getBoundingClientRect();
        this.pressed = true;
    };

    onDragging(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.pressed) {
            this.cell.style.width = event.nativeEvent.clientX - this.pos + 'px';
        }

        document.addEventListener('mouseup', () => {
            this.pressed = false;
        }, false);
    };

    onDrop(event) {
        this.pressed = false;
    };*/
    onScroll() {
        let nearBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100;
        if (nearBottom) {
            this.props.isScrollingToBottom();
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll.bind(this));
        this.setState({songs: this.props.songs})
    }

    componentDidUpdate(prevProps) {
        if (this.props.songs !== prevProps.songs) {
            this.setState({songs: this.props.songs})
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll.bind(this));
    }

    render() {
        let songs = this.state.songs;
        let filterValue = this.state.filterValue.trim().toLowerCase();
        if (filterValue.length > 0) {
            songs = songs.filter(item => item.title.toLowerCase().match(filterValue))
        }
        let song = songs.map(song => (
            <tr key={song.id}>
                <td className="artist-picture">
                    <div className="img__ctn">
                        <img src={song.album.cover} alt={song.album.title}/>
                    </div>
                </td>
                <td>
                    {DataHelper.reformatString(song.title)}</td>
                <td>
                    {DataHelper.reformatString(song.artist.name)}</td>
                <td>
                    {DataHelper.reformatString(song.album.title)}</td>
                <td>
                    {DataHelper.convertSecToMin(song.duration)}
                </td>
            </tr>
        ));
        let classNames = {
            title: this.setClassname('title'),
            artist: this.setClassname('artist'),
            album: this.setClassname('album'),
            duration: this.setClassname('duration')
        };

        return (
            <div className="result__ctn">
                <Filter filter={this.handleFilter}
                        isFiltering={this.props.isFiltering}/>
                <table>
                    <thead>
                    <tr>
                        <th/>
                        <th data-key1="title" onClick={this.onSort} className={classNames.title}>
                            {Config.TEXT.table.track}
                        </th>
                        <th data-key1="artist" data-key2="name" onClick={this.onSort} className={classNames.artist}>
                            {Config.TEXT.table.artist}
                        </th>
                        <th data-key1="album" data-key2="title" onClick={this.onSort} className={classNames.album}>
                            {Config.TEXT.table.albumName}
                        </th>
                        <th data-key1="duration" onClick={this.onSort} className={classNames.duration}>
                            {Config.TEXT.table.duration}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {song}
                    </tbody>
                </table>
            </div>
        );
    }
}

Result.propTypes = {
    songs: PropTypes.array,
    isScrollingToBottom: PropTypes.func,
    isFiltering: PropTypes.func
};
