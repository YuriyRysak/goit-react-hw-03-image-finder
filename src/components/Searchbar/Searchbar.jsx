import React, {Component} from "react";
// import PropTypes from 'prop-types';
import './Searchbar.css';
// import { toast } from 'react-toastify';



export class Searchbar extends Component {

    state = {
        searchImage: '',
    };

    handleImageChange = event => {
        this.setState({ searchImage: event.currentTarget.value.toLowerCase()});
    };

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.searchImage.trim() === '') {
            return alert('Введите запрос!');
            

        }
        this.props.onSubmit(this.state.searchImage);
        this.setState({ searchImage: ''});
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
                    value={this.state.searchImage}
                    onChange={this.handleImageChange}
                    />
                </form>
            </header>
        );


    }
}
