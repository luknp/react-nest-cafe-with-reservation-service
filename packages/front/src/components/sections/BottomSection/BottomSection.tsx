import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import logo from 'public/images/logo.png';
import * as light from './bottomSection.module.scss';
import * as dark from './bottomSectionDark.module.scss';
import { useAppContext, Themes } from '../../../context/AppContext';

export const BottomSection: React.FC<any> = () => {
    const [appState, dispatch] = useAppContext();
    const styles = appState.theme === Themes.light ? light : dark;
    return (
        <>
            <div className={styles.bottomSection}>
                <div className={styles.row}>
                    <div className={styles.aboutUs}>
                        <h4 className={styles.title}>O nas</h4>
                        <div className={styles.logo}>
                            <img
                                src={logo}
                                alt='logo'
                                className='logo'
                            />{' '}
                        </div>
                        <p>
                            {/* tslint:disable-next-line:max-line-length */}
                            La Cafe to mały lokal o wielkim sercu. Właśnie ten mały metraż naszej sali wprowadza niepowtarzalny nastrój i rodzinną atmosferę. U nas możesz czuć się jak u siebie w domu, możesz stać się naszym przyjacielem.
                        </p>
                    </div>

                    <div className={styles.openingHours}>
                        <h4 className={styles.title}>Godziny otwarcia</h4>
                        <ul>
                            <li>Poniedziałek <span>9:00-22:00</span></li>
                            <li className={styles.today}>Wtorek <span>9:00-22:00</span></li>
                            <li>Środa <span>9:00-22:00</span></li>
                            <li>Czwartek <span>9:00-22:00</span></li>
                            <li>Piątek <span>9:00-23:30</span></li>
                            <li>Sobota <span>14:00-23:30</span></li>
                            <li>Niedziela <span>Zamknięte</span></li>
                        </ul>
                    </div>

                    <div className={styles.contact}>
                        <h4 className={styles.title} >Skontaktuj się z nami</h4>
                        <h5>La Cafe</h5>
                        <h5>ul. Senatorska 13/15</h5>
                        <h5>00-075 Warszawa</h5>
                        <h5>tel. + 48 22 829 64 64</h5>
                        <h5>kontakt@la-cafe.pl</h5>
                        <h5>www.la-cafe.pl</h5>
                        <h5>ZNAJDŹ NAS</h5>
                        <div className={styles.ikons}>
                            <a href='#'>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    size={'2x'}
                                />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon icon={faTwitter} size={'2x'} />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size={'2x'}
                                />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    size={'2x'}
                                />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon icon={faYoutube} size={'2x'} />
                            </a>
                        </div>                </div>
                </div>

                <footer className={styles.footerContainer}>
                    <div className={styles.bar}></div>
                    <p className={styles.bottomText}>
                        &copy; 2020 Created by Cafe All Rights Reserved
                    </p>
                </footer>

                {/* <div className={styles.newsletter}>
                    <h2>
                        Zapisz się na
                        <span>Newsletter</span>
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet, natus sequi maxime
                        assumenda.
                    </p>

                    <div className={styles.emailField}>
                        <input
                            type='text'
                            placeholder='Enter Your Email Address'
                        />
                        <button type='button'>
                            <FontAwesomeIcon icon={faArrowRight} size={'2x'} />
                        </button>
                    </div>
                </div>
                <footer className={styles.footerContainer}>
                    <div className={styles.footerUprow}>
                        <img
                            src={logo}
                            alt='zdjęcie baristy'
                            className='logo'
                        />{' '}
                        <p>
                            Lorem ipsum dolor sit amet, natus sequi maxime
                            assumenda.
                        </p>
                    </div>
                    <div className={styles.socialMedia}>
                        <h3>Znajdz nas</h3>
                        <div className={styles.ikons}>
                            <a href='#'>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    size={'2x'}
                                />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon icon={faTwitter} size={'2x'} />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size={'2x'}
                                />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    size={'2x'}
                                />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon icon={faYoutube} size={'2x'} />
                            </a>
                        </div>
                    </div>
                    <p className={styles.bottomText}>
                        &copy; 2020 Created by Cafe All Rights Reserved
                    </p>
                </footer> */}
            </div>
        </>
    );
};

export default BottomSection;
