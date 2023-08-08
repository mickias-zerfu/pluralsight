import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
    <ImageToggleOnMouseOver
      primaryImg="/static/speakers/bw/Speaker-10803.jpg"
      secondaryImg="/static/speakers/Speaker-10803.jpg"
      alt=""
    />  
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/Speaker-8590.jpg"
        secondaryImg="/static/speakers/Speaker-8590.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;