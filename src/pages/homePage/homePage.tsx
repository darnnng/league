import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { imagesService } from "@/services/images";
import * as Styled from "./homePage.styles";
import { Loader } from "@/components/primitives";
import { ImageCard } from "@/components/ui";

const HomePage = observer(() => {
  const { filteredImages, isLoading } = imagesService;

  useEffect(() => {
    imagesService.getImages();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>Image gallery</Styled.Title>
      <Styled.ImageContainer>
        {filteredImages.length ? (
          filteredImages.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))
        ) : (
          <Styled.NotFound>Nothing matches your request</Styled.NotFound>
        )}
      </Styled.ImageContainer>
    </Styled.Wrapper>
  );
});

export default HomePage;
