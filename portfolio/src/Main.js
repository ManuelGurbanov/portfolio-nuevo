import React from "react";

export default function Main() {
  return (
    <section className="min-h-screen bg-green-1 flex items-start justify-center">
        <div className="grid max-w-custom mt-7 grid-cols-1 md:grid-cols-2 gap-7 items-start justify-center">

            <section className="flex-col rounded-xl">

                <div className="w-full mx-auto p-4 shadow-md bg-green-2 flex flex-col lg:flex-row gap-4 lg:gap-24 justify-start items-center">
                    <div className="flex flex-col gap-2 text-center lg:text-left">
                        <h2 className="text-slate-400 text-3xl">
                        Portfolio de
                        </h2>
                        <h1 className="text-slate-50 text-4xl font-bold">
                        Manuel Gurbanov
                        </h1>
                    </div>

                    <div className="flex items-center">
                        <img
                        src="https://avatars.githubusercontent.com/u/70826979?v=4"
                        alt="Manuel Gurbanov"
                        className="w-24 h-24 rounded-full object-cover"
                        />
                    </div>
                </div>



                <div className="w-full mx-auto p-4 rounded shadow-md bg-green-2 flex-column gap-5 mt-8">
                    <h1 className="text-slate-200 text-2xl mt-2 font-semibold">
                            Mis Redes:
                    </h1>
                    <div className="flex gap-4 w-full mt-4">

                        <a href="https://github.com/ManuelGurbanov">
                            <img
                                src="https://simpleicons.org/icons/github.svg"
                                alt="Github"
                                className="w-10 h-10 text-white hover:scale-105 transition duration-75">
                            </img>
                        </a>

                        <a href="https://www.linkedin.com/in/manuel-gurbanov-5b6307242/">
                            <img
                                src="https://simpleicons.org/icons/linkedin.svg"
                                alt="Linkedin"
                                className="w-10 h-10 text-white hover:scale-105 transition duration-75">
                            </img>
                        </a>
                    </div>
                </div>

            </section>

            <div className="max-w-custom w-full mx-auto p-4 rounded shadow-md bg-green-2 flex-column gap-5">
                <ul className="text-slate-200 text-xl">
                    <li>
                        <h3
                            className="text-slate-200 text-2xl mt-2 font-bold">
                                Estudios
                        </h3> 
                    </li>
                    <li>
                        <h3
                            className="text-slate-200 text-2xl mt-2">
                                Licenciatura en Ciencias de la Computación (en curso)
                        </h3> 
                    </li>
                    <li> 
                        <h3
                            className="text-slate-200 text-2xl mt-2">
                                Licenciatura en Ciencias de la Computación (en curso)
                        </h3> 
                    </li>
                </ul>
            </div>

        </div>
    </section>
  );
}