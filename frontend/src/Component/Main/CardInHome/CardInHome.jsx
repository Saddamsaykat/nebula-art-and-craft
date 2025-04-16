import { useEffect } from "react";
import { useState } from "react";
import HomeCardShow from "./HomeCardShow";
import { Zoom } from "react-awesome-reveal";

const CardInHome = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const dataCard = async () => {
            const res = await fetch("https://assignment-ten-crud.vercel.app/users");
            const data = await res.json()
            const obj = data.slice(0, 6)
            setUser(obj)
        }
        dataCard()
    }
        ,
        [])


    return (
        <div>
            <Zoom>
                <div className="divider divider-neutral"></div>
                <h1 className="flex justify-center mt-5 text-3xl mb-5 underline"> Card Item For Data</h1>
                <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 
                ">
                    {
                        user.map(slice => <HomeCardShow key={slice} cardItem={slice}></HomeCardShow>)
                    }
                </div>
                <div className="divider divider-neutral"></div>
            </Zoom>
        </div>
    );
};

export default CardInHome;