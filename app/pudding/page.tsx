import { fetchDesserts} from "@/services/recipeService"
import Image from 'next/image'

const Pudding = async () => {

    const pudding = await fetchDesserts(52988);

  return (
    
        <>
    
         {pudding?.meals?.map((ele) => ( // listamos las recetas
         
              <main className='flex flex-col flex-1 justify-center py-15 bg-[#FEE7C8]' key={ele.idMeal} >
                
                <Image 
                  
                  src= '1d85821576790598.jpg' 
                  alt={ele.strMeal} 
                  width={0}
                  height={0}
                  className="w-full h-100 object-cover md:h-200" /> 
    
                <div className="flex flex-col gap-2 bg-gradient-to-tr from-[#FEE7C8] to-[#FAEEE2] px-6 py-5">
                    <h2 className='text-5xl text-[#D84315]' >  Pudin navideño  </h2>
                    <p className="text-justify text-[#45423D]" > Prepara todos los ingredientes para el pudin. Pica las almendras en trozos grandes. Pela, descorazona y pica las manzanas para cocinar. Afila el cuchillo y pica la cáscara confitada. (Puedes picar las almendras y las manzanas en un procesador de alimentos, pero la cáscara debe picarse a mano). Ralla tres cuartas partes de la nuez moscada (parece mucha cantidad, pero es la medida correcta).

                                                                En un bol grande, mezcla las almendras, las manzanas, la cáscara confitada, la nuez moscada, las pasas, la harina, el pan rallado, el azúcar muscovado claro, los huevos y 2 cucharadas de brandy o coñac.

                                                                Sujetando la mantequilla por su envoltorio, ralla una cuarta parte directamente en el bol y remueve todo. Repite el proceso hasta haber rallado toda la mantequilla y luego remueve durante 3 o 4 minutos; la mezcla estará lista cuando baje ligeramente de volumen tras cada vuelta. Pide a la familia que también remueva y que todos pidan un deseo.

                                                                Unta generosamente con mantequilla dos cuencos de 1,2 litros y coloca un círculo de papel de horno en el fondo de cada uno. Introduce la mezcla del pudin presionando bien. Cubre con una doble capa de papel de horno, haciendo pliegues para permitir que la mezcla se expanda, y ata con cuerda (puedes sujetar el papel con una goma elástica mientras lo atas). Recorta el exceso de papel.

                                                                Ahora coloca cada cuenco sobre una hoja grande de papel de aluminio y lleva los bordes hacia arriba cubriendo la parte superior; luego, coloca otra hoja de aluminio por encima y llévala hacia abajo por debajo del cuenco para crear un envoltorio doble (esto hace que los pudines queden herméticos). Ata con más cuerda y crea un asa para poder meterlos y sacarlos fácilmente de la olla. Mira nuestro vídeo para ver cómo atar correctamente un pudin.

                                                                Cocina los pudines al baño maría o al vapor en el horno durante 8 horas, añadiendo agua según sea necesario. Retíralos de los recipientes y déjalos enfriar durante toda la noche. Una vez fríos, desecha los envoltorios usados ​​y envuélvelos de nuevo con papel de horno limpio, papel de aluminio y cuerda. Consérvelo en un lugar fresco y seco hasta Navidad.

                                                                Para preparar la mantequilla al brandy, bata la mantequilla con la ralladura de naranja y el azúcar glas hasta obtener una mezcla cremosa. Incorpore gradualmente el brandy (o coñac) y el jengibre en almíbar picado. Coloque la mezcla en un recipiente pequeño, marque la superficie con un tenedor para darle un aspecto atractivo y guárdela en el frigorífico para que cuaje. La mantequilla se conserva hasta una semana en el frigorífico o puede congelarse por un periodo de hasta seis semanas.

                                                                El día de Navidad, cuézalo al baño maría o al vapor (en el horno) durante una hora. Desenvuélvalo y desmóldelo. Para flambearlo, caliente de 3 a 4 cucharadas de brandy en un cazo pequeño, viértalo sobre el pudin y préndale fuego. </p>
                </div>
    
                {/* Agregamos los ingredientes */}
                <section className="flex flex-col gap-3 px-6 py-5 bg-[#FAEEE2] rounded-4xl mt-5">
    
                    <h3>Ingredientes</h3>
    
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-9 ">
    
                        {/* Almendras */} 
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/almonds.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > {ele.strIngredient1} </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure1} </p>
                        </div>
    
                        {/* Manzanas */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/bramley_apples.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-center text-[#45423D]"> {ele.strIngredient2} (Manzanas) </h5>
                            <p  className="text-[#45423D]" > 2 Manzanas </p>
                        </div>
    
                        {/* Candied peel */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/candied_peel.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > {ele.strIngredient3} </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure3} </p>
                        </div>
    
                        {/* Nuez moscada */}
                        <div  className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/nutmeg.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Nuez moscada </h5>
                            <p className="text-[#45423D]" > 1 Entera </p>
                        </div>
    
                        {/* pasas  */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/raisins.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Pasas </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure5} </p>
                        </div>
    
                        {/* Harina */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible flex flex-col items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/flour.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]" > Harina </h5>
                            <p className="text-[#45423D]"  > {ele.strMeasure6} </p>
                        </div>
    
                        {/* Pan molido */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/breadcrumbs.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"  > Pan molido </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure7} </p>
    
                        </div>

                        {/* Azucar moscabado */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/muscovado_sugar.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"  > Azúcar moscabado </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure8} </p>
    
                        </div>

                        {/* huevos */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/egg.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"  > Huevos </h5>
                            <p className="text-[#45423D]" > 3 Piezas </p>
    
                        </div>

                        {/* Brandy */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/brandy.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"  > {ele.strIngredient10} </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure10} (cucharadas) </p>
    
                        </div>

                        {/* Mantequilla */}
                        <div className="w-45 h-auto flex flex-col wrap-break-word overflow-visible items-center rounded-2xl bg-[#FEE7C8] px-2 py-2" >
                            <img 
                                src= "https://www.themealdb.com/images/ingredients/butter.png"
                                alt= "ingrediente" 
                                className="w-30 object-cover "
                            />
    
                            <h5 className="text-[#45423D]"  > Mantequilla </h5>
                            <p className="text-[#45423D]" > {ele.strMeasure11} </p>
    
                        </div>
    
                    </div>

                </section>
                
    
              </main>
    
            ))}
    
            
         
        </>
    
  )
}

export default Pudding
