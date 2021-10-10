import * as React from 'react';
import * as light from './newsletter.module.scss';
import * as dark from './newsletterDark.module.scss';
import { useAppContext, Themes } from '../../../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export const ContactForm: React.FC<any> = () => {
    const [appState, dispatch] = useAppContext();
    const styles = appState.theme === Themes.light ? light : dark;
    // const styles = light;
    const bottomSectionStyle: React.CSSProperties = {
        marginTop: '3rem',
    };

    return (
        <>
            <div className={styles.newsletter}>
                <h2>
                    Zapisz się na
                    Newsletter
                </h2>

                <p>
                    Zapisz się na newsletter, żeby nie przegapić informacji o nadchodzących wydarzeniach i nowościach. Poinformowany zostaniesz również o zniżkach, promocjach i ofertach dnia. Bądź na bieżąco i już dziś odbierz 10% kod rabatowy!
                </p>

                <div className={styles.emailField}>
                    <input
                        type='text'
                        placeholder='Wpisz swój adres email'
                    />
                    <button type='button'>
                        <FontAwesomeIcon icon={faArrowRight} size={'2x'} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
