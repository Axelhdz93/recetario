import { fetchDesserts} from "@/services/recipeService"
import Image from 'next/image'

const Drunken = async () => {

    const drunken = await fetchDesserts(53193);

  return (

    <>
        
        {drunken?.meals?.map((ele) => ( // listamos las recetas
             
            <main className='flex flex-col flex-1 justify-center py-15 bg-[#FEE7C8]' key={ele.idMeal} >
                    
                <Image 
                      
                    src= '2wx8cm1763373419.jpg' 
                    alt={ele.strMeal} 
                    width={0}
                    height={0}
                    className="w-full h-100 object-cover md:h-150" /> 
        
                <div className="flex flex-col gap-2 bg-gradient-to-tr from-[#FEE7C8] to-[#FAEEE2] px-6 py-5">
                    <h2 className='text-5xl text-[#D84315]' >  Fideos borrachos (pad kee mao)  </h2>
                    
                    <p className="text-justify text-[#45423D]" > Paso 1
                                                                Prepara los fideos siguiendo las instrucciones del paquete; luego, escúrrelos y resérvalos. Mezcla todos los ingredientes de la salsa en un bol pequeño o una jarra y resérvalos.

                                                                Paso 2
                                                                Calienta el aceite en un wok grande o una sartén a fuego fuerte y sofríe el ajo y el chile durante 20 segundos, hasta que empiecen a dorarse ligeramente. Añade la carne y saltéala durante 1 minuto hasta que esté sellada y empiece a tomar color. Incorpora el brócoli y saltéalo un minuto más; después, añade los fideos y la salsa. Saltea todo durante 1 o 2 minutos más hasta que los ingredientes estén bien integrados y muy calientes.

                                                                Paso 3
                                                                Incorpora la albahaca y apaga el fuego. Sirve inmediatamente para evitar que se cocinen en exceso. </p>
    
                </div>
        
                {/* Agregamos los ingredientes */}
                <section className="flex flex-col gap-3 px-6 py-5 bg-[#FAEEE2] rounded-4xl mt-5">
        
                    <h3>Ingredientes</h3>
        
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-9 ">
        
                        {/* Fideos de arroz planos */} 
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/Flat_Rice_Noodles.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
        
                            <h5 className="text-[#45423D]" > Fideos de arroz planos </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure1} </p>
                        </div>
        
                        {/* Aceite vegetal */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/vegetable_oil.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
        
                            <h5 className="text-[#45423D]"> Aceite vegetal </h5>
                            <p  className="text-[#45423D]" > {ele.strMeasure2} (2 cucharada) </p>
                        </div>
        
                        {/* Ajo */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/garlic.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
        
                            <h5 className="text-[#45423D]" > Ajos </h5>
                            <p className="text-[#45423D]" > 3 dientes de ajo </p>
                        </div>
        
                            {/* Chiles ojo de pájaro */}
                            <div  className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                                <img 
                                    src= "https://www.themealdb.com/images/ingredients/Birds-eye_Chillies.png"
                                    alt= "ingrediente" 
                                    className="w-30 object-cover "
                                />
        
                                <h5 className="text-[#45423D]" > Chiles ojo de pájaro </h5>
                                <p className="text-[#45423D]" > 3 picados </p>
                            </div>
        
                            {/* carne sirloin  */}
                            <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                                <img 
                                    src= "https://www.themealdb.com/images/ingredients/Sirloin_steak.png"
                                    alt= "ingrediente" 
                                    className="w-30 object-cover "
                                />
        
                                <h5 className="text-[#45423D]" > {ele.strIngredient5} </h5>
                                <p className="text-[#45423D]" > {ele.strMeasure5} </p>
                            </div>
        
                            {/* broccoli */}
                            <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                                <img 
                                    src= "https://www.themealdb.com/images/ingredients/broccoli.png"
                                    alt= "ingrediente" 
                                    className="w-30 object-cover "
                                />
        
                                <h5 className="text-[#45423D]" > {ele.strIngredient6} </h5>
                                <p className="text-[#45423D]"  > {ele.strMeasure6} </p>
                            </div>
        
                            {/* Hojas de albahaca */}
                            <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                                <img 
                                    src= "https://www.themealdb.com/images/ingredients/basil_leaves.png"
                                    alt= "ingrediente" 
                                    className="w-30 object-cover "
                                />
        
                                <h5 className="text-[#45423D]"  > Hojas de albahaca </h5>
                                <p className="text-[#45423D]" > Puñado </p>
        
                            </div>
    
                            {/* Salsa de soja */}
                            <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                                <img 
                                    src= "https://www.themealdb.com/images/ingredients/soy_sauce.png"
                                    alt= "ingrediente" 
                                    className="w-30 object-cover "
                                />
        
                                <h5 className="text-[#45423D]"  > Salsa de soja </h5>
                                <p className="text-[#45423D]" > {ele.strMeasure8} (cucharadas) </p>
        
                            </div>
    
                            {/* Salsa de ostras */}
                            <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                                <img 
                                    src= "https://www.themealdb.com/images/ingredients/oyster_sauce.png"
                                    alt= "ingrediente" 
                                    className="w-30 object-cover "
                                />
        
                                <h5 className="text-[#45423D]"  > Salsa de ostras </h5>
                                <p className="text-[#45423D]" > {ele.strMeasure9} (cucharadas) </p>
        
                            </div>
    
                            {/* Salsa de pescado */}
                            <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                                <img 
                                    src= "https://www.themealdb.com/images/ingredients//fish_sauce.png"
                                    alt= "ingrediente" 
                                    className="w-30 object-cover "
                                />
        
                                <h5 className="text-[#45423D]"  > {ele.strIngredient10} </h5>
                                <p className="text-[#45423D]" > {ele.strMeasure10} (cucharadas) </p>
        
                            </div>
    
                            {/* Mantequilla */}
                            <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                                <img 
                                    src= "https://www.themealdb.com/images/ingredients/sugar.png"
                                    alt= "ingrediente" 
                                    className="w-30 object-cover "
                                />
        
                                <h5 className="text-[#45423D]"  > Azúcar </h5>
                                <p className="text-[#45423D]" > {ele.strMeasure11} </p>
        
                            </div>
        
                        </div>
    
                    </section>
                    
        
                  </main>
        
                ))}
        
                
             
            </>

  )
}

export default Drunken
