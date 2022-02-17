import React from 'react';
import './footer.scss';

import { TranslationContext } from '../../context/translation';

function Footer() {
  const translation = React.useContext(TranslationContext).footer;

  return (
    <footer className='footer section'>
      <ul className='footer__links'>
        {
          translation.links.map((el, index) => {
            return (
              <li className='footer__link-item' key={index}>
                <a className='footer__link' href={el.link} target='_blank' rel='noreferrer' title={el.title}>{el.text}</a>
              </li>
            )
          })
        }
      </ul>

      <p className='footer__copyright'>&copy; 2022. {translation.copyright}</p>
    </footer>
  )
}

export default Footer;