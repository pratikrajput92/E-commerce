import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {

  const image = [
    "https://static.vecteezy.com/system/resources/previews/034/043/724/original/diwali-dhanteras-festival-sale-banner-design-template-indian-festival-sale-and-promotion-advertising-concept-vector.jpg",
    
    "https://img.freepik.com/premium-vector/vector-illustration-happy-diwali-sale-banner-template_181203-10754.jpg",
    
    "https://img.freepik.com/premium-vector/abstract-sales-landing-page-with-photo_23-2148346312.jpg?w=2000",
    
    "https://marketplace.canva.com/EAFEH3mIUaM/1/0/1600w/canva-dark-grey-and-white-minimalist-new-fashion-collection-banner-nvaqxg-8iXI.jpg",
    
    // "https://www.brandsline.co.il/wp-content/uploads/2023/06/bl_banner-1.png"
 
  ]


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: false,

  }
  

return(

    <div className='w-full h-auto sm:h-[600px] overflow-hidden  '>
      <Slider {...settings}>
        {image.map((img, index) =>(
          <div className='relative p-2' key={index}>
            <img src={img} alt={`Slide${index+1}` } className='w-full h-[500px] sm:h-[600px] object-cover rounded-xl' />
          </div>
        ))}
      </Slider>
    </div>

  )
}

export default Home



// useEffect(() => {
//     const fetch = async () => {
//       try {
//         const response =await axios.get("https://fakestoreapi.com/products")
//         console.log(response.data);
//         setProduct(response.data)
        
//       } catch (error) {
//         console.error();
        
//       }
//     }
//     fetch();
//   },[])
  

//   return (
//     <div className="min-h-screen bg-gray-100">
     
//       <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 text-center">
//         <h1 className="text-4xl font-bold mb-3">Welcome to E-Shop</h1>
//         <p className="text-lg">Your one-stop shop for everything trendy!</p>
//         <button className="mt-5 bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
//           Shop Now
//         </button>
//       </section>

      
//       <section className="p-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {products.map((p) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </section>
//     </div>
//   )