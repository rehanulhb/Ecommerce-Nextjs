import {create} from 'zustand'
import {round2} from '../utils'
import {OrderItem} from '../models/OrderModel'

type Cart ={
    items: OrderItem[]
    itemsPrice:number
    taxPrice:number
    shippingPrice:number
    totalPrice:number
}

const initialState: Cart ={
    items: [],
    itemsPrice:0,
    taxPrice:0,
    shippingPrice:0,
    totalPrice:0,
}

export const cartStore = create<Cart>(() => initialState)

export default function useCartService(){
    const {items, itemsPrice, taxPrice, shippingPrice, totalPrice} =cartStore()
    return {
        items,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        increase:(item:OrderItem)=>{
            const exist = items.find((x)=>x.slug === item.slug)
            const updatedCartItems = exist
            ? items.map((x) => 
            x.slug === item.slug ? {...exist, qty: exist.qty + 1} : x
            )
            : [...items, {...item, qty:1}]
        },
    }
}
