import { useEffect, useState } from "react";
import { Loader, Modal } from "components/ui";

import * as Styled from "./imageModal.styles";
import { ImageModalProps } from "./imageModal.types";

export const ImageModal = ({ onClose, url, title }: ImageModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const image = new Image();
    image.src = url;
    image.onload = () => setIsLoading(false);
    image.onerror = () => setIsLoading(false);
  }, [url]);

  if (isLoading) {
    return (
      <Styled.ModalOverlay>
        <Loader />
      </Styled.ModalOverlay>
    );
  }

  return (
    <Modal title={title} onClose={onClose!} open>
      <Styled.ModalImage src={url} alt={title} />
    </Modal>
  );
};
