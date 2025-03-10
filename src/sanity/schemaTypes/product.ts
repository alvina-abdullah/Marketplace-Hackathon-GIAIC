import { list } from "postcss"
import { defineType } from "sanity"

export default defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        { 
        name: 'name',
        title: 'Name',
        type: 'string',
        },
        {
            name : "slug",
            type : "slug",
            title : "Slug",
            options : {
                source : "name",
                
            }
        },
        {
        name: 'price',
        title: 'Price',
        type: 'number',
        },
        {
            name: 'inventory',
            title: 'Inventory',
            type: 'number',
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text', 
        },
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule => Rule.min(1).max(5))
            
        },
        {
            name:"category",
            title:"Category",
            type: 'string',
            options:{
                list:[
                   {title: 'T-Shirt', value: 'tshirt'},
                   {title: 'Short', value: 'short'}, 
                   {title: 'Jeans', value: 'jeans'} ,
                   {title: 'Hoddie', value: 'hoodie'} ,
                   {title: 'Shirt', value: 'shirt'} ,
                   {title: 'Jacket', value: 'jacket'},
                ]
            }
        },
       
        {
            name:"discountPercent",
            title:"Discount Percent",
            type: 'number',
        },
        {
            name:"new",
            type: 'boolean',
            title:"New",
        },
        {
            name:"colors",
            title:"Colors",
            type: 'array',
            of:[
                {type: 'string'}
            ]
        },
        {
            name:"sizes",
            title:"Sizes",
            type: 'array',
            of:[
                {type: 'string'}
            ]
        },
     
    ],
})