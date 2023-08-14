import * as React from 'react';
import { LibraryIcon, UserIcon, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
							hoverVariation={null}
							className='bg-white w-[5rem] h-[3rem] ml-10 flex flex-row items-center justify-center rounded-full'
						>
							<Badge badgeContent={0} color="secondary" showZero>
								<ShoppingCartIcon color="action" /> 
							</Badge>
						</Button>
					</div>
				</header>
			</div>
    );
};

export default Header;