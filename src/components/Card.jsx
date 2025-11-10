import React from 'react'

const Card = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="h-[260px] w-[200px] bg-zinc-200 rounded-lg flex flex-col items-center justify-between shadow-md p-3">
      <img
        src={image}
        alt={name}
        className="h-[120px] w-[120px] object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold text-gray-800 text-center">{name}</h2>
      <p className="text-green-600 font-bold">${price}</p>
      <button
        onClick={() => onAddToCart({ name, price, image })}
        className="h-8 w-20 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-200"
      >
        Add +
      </button>
    </div>
  )
}

export default Card
