import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { fetchDesserts } from '@/services/recipeService';

const Recipes = async () => {

    // guardamos las funciones para las APIS en variables
    const waffles = await fetchDesserts(53578);
    const pudding = await fetchDesserts(52988);
    const apple = await fetchDesserts(53380);
    const drunken = await fetchDesserts(53193);
    const pizza = await fetchDesserts(53140);

  return (
    <section className="flex bg-[#FEE7C8] w-full flex-col items-center justify-center gap-8 py-22 px-8 min-h-screen" >
      
      
      <ul className='flex flex-col gap-7 justify-center items-center list-none md:grid md:grid-cols-2 md:grid-rows-2 md:gap-7' >
        {waffles?.meals?.map((ele) => ( // listamos las recetas
          <li className='flex items-center justify-center gap-5 w-full' key={ele.idMeal} >
            <Image 
              
              src= '0wmns51784837949.jpg'
              alt={ele.strMeal} 
              width={0}
              height={0}
              className="rounded-full w-40 object-cover md:rounded-2xl md:w-50" /> 

              <div className='flex-1'>
                <Link href="/waffles" > <h5 className='hover:scale-105 text-[#D84315] md:text-lg' > Waffles de pan de jengibre </h5> </Link>
              </div>

          </li>
        ))}

        {pudding?.meals?.map((ele) => ( // listamos las recetas
          <li className='flex items-center  gap-5 w-full' key={ele.idMeal} >
            <Image 
              src= '1d85821576790598.jpg' 
              alt={ele.strMeal} 
              width={0}
              height={0}
              className="rounded-full w-40 object-cover md:rounded-2xl md:w-50" />

              <div className='flex-1'>
                <Link href= "/pudding" > <h5 className='hover:scale-105 text-[#D84315] md:text-lg' > Pudin navideño </h5> </Link>
              </div>

          </li>
        ))}

        {apple?.meals?.map((ele) => ( // listamos las recetas
          <li className='flex items-center gap-5 w-full' key={ele.idMeal} >
            <Image 
              
              src='c0gmo31766594751.jpg'
              alt={ele.strMeal} 
              width={0}
              height={0}
              className="rounded-full w-40 object-cover md:rounded-2xl md:w-50" />

              <div className='flex-1'>
                <Link href="/apple" > <h5 className='hover:scale-105 text-[#D84315] md:text-lg' > Pastel de manzana </h5> </Link>
              </div>

          </li>
        ))}

        {drunken?.meals?.map((ele) => ( // listamos las recetas
          <li className='flex items-center gap-5 w-full' key={ele.idMeal} >
            <Image 
              
              src='2wx8cm1763373419.jpg'
              alt={ele.strMeal}
              width={0}
              height={0}
              className="rounded-full w-40 object-cover md:rounded-2xl md:w-50" /> 

              <div className='flex-1'>
                <Link href="/drunken" > <h5 className='hover:scale-105 text-[#D84315] text-lg' > Fideos borrachos (pad kee mao) </h5> </Link>
              </div>

          </li>
        ))}

        {pizza?.meals?.map((ele) => ( // listamos las recetas  
          <li className='flex items-center gap-5 w-full' key={ele.idMeal} >
            <Image 
              
              src='wf49qs1763075222.jpg'
              alt={ele.strMeal} 
              width={0}
              height={0}
              className="rounded-full w-40 object-cover md:rounded-2xl md:w-50" />

              <div className='flex-1'>
                <Link href="/pizza" > <h5 className='hover:scale-105 text-[#D84315] md:text-lg' > {ele.strMeal} </h5> </Link>
              </div>

          </li>
        ))}

    
      </ul>

    </section>
  )
}

export default Recipes
