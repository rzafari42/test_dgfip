import React, { useState } from 'react';
import Link from 'next/link';
import { IProduct } from '@/interfaces/IProduct';

const ProductEdition = ({ product, onSave, onCancel } : { product: IProduct, onSave: (updatedProduct: IProduct) => void, onCancel: () => void} ) => {
    const [editedProduct, setEditedProduct] = useState<IProduct>({ ...product });

    const handleChange = (field: keyof IProduct, value: string | number) => {
        setEditedProduct(elem => ({
            ...elem,
            [field]: field === 'price' ? parseFloat(value as string) : value
        }));
    };

    const handleSubmit = () => {
        if (!editedProduct.name || !editedProduct.description || !editedProduct.price || !editedProduct.category) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        if (editedProduct.price < 0) {
            alert('Le prix ne peut pas être négatif');
            return;
        }
        onSave(editedProduct);
    };

    return (
        <div className="flex flex-col gap-6 p-6 w-auto">
            <h2 className="text-xl font-semibold">Édition du produit</h2>

            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Nom</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nom"
                    value={editedProduct.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="border border-gray-300 p-2 rounded-md"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <input
                    id="description"
                    type="text"
                    placeholder="Description"
                    value={editedProduct.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className="border border-gray-300 p-2 rounded-md"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="price" className="text-sm font-medium">Prix (€)</label>
                <input
                    id="price"
                    type="number"
                    min="0"
                    placeholder="Prix"
                    value={editedProduct.price}
                    onChange={(e) => handleChange('price', e.target.value)}
                    className="border border-gray-300 p-2 rounded-md"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-medium">Catégorie</label>
                <input
                    id="category"
                    type="text"
                    placeholder="Catégorie"
                    value={editedProduct.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="border border-gray-300 p-2 rounded-md"
                />
            </div>

            <button
                onClick={handleSubmit}
               className="mt-4 mr-4"
            >
                Sauvegarder
            </button>
            <button 
                onClick={onCancel}
                className="mt-4"
            >
                Annuler
            </button>
        </div>
    );
};

export default ProductEdition;