import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {  useParams } from "react-router-dom";


const CardFullDetails = () => {

    const { cardDataId } = useParams();
    const [findCard, setFindCard] = useState({});
    useEffect(() => {
        const loderData = async () => {
            const res = await fetch(`https://assignment-ten-crud.vercel.app/users`);
            const datas = await res.json();
            console.log(datas);
            const craftData = datas.find(datavalue => datavalue._id == cardDataId);

            setFindCard(craftData);

        }
        loderData()
    }, [cardDataId])


    console.log(findCard);

    // const { _id, name, email, processingtime, stock, agree } = cardItem

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ingredient Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="card container mx-auto mt-5 lg:card-side bg-base-100 shadow-xl">
                <div className="">
                    <img className="rounded-xl mt-3 mb-3 ml-4 mr-4" src={findCard.image} alt="" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{findCard.itemname}</h2>
                    <h2 className="card-title">Catagory: {findCard.subcatagory}</h2>
                    <div className="divider divider-primary"></div>
                    <p>{findCard.description}</p>
                    <div className="divider divider-accent"></div>
                    <div className="flex justify-around">
                        <h1 className="font-semibold">Customization: {findCard.customization}</h1>
                        <h1 className="font-semibold">Price: <span>$</span>{findCard.price}</h1>
                        <h1 className="font-semibold">Rating: {findCard.rating}</h1>
                    </div>
                    <div className="divider divider-accent"></div>
                    <div className="flex justify-around">
                        <h1 className="font-semibold">Processing Time: {findCard.processingtime} <span>Days</span> </h1>
                        <h1 className="font-semibold">customization: {findCard.customization}</h1>
                        <h1 className="font-semibold">In Stock: {findCard.agree}</h1>
                    </div>
                    <div>
                        <div className="divider divider-accent"></div>
                        <div className="card-actions justify-end">

                        </div>

                    </div>
                    {/* <div className="flex justify-end gap-3">
                        <Link to={`/cart/${findCard._id}`} className="btn btn-secondary btn-outline">Buy Now</Link>

                        <button className="btn btn-success btn-outline">Add to cart</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CardFullDetails;