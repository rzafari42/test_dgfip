'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/productCard'
import { IProduct } from '@/interfaces/IProduct'
import FilterProducts from '@/components/filter'
import { getProductsList } from '@/services/productsService'
import Link from 'next/link'

const ProductsList = () => {
   const [filterOptions, setFilterOptions] = useState<string[]>([]);
   const [filter, setFilter] = useState<string>('Tous les produits');
   const [items, setItems] = useState<IProduct[]>([]);
   const [filteredItems, setFilteredItems] = useState<IProduct[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const products: IProduct[] = await getProductsList();
            const uniqueFilter : string[] = ['Tous les produits', ...new Set(products.map((item: IProduct) => item.category))];
            console.log('products:', products);
            setItems(products);
            setFilterOptions(uniqueFilter);
            setFilteredItems(products); 
         } catch (error) {
            console.error('Erreur lors du chargement des produits:', error);
         }
      };

      fetchData();
   }, []);

   useEffect(() => {
      if (filter === 'Tous les produits') {
         setFilteredItems(items);
      } else {
         setFilteredItems(items.filter((product) => product.category === filter));
      }
   }, [filter, items]);


   return (
      <div className="flex flex-col items-center justify-center">
         <h1 className='text-2xl'>Liste des produits</h1>
         <div>
            <div className='flex justify-between'>
                  <FilterProducts 
                     items={items} 
                     filterOptions={filterOptions} 
                     filter={filter} 
                     setFilter={setFilter} 
                  />
                  <Link href="/add-product">Ajouter un produit</Link>
            </div>
            <div className="grid grid-cols-4 gap-3">
               {
                  filteredItems.map((product: IProduct) => (
                     <ProductCard key={product.id} item={product} href={`/product/product-${product.id}`} />
                  ))
               }
            </div>
         </div>
      </div>
   );
};

export default ProductsList;