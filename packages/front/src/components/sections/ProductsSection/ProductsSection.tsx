import * as React from 'react';
import { MainButton } from '../../../shared/components/MainButton/MainButton';
import { Section } from '../../../shared/components/Section/Section';
import * as light from './productsSection.module.scss';
import * as dark from './productsSectionDark.module.scss';
import { useAppContext, Themes } from '../../../context/AppContext';

import Slider from './Slider/Slider';
import barista from 'public/images/barista.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { products } from './mockProducts';

export const ProductsSection: React.FC<any> = () => {
    const [appState, dispatch] = useAppContext();
    const styles = appState.theme === Themes.light ? light : dark;

    const productsSectionStyle: React.CSSProperties = {
        marginTop: '3rem',
        maxHeight: '200vh',
    };

    return (
        <Section style={productsSectionStyle} isFullHeight={false} id='products'>
            <div className={styles.referenceContainer}>
                <div className={styles.background}> </div>
                <div className={styles.card}>
                    <FontAwesomeIcon icon={faQuoteLeft} size={'2x'} />
                    <h5>
                        {/* tslint:disable-next-line:max-line-length */}
                        Osobiście czuwam nad jakością serwowanych przez nas dań, deserów, przekąsek i napojów. Słucham waszych uwag i wyciągam wnioski. Zapraszam do mojego małego świata. Zapraszam do La Cafe!
                    </h5>
                    <img
                        src={barista}
                        alt='zdjęcie baristy'
                        className={styles.baristaImage}
                    />
                    <h3>Adam Adacki</h3>
                    <h6>Barista</h6>
                </div>
            </div>

            <div className={styles.productsContainer}>
                <h5>Odkryj</h5>
                <h4>NASZE PRODUKTY</h4>
                <Slider products={products} />
            </div>
            {/* <div className={styles.bottomBar}> </div> */}
        </Section>
    );
};

export default ProductsSection;
