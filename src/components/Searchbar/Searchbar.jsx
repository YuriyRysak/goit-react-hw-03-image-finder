import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Searchbar.css';
// import { toast } from 'react-toastify';



export class Searchbar extends Component {

    state = {
        searchImg: '',
    };

    handleImageChange = event => {
        this.setState({ searchImg: event.currentTarget.value.toLowerCase()});
        // console.log(event.currentTarget.value)
    };

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.searchImg.trim() === '') {
            return alert('Введите запрос!');
        }
        this.props.onSubmit(this.state.searchImg);
        this.setState({ searchImg: ''});
    };

    reset = () => {
        this.setState({searchImg:''});
    };
    render() {
        return(
            <header class="searchbar">
                <form onSubmit={this.handleSubmit} class="SearchForm">
                    <button type="submit" class="SearchForm-button">
                    <span class="button-label">Search</span>
                    </button>

                    <input
                    class="SearchForm-input "
                    type="text"
                    autocomplete="off"
                    autofocus='on'
                    placeholder="Search images and photos"
                    value={this.state.searchImg}
                    onChange={this.handleImageChange}
                    />
                </form>
            </header>
        );


    }
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func,
  };