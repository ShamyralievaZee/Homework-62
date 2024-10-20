import React from 'react';

interface ImageAndArticleProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
  reverse?: boolean;
}

const ImageAndArticle: React.FC<ImageAndArticleProps> = ({ imgSrc, imgAlt, title, text, reverse = false }) => {
  return (
    <div className={`home-content ${reverse ? 'reverse' : ''}`}>
      <div className="home-image">
        <img className="image" src={imgSrc} alt={imgAlt} />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageAndArticle;
