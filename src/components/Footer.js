import React from 'react';
import './Footer.css';
import {Button} from './Button.js';
import {Link} from 'react-router-dom';

function footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Lorem ipsum
                </p>
                <p className='footer subscription-text'>
                    Lorem ipsum
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email'placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline' >Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>About us</h2>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                    </div>
                    <div className='footer-links-items'>
                        <h2>About us</h2>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>About us</h2>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                    </div>
                    <div className='footer-links-items'>
                        <h2>About us</h2>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                        <Link to='/' >Hello</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo'>
                            LOGO HERE <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>NAME copyright 2020</small>
                    <div className= 'social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='facebook'>
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='instagram'>
                            <i className='fab fa-instagram-i'/>
                        </Link>
                        <Link className='social-icon-link github' to='/' target='_blank' aria-label='github'>
                            <i className='fab fa-github-g'/>
                        </Link>
                    </div>
                </div>
            </section>        
        </div>
    )
}

export default footer
