
import './Home.scss'
export default function Home() {
    function Header(){
        return <header className="section site-header">
            <div className='container'>
                <div className='site-links'>
                    <a href='#' className='site-link'>ABOUT ME</a>
                    <a href='#' className='site-link'>MY PROJECTS</a>
                    <a href='#' className='site-link'>CONTACT</a>
                </div>
            </div>
        </header>
    }


    function AboutMe(){
        return <section className='section about-me'>
            <div className='container'>
                <h2>ABOUT ME</h2>

                <div className='two--columns'>
                    <div className='column img-section'>
                        <img src='' className='my-img' />
                    </div>

                    <div className='column about__me__text'>
                        <p>Lorem</p>
                        <p>My friends call me Jesu or Maria. I am 30 years old and I love web design. I studied Commercial Engineering at Universidad Católica, where I gained an important perspective on business and management.</p>
                        <a className='download-btn'>DOWNLOAD MY CV</a>
                    </div>
                </div>
            </div>
        </section>
    }

    function Projects(){
        return <section className='section projects'>
            <div className='container'>
                <div className='projects__container'>
                    <div className='projects__container__element'>
                        <img src='' />
                        <div className='hover__element'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    }


    function Skillset(){
        return <section className='section skills'>
            <div className='container'>

            </div>
        </section>
    }


    function ContactDetails(){
        return <section className='section contact'>

        </section>
    }


    


    return <>
    <Header />
    <AboutMe />
    <Projects />
    </>
}
