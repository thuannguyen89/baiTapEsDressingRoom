class Product {
  constructor(
    _id,
    _name,
    _type,
    _desc,
    _imgSrcJpg,
    _imgSrcPng
  ) {
    this.id = _id;
    this.name = _name;
    this.type = _type;
    this.desc = _desc;
    this.imgSrcJpg = _imgSrcJpg;
    this.imgSrcPng = _imgSrcPng;
  }
}

// export default class Product{}
export default Product;