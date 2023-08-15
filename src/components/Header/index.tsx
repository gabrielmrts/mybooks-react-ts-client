import * as React from 'react';
import { LibraryIcon, UserIcon, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button';
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import LightTooltip from '../LightTooltip';

const Header: React.FunctionComponent= () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
		'& .MuiBadge-badge': {
			right: -12,
			top: 13,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: '0 4px',
		},
	}));

	return (
    <div>
      <header 
        className='flex flex-row justify-around w-full h-[5rem] bg-black shadow-2xl items-center'>
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
                    className={`
                      bg-white w-[4rem] h-[3rem]
                        sm:w-[5rem]
                    `}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button 
                    hoverVariation='dark'
                    className={`
                      bg-white w-[5rem] h-[3rem] ml-3
                        sm:w-[6rem] sm:ml-5
                    `}
                    onClick={() => navigate("/register")}
                  >
                    Cadastro
                  </Button>
                </div>
              )
            }

          </div>
          
          <LightTooltip title="Carrinho" placement="right">
            <div>
              <Button 
                hoverVariation={null}
                className='bg-white w-[5rem] h-[3rem] ml-5 pr-5 flex flex-row items-center justify-center rounded-full'
              >
                <StyledBadge badgeContent={0} color="secondary" showZero>
                  <ShoppingCartIcon color="action" /> 
                </StyledBadge>
              </Button>
            </div>
          </LightTooltip>

        </div>
      </header>
    </div>
  );
};

export default Header;