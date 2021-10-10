import * as React from 'react';
import * as light from './contactSection.module.scss';
import * as dark from './contactSectionDark.module.scss';
import ContactForm from './ContactForm/ContactForm';
import Newsletter from './Newsletter/Newsletter';
import { useAppContext, Themes } from '../../../context/AppContext';

export const ContactSection: React.FC<any> = () => {
    const [appState, dispatch] = useAppContext();
    // const styles = appState.theme === Themes.light ? light : dark;
    const styles = light;
    return (
        <>
            <div className={styles.contactSection} id='contact'>
                <div className={styles.newsletterContainer}>
                    <Newsletter />
                </div>
                <div className={styles.contactFormContainer}>
                    <ContactForm />
                </div>
            </div>

        </>
    );
};
export default ContactSection;
