
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import CatagoriesCard from './CatagoriesCard';
import { Zoom } from 'react-awesome-reveal';

const HomeCatagories = () => {

    const [user, setUser] = useState([]);
    fetch("https://assignment-ten-crud.vercel.app/users")
    .then(res => res.json())
    .then(obj => obj.slice(0,6))
    .then(dat => setUser(dat))
    // const data = res.json()
    // const obj = data.slice(0, 6)
    // setUser(obj)


    console.log("Data", user);
    return (
        <div className='flex justify-center'>
            <Zoom>
                <div >
                    <div className='flex justify-center mt-12 mb-12'>
                        <h1 className='font-bold text-2xl'>Art & Craft Categories</h1>
                    </div>

                    <div className="container mx-auto text-center mt-5 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 ">
                        {/* {
                            user.map(use => <CatagoriesCard key={use} e={use}></CatagoriesCard>)
                        } */}



                    </div>

                </div>
            </Zoom>
        </div>
    );
};

export default HomeCatagories;