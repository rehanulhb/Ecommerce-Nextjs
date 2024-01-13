import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }: {product: Product}) {
  return (
    <div className='card bg-base-300 shadow-xl mb-4'>
        <figure>
            <Link href={`/product/${product.slug}`}>
                <Image src={product.image} alt={product.name} width={300} height={300} className='object-cover h-64 w-full'></Image>
            </Link>
        </figure>
        <div className="card-body">
            <Link href={`/product/${product.slug}`}>
                <h2 className="card-title font-normal">{product.name}</h2>
            </Link>

        </div>
    </div>
  )
}
