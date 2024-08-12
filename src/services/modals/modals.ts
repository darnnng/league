import { makeAutoObservable } from "mobx";
import { Modal } from "./modal.types";

class ModalService {
  modal: Modal | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  openModal(Component: Modal["Component"]) {
    this.modal = { Component };
  }

  closeModal() {
    this.modal = null;
  }
}

export const modalService = new ModalService();
