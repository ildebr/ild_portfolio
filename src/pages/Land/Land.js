import './Land.scss'

export default function Land(){

    function scroll(){
        var ele = document.querySelector('.column');

        var display = [...document.querySelectorAll('.section')]

        display.map((disp)=>{
            // console.log(ele.scrollTop - disp.offsetTop)
            if(ele.scrollTop >= disp.offsetTop - ele.offsetTop && ele.scrollTop <= (disp.offsetTop -ele.offsetTop) + disp.offsetHeight){
            // if(ele.scrollTop - disp.offsetTop > 0){
                console.log(disp.getAttribute('id'));
                document.querySelector(`a[href='#${disp.getAttribute('id')}']`).parentElement.classList.add('active')
            }else{
                document.querySelector(`a[href='#${disp.getAttribute('id')}']`).parentElement.classList.remove('active')   
            }
        })
    }



    window.onload =()=>{
        

        scroll()

        var ele = document.querySelector('.column');
        console.log(ele)
    
        ele.addEventListener('scroll', scroll)


        const handleOnMouseMove = e =>{
            const {currentTarget: target} = e;
            const react = target.getBoundingClientRect(),
            x =e.clientX - react.left,
            y = e.clientY - react.top;
        
            target.style.setProperty("--mouse-x", `${x}px`);
            target.style.setProperty("--mouse-y", `${y}px`);
        }
        
        for (const card of document.querySelectorAll("#root")){
            card.onmousemove = e => handleOnMouseMove(e);
        }
    }
    function Introduction(){
        return <section className='introduction'>
           <div className='header'>
                <h1 className='header-title'>Ildebrando</h1>
                <h2 className='sub-head'>Web developer</h2>

                {/* <p>Skilled developer with experience working with teams in full-stack development lifecycles. Contributes to delivery of projects on time building reusable components, doing API integrations and in alignment with specifications. Dedicated to delivery of clean and efficiency code using React.js, Javascript, python, django, PHP, and CSS</p> */}
                <p>FullStack Developer with knowledge in React, Django, Node, php, javascript, responsive web development, Database Design, HTML and CSS.
                </p>
                <p>I speak English, Spanish and some Portuguese!</p>
                <p>Contact me at <span className='highlight'>ildebrandoefrain@gmail.com</span> or any of my sociales!</p>
           </div>


            <div className='page__slider'>
                <div className='page__slider__element'>
                    <div className='line'></div>
                    <a href='#about' className='page__slider__name'>
                        ABOUT
                    </a>
                    
                </div>
                <div className='page__slider__element'>
                    <div className='line'></div>
                    <a href='#experience' className='page__slider__name'>
                        EXPERIENCE
                    </a>
                    
                </div>
                <div className='page__slider__element'>
                    <div className='line'></div>
                    <a href='#project' className='page__slider__name'>
                        PROJECTS
                    </a>
                    
                </div>
            </div>
            <div className='socials'>
            <a href='https://github.com/ildebr'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6 svg-ele" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
            <a href='https://www.linkedin.com/in/ildebrando-quinchoa-5a6343219'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 svg-ele" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
            </a>
            </div>
        </section>
    }

    function About(){
        return <section className='section about' id='about'>
            <h3 className='section-title'>ABOUT</h3>

            <p>Skilled developer with experience working with teams in full-stack development lifecycles. Contributes to delivery of projects on time building reusable components, doing API integrations and in alignment with specifications. Dedicated to delivery of clean and efficiency code using React.js, Javascript, python, django, PHP, and CSS</p>
        </section>
    }

    function Description(){
        return <section className='section description' id='experience'>
            <h3 className='section-title'>EXPERIENCE</h3>

            <div className='general__display'>
                <div className='general__display__element'>
                    <a href='#' className='general__link'>
                        <div className='general_display__extra'>
                            <span className='year'>2022-2023</span>
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4>Frontend Developer - Lead Buyer Hub LLC</h4>
                                <p className='general__display__element__text'>
                                I designed and developed websites using HTML, CSS and JavaScript that met the client's requirements and enhanced the user experience. I also ensured the websites were compatible with various devices and browsers. I used Filezilla, FTP and other tools to upload and manage web content efficiently and securely.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                    <p className='general__display__element__skill'>HTML</p>
                                    <p className='general__display__element__skill'>CSS</p>
                                    <p className='general__display__element__skill'>JAVASCRIPT</p>
                                    <p className='general__display__element__skill'>FTC</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='#' className='general__link'>
                        <div className='general_display__extra'>
                            <span className='year'>2021-2022</span>
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4>Frontend Developer - Azordev</h4>
                                <p className='general__display__element__text'>
                                As a frontend developer, I worked on developing and maintaining responsive web applications using React, TypeScript, and Styled Components. I also ensured the quality and consistency of the user interface by fixing CSS bugs and following design specifications. I used Git for version control and collaboration with other developers.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                    <p className='general__display__element__skill'>Javascript</p>
                                    <p className='general__display__element__skill'>CSS</p>
                                    <p className='general__display__element__skill'>Html</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='#' className='general__link'>
                        <div className='general_display__extra'>
                            <span className='year'>2020-2021</span>
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4>Django Backend Developer - Conjunto Residencial Alta Vista</h4>
                                <p className='general__display__element__text'>
                                I created a Django app that managed the database of the building's tenants and facilitated the administrative accounting work of the condo.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>Django</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='#' className='general__link'>
                        <div className='general_display__extra'>
                            <span className='year'>2023-2023</span>
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4>GoTruster Landing Page</h4>
                                <p className='general__display__element__text'>
                                I developed a responsive landing page using React that adapted to different screen sizes and devices for GoTruster.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                    <p className='general__display__element__skill'>CSS</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
            </div>
            <a class='resume' href='download/QuinchoaIldebrandoHCV.pdf'>Full Resume 
            <svg viewBox="0 0 24 24" class='link-svg' xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
             </a>
        </section>
    }

    function Projects(){
        return <section className='section project' id='project'>
            <h3 className='section-title'>PROJECTS</h3>
            <div className='general__display'>
                <div className='hero'>
                <div className='general__display__element'>
                    <a href='https://ildebr.github.io/portfolio/' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/portfolio.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='#'>My Old Portfolio</a></h4>
                                <p className='general__display__element__text'>
                                I developed a responsive landing page using React that adapted to different screen sizes to list my experience and past projects.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                    <p className='general__display__element__skill'>JAVASCRIPT</p>
                                    <p className='general__display__element__skill'>CSS</p>
                                    <p className='general__display__element__skill'>HTML</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='https://gotruster.vercel.app/' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/gotruster.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='#'>Landing Page - GoTruster</a></h4>
                                <p className='general__display__element__text'>
                                I developed a responsive landing page using React that adapted to different screen sizes and devices for GoTruster.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                    <p className='general__display__element__skill'>JAVASCRIPT</p>
                                    <p className='general__display__element__skill'>CSS</p>
                                    <p className='general__display__element__skill'>HTML</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='https://ildebr.github.io/btrackbikes/' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/bike.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='https://ildebr.github.io/btrackbikes/'>Btrack</a></h4>
                                <p className='general__display__element__text'>
                                    Landing page built with html, css, Javascript and GSAP.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>GSAP</p>
                                    <p className='general__display__element__skill'>JAVASCRIPT</p>
                                    <p className='general__display__element__skill'>CSS</p>
                                    <p className='general__display__element__skill'>HTML</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='https://django-notes-app.onrender.com/landing' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/notes.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='https://django-notes-app.onrender.com/landing'>Notes</a></h4>
                                <p className='general__display__element__text'>
                                    Notes app built with Django.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>Django</p>
                                    <p className='general__display__element__skill'>Python</p>
                                    <p className='general__display__element__skill'>HTML</p>
                                    <p className='general__display__element__skill'>CSS</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='https://django-notes-app.onrender.com/landing' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/chat.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='#'>Chat app</a></h4>
                                <p className='general__display__element__text'>
                                    Chat App built with React and Node
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                    <p className='general__display__element__skill'>Node</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='https://django-notes-app.onrender.com/landing' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/pokeapi.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='#'>PokeApi</a></h4>
                                <p className='general__display__element__text'>
                                    React frontend app built fetching data from PokeAPi.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                    <p className='general__display__element__skill'>Node</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>

                <div className='general__display__element'>
                    <a href='https://ildebr.github.io/hote-rombu/' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/rombu.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='https://ildebr.github.io/hote-rombu/'>Rombu</a></h4>
                                <p className='general__display__element__text'>
                                I created a landing page for a hotel that displayed its features, services, and booking options.
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                    <p className='general__display__element__skill'>HTML</p>
                                    <p className='general__display__element__skill'>CSS</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='https://ildebr.github.io/ZahaHadid/' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/zaha.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='#'>Zaha Hadid Landing Page</a></h4>
                                <p className='general__display__element__text'>
                                I designed and developed a landing page that showcased the life and work of Zaha Hadid, an influential architect renowned for her distinctive shapes
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                    <p className='general__display__element__skill'>HTML</p>
                                    <p className='general__display__element__skill'>CSS</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                </div>
            </div>

        </section>
    }

    function Container(){
        return <div className='container land'>
            <Introduction />
            <div className='column'>
                <About />
                <Description />
                <Projects />
            </div>
        </div>
    }

    return <Container />
}