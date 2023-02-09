import React, {Component} from "react";
import axios from 'axios';


export class ImageGallery extends Component {

   state = {
    apiUrl: 'https://pixabay.com/api',
    apiKey: '32051710-2614f6ab005cb570915111ece',
    page:'12',
    ImageGallery: [],
    
   } 
   
  componentDidUpdate(prevProps, prevState) {
    
    if (prevProps.ImageGallery !== this.props.ImageGallery) {
      console.log('Изменился object');
      console.log('prevProps.ImageGallery:', prevProps.ImageGallery);
      console.log('this.props.ImageGallery:', this.props.ImageGallery);

      
      
      
      
     axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.props.ImageGallery}&image_type=photo&per_page=${this.state.page}&safesearch=true`)
                 .then(res => this.setState({ ImageGallery: res.data.hits}))
                 .catch(err => console.log(err)); 

                
        }
       
  }
  
  render() {
    console.log(this.state.ImageGallery) 
    return (
      
      <ul class="gallery">
      <p>{this.props.ImageGallery}</p>
  {/* <!-- Набор <li> с изображениями --> */}
</ul>
    
);
  }
}