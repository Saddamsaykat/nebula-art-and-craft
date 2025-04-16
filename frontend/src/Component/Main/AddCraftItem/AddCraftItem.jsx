import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const AddCraftItem = () => {

  const {user } = useContext(AuthContext)

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target
    const name = user.displayName;
    const email = user.email;
    const image = form.image.value;
    const itemname = form.itemname.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingtime = form.processingtime.value;
   
    const customization = form.customization.value;
    const agree = form.agree.value;
    const subcatagory = form.subcatagory.value;

    const craftData = { name, email, image, itemname, description, price, rating, processingtime, agree, subcatagory, customization}
    console.log(craftData);

    fetch('https://assignment-ten-crud.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(craftData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          toast.success('Data Send successfully')
          form.reset();
        }
        else{
          toast.warn('Data Send Not Success')
        }
      })

  }

  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Add Art and Craft Item</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="container mx-auto">
        <div className=" mt-5">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Add Your Craft Item</h1>
            <p className="py-6"></p>
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100 mb-5">

            <form onSubmit={handleForm}
             className="card-body grid grid-cols-1 gap-4 sm:grid-cols-1
              md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" name="image" placeholder="Image" className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input type="text" name="itemname" placeholder="Item Name" className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subcategory Name
                  </span>
                </label>            
                    <select name="subcatagory" className="border-2 p-3 rounded-xl" id="">
                    <option value="same"></option>
                      <option value="Clay-made pottery">Clay-made pottery</option>
                      <option value="Stoneware">Stoneware</option>
                      <option value="Porcelain">Porcelain</option>
                      <option value="Terra Cotta">Terra Cotta</option>
                      <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                      <option value="Home decor pottery">Home decor pottery</option>
                      
                    </select>
                                   
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description
                  </span>
                </label>
                <textarea name="description" id="" className="border-2" cols="10" rows="2"></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">price
                  </span>
                </label>
                <input type="text" name="price" placeholder="price" className="input input-bordered" required />
              </div>


              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Rating
                  </span>
                </label>
                <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required /><span className="absolute top-14 right-3">*</span>
              </div>
              
              <div className="mt-2">
                <label htmlFor="In Stock">Customization<br />
                  <select name="customization" className="border-2 p-3 rounded-xl mt-2 w-full">
                    <option value=""></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>
              </div>
            

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Processing Time
                  </span>
                </label>
                <input type="text" name="processingtime" placeholder="Processing Time" className="input input-bordered" required />
              </div>

              <div className="mt-2">
                <label htmlFor="In Stock">In Stock <br />
                  <select name="agree" className="border-2 p-3 rounded-xl mt-2 w-full">
                    <option value="In Stock"></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="text" name="" defaultValue={user.displayName} readOnly placeholder="User Name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input type="email" name="" defaultValue={user.email} readOnly placeholder="User Email" className="input input-bordered" required />
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Add Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItem;