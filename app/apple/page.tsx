import { fetchDesserts} from "@/services/recipeService"
import Image from 'next/image'

const AppleCake = async () => {

    const apple = await fetchDesserts(53380);

  return (
  
    <>
    
        {apple?.meals?.map((ele) => ( // listamos las recetas
         
            <main className='flex flex-col flex-1 justify-center py-15 bg-[#FEE7C8]' key={ele.idMeal} >
                
                <Image 
                  
                  src= 'c0gmo31766594751.jpg' 
                  alt={ele.strMeal} 
                  width={0}
                  height={0}
                  className="w-full h-100 object-cover md:h-150" /> 
    
                <div className="flex flex-col gap-2 bg-gradient-to-tr from-[#FEE7C8] to-[#FAEEE2] px-6 py-5">
                    <h2 className='text-5xl text-[#D84315]' >  Pastel de manzana  </h2>
                    
                    <p className="text-justify text-[#45423D]" > Precalienta el horno a 180 °C (350 °F). Engrasa un molde para pasteles y fórralo con papel de hornear.
                                                                En un bol grande, bate los cuatro huevos con el azúcar hasta que tripliquen su volumen y adquieran una textura esponjosa.
                                                                Tamiza la harina leudante (o harina con levadura incorporada) e incorpórala a la mezcla de huevos. Mezcla con movimientos envolventes para conservar la mayor cantidad de aire posible. Añade la mantequilla derretida (y ligeramente enfriada) y mezcla hasta integrar.
                                                                Agrega la canela, una pizca de sal y el extracto de vainilla.
                                                                Incorpora la manzana troceada a la masa y mézclala suavemente para que los trozos queden bien distribuidos. Opcionalmente, puedes rebozar los trozos de manzana en un poco más de canela antes de añadirlos.
                                                                Vierte la masa en el molde preparado y alisa la superficie con una espátula.
                                                                Coloca las láminas de manzana sobre la masa y presiónalas ligeramente. Si lo deseas, espolvorea con unas láminas de almendra.
                                                                Hornea el pastel de manzana en el horno precalentado durante unos 45-50 minutos, o hasta que al insertar un palillo de madera en el centro, este salga limpio.
                                                                Retira el pastel del horno y déjalo enfriar en el molde durante unos minutos. Luego, desmóldalo con cuidado y déjalo enfriar completamente sobre una rejilla.
                                                                Espolvorea el pastel de manzana ya frío con azúcar glas. </p>
                </div>
    
                {/* Agregamos los ingredientes */}
                <section className="flex flex-col gap-3 px-6 py-5 bg-[#FAEEE2] rounded-4xl mt-5">
    
                    <h3>Ingredientes</h3>
    
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-9 ">
    
                        {/* harina */} 
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/self-raising_flour.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Harina Leudante</h5>
                            <p className="text-[#45423D]" > {ele.strMeasure3} </p>
                        </div>
    
                        {/* Huevo */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/egg.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"> Huevos </h5>
                            <p  className="text-[#45423D]" > 4 Huevos </p>
                        </div>
    
                        {/* Mantequilla */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/Melted_Butter.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-center text-[#45423D]" > Mantequilla derretida </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure4} </p>
                        </div>
    
                        {/* azucar */}
                        <div  className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/sugar.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Azucar </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure2} </p>
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
    
                        {/* Vainilla */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/vanilla_extract.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Vainilla </h5>
                            <p className="text-[#45423D]"  > {ele.strMeasure5}(1 cucharilla) </p>
                        </div>
    
                        {/* Canela molida */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/Ground_Cinnamon.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"  > Canela molida </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure6}(1 cucharilla) </p>
    
                        </div>

                        {/* Manzanas */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/apples.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"  > Manzanas </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure7} </p>
    
                        </div>

                        {/* Azúcar molida */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/Ground_Sugar.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"  > Azúcar molida </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure9} </p>
    
                        </div>
    
    
                    </div>
                </section>
    
                
    
              </main>
    
            ))}
    
            
         
        </>

  )
}

export default AppleCake
