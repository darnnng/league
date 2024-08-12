export interface ModalWindowProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
