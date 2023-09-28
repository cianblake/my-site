import React, { useState, useCallback } from 'react';
import { Grid } from '@mui/material';
import { StyledOuterStack, StyledMainImage, StyledThumbImage, OverflowStack } from './styled.js';
import Carousel, { Modal, ModalGateway } from "react-images";

function ImageGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <StyledOuterStack gap='20px'>
      <StyledMainImage src='/assets/organiser_1.png' alt='' onClick={() => openLightbox(0)} />
      <OverflowStack>
        <Grid container direction='row' gap='20px'>
          {images.map((image, index) => {
            return (
              <Grid item key={index}>
                <StyledThumbImage src={image} alt='' onClick={() => openLightbox(index)} />
              </Grid>
            )
          })}
        </Grid>
      </OverflowStack>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                src: x
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </StyledOuterStack>
  );
}

export default ImageGallery;
