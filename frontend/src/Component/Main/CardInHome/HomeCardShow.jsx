import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

const HomeCardShow = ({cardItem}) => {
    const { _id,  image, itemname, description, rating, processingtime } = cardItem

    useEffect(() => {
        Aos.init({ duration: 4000 })
    }, [])
    return (
        <div>
             <div data-aos='fade-up'>
                <Link className=" mt-4 mb-4" to={`/ceramicsDetails/${_id}`}>
                    <div className="card glass">
                        <figure><img className="mt-3 max-h-28 max-w-72 rounded-xl                      
                        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...                       
                        " src={image} alt="image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{itemname}</h2>
                            <p>{description}</p>
                            <div className="divider divider-primary">Time & Rating</div>
                            <div className="flex justify-around">
                                <div>
                                    <h1>{processingtime} <span>Days</span></h1>
                                </div>
                                <div>
                                    <h1>{rating}</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                </Link>
            </div>
        </div>
    );
};

export default HomeCardShow;