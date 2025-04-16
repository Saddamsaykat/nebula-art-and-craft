import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import FilterCardValue from "./FilterCardValue";

const SubcatagoryFilter = () => {

    const { subcatagory } = useParams();

    const [findCard, setFindCard] = useState([]);
    useEffect(() => {
        const loderData = async () => {
            const res = await fetch(`https://assignment-ten-crud.vercel.app/users`);
            const datas = await res.json();
            console.log(datas);
            const craftData = datas.filter(datavalue => datavalue.subcatagory == subcatagory);
            console.log("Craft", craftData);
            setFindCard(craftData);

        }
        loderData()
    }, [subcatagory])


    console.log(findCard);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Craft Catagory</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="container mx-auto text-center mt-5 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 ">
                {
                    findCard.map(findedCard => <FilterCardValue key={findedCard} e={findedCard}></FilterCardValue>)
                }
            </div>

        </div>



    );
};

export default SubcatagoryFilter;