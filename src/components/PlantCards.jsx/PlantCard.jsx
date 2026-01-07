import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
  const { plantName, plantId, price, rating, image, description } = plant;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className='h-[350px] bg-cover'
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {plantName}
          <div className="badge badge-secondary">Top</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Price: {price}$</div>
          <div className="badge badge-outline">Rating: {rating}</div>
        </div>
        <Link to={`/details/${plantId}`} className='btn btn-primary mt-4'>View Details</Link>
      </div>
    </div>
  );
};

export default PlantCard;