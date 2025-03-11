// src/components/ImageSelection.js
import React from 'react';

const ImageSelection = ({ onSelectImage }) => (
  <div className="image-selection">
    <img src="../assets/img/Web_BC/100-250/Screenshot 2025-03-10 225024.png" alt="Gift 1" onClick={() => onSelectImage('Gift 1')} />
    <img src="../assets/img/Web_BC/100-250/Screenshot 2025-03-10 225036.png" alt="Gift 2" onClick={() => onSelectImage('Gift 2')} />
    <img src="../assets/img/Web_BC/100-250/Screenshot 2025-03-10 225050.png" alt="Gift 3" onClick={() => onSelectImage('Gift 3')} />
  </div>
);

export default ImageSelection;
