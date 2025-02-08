import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
  quantity: number;
  reviewsData: any;
  reviews: any;
  discount: any;
  srcUrl: string | StaticImport;
  title: any;
  id: any;
  _id: string;
  name: string;
  image:any;
  search: string;
  rating: number;
  category: string;
  options:{
    list:[
       {title: 'T-Shirt', value: 'tshirt'},
       {title: 'Short', value: 'short'}, 
       {title: 'Jeans', value: 'jeans'} ,
       {title: 'Hoddie', value: 'hoodie'} ,
       {title: 'Shirt', value: 'shirt'} ,
    ]
};
  discountPercent: number;
new: boolean;
price: number;
description?: string;
slug : {
  _type : "slug"
  current : string;
  
};
inventory:number;

}
