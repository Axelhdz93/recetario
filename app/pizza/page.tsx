import { fetchDesserts} from "@/services/recipeService"
import Image from 'next/image'


const Pizza = async () => {

    const pizza = await fetchDesserts(53140);

  return (

     <>
    
         {pizza?.meals?.map((ele) => ( // listamos las recetas
         
              <main className='flex flex-col flex-1 justify-center py-6 bg-[#FEE7C8]' key={ele.idMeal} >
                
                <Image 
                  
                  src= 'wf49qs1763075222.jpg' 
                  alt={ele.strMeal} 
                  width={0}
                  height={0}
                  className="w-full h-100 object-cover md:h-150" /> 
    
                <div className="flex flex-col gap-2 bg-gradient-to-tr from-[#FEE7C8] to-[#FAEEE2] px-6 py-5">
                    <h2 className='text-5xl text-[#D84315]' >{ele.strMeal}</h2>
                    <p className="text-justify text-[#45423D]" > Prepara el bistec: Sazona el bistec con sal y pimienta. Ásalo a la parrilla por un lado hasta que esté a medio cocinar. Añade los ingredientes: Extiende salsa de tomate sobre el lado cocido y luego agrega queso, orégano y aceitunas. Termina de asar: Cocina a la parrilla hasta que el queso se derrita y burbujee. Sirve: Corta en porciones y sirve caliente. Consejos de experto: Ablanda el matambre haciéndole cortes superficiales por ambos lados. Esto ayuda a que se cocine de manera más uniforme y absorba mejor los sabores. Precocina el matambre a la parrilla antes de añadir los ingredientes para asegurar que esté bien cocido sin quemar el queso. </p>
                </div>
    
                {/* Agregamos los ingredientes */}
                <section className="flex flex-col gap-3 px-6 py-5 bg-[#FAEEE2] rounded-4xl mt-5">
    
                    <h3>Ingredientes</h3>
    
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-9 ">
    
                        {/* Filete de falda de res */} 
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/Beef_Flank_Steak.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Filete de falda de res </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure1} </p>
                        </div>
    
                        {/* Salsa de tomate */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/tomato_sauce.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"> Salsa de tomate </h5>
                            <p  className="text-[#45423D]" > {ele.strMeasure2} </p>
                        </div>
    
                        {/* Mozzarella */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/mozzarella.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Queso {ele.strIngredient3} </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure3} </p>
                        </div>
    
                        {/* Oregano */}
                        <div  className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/oregano.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > {ele.strIngredient4} </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure4} (cucharadas) </p>
                        </div>
    
                        {/* sal */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/salt.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Sal </h5>
                            <p className="text-[#45423D]" > Una pizca </p>
                        </div>
    
                        {/* Aceitunas verdes */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/green_olives.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Aceitunas verde </h5>
                            <p className="text-[#45423D]"  > {ele.strMeasure5} </p>
                        </div>
    
                        {/* Pimienta */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/pepper.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"  > Pimienta </h5>
                            <p className="text-[#45423D]" > Al gusto </p>
    
                        </div>
    
                    </div>
                </section>
    
                
    
              </main>
    
            ))}
    
            
         
        </>

  )
}

export default Pizza
