import React from "react";
import { observer } from "mobx-react-lite";
import { modalService } from "@/services/modals";
import { Button } from "../../primitives/button";
import * as Styled from "./imageCard.styles";
import { ImageCardProps } from "./imageCard.types";
import Modal from "@/components/primitives/modalWindow/modalWindow";

export const ImageCard = observer(
  ({ image: { thumbnailUrl, title, url } }: ImageCardProps) => {
    // Компонент модалки
    const ModalComponent = () => (
      <Modal title={title} open={true} onClose={handleCloseModal}>
        <img src={url} alt={title} />
      </Modal>
    );

    // Закрытие модалки
    const handleCloseModal = () => {
      modalService.closeModal();
    };

    // Открытие модалки
    const handleOpenModal = () => {
      modalService.openModal(ModalComponent);
    };

    return (
      <Styled.Card>
        <div>
          <Styled.Thumbnail src={thumbnailUrl} alt={title} />
        </div>
        <Styled.ContentWrapper>
          <Styled.Heading dangerouslySetInnerHTML={{ __html: title }} />
          <Button variant="outlined" onClick={handleOpenModal}>
            Full size
          </Button>
        </Styled.ContentWrapper>
        {/* Рендеринг модалок из сервиса */}
        {modalService.modals.map((modal, index) => (
          <React.Fragment key={index}>
            <modal.Component />
          </React.Fragment>
        ))}
      </Styled.Card>
    );
  }
);
