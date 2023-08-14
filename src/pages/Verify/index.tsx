import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Api from '../../services/api';
import { StarIcon, XCircleIcon } from 'lucide-react';

const Verify: React.FunctionComponent = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const code = queryParams.get('code');

	const [showError, setShowError] = React.useState<boolean>(false);
	const [showOk, setShowOk] = React.useState<boolean>(false);

	React.useEffect(() => {
		const response = Api.patch('/public/users/email', { code })
			.then((res) => setShowOk(true))
			.catch((err) => setShowError(true))
	}, []);

	return (
		<div>
			<Header />
				{showOk && (
					<div className='flex flex-col items-center mt-[5rem]'>
						<StarIcon size={40} />
						<h1 className='text-3xl'>Email verificado com sucesso!</h1>
					</div>
				)}
				{showError && (
					<div className='flex flex-col items-center mt-[5rem]'>
						<XCircleIcon size={40} />
						<h1 className='text-3xl'>Codigo invalido!</h1>
					</div>
				)}
			<Footer />
		</div>
	);
};

export default Verify;
