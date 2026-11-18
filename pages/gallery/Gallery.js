import React, { useEffect, useState } from 'react';
import { LightGallery, LightGalleryItem } from '@lightgallery/react';
import Hash from '@lightgallery/react/plugins/hash';
import Thumbnail from '@lightgallery/react/plugins/thumbnail';
import Zoom from '@lightgallery/react/plugins/zoom';
import styled from 'styled-components';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const StyledGallery = styled.div`
  max-width: 1280px;
  grid-auto-rows: min-content;
  width: 100%;
  justify-self: center;
  grid-gap: 8px;
  display: grid;
  padding: 24px;
  padding-top: 12px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  a {
    max-width: 100%;
  }
`;

const Img = styled.img`
  transition: all ease-in-out 0.2s;
  max-width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;

  cursor: pointer;

  &:hover {
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

  return (
    <StyledGallery>
      {loaded && images.length === 0 && <h6>Inga bilder här ännu.</h6>}
      <LightGallery speed={500} plugins={[Zoom, Thumbnail, Hash]}>
        <Grid>
          {images.map((image) => (
            <LightGalleryItem
              key={image.id}
              href={image.src}
              item={{
                src: image.src,
                thumb: image.thumbnail,
                alt: '',
                downloadUrl: image.download,
                download: image.id,
              }}
            >
              <Img alt="" src={image.thumbnail} loading="lazy" />
            </LightGalleryItem>
          ))}
        </Grid>
      </LightGallery>
    </StyledGallery>
  );
};

export default Gallery;
