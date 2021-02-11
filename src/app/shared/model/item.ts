export class Item {
  id: number;
  title: string;
  imgPath: string;
  description: string;
  sellerId: number;

  constructor(id: number, title: string, imgPath: string, description: string, sellerId: number) {
    this.id = id;
    this.title = title;
    this.imgPath = imgPath;
    this.description = description;
    this.sellerId = sellerId;
  }
}
