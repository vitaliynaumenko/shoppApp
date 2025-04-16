import React from 'react';

interface IImageProps {
  src: string;
  classes?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

const Image: React.FC<IImageProps> = ({ ...props }) => {
  return (
    <img
      src={props.src}
      className={props.classes ?? ''}
      loading={props.loading}
      alt={props.alt ?? ''}
    />
  );
};

export default Image;
