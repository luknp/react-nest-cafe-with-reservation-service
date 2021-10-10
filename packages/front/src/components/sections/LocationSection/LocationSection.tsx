import * as React from 'react';
import * as light from './locationSection.module.scss';
import * as dark from './locationSectionDark.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useAppContext, Themes } from '../../../context/AppContext';

export const LocationSection: React.FC<any> = () => {
    const [appState, dispatch] = useAppContext();
    const styles = appState.theme === Themes.light ? light : dark;

    const bottomSectionStyle: React.CSSProperties = {
        marginTop: '3rem',
    };

    return (
        <>
            <div className={styles.locationtSection}>
                <div className={styles.locationLayout}>
                    <div className={styles.locationDescContainer}>
                        <h3>Odwiedź nas</h3>
                        <div className={styles.head}>
                            <h3>Tu jesteśmy</h3>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size={'2x'} />
                        </div>
                        <div className={styles.description}>
                            {/* tslint:disable-next-line:max-line-length */}
                            <p>Kawiarnia La Cafe mieści się w budynku XVI wiecznego pałacu Prymasowskiego, u zbiegu ulic Senatorskiej i Miodowej. Kawiarnia La Cafe to miejsce, w którym historia łączy się z nowoczesnością. W XVIII wieku mieściła się tu słynna cukiernia i lodziarnia rzymskiego nuncjusza papieskiego Carluzzo Palmoniego, uważana za najlepszą w Warszawie.</p>
                        </div>
                        <h4>Warszawa</h4>
                        <h4>ul. Senatorska 13/15</h4>
                    </div>
                    <div className={styles.map}>
                        <iframe
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                            }}
                            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13249.247068040606!2d151.20960562674117!3d-33.8816236491114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1468899355787`}
                            frameBorder='0'
                        />

                    </div>
                </div>

            </div>
        </>
    );
};

export default LocationSection;
