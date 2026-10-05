import { fetchDesserts} from "@/services/recipeService"
import Image from 'next/image'



const pageWaffles = async () => {

    const waffles = await fetchDesserts(53578);

  return (
    
    <>

     {waffles?.meals?.map((ele) => ( // listamos las recetas
     
          <main className='flex flex-col flex-1 justify-center py-15 bg-[#FEE7C8]' key={ele.idMeal} >
            
            <Image 
              
              src= '0wmns51784837949.jpg' 
              alt={ele.strMeal} 
              width={0}
              height={0}
              className="w-full h-100 object-cover" /> 

            <div className="flex flex-col gap-2 bg-gradient-to-tr from-[#FEE7C8] to-[#FAEEE2] px-6 py-5">
                <h2 className='text-5xl text-[#D84315]' > Waffles de pan de jengibre </h2>
                <p className="text-justify text-[#45423D]" > Batir el huevo y el azúcar hasta obtener una espuma ligera. Tamizar juntos la harina, la sal y la mezcla de especias para pan de jengibre. Añadir gradualmente los ingredientes secos a la mezcla húmeda sin dejar de remover. Añadir la leche y la cerveza sin dejar de remover. Añadir la mantequilla derretida. Dejar reposar y hornear los Waffles. </p>
            </div>

            {/* Agregamos los ingredientes */}
            <section className="flex flex-col gap-3 px-6 py-5 bg-[#FAEEE2] rounded-4xl mt-5">

                <h3>Ingredientes</h3>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-9  w-full">

                    {/* harina */} 
                    <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                        <img 
                            src= "https://www.themealdb.com/images/ingredients/flour.png"
                            alt= "ingrediente" 
                            className="w-30 object-cover "
                        />

                        <h5 className="text-[#45423D]" > Harina </h5>
                        <p className="text-[#45423D]" > {ele.strMeasure1} </p>
                    </div>

                    {/* cerveza oscura */}
                    <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                        <img 
                            src= "https://www.themealdb.com/images/ingredients/Dark_Beer.png"
                            alt= "ingrediente" 
                            className="w-30 object-cover "
                        />

                        <h5 className="text-[#45423D]"> Cerveza oscura </h5>
                        <p  className="text-[#45423D]" > {ele.strMeasure2} </p>
                    </div>

                    {/* leche */}
                    <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                        <img 
                            src= "https://www.themealdb.com/images/ingredients/milk.png"
                            alt= "ingrediente" 
                            className="w-30 object-cover "
                        />

                        <h5 className="text-[#45423D]" > Leche </h5>
                        <p className="text-[#45423D]" > {ele.strMeasure3} </p>
                    </div>

                    {/* azucar */}
                    <div  className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                        <img 
                            src= "https://www.themealdb.com/images/ingredients/sugar.png"
                            alt= "ingrediente" 
                            className="w-30 object-cover "
                        />

                        <h5 className="text-[#45423D]" > Azucar </h5>
                        <p className="text-[#45423D]" > 3 cucharadas </p>
                    </div>

                    {/* sal */}
                    <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                        <img 
                            src= "https://www.themealdb.com/images/ingredients/salt.png"
                            alt= "ingrediente" 
                            className="w-40 object-cover "
                        />

                        <h5 className="text-[#45423D]" > Sal </h5>
                        <p className="text-[#45423D]" > Una pizca </p>
                    </div>

                    {/* especias para pan de jengibre */}
                    <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                        <img 
                            src= "https://www.themealdb.com/images/ingredients/Gingerbread_Spice.png"
                            alt= "ingrediente" 
                            className="w-30 object-cover "
                        />

                        <h5 className="text-[#45423D]" > Especias para pan de jengibre </h5>
                        <p className="text-[#45423D]"  > 1 cucharilla </p>
                    </div>

                    {/* mantequilla */}
                    <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                        <img 
                            src= "https://www.themealdb.com/images/ingredients/butter.png"
                            alt= "ingrediente" 
                            className="w-30 object-cover "
                        />

                        <h5 className="text-[#45423D]"  > Mantequilla </h5>
                        <p className="text-[#45423D]" > 1 cucharilla </p>

                    </div>

                </div>
            </section>

            

          </main>

        ))}

        
     
    </>

  )
}

export default pageWaffles
