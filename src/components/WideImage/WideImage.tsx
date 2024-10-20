import * as React from 'react';

interface WideImageProps {
  src: string;
  alt: string;
}

const WideImage: React.FC<WideImageProps> = ({ src, alt }) => {
  return (
    <div>
      <div className="home-image">
        <img
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};
export default WideImage;
