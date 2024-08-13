import { observer } from "mobx-react-lite";
import { Button } from "components/ui";
import * as Styled from "./imageCard.styles";
import { ImageCardProps } from "./imageCard.types";
import { useModal } from "@/hooks/useModal";
import { imagesService } from "@/services/images";
import { searchHighlight } from "@/utils/searchHighlight";

export const ImageCard = observer(
  ({ image: { thumbnailUrl, title, url } }: ImageCardProps) => {
    const [openModal] = useModal();

    const handleOpenModal = () => {
      openModal({ url, title });
    };

    return (
      <Styled.Card data-testid="test-card">
        <div>
          <Styled.Thumbnail src={thumbnailUrl} alt={title} />
        </div>
        <Styled.ContentWrapper>
          <Styled.Heading>
            {searchHighlight(imagesService.searchValue, title)}
          </Styled.Heading>
          <Button onClick={handleOpenModal}>Full size</Button>
        </Styled.ContentWrapper>
      </Styled.Card>
    );
  }
);
