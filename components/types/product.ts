// interface Review {
//   rating: number;
//   comment: string;
//   date: string;
//   reviewerName: string;
//   reviewerEmail: string;
// }

export default interface Product{
    id:number,
    title:string,
    category:string,
    images:string[],
    price:number,
    rating:number,
    brand:string
}


export interface ProductProps{
    data:Product[]
}

