import React, {Component} from "react";


export class ImageGalleryItem extends Component {
  render() {
    return (
    <li class="gallery-item">
    <img src={this.props.ImageGalleryItem}
     alt="" />
    </li>
);
  }
}
