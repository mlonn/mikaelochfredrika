import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../../components/Button';
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
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(
          'https://res.cloudinary.com/dzf3v5esf/image/list/wedding.json'
        );
        const gottenImages = await response.json();

        setImages(gottenImages.resources);
      } catch (e) {
        console.log(e);
      }
    };

    getImages();
  }, []);

  function uploadWidget() {
    cloudinary.openUploadWidget(
      { cloud_name: 'dzf3v5esf', upload_preset: 'b6a4rpip', tags: ['wedding'] },
      function (error, result) {
        console.log(result);
      }
    );
  }

  console.log(images);
  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);
  useEffect(() => {
    lightGallery.current.refresh();
  }, [images]);
  return (
    <StyledGallery>
      <div>
        <Button onClick={uploadWidget}>Ladda upp bilder!</Button>
      </div>
      <div>
        <LightGallery
          className={'gallery'}
          onInit={onInit}
          speed={500}
          plugins={[lgZoom, lgThumbnail, lgHash]}
        >
          {images.map((image) => {
            const w = 300;
            const h = 200;
            const base =
              'https://res.cloudinary.com/dzf3v5esf/image/upload/q_auto';
            const url = `${base}/${image.public_id}.jpg`;
            const thumbnail = `${base}/w_${Math.floor(w * 1.05)},h_${Math.floor(
              h * 1.05
            )},c_fill/${image.public_id}.jpg`;
            console.log(thumbnail, url);

            return (
              <GalleryItem
                data-src={url}
                data-sub-html={'<div></div>'}
                key={image.public_id}
              >
                <Img alt={'img'} src={thumbnail} />
              </GalleryItem>
            );
          })}
        </LightGallery>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
