import { IProduct } from '@/interfaces/IProduct';
import { useRouter } from 'next/navigation'

const ProductCard = ({item, href} : {item : IProduct, href: string} ) => {
    const router = useRouter()

    return (
        <div onClick={() => {router.push(href)}} className="flex flex-col items-center border p-4 m-4 hover:cursor-pointer">
            <h2>{item.name}</h2>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>{item.price} €</p>
        </div>
    );
}

export default ProductCard;