export interface IProduct {
    _id ?: string,
    name :string,
    price :number,
    image:string,
    description ?:string,
    id_category?: string,
}
export interface IProductResponse {
    message: string;
    data: IProduct[];
  }
  