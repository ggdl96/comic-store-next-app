'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';
import { ReactEventHandler, useEffect, useState } from 'react';
import { DEFAULT_IMAGE } from '../../constants/comics';

const WrapperImage = (props: ImageProps) => {
  const [source, setSource] = useState<string | StaticImport>(DEFAULT_IMAGE);

  useEffect(() => {
    setSource(props.src ?? DEFAULT_IMAGE);
  }, [props.src]);

  const handleOnError: ReactEventHandler<HTMLImageElement> = e => {
    if (props.onError) {
      props.onError(e);
    }

    console.error('Error loading image: ', 'src: ', props.src, 'id: ', e.currentTarget.id);
    setSource(DEFAULT_IMAGE);
  };

  return (
    <Image
      {...props}
      src={source}
      alt={props.alt}
      className={
        props.className
          ? `image ${props.className}`
          : 'image object-contain max-h-full relative object-top'
      }
      onError={handleOnError}
    />
  );
};

export default WrapperImage;
