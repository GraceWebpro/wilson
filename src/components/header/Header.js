import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaApple, FaSpotify, FaTiktok, FaMusic, FaVideo, FaBars, FaTimes } from 'react-icons/fa'
import { GiNewspaper } from 'react-icons/gi'
import { RiUserFollowFill } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib';
import Logo from '../../assets/cover-img.jpg'


const Header = () => {
    
  return (
    <div>
        <input type='checkbox' id='check' />
        <label htmlFor='check'>
            <FaBars id='btn' />
            <FaTimes id='cancel' />
        </label>
        <div className='navbar'>
            
            <div className='header-list'>
                
                <Link className='link' to='/music'>Music</Link>
                <Link className='link' to='/news'>News</Link>
                <Link style={{textDecoration:'none'}} to='/'><h3 className='web-name'>Michael O. Wilson</h3></Link>
                <Link className='link' to='/video'>Video</Link>
                <div className='dropdown'>
                    <button className='drop-link link'>Follow</button>
                    <div className='drop-menu follow-grid'>
                        <div className='down-links'>
                            <div className='drop-icon'>
                                <a href='https://web.facebook.com/michaelo.wilson07?_rdc=1&_rdr' onClick="location.replace('https://web.facebook.com/michaelo.wilson07?_rdc=1&_rdr')"><IconContext.Provider value={{color: "white", size: "20px" }}><FaFacebookF onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />&nbsp;&nbsp;Facebook</IconContext.Provider></a>
                            </div>
                            <div>
                                <a href='https://twitter.com/MichaelOWilson3'><IconContext.Provider value={{color: "white", size: "20px" }}><FaTwitter onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />&nbsp;&nbsp;Twitter</IconContext.Provider></a>
                            </div>
                            <div>
                            <a href='https://www.instagram.com/michaelowilson1/'><IconContext.Provider value={{color: "white", size: "20px" }}><FaInstagram onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />&nbsp;&nbsp;Instagram</IconContext.Provider></a>
                            </div>
                            <div>
                            <a href='https://www.youtube.com/c/MichaelOWilson'><IconContext.Provider value={{color: "white", size: "20px" }}><FaYoutube onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />&nbsp;&nbsp;Youtube</IconContext.Provider></a>
                            </div>
                            <div>
                            <a href='https://music.apple.com/ng/artist/michael-o-wilson/1573150748'><IconContext.Provider value={{color: "white", size: "20px" }}><FaApple onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />&nbsp;&nbsp;Apple</IconContext.Provider></a>
                            </div>
                            <div>
                            <a href='https://open.spotify.com/artist/4brI3sZxiTwETXLpCpVCc2'><IconContext.Provider value={{color: "white", size: "20px" }}><FaSpotify onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />&nbsp;&nbsp;Spotify</IconContext.Provider></a>
                           </div>
                            <div>
                            <a href='https://www.tiktok.com/@michaelo.wilson?lang=en'><IconContext.Provider value={{color: "white", size: "20px" }}><FaTiktok onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />&nbsp;&nbsp;Tiktok</IconContext.Provider></a>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
        <div className="list">
            <header>Menu</header>
            <ul>
                <li><Link className='drop-link' to='/music'><IconContext.Provider value={{color: "white", size: "20px" }}><FaMusic />&nbsp;&nbsp;Music</IconContext.Provider></Link></li>
                <li><Link className='drop-link' to='/news'><IconContext.Provider value={{color: "white", size: "20px" }}><GiNewspaper />&nbsp;&nbsp;News</IconContext.Provider></Link></li>
                <li><Link className='drop-link' to='/video'><IconContext.Provider value={{color: "white", size: "20px" }}><FaVideo />&nbsp;&nbsp;Video</IconContext.Provider></Link></li>
                <li>
                    <div className='dropdown'>
                        <button className='drop-link'><IconContext.Provider value={{color: "white", size: "20px" }}><RiUserFollowFill />&nbsp;&nbsp;Follow</IconContext.Provider></button>
                        <div className='drop-menu follow-grid'>
                            <div>
                             <IconContext.Provider value={{color: "white", size: "18px" }}><FaFacebookF onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} /><a href='https://web.facebook.com/michaelo.wilson07?_rdc=1&_rdr' style={{fontSize: '18px'}}>Facebook</a></IconContext.Provider>
                            </div> 
                            <div>  
                                <a href='https://twitter.com/MichaelOWilson3' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaTwitter onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />Twitter</IconContext.Provider></a>
                            </div>
                            <div> 
                                <a href='https://www.instagram.com/michaelowilson1/' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaInstagram onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />Instagram</IconContext.Provider></a>
                            </div>
                            <div>
                                <a href='https://www.youtube.com/c/MichaelOWilson' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaYoutube onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />Youtube</IconContext.Provider></a>
                            </div>
                            <div>      
                                <a href='https://open.spotify.com/artist/4brI3sZxiTwETXLpCpVCc2' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaSpotify onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />Spotify</IconContext.Provider></a>
                            </div>
                            <div>   
                                <a href='https://www.tiktok.com/@michaelo.wilson?lang=en' style={{fontSize: '18px'}}><IconContext.Provider value={{color: "white", size: "18px" }}><FaTiktok onMouseOver={({target}) => target.style.color="gray"} onMouseOut={({target}) => target.style.color="#fff"} />Tiktok</IconContext.Provider></a>
                            </div>
                        </div>

                        
                    </div>
                </li>
                <iframe className='sub-btn' title='subscribe' width="250" height="305" src="https://d2b30406.sibforms.com/serve/MUIEAIjCHW_ZFlzNA_EHog5D22qgpTHf77xmUVF9Ny1MtuWtH7ygonOU6xRCkXiTXDsKUxVr_yNyf5oeN7JXmxGIh_4vciQ8W4aiz5grM5HnW7GCHzJY78q31YE3Xffo96djZg7MOgcMudY0Gxh6NBSjL9UgnqFCrABKMf6d134iAu17cmYW2g4KykRgV2P2M7ZpL-3EuKITc1kL" frameBorder="0" scrolling="no" allowFullScreen style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}></iframe>
            </ul>
        </div>
        <section>
          <img src={Logo} alt='cover' width='100%' height='50%' />
        </section>
        
        
    </div>
  )
}

export default Header