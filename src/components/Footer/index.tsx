import * as React from 'react';

const Footer: React.FunctionComponent = () => {
  return (
    <footer 
      className={`
        flex w-full flex-row flex-wrap items-center 
        justify-center gap-y-6 gap-x-12 border-t 
        border-blue-gray-50 py-6 text-center md:justify-evenly
        text-sm md:text-lg
      `}>
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
    </footer>
  );
};


export default Footer;
