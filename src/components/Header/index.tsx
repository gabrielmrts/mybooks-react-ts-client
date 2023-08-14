import * as React from 'react';
import { ShoppingCartIcon, LibraryIcon, UserIcon, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button';

const Header: React.FunctionComponent= () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	return (
			<div>
				<header className='flex flex-row justify-around w-full h-[5rem] bg-black shadow-2xl items-center'>
					<h1 onClick={() => navigate("/")} className='text-white text-4xl font-bold font-sans cursor-pointer'>
						<LibraryIcon size={25} /> MyBooks
					</h1>

					<div className='flex flex-row'>

						<div>
							{ user
								? ( 
									<div className='flex flex-row'>
										<Button 
											hoverVariation='dark'
											className='bg-white w-[10rem] h-[3rem] rounded flex flex-row items-center justify-center'
										>
											<UserIcon />
											<h1 className='ml-2'>Minha Conta</h1>
										</Button>
									</div>
								) : (
									<div>
										<Button 
											hoverVariation='dark'
											className='bg-white w-[8rem] h-[3rem]'
											onClick={() => navigate("/auth")}
										>
											Login
										</Button>
										<Button 
											hoverVariation='dark'
											className='bg-white w-[8rem] h-[3rem] ml-10'
											onClick={() => navigate("/auth")}
										>
											Cadastro
										</Button>
									</div>
								)
							}

						</div>

						<Button 
							hoverVariation='dark'
							className='bg-white w-[10rem] h-[3rem] ml-20 flex flex-row items-center justify-center'
						>
							<ShoppingCartIcon />
							<h3 className='ml-1 mr-2'>Carrinho</h3>  ( 0 )
						</Button>
					</div>
				</header>
			</div>
    );
};

export default Header;