import React from 'react';

interface IImageProps {
  src: string;
  classes?: string;
  alt?: string;
}

const Image: React.FC<IImageProps> = ({ ...props }) => {
  return <img src={props.src} className={props.classes ?? ''} alt={props.alt ?? ''} />;
};

export default Image;
