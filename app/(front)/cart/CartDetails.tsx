'use client'

import useCartService from "@/lib/hooks/useCartStore"
import { useRouter } from "next/router"

export default function CartDetails(){
    const router = useRouter()
    const{items, itemsPrice, decrease, increase } = useCartService()

    
}