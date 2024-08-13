import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

interface Modal {
  id: string;
  Component: React.FC;
}

class ModalService {
  modals: Modal[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  openModal(Component: React.FC): string {
    const id = uuidv4();
    this.modals.push({ id, Component });
    return id;
  }

  closeModal(id: string): void {
    this.modals = this.modals.filter((modal) => modal.id !== id);
  }
}

export const modalService = new ModalService();
