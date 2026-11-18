import React, { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgHash from 'lightgallery/plugins/hash';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import styled, { css } from 'styled-components';

const StyledGallery = styled.div`
  max-width: 1280px;
  display: grid;
  grid-auto-rows: min-content;
  width: 100%;
  justify-self: center;
  grid-gap: 8px;
  display: grid;
  padding: 24px;
  padding-top: 12px;

  .lg-react-element {
    display: flex;
    flex-wrap: wrap;
  }
`;

const GalleryItem = styled.a`
  margin-right: 4px;
  margin-bottom: 4px;
  max-width: 100%;
`;

const Img = styled.img`
  transition: all ease-in-out 0.2s;
  max-width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;

  cursor: pointer;

  :hover {
    transform: scale(1.05);
    transform: perspective(500px) rotateY(5deg);
    transform: perspective(500px) rotateX(5deg);
    border-radius: 5px;
    box-shadow: 0px 0px 15px 15px rgba(40, 44, 52, 0.2);
  }
`;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch('/api/images');
        setImages(await response.json());
      } catch (e) {
        console.log(e);
      } finally {
        setLoaded(true);
      }
    };

    getImages();
  }, []);

  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);
  useEffect(() => {
    lightGallery.current?.refresh();
  }, [images]);
  return (
    <StyledGallery>
      {loaded && images.length === 0 && <h6>Inga bilder här ännu.</h6>}
      <div>
        <LightGallery
          className={'gallery'}
          onInit={onInit}
          speed={500}
          plugins={[lgZoom, lgThumbnail, lgHash]}
        >
          {images.map((image) => (
            <GalleryItem
              data-src={image.src}
              data-thumb={image.thumbnail}
              data-download-url={image.download}
              data-sub-html={'<div></div>'}
              key={image.id}
            >
              <Img alt={'img'} src={image.thumbnail} loading="lazy" />
            </GalleryItem>
          ))}
        </LightGallery>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
