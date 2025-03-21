'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import { IProduct } from "@/interfaces/IProduct";
import { addProduct } from "@/services/productsService";

const AddProduct = () => {
    const router = useRouter()
    const [product, setProduct] = useState<IProduct>({
        name: '',
        description: '',
        price: 0,
        category: ''
    });


    const handleSubmit = () => {
        if (!product.name || !product.description || !product.price || !product.category) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        if (product.price < 0) {
            alert('Le prix ne peut pas être négatif');
            return;
        }
        addProduct(product);
        router.push('/products-list');
    };


    const handleChange = (field: keyof IProduct, value: string | number) => {
        setProduct(elem => ({
            ...elem,
            [field]: field === 'price' ? parseFloat(value as string) : value
        }));
    };

    const handleCancel = () => {
        router.push('/products-list');
    };

    return (
        <div>
            <h1>Ajouter un produit</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Nom</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nom"
                    value={product.name}
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
                    value={product.description}
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
                    value={product.price}
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
                    value={product.category}
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
                onClick={handleCancel}
                className="mt-4"
            >
                Annuler
            </button>
        </div>
    )
}

export default AddProduct;