import React from 'react'

const About = () => {
  return (
    <section className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-[url('/img/about.jpg')] bg-cover min-h-screen md:w-full md:max-w-4xl  xl:w-full xl:max-w-full" >

      <h2 className="font-semibold text-4xl text-[#D84315]" >Sobre la web</h2>

      <p className="font-medium text-justify text-xl text-mauve-900 md:text-2xl" >
        El proyecto consiste en el diseño y desarrollo de una plataforma web interactiva especializada en recetas de postres. El objetivo principal es ofrecer una experiencia de usuario intuitiva y visualmente atractiva, facilitando la búsqueda, organización y ejecución de recetas dulces.
      </p>

    </section>
  )
}

export default About
