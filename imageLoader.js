// Para cargar imagenes externas en la etiqueta de next Image
const myLoader = ({ src, width, quality}) => { 
  return `https://www.themealdb.com/images/media/meals/${src}?s=${width}`;
}

export default myLoader
