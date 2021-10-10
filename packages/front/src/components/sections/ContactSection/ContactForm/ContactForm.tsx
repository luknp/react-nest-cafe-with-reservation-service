import * as React from 'react';
import * as light from './contactFormSection.module.scss';
import * as dark from './contactFormSectionDark.module.scss';
import { useAppContext, Themes } from '../../../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export const ContactForm: React.FC<any> = () => {
    const [appState, dispatch] = useAppContext();
    const styles = appState.theme === Themes.light ? light : dark;
    const bottomSectionStyle: React.CSSProperties = {
        marginTop: '3rem',
    };

    return (
        <>
            {/* <div className={styles.contactForm}> */}
            <form className={styles.form}>
                <h2>NAPISZ DO NAS</h2>
                <p> Imię i Nazwisko:</p><input placeholder='Jan Kowalski'></input>
                <p>Email:</p><input placeholder='example@example.pl'></input>
                <p>Wiadomość:</p><input placeholder='Treść wiadomości..'></input>
                <div className={styles.button}>Wyślij</div>
                {/* <div className={styles.contactFormBottom}>
                        <FontAwesomeIcon icon={faPhone} size={'1x'} />
                        001 1023 567
                        <FontAwesomeIcon icon={faEnvelope} size={'1x'} />
                        contact@company.com
                    </div> */}
            </form>
            {/* </div> */}
        </>
    );
};

export default ContactForm;
