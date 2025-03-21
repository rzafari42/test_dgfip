import React from 'react';
import Link from 'next/link'
import { IProduct } from '@/interfaces/IProduct';

const ProductPresentation = ({ product, onClickEdit, onRemoveItem } : { product : IProduct, onClickEdit: () => void, onRemoveItem : () => void }) => {
    return (
        <div className="flex flex-col space-y-4">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price} €</p>
            <button onClick={onClickEdit}>Editer</button>
            <button onClick={onRemoveItem}>Supprimer</button>
            <Link href={`/products-list`}>
                Retour
            </Link>
        </div>
    )
}

export default ProductPresentation;