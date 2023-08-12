import * as React from 'react';
import { ShoppingCartIcon, LibraryIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FunctionComponent= () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className='flex flex-row justify-around w-full h-[5rem] bg-black shadow-2xl items-center'>
              <h1 className='text-white text-4xl font-bold font-sans'>
                <LibraryIcon size={25} /> MyBooks
              </h1>
    
              <div className='flex flex-row'>
                <button 
                  className='bg-white w-[8rem] h-[3rem] rounded'
                  onClick={() => navigate("/auth")}
                >
                  Login
                </button>
                <button 
                  className='bg-white w-[8rem] h-[3rem] ml-10 rounded'
                  onClick={() => navigate("/auth")}
                >
                  Cadastro
                </button>

                <button className='bg-white w-[10rem] h-[3rem] ml-20 rounded flex flex-row items-center justify-center'>
                    <ShoppingCartIcon />
                    <h3 className='ml-1 mr-2'>Carrinho</h3>  ( 0 )
                </button>
              </div>
            </header>
        </div>
    );
};

export default Header;