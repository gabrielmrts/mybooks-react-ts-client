import * as React from 'react';
import bookCover from "../../assets/book_cover.jpg"

interface IProductCardProps {
    title: string
    price: number
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({ title, price }) => {
    return (
        <div className='w-[12rem] h-[22rem] shadow-xl rounded flex flex-col items-center ml-10 mt-10'>
            <img src={bookCover} width={150} />
            <h3 className='font-bold'>{title}</h3>
            <h1 className='italic mt-3 mb-2 text-2xl'>R$ {price}</h1>

            <button className='w-[11rem] h-[3rem] border border-black rounded self-bottom'>
                Adicionar ao carrinho
            </button>
        </div>
    );
};

export default ProductCard;
