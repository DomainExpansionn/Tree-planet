import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const DetailsCard = ({ gach }) => {
    const { plantName, price, rating, image, description, availableStock } = gach;
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        toast('Form Submitted Succesfully!')
    }
    return (
        

        <div className='w-11/12 flex flex-col md:flex-row items-center justify-center gap-10'>
            <div className="w-11/12 card bg-base-100 shadow-sm mx-auto my-8">
                <figure>
                    <img
                        className='max-h-screen'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {plantName}
                        <div className="badge badge-secondary">Stock available: {availableStock}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Price: {price}$</div>
                        <div className="badge badge-outline">Rating: {rating}</div>
                    </div>

                </div>
            </div>
            <div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="font-semibold text-2xl text-center">
                            Book Consultation
                        </h2>
                        <form onSubmit={handleFormSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" required />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />
                                
                                <button type='submit' className="btn btn-neutral mt-4">Book Now</button>
                                <ToastContainer/>
                            </fieldset>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;