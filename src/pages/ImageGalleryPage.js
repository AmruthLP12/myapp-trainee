import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGalleryPage.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    description: 'Beautiful landscape 1',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    description: 'Beautiful landscape 2',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    description: 'Beautiful landscape 3',
  },
];

const ImageGalleryPage = () => {
  return (
    <div className="image-gallery-container">
      <ImageGallery items={images} showFullscreenButton={true} autoPlay={true} showPlayButton={true} thumbnailPosition="right" lazyLoad={true} />
    </div>
  );
};

export default ImageGalleryPage;
