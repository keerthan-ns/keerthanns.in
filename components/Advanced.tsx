

export default function Advanced() {
    return (
        <main className="flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* <section> */}
          <div
            className="select-none grid gap-4 md:grid-cols-2 xl:grid-cols-7 xl:grid-rows-6 xl:gap-4 text-dark-text text-center">
            <div className="xl:col-span-3 xl:row-span-4 xl:col-start-3 xl:row-start-3 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="p-4 h-full flex flex-col gap-2 justify-between bg-card rounded-lg shadow-md">
                <div className="flex justify-between">
                  <div className="flex items-center"> <img className="object-cover size-24 rounded-lg" src="/me.webp" alt="" />
                    <div className="flex items-start justify-between h-full flex-col ml-2 md:ml-4">
                      <article
                        className="undefined  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                        <span className="flex justify-evenly items-center gap-[2px]">
                          <div className="flex items-center justify-center rounded-full bg-dark-text/10 w-4 h-4"> <span
                            className="block w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: "#6DD33D" }}
                          ></span> </div> <span
                            className="font-medium text-xs">Available</span>
                        </span> </article>
                      <h3 className="font-semibold text-xl text-dark-text">Luis Loayza</h3>
                      <p className="font-semibold text-sm text-theme-primary"> <span className="text-light-text">I'm a</span>
                        PhpDeveloper </p>
                    </div>
                  </div>
                  <div className="font-medium text-sm text-testimonial-title">
                    <div className="flex items-center gap-2"> <span className="hidden xl:block">Resume</span> <a href="/resume.pdf"
                      target="_blank">
                      <article
                        className="hover:bg-icon-background/50 transition-all duration-300 cursor-pointer bg-icon-background rounded-lg p-2 shadow-md">
                        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg> </article> <span className="sr-only">Descargar CV en PDF</span>
                    </a> </div>
                  </div>
                </div>
                <article className="flex flex-wrap gap-2 bg-[#141414] border-1 border-light-text/10 py-4 px-2 rounded-lg shadow-md
     h-[6rem] overflow-y-auto scrollbar-hide">
                  <article
                    className="border-[0.5px] border-light-text/10 text-white/70  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                    <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                      width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.852621 0C1.1222 0 1.34098 0.218787 1.34098 0.488363V1.69325L2.46148 1.469C3.53635 1.254 4.65056 1.35635 5.66827 1.76358L5.80111 1.81671C6.81741 2.22297 7.93581 2.29897 8.99773 2.03393C9.11295 2.00507 9.23323 2.00286 9.34943 2.02745C9.46563 2.05205 9.57469 2.10281 9.66833 2.17588C9.76196 2.24896 9.83771 2.34241 9.88981 2.44915C9.94191 2.55589 9.96899 2.6731 9.96899 2.79187V7.58877C9.96895 7.79273 9.9007 7.99081 9.77511 8.15151C9.64952 8.31221 9.4738 8.4263 9.27591 8.47564L9.13682 8.5108C7.98432 8.79881 6.77037 8.71624 5.66749 8.27482C4.65001 7.86775 3.5361 7.7654 2.46148 7.98024L1.34098 8.2045V13.5116C1.34098 13.6412 1.28953 13.7654 1.19795 13.857C1.10636 13.9485 0.982143 14 0.852621 14C0.723099 14 0.598882 13.9485 0.507296 13.857C0.41571 13.7654 0.364258 13.6412 0.364258 13.5116V0.488363C0.364258 0.218787 0.583044 0 0.852621 0Z"
                        fill="#916CE7"></path>
                    </svg> <span className="font-medium text-xs">Ecuador</span> </span> </article>
                  <article
                    className="border-[0.5px] border-light-text/10 text-white/70  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                    <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                      width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.852621 0C1.1222 0 1.34098 0.218787 1.34098 0.488363V1.69325L2.46148 1.469C3.53635 1.254 4.65056 1.35635 5.66827 1.76358L5.80111 1.81671C6.81741 2.22297 7.93581 2.29897 8.99773 2.03393C9.11295 2.00507 9.23323 2.00286 9.34943 2.02745C9.46563 2.05205 9.57469 2.10281 9.66833 2.17588C9.76196 2.24896 9.83771 2.34241 9.88981 2.44915C9.94191 2.55589 9.96899 2.6731 9.96899 2.79187V7.58877C9.96895 7.79273 9.9007 7.99081 9.77511 8.15151C9.64952 8.31221 9.4738 8.4263 9.27591 8.47564L9.13682 8.5108C7.98432 8.79881 6.77037 8.71624 5.66749 8.27482C4.65001 7.86775 3.5361 7.7654 2.46148 7.98024L1.34098 8.2045V13.5116C1.34098 13.6412 1.28953 13.7654 1.19795 13.857C1.10636 13.9485 0.982143 14 0.852621 14C0.723099 14 0.598882 13.9485 0.507296 13.857C0.41571 13.7654 0.364258 13.6412 0.364258 13.5116V0.488363C0.364258 0.218787 0.583044 0 0.852621 0Z"
                        fill="#916CE7"></path>
                    </svg> <span className="font-medium text-xs">English &amp; Spanish</span> </span> </article>
                  <article
                    className="border-[0.5px] border-light-text/10 text-white/70  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                    <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                      width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.852621 0C1.1222 0 1.34098 0.218787 1.34098 0.488363V1.69325L2.46148 1.469C3.53635 1.254 4.65056 1.35635 5.66827 1.76358L5.80111 1.81671C6.81741 2.22297 7.93581 2.29897 8.99773 2.03393C9.11295 2.00507 9.23323 2.00286 9.34943 2.02745C9.46563 2.05205 9.57469 2.10281 9.66833 2.17588C9.76196 2.24896 9.83771 2.34241 9.88981 2.44915C9.94191 2.55589 9.96899 2.6731 9.96899 2.79187V7.58877C9.96895 7.79273 9.9007 7.99081 9.77511 8.15151C9.64952 8.31221 9.4738 8.4263 9.27591 8.47564L9.13682 8.5108C7.98432 8.79881 6.77037 8.71624 5.66749 8.27482C4.65001 7.86775 3.5361 7.7654 2.46148 7.98024L1.34098 8.2045V13.5116C1.34098 13.6412 1.28953 13.7654 1.19795 13.857C1.10636 13.9485 0.982143 14 0.852621 14C0.723099 14 0.598882 13.9485 0.507296 13.857C0.41571 13.7654 0.364258 13.6412 0.364258 13.5116V0.488363C0.364258 0.218787 0.583044 0 0.852621 0Z"
                        fill="#916CE7"></path>
                    </svg> <span className="font-medium text-xs">Developer</span> </span> </article>
                  <article
                    className="border-[0.5px] border-light-text/10 text-white/70  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                    <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                      width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.852621 0C1.1222 0 1.34098 0.218787 1.34098 0.488363V1.69325L2.46148 1.469C3.53635 1.254 4.65056 1.35635 5.66827 1.76358L5.80111 1.81671C6.81741 2.22297 7.93581 2.29897 8.99773 2.03393C9.11295 2.00507 9.23323 2.00286 9.34943 2.02745C9.46563 2.05205 9.57469 2.10281 9.66833 2.17588C9.76196 2.24896 9.83771 2.34241 9.88981 2.44915C9.94191 2.55589 9.96899 2.6731 9.96899 2.79187V7.58877C9.96895 7.79273 9.9007 7.99081 9.77511 8.15151C9.64952 8.31221 9.4738 8.4263 9.27591 8.47564L9.13682 8.5108C7.98432 8.79881 6.77037 8.71624 5.66749 8.27482C4.65001 7.86775 3.5361 7.7654 2.46148 7.98024L1.34098 8.2045V13.5116C1.34098 13.6412 1.28953 13.7654 1.19795 13.857C1.10636 13.9485 0.982143 14 0.852621 14C0.723099 14 0.598882 13.9485 0.507296 13.857C0.41571 13.7654 0.364258 13.6412 0.364258 13.5116V0.488363C0.364258 0.218787 0.583044 0 0.852621 0Z"
                        fill="#916CE7"></path>
                    </svg> <span className="font-medium text-xs">UTMACH University</span> </span> </article>
                  <article
                    className="border-[0.5px] border-light-text/10 text-white/70  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                    <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                      width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.852621 0C1.1222 0 1.34098 0.218787 1.34098 0.488363V1.69325L2.46148 1.469C3.53635 1.254 4.65056 1.35635 5.66827 1.76358L5.80111 1.81671C6.81741 2.22297 7.93581 2.29897 8.99773 2.03393C9.11295 2.00507 9.23323 2.00286 9.34943 2.02745C9.46563 2.05205 9.57469 2.10281 9.66833 2.17588C9.76196 2.24896 9.83771 2.34241 9.88981 2.44915C9.94191 2.55589 9.96899 2.6731 9.96899 2.79187V7.58877C9.96895 7.79273 9.9007 7.99081 9.77511 8.15151C9.64952 8.31221 9.4738 8.4263 9.27591 8.47564L9.13682 8.5108C7.98432 8.79881 6.77037 8.71624 5.66749 8.27482C4.65001 7.86775 3.5361 7.7654 2.46148 7.98024L1.34098 8.2045V13.5116C1.34098 13.6412 1.28953 13.7654 1.19795 13.857C1.10636 13.9485 0.982143 14 0.852621 14C0.723099 14 0.598882 13.9485 0.507296 13.857C0.41571 13.7654 0.364258 13.6412 0.364258 13.5116V0.488363C0.364258 0.218787 0.583044 0 0.852621 0Z"
                        fill="#916CE7"></path>
                    </svg> <span className="font-medium text-xs">ECT (Ecuador Time)</span> </span> </article>
                </article>
                <div className="flex items-center justify-between gap-4"> <a
                  className="bg-icon-card rounded-lg py-4 w-full flex justify-center items-center gap-2 hover:bg-icon-background/80 transition-all duration-300 group"
                  href="https://www.instagram.com/luissim.96/" target="_blank" aria-label="Abrir sitio de Instagram">
                  <span className="font-medium text-sm text-light-text">Instagram</span> <svg
                    className="right-0 bottom-0 size-6 text-card-text transition-transform duration-300 ease-in-out group-hover:rotate-45 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg> </a><a
                    className="bg-icon-card rounded-lg py-4 w-full flex justify-center items-center gap-2 hover:bg-icon-background/80 transition-all duration-300 group"
                    href="https://www.linkedin.com/in/luis-loayza-agila-0202821b9/" target="_blank"
                    aria-label="Abrir sitio de Linkedin"> <span className="font-medium text-sm text-light-text">Linkedin</span>
                    <svg
                      className="right-0 bottom-0 size-6 text-card-text transition-transform duration-300 ease-in-out group-hover:rotate-45 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M17 7l-10 10"></path>
                      <path d="M8 7l9 0l0 9"></path>
                    </svg> </a> </div>
              </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3 xl:row-start-4 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="pt-4 pb-2">
                <div className="border-b-2 border-light-text/10 pb-2">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                    <path d="M12 12l0 .01"></path>
                    <path d="M3 13a20 20 0 0 0 18 0"></path>
                  </svg>
                    <h2 className="font-medium text-light-text">Experience</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Work Showcase</p>
                </div>
                <div
                  className="relative h-[12.5rem] xl:h-[12.5rem] whitespace-nowrap overflow-y-auto scrollbar-hide md:h-[17rem]">
                  <div
                    className="undefined  select-none rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300 group">
                    <div className="relative flex justify-between gap-1 border-b-2 border-light-text/10 pb-2">
                      <div className="flex items-start flex-col overflow-hidden">
                        <h3
                          className="font-medium text-xs text-testimonial-title overflow-hidden text-ellipsis whitespace-nowrap">
                          Web Developer </h3>
                        <p className="font-medium text-sm text-testimonial-text"> OttComputer GmbH </p> <span
                          className="font-medium text-xs text-testimonial-text"> Guayas, Ecuador </span> <a
                            href="https://www.linkedin.com/company/ottgroup/" target="_blank"
                            aria-label="Abrir sitio de OttComputer GmbH"> <svg
                              className="absolute right-0 bottom-0 size-6 text-card-text transition-transform duration-300 ease-in-out group-hover:rotate-45 cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                          </svg> <span className="sr-only">Ir al sitio de OttComputer GmbH</span> </a>
                      </div>  <span className="font-medium text-xs text-testimonial-text">Jul 24 - Present</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2 min-h-[3.5rem]"> I resolve
                      bugs and develop new features for the companys inventory management system. I use PHP, Laravel,
                      MySQL, and Vue.js. </p>
                  </div>
                  <div
                    className="undefined  select-none rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300 group">
                    <div className="relative flex justify-between gap-1 border-b-2 border-light-text/10 pb-2">

                      <div className="flex items-start flex-col overflow-hidden">
                        <h3
                          className="font-medium text-xs text-testimonial-title overflow-hidden text-ellipsis whitespace-nowrap">
                          MANTENIMIENTO TI </h3>
                        <p className="font-medium text-sm text-testimonial-text"> GAD Santa Rosa </p> <span
                          className="font-medium text-xs text-testimonial-text"> Santa Rosa, El Oro, Ecuador </span> <a
                            href="https://www.santarosa.gob.ec/web/" target="_blank"
                            aria-label="Abrir sitio de GAD Santa Rosa"> <svg
                              className="absolute right-0 bottom-0 size-6 text-card-text transition-transform duration-300 ease-in-out group-hover:rotate-45 cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                          </svg> <span className="sr-only">Ir al sitio de GAD Santa Rosa</span> </a>
                      </div> <span className="font-medium text-xs text-testimonial-text">May 22 - Oct 22</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2 min-h-[3.5rem]"> Recibí
                      capacitaciones para el mantenimiento de los equipos de la institución y su respectivo manejo. </p>
                  </div>
                  <div
                    className="undefined  select-none rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300 group">
                    <div className="relative flex justify-between gap-1 border-b-2 border-light-text/10 pb-2">

                      <div className="flex items-start flex-col overflow-hidden">
                        <h3
                          className="font-medium text-xs text-testimonial-title overflow-hidden text-ellipsis whitespace-nowrap">
                          Web Developer </h3>
                        <p className="font-medium text-sm text-testimonial-text"> TMJSOFT CIA. LTDA. </p> <span
                          className="font-medium text-xs text-testimonial-text"> Santa Rosa, El Oro, Ecuador </span> <a
                            href="https://www.santarosa.gob.ec/web/" target="_blank"
                            aria-label="Abrir sitio de TMJSOFT CIA. LTDA."> <svg
                              className="absolute right-0 bottom-0 size-6 text-card-text transition-transform duration-300 ease-in-out group-hover:rotate-45 cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                          </svg> <span className="sr-only">Ir al sitio de TMJSOFT CIA. LTDA.</span> </a>
                      </div>  <span className="font-medium text-xs text-testimonial-text">Nov 21 - Abr 22</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2 min-h-[3.5rem]"> Recibí
                      capacitaciones sobre desarrollo de paginas web y colaboré en la creación de componentes. </p>
                  </div>
                  <div
                    className="undefined  select-none rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300 group">
                    <div className="relative flex justify-between gap-1 border-b-2 border-light-text/10 pb-2">

                      <div className="flex items-start flex-col overflow-hidden">
                        <h3
                          className="font-medium text-xs text-testimonial-title overflow-hidden text-ellipsis whitespace-nowrap">
                          SOPORTE DE REDES </h3>
                        <p className="font-medium text-sm text-testimonial-text"> Hospital Santa Rosa </p> <span
                          className="font-medium text-xs text-testimonial-text"> Santa Rosa, El Oro, Ecuador </span> <a
                            href="https://www.santarosa.gob.ec/web/" target="_blank"
                            aria-label="Abrir sitio de Hospital Santa Rosa"> <svg
                              className="absolute right-0 bottom-0 size-6 text-card-text transition-transform duration-300 ease-in-out group-hover:rotate-45 cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                          </svg> <span className="sr-only">Ir al sitio de Hospital Santa Rosa</span> </a>
                      </div>  <span className="font-medium text-xs text-testimonial-text">May 21 - Oct 21</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2 min-h-[3.5rem]"> Participé
                      en los mantenimientos correctivos y preventivos del Data Center de la Institución. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:block xl:col-span-2 xl:row-span-3 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="pt-4 pb-2">
                <div className="">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M20.894 15.553a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.553 3.774l7.554 -3.775a1 1 0 0 1 1.341 .447m0 -4a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.552 3.775l7.554 -3.775a1 1 0 0 1 1.341 .447m-8.887 -8.552q .056 0 .111 .007l.111 .02l.086 .024l.012 .006l.012 .002l.029 .014l.05 .019l.016 .009l.012 .005l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 0 -1.788l8 -4l.011 -.005l.018 -.01l.078 -.032l.011 -.002l.013 -.006l.086 -.024l.11 -.02l.056 -.005z">
                    </path>
                  </svg>
                    <h2 className="font-medium text-light-text">My Stack</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Tech Arsenal</p>
                </div>
                <div
                  className="relative h-[6.5rem] md:h-[10.5rem] lg:h-[10.5rem] xl:h-[12.5rem] whitespace-nowrap overflow-y-auto scrollbar-hide mt-2">
                  <div className="select-none absolute flex flex-wrap justify-center items-center gap-2 pt-1 px-2">
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=html" alt="Html" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Html</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=css" alt="Css" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Css</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=php" alt="PHP" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">PHP</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=java" alt="Java" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Java</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">MySQL</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">MongoDB</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=laravel" alt="Laravel" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Laravel</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Microsoft Office 365</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Project management</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Problem solving</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Team work</h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:block xl:row-span-2 xl:col-start-3 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="py-2 flex flex-col justify-center items-center h-full">
                <div className="flex justify-center items-center gap-[1px]">
                  <h2
                    className="counter-projects min-w-[1ch] text-center transition-transform duration-300 font-medium text-light-text text-[65px] leading-tight"
                    data-target="11">11</h2> <span className="text-theme-primary font-medium text-5xl">+</span>
                </div>
                <div className="flex flex-wrap justify-center items-center px-1">
                  <article
                    className="undefined  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                    <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                      width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.852621 0C1.1222 0 1.34098 0.218787 1.34098 0.488363V1.69325L2.46148 1.469C3.53635 1.254 4.65056 1.35635 5.66827 1.76358L5.80111 1.81671C6.81741 2.22297 7.93581 2.29897 8.99773 2.03393C9.11295 2.00507 9.23323 2.00286 9.34943 2.02745C9.46563 2.05205 9.57469 2.10281 9.66833 2.17588C9.76196 2.24896 9.83771 2.34241 9.88981 2.44915C9.94191 2.55589 9.96899 2.6731 9.96899 2.79187V7.58877C9.96895 7.79273 9.9007 7.99081 9.77511 8.15151C9.64952 8.31221 9.4738 8.4263 9.27591 8.47564L9.13682 8.5108C7.98432 8.79881 6.77037 8.71624 5.66749 8.27482C4.65001 7.86775 3.5361 7.7654 2.46148 7.98024L1.34098 8.2045V13.5116C1.34098 13.6412 1.28953 13.7654 1.19795 13.857C1.10636 13.9485 0.982143 14 0.852621 14C0.723099 14 0.598882 13.9485 0.507296 13.857C0.41571 13.7654 0.364258 13.6412 0.364258 13.5116V0.488363C0.364258 0.218787 0.583044 0 0.852621 0Z"
                        fill="#916CE7"></path>
                    </svg> <span className="font-medium text-xs">Projects</span> </span> </article>
                </div>
              </div>
            </div>
            <div className="hidden xl:block xl:row-span-2 xl:col-start-4 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="py-2 flex flex-col justify-center items-center h-full">
                <div className="flex justify-center items-center gap-[1px]">
                  <h2
                    className="counter-clients min-w-[1ch] text-center transition-transform duration-300 font-medium text-light-text text-[65px] leading-tight"
                    data-target="29">29</h2> <span className="text-theme-primary font-medium text-5xl">+</span>
                </div>
                <div className="flex flex-wrap justify-center items-center px-1">
                  <article
                    className="undefined  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                    <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                      width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7 14C8.85651 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85651 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85651 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85651 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM4.47738 9.48734C4.51844 9.43186 4.57003 9.38502 4.6292 9.3495C4.68838 9.31398 4.75398 9.29047 4.82225 9.28033C4.89052 9.27019 4.96012 9.27361 5.02707 9.29039C5.09401 9.30717 5.157 9.33699 5.21241 9.37814C5.72147 9.75615 6.33805 9.97456 6.99916 9.97456C7.66195 9.97456 8.27685 9.75615 8.78675 9.37814C8.8987 9.29526 9.03899 9.26025 9.17676 9.28081C9.31453 9.30136 9.43848 9.37581 9.52136 9.48776C9.60424 9.59971 9.63925 9.74 9.61869 9.87777C9.59813 10.0155 9.52369 10.1395 9.41174 10.2224C8.73131 10.7264 7.89968 11.0254 6.99916 11.0254C6.12936 11.0244 5.28315 10.7424 4.58658 10.2215C4.47478 10.1386 4.40047 10.0147 4.37999 9.87704C4.35951 9.73937 4.39454 9.5992 4.47738 9.48734ZM9.79983 5.94996C9.79983 6.52958 9.4865 7 9.09924 7C8.71283 7 8.3995 6.52958 8.3995 5.94996C8.3995 5.37034 8.71283 4.89992 9.09924 4.89992C9.48566 4.89992 9.79983 5.37034 9.79983 5.94996ZM4.89908 7C5.28549 7 5.59966 6.52958 5.59966 5.94996C5.59966 5.37034 5.28633 4.89992 4.89908 4.89992C4.51266 4.89992 4.19933 5.37034 4.19933 5.94996C4.19933 6.52958 4.51266 7 4.89908 7Z"
                        fill="#916CE7"></path>
                    </svg> <span className="font-medium text-xs">Happy Clients</span> </span> </article>
                </div>
              </div>
            </div>
            <div className="hidden xl:block xl:row-span-2 xl:col-start-5 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="py-2 flex flex-col justify-center items-center h-full">
                <div className="flex justify-center items-center gap-[1px]">
                  <h2
                    className="counter-expertise min-w-[1ch] text-center transition-transform duration-300 font-medium text-light-text text-[65px] leading-tight"
                    data-target="07">07</h2> <span className="text-theme-primary font-medium text-5xl">+</span>
                </div>
                <div className="flex flex-wrap justify-center items-center px-1">
                  <article
                    className="undefined  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                    <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                      width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.05802 1.15621L7.65735 1.39392C7.21636 1.65432 6.99629 1.78535 6.75354 1.81559C6.51078 1.84583 6.27307 1.77359 5.79848 1.6266L5.36589 1.49388C3.6935 0.978976 2.85688 0.721103 2.35458 1.18141C1.85227 1.64172 2.01606 2.51445 2.34366 4.25993L2.42765 4.711C2.52089 5.20658 2.56793 5.45522 2.51249 5.69713C2.45705 5.93988 2.3067 6.14904 2.00514 6.56651L1.73047 6.94786C0.67042 8.4195 0.139554 9.15532 0.398268 9.76514C0.656981 10.375 1.53392 10.4556 3.28695 10.616L3.74054 10.658C4.2378 10.7034 4.48728 10.7252 4.69559 10.8454C4.90475 10.9646 5.04838 11.1671 5.33733 11.5719L5.60109 11.9398C6.61746 13.3644 7.12565 14.0759 7.78839 13.9936C8.45113 13.9096 8.82912 13.0864 9.58426 11.4409L9.77998 11.015C9.88917 10.7765 9.97149 10.5984 10.0496 10.459L13.2617 13.671C13.3601 13.7695 13.4937 13.8248 13.633 13.8248C13.7722 13.8248 13.9058 13.7695 14.0042 13.671C14.1027 13.5726 14.158 13.439 14.158 13.2998C14.158 13.1605 14.1027 13.027 14.0042 12.9285L10.9022 9.82646L11.1903 9.72398L11.6271 9.57111C13.3163 8.97976 14.1613 8.68409 14.3117 8.02303C14.4628 7.36112 13.8194 6.7723 12.5334 5.59465L12.2008 5.28974C11.8354 4.95543 11.6531 4.78743 11.5582 4.564C11.4633 4.34057 11.4675 4.08689 11.4742 3.57787L11.4826 3.11504C11.5095 1.32589 11.5229 0.43047 10.9534 0.104559C10.3839 -0.221352 9.60946 0.238116 8.05802 1.15621Z"
                        fill="#916CE7"></path>
                    </svg> <span className="font-medium text-xs">Year Expertise</span> </span> </article>
                </div>
              </div>
            </div>
            <div className="block md:hidden xl:col-span-2 xl:row-span-4 xl:col-start-6 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="pt-4 pb-2">
                <div className="border-b-2 border-light-text/10 pb-2">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5" width="16"
                    height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M15.5 8.41755V3.85755C15.5 1.96655 15.5 1.02055 14.91 0.503549C14.321 -0.0134512 13.42 0.141549 11.619 0.453549L10.74 0.604549C9.373 0.840549 8.69 0.958549 8 0.958549C7.31 0.958549 6.627 0.840549 5.26 0.604549L4.381 0.452549C2.58 0.142549 1.679 -0.0134511 1.089 0.502549C0.5 1.02155 0.5 1.96755 0.5 3.85855V8.41855C0.5 13.1585 4.032 15.4595 6.249 16.4365C6.85 16.7015 7.151 16.8335 8 16.8335C8.85 16.8335 9.15 16.7015 9.751 16.4365C11.967 15.4595 15.5 13.1575 15.5 8.41755ZM3.976 6.11655C4.079 5.90255 4.464 5.61055 5.083 5.61055C5.703 5.61055 6.088 5.90255 6.191 6.11655C6.345 6.43655 6.721 6.56655 7.029 6.40655C7.1791 6.32587 7.29211 6.19019 7.34432 6.02797C7.39653 5.86576 7.38387 5.68963 7.309 5.53655C6.927 4.74455 6.003 4.31655 5.083 4.31655C4.163 4.31655 3.24 4.74455 2.858 5.53655C2.78313 5.68963 2.77047 5.86576 2.82268 6.02797C2.87489 6.19019 2.9879 6.32587 3.138 6.40655C3.446 6.56655 3.821 6.43655 3.976 6.11655ZM10.916 5.61055C10.297 5.61055 9.912 5.90255 9.809 6.11655C9.77429 6.19173 9.72476 6.25914 9.66337 6.31471C9.60198 6.37029 9.53 6.41289 9.45175 6.43998C9.37349 6.46706 9.29057 6.47806 9.20796 6.47231C9.12535 6.46657 9.04475 6.4442 8.971 6.40655C8.8209 6.32587 8.70789 6.19019 8.65568 6.02797C8.60347 5.86576 8.61613 5.68963 8.691 5.53655C9.073 4.74455 9.997 4.31655 10.917 4.31655C11.837 4.31655 12.76 4.74455 13.142 5.53655C13.297 5.85655 13.172 6.24655 12.862 6.40655C12.7882 6.4442 12.7076 6.46657 12.625 6.47231C12.5424 6.47806 12.4595 6.46706 12.3813 6.43998C12.303 6.41289 12.231 6.37029 12.1696 6.31471C12.1082 6.25914 12.0587 6.19173 12.024 6.11655C11.921 5.90255 11.535 5.61055 10.916 5.61055ZM4.657 10.6175C4.53599 10.4965 4.46587 10.3338 4.46103 10.1627C4.4562 9.99165 4.51701 9.82521 4.631 9.69755C4.68787 9.63728 4.75618 9.58894 4.83193 9.55535C4.90769 9.52177 4.98938 9.50361 5.07223 9.50193C5.15508 9.50026 5.23743 9.5151 5.31448 9.54559C5.39153 9.57609 5.46174 9.62163 5.521 9.67955C5.536 9.69255 5.576 9.72355 5.605 9.74455C5.689 9.80455 5.829 9.89255 6.028 9.98355C6.423 10.1635 7.067 10.3605 8 10.3605C8.933 10.3605 9.577 10.1635 9.973 9.98255C10.171 9.89255 10.311 9.80455 10.395 9.74455C10.4285 9.72112 10.4609 9.69609 10.492 9.66955V9.66855C10.5508 9.61157 10.6205 9.56701 10.6969 9.53753C10.7733 9.50804 10.8548 9.49425 10.9367 9.49695C11.0185 9.49966 11.099 9.51881 11.1732 9.55328C11.2475 9.58774 11.3141 9.63681 11.369 9.69755C11.4838 9.8237 11.5457 9.98921 11.5418 10.1598C11.5379 10.3303 11.4685 10.4928 11.348 10.6135L11.345 10.6155L11.343 10.6175L11.337 10.6235L11.32 10.6395L11.27 10.6825C11.23 10.7175 11.173 10.7625 11.102 10.8125C10.9048 10.9508 10.6948 11.07 10.475 11.1685C9.923 11.4205 9.109 11.6555 8 11.6555C6.891 11.6555 6.077 11.4205 5.525 11.1685C5.30523 11.0703 5.09528 10.9515 4.898 10.8135C4.81416 10.7538 4.73401 10.689 4.658 10.6195L4.657 10.6175Z"
                      fill="#916CE7"></path>
                  </svg>
                    <h2 className="font-medium text-light-text">Testimonials</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Reviews Showcase</p>
                </div>
                <div
                  className="relative h-[12.5rem] md:h-[10.5rem] xl:h-[18.4rem] lg:h-[10.5rem] whitespace-nowrap overflow-y-auto scrollbar-hide">
                  <div
                    className="mr-14 rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300">
                    <div className="flex justify-between border-b-2 border-light-text/10 pb-2">
                      <div className="flex items-center"> <img className="object-cover size-8 rounded-full"
                        src="/testimonials/teddy.webp" alt="profile user Teddy Summers" />
                        <div className="flex items-start flex-col ml-1">
                          <h3 className="font-medium text-xs text-testimonial-title">Teddy Summers</h3>
                          <p className="font-medium text-xs text-testimonial-text">Miami,EEUU</p>
                        </div>
                      </div> <span className="font-medium text-xs text-testimonial-text">14, May 2024</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2"> Knowledgeable and
                      professional. Luis is a great developer. He is very responsable and always delivers on time. I highly
                      recommend him for any. </p>
                  </div>
                  <div
                    className="ml-14 rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300">
                    <div className="flex justify-between border-b-2 border-light-text/10 pb-2">
                      <div className="flex items-center"> <img className="object-cover size-8 rounded-full"
                        src="/testimonials/marlon.webp" alt="profile user Marlon Villamar" />
                        <div className="flex items-start flex-col ml-1">
                          <h3 className="font-medium text-xs text-testimonial-title">Marlon Villamar</h3>
                          <p className="font-medium text-xs text-testimonial-text">Roma, Italia</p>
                        </div>
                      </div> <span className="font-medium text-xs text-testimonial-text">12, Dic 2023</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2"> Luis is a great
                      developer. He is a developer with a strong work ethic and a positive attitude. He is always willing to
                      help others and is a great team player. I highly recommend him for any development role. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-1 xl:hidden">
              <div className="xl:row-span-2 xl:col-start-3 bg-card-background rounded-2xl border-2 border-light-text/10 h-36">
                <div className="py-2 flex flex-col justify-center items-center h-full">
                  <div className="flex justify-center items-center gap-[1px]">
                    <h2
                      className="counter-projects min-w-[1ch] text-center transition-transform duration-300 font-medium text-light-text text-[65px] leading-tight"
                      data-target="11">11</h2> <span className="text-theme-primary font-medium text-5xl">+</span>
                  </div>
                  <div className="flex flex-wrap justify-center items-center px-1">
                    <article
                      className="undefined  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                      <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                        width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.852621 0C1.1222 0 1.34098 0.218787 1.34098 0.488363V1.69325L2.46148 1.469C3.53635 1.254 4.65056 1.35635 5.66827 1.76358L5.80111 1.81671C6.81741 2.22297 7.93581 2.29897 8.99773 2.03393C9.11295 2.00507 9.23323 2.00286 9.34943 2.02745C9.46563 2.05205 9.57469 2.10281 9.66833 2.17588C9.76196 2.24896 9.83771 2.34241 9.88981 2.44915C9.94191 2.55589 9.96899 2.6731 9.96899 2.79187V7.58877C9.96895 7.79273 9.9007 7.99081 9.77511 8.15151C9.64952 8.31221 9.4738 8.4263 9.27591 8.47564L9.13682 8.5108C7.98432 8.79881 6.77037 8.71624 5.66749 8.27482C4.65001 7.86775 3.5361 7.7654 2.46148 7.98024L1.34098 8.2045V13.5116C1.34098 13.6412 1.28953 13.7654 1.19795 13.857C1.10636 13.9485 0.982143 14 0.852621 14C0.723099 14 0.598882 13.9485 0.507296 13.857C0.41571 13.7654 0.364258 13.6412 0.364258 13.5116V0.488363C0.364258 0.218787 0.583044 0 0.852621 0Z"
                          fill="#916CE7"></path>
                      </svg> <span className="font-medium text-xs">Projects</span> </span> </article>
                  </div>
                </div>
              </div>
              <div className="xl:row-span-2 xl:col-start-4 bg-card-background rounded-2xl border-2 border-light-text/10 h-36">
                <div className="py-2 flex flex-col justify-center items-center h-full">
                  <div className="flex justify-center items-center gap-[1px]">
                    <h2
                      className="counter-clients min-w-[1ch] text-center transition-transform duration-300 font-medium text-light-text text-[65px] leading-tight"
                      data-target="29">29</h2> <span className="text-theme-primary font-medium text-5xl">+</span>
                  </div>
                  <div className="flex flex-wrap justify-center items-center px-1">
                    <article
                      className="undefined  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                      <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                        width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M7 14C8.85651 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85651 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85651 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85651 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM4.47738 9.48734C4.51844 9.43186 4.57003 9.38502 4.6292 9.3495C4.68838 9.31398 4.75398 9.29047 4.82225 9.28033C4.89052 9.27019 4.96012 9.27361 5.02707 9.29039C5.09401 9.30717 5.157 9.33699 5.21241 9.37814C5.72147 9.75615 6.33805 9.97456 6.99916 9.97456C7.66195 9.97456 8.27685 9.75615 8.78675 9.37814C8.8987 9.29526 9.03899 9.26025 9.17676 9.28081C9.31453 9.30136 9.43848 9.37581 9.52136 9.48776C9.60424 9.59971 9.63925 9.74 9.61869 9.87777C9.59813 10.0155 9.52369 10.1395 9.41174 10.2224C8.73131 10.7264 7.89968 11.0254 6.99916 11.0254C6.12936 11.0244 5.28315 10.7424 4.58658 10.2215C4.47478 10.1386 4.40047 10.0147 4.37999 9.87704C4.35951 9.73937 4.39454 9.5992 4.47738 9.48734ZM9.79983 5.94996C9.79983 6.52958 9.4865 7 9.09924 7C8.71283 7 8.3995 6.52958 8.3995 5.94996C8.3995 5.37034 8.71283 4.89992 9.09924 4.89992C9.48566 4.89992 9.79983 5.37034 9.79983 5.94996ZM4.89908 7C5.28549 7 5.59966 6.52958 5.59966 5.94996C5.59966 5.37034 5.28633 4.89992 4.89908 4.89992C4.51266 4.89992 4.19933 5.37034 4.19933 5.94996C4.19933 6.52958 4.51266 7 4.89908 7Z"
                          fill="#916CE7"></path>
                      </svg> <span className="font-medium text-xs">Happy Clients</span> </span> </article>
                  </div>
                </div>
              </div>
              <div className="xl:row-span-2 xl:col-start-5 bg-card-background rounded-2xl border-2 border-light-text/10 h-36">
                <div className="py-2 flex flex-col justify-center items-center h-full">
                  <div className="flex justify-center items-center gap-[1px]">
                    <h2
                      className="counter-expertise min-w-[1ch] text-center transition-transform duration-300 font-medium text-light-text text-[65px] leading-tight"
                      data-target="07">07</h2> <span className="text-theme-primary font-medium text-5xl">+</span>
                  </div>
                  <div className="flex flex-wrap justify-center items-center px-1">
                    <article
                      className="undefined  bg-icon-card rounded-full shadow-md py-1 px-3 text-testimonial-text  hover:bg-icon-background/80 transition-all duration-300">
                      <span className="flex justify-evenly items-center gap-[2px]"> <svg className="size-5 text-theme-primary"
                        width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.05802 1.15621L7.65735 1.39392C7.21636 1.65432 6.99629 1.78535 6.75354 1.81559C6.51078 1.84583 6.27307 1.77359 5.79848 1.6266L5.36589 1.49388C3.6935 0.978976 2.85688 0.721103 2.35458 1.18141C1.85227 1.64172 2.01606 2.51445 2.34366 4.25993L2.42765 4.711C2.52089 5.20658 2.56793 5.45522 2.51249 5.69713C2.45705 5.93988 2.3067 6.14904 2.00514 6.56651L1.73047 6.94786C0.67042 8.4195 0.139554 9.15532 0.398268 9.76514C0.656981 10.375 1.53392 10.4556 3.28695 10.616L3.74054 10.658C4.2378 10.7034 4.48728 10.7252 4.69559 10.8454C4.90475 10.9646 5.04838 11.1671 5.33733 11.5719L5.60109 11.9398C6.61746 13.3644 7.12565 14.0759 7.78839 13.9936C8.45113 13.9096 8.82912 13.0864 9.58426 11.4409L9.77998 11.015C9.88917 10.7765 9.97149 10.5984 10.0496 10.459L13.2617 13.671C13.3601 13.7695 13.4937 13.8248 13.633 13.8248C13.7722 13.8248 13.9058 13.7695 14.0042 13.671C14.1027 13.5726 14.158 13.439 14.158 13.2998C14.158 13.1605 14.1027 13.027 14.0042 12.9285L10.9022 9.82646L11.1903 9.72398L11.6271 9.57111C13.3163 8.97976 14.1613 8.68409 14.3117 8.02303C14.4628 7.36112 13.8194 6.7723 12.5334 5.59465L12.2008 5.28974C11.8354 4.95543 11.6531 4.78743 11.5582 4.564C11.4633 4.34057 11.4675 4.08689 11.4742 3.57787L11.4826 3.11504C11.5095 1.32589 11.5229 0.43047 10.9534 0.104559C10.3839 -0.221352 9.60946 0.238116 8.05802 1.15621Z"
                          fill="#916CE7"></path>
                      </svg> <span className="font-medium text-xs">Year Expertise</span> </span> </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-2 xl:col-start-6 xl:row-start-5 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="pt-4 pb-2">
                <div className="border-b-2 border-light-text/10 pb-2">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5" width="18"
                    height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.23071 3.35517C7.3599 2.98924 7.59939 2.67238 7.91619 2.44826C8.233 2.22414 8.61151 2.10378 8.99957 2.10378C9.38764 2.10378 9.76615 2.22414 10.083 2.44826C10.3998 2.67238 10.6392 2.98924 10.7684 3.35517C10.8266 3.50756 10.942 3.63118 11.0901 3.69961C11.2381 3.76805 11.4071 3.7759 11.5609 3.72147C11.7146 3.66704 11.841 3.55465 11.913 3.4083C11.9851 3.26195 11.997 3.09325 11.9463 2.93821C11.7308 2.32894 11.3317 1.80146 10.804 1.42839C10.2762 1.05532 9.64585 0.854996 8.99957 0.854996C8.3533 0.854996 7.72291 1.05532 7.19519 1.42839C6.66747 1.80146 6.26836 2.32894 6.05281 2.93821C5.99751 3.09454 6.00659 3.26643 6.07803 3.41607C6.14948 3.56572 6.27744 3.68085 6.43378 3.73614C6.59011 3.79144 6.762 3.78236 6.91165 3.71091C7.06129 3.63947 7.17642 3.5115 7.23171 3.35517H7.23071ZM1.29019 6.55492C1.24648 6.52687 1.19946 6.50436 1.1502 6.48792C1.27349 6.22855 1.44021 5.99217 1.64316 5.78898C2.62108 4.81306 4.19096 4.81306 7.33271 4.81306H10.6664C13.8092 4.81306 15.3801 4.81306 16.356 5.78898C16.56 5.99296 16.722 6.22294 16.8489 6.48792C16.8 6.50445 16.7534 6.52695 16.71 6.55492C14.9601 7.69283 13.8602 8.40477 12.9463 8.86073C12.9161 8.7088 12.8305 8.5735 12.7062 8.48107C12.5819 8.38864 12.4277 8.34567 12.2735 8.36049C12.1193 8.37532 11.9761 8.44687 11.8717 8.56129C11.7673 8.6757 11.7091 8.82482 11.7084 8.97972V9.36069C9.94217 9.89369 8.05798 9.89369 6.29179 9.36069V8.97972C6.29236 8.82393 6.23471 8.67354 6.13016 8.55804C6.0256 8.44254 5.88167 8.37025 5.72659 8.35536C5.57151 8.34046 5.41645 8.38403 5.29183 8.47752C5.1672 8.57101 5.08198 8.70768 5.05289 8.86073C4.14096 8.40477 3.04005 7.69283 1.29019 6.55492ZM0.667236 11.4795C0.667236 9.85365 0.667236 8.64975 0.802226 7.72982C2.69907 8.96273 3.91498 9.74966 5.04189 10.2336V10.6456C5.04003 10.8113 5.10409 10.971 5.21998 11.0895C5.33587 11.2081 5.49409 11.2757 5.65984 11.2775C5.82559 11.2794 5.98528 11.2153 6.1038 11.0994C6.22231 10.9836 6.28993 10.8253 6.29179 10.6596C8.06665 11.1276 9.9335 11.1276 11.7084 10.6596C11.7102 10.8253 11.7778 10.9836 11.8963 11.0994C12.0149 11.2153 12.1746 11.2794 12.3403 11.2775C12.5061 11.2757 12.6643 11.2081 12.7802 11.0895C12.8961 10.971 12.9601 10.8113 12.9583 10.6456V10.2336C14.0842 9.74866 15.3001 8.96273 17.1979 7.72982C17.3329 8.64975 17.3329 9.85365 17.3329 11.4795C17.3329 14.6213 17.3329 16.1932 16.356 17.1691C15.3801 18.145 13.8092 18.145 10.6664 18.145H7.33371C4.19096 18.145 2.62008 18.145 1.64416 17.1691C0.667236 16.1932 0.667236 14.6213 0.667236 11.4795Z"
                      fill="#916CE7"></path>
                  </svg>
                    <h2 className="font-medium text-light-text">Projects</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Works Gallery</p>
                </div>
                <div
                  className="grid grid-cols-2 gap-4 px-4 pt-4 md:flex overflow-x-auto whitespace-nowrap md:h-[6rem] scrollbar-hide">
                  <div className="md:inline-block"> <a href="https://valoraprime.vercel.app/" target="_blank"
                    rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Valora Prime"
                    className="block rounded-2xl border-2 border-light-text/10 bg-card-background w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                    <img src="/projects/valoraprime_01.webp" className="object-cover h-full w-full"
                      alt="Captura del proyecto Valora Prime" /> </a> </div>
                  <div className="md:inline-block"> <a href="https://github.com/itsteddydev/notepad" target="_blank"
                    rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Notepad"
                    className="block rounded-2xl border-2 border-light-text/10 bg-card-background w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                    <img src="/projects/notepad_01.webp" className="object-cover h-full w-full"
                      alt="Captura del proyecto Notepad" /> </a> </div>
                  <div className="md:inline-block"> <a href="https://github.com/itsteddydev/neko-inn" target="_blank"
                    rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Neko Inn"
                    className="block rounded-2xl border-2 border-light-text/10 bg-card-background w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                    <img src="/projects/neko_inn_01.webp" className="object-cover h-full w-full"
                      alt="Captura del proyecto Neko Inn" /> </a> </div>
                  <div className="md:inline-block"> <a
                    href="https://astro.build/themes/details/personal-hub-a-customizable-personal-link/" target="_blank"
                    rel="noopener noreferrer" aria-label="Abrir sitio del proyecto Personal Hub"
                    className="block rounded-2xl border-2 border-light-text/10 bg-card-background w-full h-20 md:w-24 md:h-16 overflow-hidden hover:scale-105 hover:shadow-lg hover:border-theme-primary transition-transform duration-300">
                    <img src="/projects/personal_hub.webp" className="object-cover h-full w-full"
                      alt="Captura del proyecto Personal Hub" /> </a> </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block xl:col-span-2 xl:row-span-4 xl:col-start-6 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="pt-4 pb-2">
                <div className="border-b-2 border-light-text/10 pb-2">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5" width="16"
                    height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M15.5 8.41755V3.85755C15.5 1.96655 15.5 1.02055 14.91 0.503549C14.321 -0.0134512 13.42 0.141549 11.619 0.453549L10.74 0.604549C9.373 0.840549 8.69 0.958549 8 0.958549C7.31 0.958549 6.627 0.840549 5.26 0.604549L4.381 0.452549C2.58 0.142549 1.679 -0.0134511 1.089 0.502549C0.5 1.02155 0.5 1.96755 0.5 3.85855V8.41855C0.5 13.1585 4.032 15.4595 6.249 16.4365C6.85 16.7015 7.151 16.8335 8 16.8335C8.85 16.8335 9.15 16.7015 9.751 16.4365C11.967 15.4595 15.5 13.1575 15.5 8.41755ZM3.976 6.11655C4.079 5.90255 4.464 5.61055 5.083 5.61055C5.703 5.61055 6.088 5.90255 6.191 6.11655C6.345 6.43655 6.721 6.56655 7.029 6.40655C7.1791 6.32587 7.29211 6.19019 7.34432 6.02797C7.39653 5.86576 7.38387 5.68963 7.309 5.53655C6.927 4.74455 6.003 4.31655 5.083 4.31655C4.163 4.31655 3.24 4.74455 2.858 5.53655C2.78313 5.68963 2.77047 5.86576 2.82268 6.02797C2.87489 6.19019 2.9879 6.32587 3.138 6.40655C3.446 6.56655 3.821 6.43655 3.976 6.11655ZM10.916 5.61055C10.297 5.61055 9.912 5.90255 9.809 6.11655C9.77429 6.19173 9.72476 6.25914 9.66337 6.31471C9.60198 6.37029 9.53 6.41289 9.45175 6.43998C9.37349 6.46706 9.29057 6.47806 9.20796 6.47231C9.12535 6.46657 9.04475 6.4442 8.971 6.40655C8.8209 6.32587 8.70789 6.19019 8.65568 6.02797C8.60347 5.86576 8.61613 5.68963 8.691 5.53655C9.073 4.74455 9.997 4.31655 10.917 4.31655C11.837 4.31655 12.76 4.74455 13.142 5.53655C13.297 5.85655 13.172 6.24655 12.862 6.40655C12.7882 6.4442 12.7076 6.46657 12.625 6.47231C12.5424 6.47806 12.4595 6.46706 12.3813 6.43998C12.303 6.41289 12.231 6.37029 12.1696 6.31471C12.1082 6.25914 12.0587 6.19173 12.024 6.11655C11.921 5.90255 11.535 5.61055 10.916 5.61055ZM4.657 10.6175C4.53599 10.4965 4.46587 10.3338 4.46103 10.1627C4.4562 9.99165 4.51701 9.82521 4.631 9.69755C4.68787 9.63728 4.75618 9.58894 4.83193 9.55535C4.90769 9.52177 4.98938 9.50361 5.07223 9.50193C5.15508 9.50026 5.23743 9.5151 5.31448 9.54559C5.39153 9.57609 5.46174 9.62163 5.521 9.67955C5.536 9.69255 5.576 9.72355 5.605 9.74455C5.689 9.80455 5.829 9.89255 6.028 9.98355C6.423 10.1635 7.067 10.3605 8 10.3605C8.933 10.3605 9.577 10.1635 9.973 9.98255C10.171 9.89255 10.311 9.80455 10.395 9.74455C10.4285 9.72112 10.4609 9.69609 10.492 9.66955V9.66855C10.5508 9.61157 10.6205 9.56701 10.6969 9.53753C10.7733 9.50804 10.8548 9.49425 10.9367 9.49695C11.0185 9.49966 11.099 9.51881 11.1732 9.55328C11.2475 9.58774 11.3141 9.63681 11.369 9.69755C11.4838 9.8237 11.5457 9.98921 11.5418 10.1598C11.5379 10.3303 11.4685 10.4928 11.348 10.6135L11.345 10.6155L11.343 10.6175L11.337 10.6235L11.32 10.6395L11.27 10.6825C11.23 10.7175 11.173 10.7625 11.102 10.8125C10.9048 10.9508 10.6948 11.07 10.475 11.1685C9.923 11.4205 9.109 11.6555 8 11.6555C6.891 11.6555 6.077 11.4205 5.525 11.1685C5.30523 11.0703 5.09528 10.9515 4.898 10.8135C4.81416 10.7538 4.73401 10.689 4.658 10.6195L4.657 10.6175Z"
                      fill="#916CE7"></path>
                  </svg>
                    <h2 className="font-medium text-light-text">Testimonials</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Reviews Showcase</p>
                </div>
                <div
                  className="relative h-[12.5rem] md:h-[10.5rem] xl:h-[18.4rem] lg:h-[10.5rem] whitespace-nowrap overflow-y-auto scrollbar-hide">
                  <div
                    className="mr-14 rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300">
                    <div className="flex justify-between border-b-2 border-light-text/10 pb-2">
                      <div className="flex items-center"> <img className="object-cover size-8 rounded-full"
                        src="/testimonials/teddy.webp" alt="profile user Teddy Summers" />
                        <div className="flex items-start flex-col ml-1">
                          <h3 className="font-medium text-xs text-testimonial-title">Teddy Summers</h3>
                          <p className="font-medium text-xs text-testimonial-text">Miami,EEUU</p>
                        </div>
                      </div> <span className="font-medium text-xs text-testimonial-text">14, May 2024</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2"> Knowledgeable and
                      professional. Luis is a great developer. He is very responsable and always delivers on time. I highly
                      recommend him for any. </p>
                  </div>
                  <div
                    className="ml-14 rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#141414]  hover:bg-icon-background/50 transition-all duration-300">
                    <div className="flex justify-between border-b-2 border-light-text/10 pb-2">
                      <div className="flex items-center"> <img className="object-cover size-8 rounded-full"
                        src="/testimonials/marlon.webp" alt="profile user Marlon Villamar" />
                        <div className="flex items-start flex-col ml-1">
                          <h3 className="font-medium text-xs text-testimonial-title">Marlon Villamar</h3>
                          <p className="font-medium text-xs text-testimonial-text">Roma, Italia</p>
                        </div>
                      </div> <span className="font-medium text-xs text-testimonial-text">12, Dic 2023</span>
                    </div>
                    <p className="font-medium text-xs text-testimonial-text text-left text-wrap pt-2"> Luis is a great
                      developer. He is a developer with a strong work ethic and a positive attitude. He is always willing to
                      help others and is a great team player. I highly recommend him for any development role. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:hidden xl:col-span-2 xl:row-span-3 bg-card-background rounded-2xl border-2 border-light-text/10">
              <div className="pt-4 pb-2">
                <div className="">
                  <div className="flex justify-center items-center gap-2"> <svg className="text-theme-primary size-5"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M20.894 15.553a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.553 3.774l7.554 -3.775a1 1 0 0 1 1.341 .447m0 -4a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.552 3.775l7.554 -3.775a1 1 0 0 1 1.341 .447m-8.887 -8.552q .056 0 .111 .007l.111 .02l.086 .024l.012 .006l.012 .002l.029 .014l.05 .019l.016 .009l.012 .005l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 0 -1.788l8 -4l.011 -.005l.018 -.01l.078 -.032l.011 -.002l.013 -.006l.086 -.024l.11 -.02l.056 -.005z">
                    </path>
                  </svg>
                    <h2 className="font-medium text-light-text">My Stack</h2>
                  </div>
                  <p className="font-semibold text-[16px] text-dark-text">Tech Arsenal</p>
                </div>
                <div
                  className="relative h-[6.5rem] md:h-[10.5rem] lg:h-[10.5rem] xl:h-[12.5rem] whitespace-nowrap overflow-y-auto scrollbar-hide mt-2">
                  <div className="select-none absolute flex flex-wrap justify-center items-center gap-2 pt-1 px-2">
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=html" alt="Html" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Html</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=css" alt="Css" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Css</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=php" alt="PHP" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">PHP</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=java" alt="Java" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Java</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">MySQL</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">MongoDB</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <article className="undefined bg-icon-background rounded-lg p-2 shadow-md"> <img
                          src="https://skillicons.dev/icons?i=laravel" alt="Laravel" className="size-6" /> </article>
                        <h3 className="font-medium text-sm text-light-text">Laravel</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Microsoft Office 365</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Project management</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Problem solving</h3>
                      </div>
                    </article>
                    <article
                      className="undefined bg-icon-card rounded-lg shadow-md py-1 pl-1 pr-4  hover:bg-icon-background/80 transition-all duration-300">
                      <div className="flex justify-start items-center gap-1">
                        <h3 className="font-medium text-sm text-light-text">Team work</h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </section> */}
      </div>
    </main>
    )
}