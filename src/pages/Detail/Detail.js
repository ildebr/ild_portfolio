import { useParams } from 'react-router-dom'
import './Detail.scss'
import { Link } from 'react-router-dom'


export default function Detail(){
    const {id} = useParams()
    console.log(id, 'here')


    function Connek(){
        return (
            <div className='experience-expanded'>
                <h2 className='experience-title'>Connek MVP</h2>
                <p>My Role: <strong>Frontend Developer</strong> </p>
                <h2>Technologies</h2>
                <p><strong>Svelte, Tailwind CSS</strong> </p>

                <h2>Description of my work</h2>
                <p>
                    Tasked with building dynamic and fully responsive web views following designs provided, implementing further designs modifications if needed. 
                    Enabling connections with existing APIs to create, update and delete records. Submitting pictures in base64, decode pictures in base64 to display them. 
                </p>

                <h2>Gallery</h2>
                <p>The following are screenshots taken from the different pages and components I developed during my time at connek</p>


                <img className='experience-img' src='../../img/connek/2.jpg' />
                <p className='caption'>Landing for Connek</p>

                <img className='experience-img' src='../../img/connek/1.jpg' />
                <p className='caption'>Final view of the main page for logged in service providers accounts.</p>

                <img className='experience-img' src='../../img/connek/3.jpg' />
                <p className='caption'>First iteration of the chat page.</p>
                <img className='experience-img' src='../../img/connek/4.jpg' />
                <p className='caption'>Second iteration of the chat page</p>
                <img className='experience-img' src='../../img/connek/5.jpg' />
                <p className='caption'>Employees view</p>
                <img className='experience-img' src='../../img/connek/6.jpg' />
                <p className='caption'>Employees alternate view</p>
                <img className='experience-img' src='../../img/connek/7.jpg' />
                <p className='caption'>Business page</p>
                <img className='experience-img' src='../../img/connek/8.jpg' />
                <p className='caption'>Search view</p>
                <img className='experience-img' src='../../img/connek/9.jpg' />
                <p className='caption'>Chat (phone view)</p>
                <img className='experience-img' src='../../img/connek/10.png' />
                <p className='caption'>Create new event component</p>
                <img className='experience-img' src='../../img/connek/11.png' />
                <p className='caption'>Create a new product component</p>
                <img className='experience-img' src='../../img/connek/12.png' />
                <p className='caption'>Employee component</p>
                <img className='experience-img' src='../../img/connek/13.png' />
                <p className='caption'>Search view (phone view)</p>
                <img className='experience-img' src='../../img/connek/14.png' />
                <p className='caption'>Search view (phone view)</p>
                <img className='experience-img' src='../../img/connek/15.png' />
                <p className='caption'>Search view (dark mode)</p>
                <img className='experience-img' src='../../img/connek/16.png' />
                <p className='caption'>Search view (light mode)</p>
                {/* <img className='experience-img' src='../../img/connek/17.png' />
                <p className='caption'></p> */}
            </div>
        )
    }

    function MyPageChat(){
        return (
            <div className='experience-expanded'>
                <h2 className='experience-title'>Mypage.chat</h2>
                <p>My Role: <strong>Frontend Developer & Backend Developer</strong> </p>
                <h2>Technologies</h2>
                <p><strong>Django, Javascript, CSS, HTML</strong> </p>

                {/* <h2>Description of the project</h2>
                <p>A site where </p> */}

                <h2>Description of my work</h2>
                <p>
                    Played a key role in developing and enhacing several features. 
                    Tasked with building dynamic and fully responsive web views following designs provided, implementing further designs modifications if needed. 
                    Enabling connections with existing APIs to create, update and delete records. Submitting pictures in base64, decode pictures in base64 to display them. 
                </p>

                <p>Some of my tasks were the following</p>

                <ul>
                    <li>Built an events calendar schedule using the event-calendar.js library. Ensuring cross-timezone time accuracy for seamless global coordination, making sure available time slots are displayed in the correct local time.</li>
                    <li>Coded responsive websites</li>
                    <li>Designed and implemented databases.</li>
                    <li>Built nested comment's section resembling that of reddit</li>
                    <li>Implemented API to receive data related to followings, users, comments.</li>
                    <li>Built user detail page. adapted new post functionality.</li>
                    <li>Built new email area.</li>
                    <li>Created invite.ics template file to be used to hold data related to the participants of a meeting. </li>

                </ul>

                <h2>Gallery</h2>
                <p>The following are screenshots taken from the different pages and components I developed during my time at connek</p>

                <img className='experience-img' src='../../img/mypagechat/1.png' />
                <p className='caption'>Compose Mail Page</p>
                {/* <img className='experience-img' src='../../img/mypagechat/2.png' />
                <p className='caption'>Search view (light mode)</p> */}
                <img className='experience-img' src='../../img/mypagechat/3.png' />
                <p className='caption'>Comments area</p>
                <img className='experience-img' src='../../img/mypagechat/4.png' />
                <p className='caption'>Schedule area</p>
                <img className='experience-img' src='../../img/mypagechat/5.png' />
                <p className='caption'>Calendar area</p>
                <img className='experience-img' src='../../img/mypagechat/6.png' />
                <p className='caption'>Calendar area with events</p>
                <img className='experience-img' src='../../img/mypagechat/7.png' />
                <p className='caption'>Create event</p>
                <img className='experience-img' src='../../img/mypagechat/8.png' />
                <p className='caption'>Schedule a call area</p>
                <video src='../../img/mypagechat/vid1.mp4' autoPlay loop controls="false" muted></video>
                <p className='caption'>Comments area</p>

            </div>
        )
    }
    return (
        <div className='load'>
            <div className='clickable-bg'>

            </div>

            <section className='detail-container'>
                <Link to={`/`}><img src='../../img/left-arrow.svg' className='left-arrow' /></Link>
                
                {id === 'connek' ? <Connek /> : <></> }
                {id === 'mypagechat' ? <MyPageChat /> : <></> }
                
            </section>
        </div>
    )
}