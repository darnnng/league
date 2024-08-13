import { observer } from "mobx-react-lite";
import { modalService } from "@/services/modals";

export const ModalsContainer = observer(() => {
  const modals = modalService.modals;

  return (
    <>
      {modals.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </>
  );
});
