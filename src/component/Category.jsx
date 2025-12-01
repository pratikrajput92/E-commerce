import React from 'react'
import { Link } from 'react-router-dom'

function Category() {

  const category = [
   
    {
      name: "men's clothing",
      img: "https://s3-us-west-2.amazonaws.com/hippoprod/blog/indianwear/fashionable_nehru_jacket.jpg"
    },
    {
      name: "women's clothing",
      img: "https://static.vecteezy.com/system/resources/thumbnails/028/690/495/small_2x/fashionable-women-clothing-collection-in-an-elegant-boutique-store-generated-by-ai-photo.jpg"
    },
     {
      name: "jewelery",
      img: "https://img.freepik.com/premium-vector/unique-diamond-jewelry-shop-jewelry-lover_1317534-10968.jpg"
    },
    {
      name: "eletronics",
      img: "https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-682.jpg"
    },
  ]
  return (
    <div className='max-w-6xl mx-auto py-10 px-4 ' >
      <h2 className='text-3xl font-semibold text-center mb-8'>Shop by Category</h2>
      <div className=' grid grid-cols-2 sm:grid-cols-4 gap-6'>
        {category.map((category, index) => (
          <Link to={category.name === "jewelery" ? "/accessories" :
            category.name === "men's clothing" ? "/men" :
            category.name === "women's clothing" ? "/women" :
            category.name === "eletronics" ? "/electronics" : "/"
           } className='rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition duration-300 '>
            <img src={category.img} alt={category.name} className='w-full h-56 object-cover' />
            <h3 className='text-center py-2 font-medium'>{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Category