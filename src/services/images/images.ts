import { makeAutoObservable } from "mobx";
import { API_URL } from "@/constants/url";
import { Image } from "@/types/image";
import { searchHighlight } from "@/utils/searchHighlight";

class ImagesService {
  images: Image[] = [];
  isLoading: boolean = false;
  searchValue: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getImages() {
    this.isLoading = true;
    try {
      const response = await fetch(`${API_URL}/albums/1/photos`);
      if (response.ok) {
        const images = await response.json();
        this.images = images;
      }
    } catch {
      this.images = [];
    } finally {
      this.isLoading = false;
    }
  }

  setSearchValue(value: string) {
    this.searchValue = value;
  }

  get filteredImages() {
    const searchValue = this.searchValue.toLowerCase();
    return this.images
      .filter((image) => {
        const title = image.title.toLowerCase();
        return !searchValue || title.includes(searchValue);
      })
      .map((image) => ({
        ...image,
        title: searchHighlight(this.searchValue, image.title)
      }));
  }
}

export const imagesService = new ImagesService();
