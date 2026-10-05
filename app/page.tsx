
export default function Home() {

  return (
    <div className="mt-8 flex flex-col flex-1 items-center justify-center font-sans min-h-screen">
      <main className="flex flex-1 justify-center items-center w-full max-w-3xl flex-col gap-8 py-32 px-16 bg-[url('/img/postres.jpg')] bg-cover bg-center md:w-full md:max-w-4xl  xl:w-full xl:max-w-full">

        <h1 className="font-semibold text-4xl text-[#D84315] md:text-5xl " >Sabor en Casa</h1>
        <p className="font-medium text-base text-mauve-900 md:text-center md:text-2xl " > Tu dosis diaria de inspiración culinaria: recetas fáciles, ingredientes
          sencillos y momentos deliciosos para compartir. </p>    

      </main>
    </div>
  );
}
