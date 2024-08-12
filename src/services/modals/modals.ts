import { makeAutoObservable } from "mobx";
import { Modal } from "./modal.types";

class ModalService {
  modals: Modal[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  openModal(Component: Modal["Component"]) {
    const modal = { Component };
    this.modals.push(modal);
  }

  closeModal() {
    if (this.modals.length > 0) {
      this.modals.pop();
      console.log("Modal closed");
    }
  }
}

export const modalService = new ModalService();
