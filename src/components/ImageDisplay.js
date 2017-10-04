import React, {Component} from 'react'

class ImageDisplay extends Component {
  render(){
    const images = this.props.images.map(image => {
      return (
        <div className="ImageDisplay" key={image.id}>
        <img className="image" scr={image.img_src} alt="pic" />
        </div>
      )
    })
    return(
      <div>
      {images}
      </div>
    )
  }
}


export default ImageDisplay
