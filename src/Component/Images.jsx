import React, { useState } from 'react';

function Imageupload() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {imageSrc && (
        <div>
          <img src={imageSrc} alt="uploaded image" />
          <p>Image Preview:</p>
        </div>
      )}
    </div>
  );
}

export default Imageupload;
