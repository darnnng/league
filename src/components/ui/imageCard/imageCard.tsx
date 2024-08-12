import React from "react";
import { observer } from "mobx-react-lite";
import { Button } from "../../primitives/button";
import * as Styled from "./imageCard.styles";
import { ImageCardProps } from "./imageCard.types";
import { useModal } from "@/hooks/useModal";

export const ImageCard = observer(
  ({ image: { thumbnailUrl, title, url } }: ImageCardProps) => {
    const [openModal] = useModal();

    const handleOpenModal = () => {
      openModal({ url, title });
    };

    return (
      <Styled.Card>
        <div>
          <Styled.Thumbnail src={thumbnailUrl} alt={title} />
        </div>
        <Styled.ContentWrapper>
          <Styled.Heading dangerouslySetInnerHTML={{ __html: title }} />
          <Button onClick={handleOpenModal}>Full size</Button>
        </Styled.ContentWrapper>
      </Styled.Card>
    );
  }
);
