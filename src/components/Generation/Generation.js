import React, { useState } from 'react';

const RandomImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState('');

  const generateRandomImage = () => {
    const width = Math.floor(Math.random() * 500) + 100; // Random width between 100 and 600
    const height = Math.floor(Math.random() * 500) + 100; // Random height between 100 and 600
    const randomImageUrl = `https://picsum.photos/${width}/${height}`;
    setImageUrl(randomImageUrl);
  };

  return (
    <div>
      <button onClick={generateRandomImage}>Generate Random Image</button>
      {imageUrl && <img src={imageUrl} alt="Random" />}
    </div>
  );
};

export default RandomImageGenerator;