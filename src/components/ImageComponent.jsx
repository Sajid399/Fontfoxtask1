// ImageComponent.js

import React from 'react';

const ImageComponent = ({ className, src, alt }) => {
  return (
    <img className={className} src={src} alt={alt} />
  );
}

export default ImageComponent;
