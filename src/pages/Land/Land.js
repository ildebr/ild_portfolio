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
    }
    function Introduction(){
        return <section className='introduction'>
           <div className='header'>
                <h1 className='header-title'>Ildebrando</h1>
                <h2 className='sub-head'>Web developer</h2>

                <p>Skilled developer with experience working with teams in full-stack development lifecycles. Contributes to delivery of projects on time building reusable components, doing API integrations and in alignment with specifications. Dedicated to delivery of clean and efficiency code using React.js, Javascript, python, django, PHP, and CSS</p>
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
                        ABOUT
                    </a>
                    
                </div>
                <div className='page__slider__element'>
                    <div className='line'></div>
                    <a href='#project' className='page__slider__name'>
                        ABOUT
                    </a>
                    
                </div>
            </div>
            <div className='socials'>
            <a href='#'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6 svg-ele" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
            <a href='#'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 svg-ele" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
            </a>
            </div>
        </section>
    }

    function About(){
        return <section className='section about' id='about'>
            <h3 className='section-title'>ABOUT</h3>

            <p>Lorem lorem lorem sadsadsadqweio jewq ewqceqwneoqwncewq wcewoqcewqmce wqecwqkecwqe wqecowqkcew</p>
        </section>
    }

    function Description(){
        return <section className='section description' id='experience'>
            <h3 className='section-title'>EXPERIENCE</h3>

            <div className='general__display'>
                <div className='general__display__element'>
                    <a href='#' className='general__link'>
                        <div className='general_display__extra'>
                            <span className='year'>2023-2023</span>
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4>Software developer</h4>
                                <p className='general__display__element__text'>
                                    Deliver lorem lorem lorem lro
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
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
                                <h4>Software developer</h4>
                                <p className='general__display__element__text'>
                                    Deliver lorem lorem lorem lro
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
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
                                <h4>Software developer</h4>
                                <p className='general__display__element__text'>
                                    Deliver lorem lorem lorem lro
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
            </div>
        </section>
    }

    function Projects(){
        return <section className='section project' id='project'>
            <h3 className='section-title'>PROJECTS</h3>
            <div className='general__display'>
                <div className='hero'>
                <div className='general__display__element'>
                    <a href='#' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/bike.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='#'>Software developer</a></h4>
                                <p className='general__display__element__text'>
                                    Deliver lorem lorem lorem lro
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='#' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/bike.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='#'>Software developer</a></h4>
                                <p className='general__display__element__text'>
                                    Deliver lorem lorem lorem lro
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
                                </div>
                            </header>
                            
                        </div>
                    </a>
                </div>
                <div className='general__display__element'>
                    <a href='#' class='general__link'>
                        <div className='general_display__extra'>
                            <img src='img/bike.png' className='extra-img' />
                        </div>

                        <div className='general__display__main__area'>
                            <header className='general__display__element__title'>
                                <h4><a href='#'>Software developer</a></h4>
                                <p className='general__display__element__text'>
                                    Deliver lorem lorem lorem lro
                                </p>
                                <div className='general__display__element__skills'>
                                    <p className='general__display__element__skill'>React</p>
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