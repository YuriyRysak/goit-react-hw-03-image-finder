import React, { Component } from 'react';
// import api from './services/api.js';
// import {ArticleList} from './Articlelist.js'
// import {Loader} from './Loader/Loader';
// import axios from 'axios';

// import {Searchbar} from './Searchbar/Searchbar';
// import {ImageGallery} from './ImageGallery/ImageGallery';
import {Modal} from './Modal/Modal.jsx';
// import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import {Button} from './Button/Button';
// import { Loader } from './Loader/Loader';
// import './styles.css';
// import pixabay from '../components/pixabay.json'

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
 export class App extends Component {
 

  state = {
    articles: [],
    isLoading: false,
    error: null,
    showModal: false,
  };

 
  // async componentDidMount() {
  //   this.setState({ isLoading: true });

  //   try {
  //     const response = await axios.get("/search?query=react");
  //     this.setState({ articles: response.data.hits });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }
    imageModal = () => {
      this.setState(({ showModal}) => ({
        showModal: !showModal,
      }));
    }; 
    closeModal = () => {
      this.setState({
        showModal: false,
      });
    };
  
    render() {
      const { articles, isLoading, error, showModal } = this.state;
      // console.log(articles);
  
      return (
        <div>
          <button type='button' onClick={this.imageModal}>open Modal</button>
          {showModal && (
              <Modal onClose={this.closeModal}>
              <p>open modal hi!</p>
               <button type='button' onClick={this.imageModal}>close Modal</button>
              </Modal>
          )}
          {/* {error && <p>Whoops, something went wrong: {error.message}</p>}
          {isLoading && <Loader/>}
          {articles.length > 0 && <ArticleList articles={articles} />} */}
        </div>
      );
    }
  }
