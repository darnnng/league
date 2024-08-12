import { useCallback, useRef } from "react";
import { modalService } from "@/services/modals";
import { ImageModal, ImageModalProps } from "@/components/ui";

export const useModal = () => {
  const activeModalId = useRef<string | null>(null);

  const handleCloseModal = useCallback(() => {
    if (activeModalId.current) {
      modalService.closeModal(activeModalId.current);
      activeModalId.current = null;
    }
  }, []);

  const handleOpenModal = useCallback(
    (props: ImageModalProps) => {
      const id = modalService.openModal(() => (
        <ImageModal {...props} onClose={handleCloseModal} />
      ));
      activeModalId.current = id;
    },
    [handleCloseModal]
  );

  return [handleOpenModal, handleCloseModal] as const;
};
