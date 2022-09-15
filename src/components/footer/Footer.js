import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaApple, FaSpotify, FaAmazon, FaTiktok } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {

  return (
    
    <div className='footer'>
      <iframe className='letter' title="Newsletter" width="300" height="305" src="https://d2b30406.sibforms.com/serve/MUIEANbNX-rsJ3vxiqiQcukTelmv0G6K6pMKukYRikw2rbUQMen47wVdJsaQg-Z7vCyS2-J963SSYZCK_YKkGW2z2286DKNvWP7VZIc1UIkOsycOu22X4-f4tVI8AlACLQllUlE4iz9i5_SUJVdgWYZ-H6eXMqSgJyOpoeh8d7QwZAQwkipvOEmg7cclhuZp8ZQy28tntO1vXTTm" frameBorder="0" scrolling="no" allowFullScreen ></iframe>
      <div className='icon'>

        <a href='https://web.facebook.com/michaelo.wilson07?_rdc=1&_rdr'><IconContext.Provider value={{color: "white", size: "20px" }}><FaFacebookF onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://twitter.com/MichaelOWilson3'><IconContext.Provider value={{color: "white", size: "20px" }}><FaTwitter onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://www.instagram.com/michaelowilson1/'><IconContext.Provider value={{color: "white", size: "20px" }}><FaInstagram onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://www.youtube.com/c/MichaelOWilson'><IconContext.Provider value={{color: "white", size: "20px" }}><FaYoutube onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://music.apple.com/ng/artist/michael-o-wilson/1573150748'><IconContext.Provider value={{color: "white", size: "20px" }}><FaApple onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://open.spotify.com/artist/4brI3sZxiTwETXLpCpVCc2'><IconContext.Provider value={{color: "white", size: "20px" }}><FaSpotify onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://music.amazon.com/artists/B09MR7YSZG/michael-o-wilson'><IconContext.Provider value={{color: "white", size: "20px" }}><FaAmazon onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
        &nbsp;&nbsp;
        <a href='https://www.tiktok.com/@michaelo.wilson?lang=en'><IconContext.Provider value={{color: "white", size: "20px" }}><FaTiktok onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /></IconContext.Provider></a>
      
      </div>
      <br />
      <Link to='/login' className='admin'>Admin</Link>

    </div>
    
  )
}

export default Footer