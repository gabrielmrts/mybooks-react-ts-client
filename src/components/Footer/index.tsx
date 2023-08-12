import * as React from 'react';
import pix from '../../assets/pix.png';

const Footer: React.FunctionComponent = () => {
  return (
    <div>
        <footer className="bg-black text-md text-white text-center fixed inset-x-0 bottom-0 p-8 flex flex-row justify-around">
            <ul>
                <li className='font-bold'>SOBRE A MYBOOKS</li>
                <li>Sobre Nós</li>
                <li>Política de Privacidade</li>
            </ul>

            <ul>
                <li className='font-bold'>ATENDIMENTO AO CLIENTE</li>
                <li>Central de Ajuda</li>
                <li>Fale Conosco</li>
                <li>Métodos de Pagamento</li>
                <li>Devolução e Reembolso</li>
            </ul>

            <ul>
                <li className='font-bold'>PAGAMENTO</li>
                <li>&nbsp;</li>
                <li><img width={180} src={pix} /></li>
            </ul>

        </footer>
    </div>
  );
};

export default Footer;