import React from 'react';
import Header from '../../components/Header';
import { useQuery } from 'react-query';
import Api from '../../services/api';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

const Home:React.FunctionComponent = () => {
    const { data, error, isLoading } = useQuery('listBooks', async () => {
        const response = await Api.get("/public/books");
        return response.data;
    })
    return (
        <div className="App">
            <div className='flex flex-col'>
                <Header />
                
                <div className='flex flex-row justify-center mt-5 flex-wrap'>
                    {
                        data && 
                        data.map((item: any) => (
                            <ProductCard 
                                key={item.id} 
                                title={item.title}
                                price={item.price} 
                            />
                        )
                        )
                    }
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Home;
