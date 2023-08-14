import * as React from 'react';
import bookCover from "../../assets/book_cover.jpg"
import { PlusIcon, ShoppingCartIcon } from 'lucide-react';
import Button from '../Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { TextField } from '@mui/material';

interface IProductCardProps {
    title: string
    price: number
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({ title, price }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className='w-[12rem] h-[22rem] shadow-xl rounded flex flex-col items-center ml-10 mt-10'>
            <img src={bookCover} width={150} />
            <h3 className='font-bold'>{title}</h3>
            <h1 className='italic mt-3 mb-2 text-2xl'>R$ {price}</h1>

            <div className='flex flex-row'>
                <Button 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    hoverVariation="dark"
                    className='w-[11rem] h-[3rem] border border-black flex flex-row items-center justify-center'
                >
                    { isHovered 
                    ? <h4 className='text-xs'>ADICIONAR AO CARRINHO</h4> 
                    : <div className='flex flex-row'><AddShoppingCartIcon /></div> 
                    } 
                </Button>
            </div>

        </div>
    );
};

export default ProductCard;
