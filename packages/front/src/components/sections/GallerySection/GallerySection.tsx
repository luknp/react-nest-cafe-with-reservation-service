import * as React from 'react';
import coffee1 from 'public/images/gallery/coffee1.png';
import coffee3 from 'public/images/gallery/coffee3.png';
import coffee5 from 'public/images/gallery/coffee5.png';
import coffee6 from 'public/images/gallery/coffee6.png';
import coffee7 from 'public/images/gallery/coffee7.png';
import coffee8 from 'public/images/gallery/coffee8.png';
import coffee10 from 'public/images/gallery/coffee10.png';
import './styles.scss';
import ImageGallery from 'react-image-gallery';
import * as light from './gallerySection.module.scss';
import * as dark from './gallerySectionDark.module.scss';
import { useAppContext, Themes } from '../../../context/AppContext';

const images = [
    {
        original: coffee1,
        thumbnail: coffee1,
    },
    {
        original: coffee3,
        thumbnail: coffee3,
    },
    {
        original: coffee5,
        thumbnail: coffee5,
    },
    {
        original: coffee6,
        thumbnail: coffee6,
    },
    {
        original: coffee7,
        thumbnail: coffee7,
    },
    {
        original: coffee8,
        thumbnail: coffee8,
    },
    {
        original: coffee10,
        thumbnail: coffee10,
    },
];

export const GellerysSection: React.FC<any> = () => {
    const [appState, dispatch] = useAppContext();
    const styles = appState.theme === Themes.light ? light : dark;
    const gallerySectionStyle: React.CSSProperties = {
        margin: '1rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    };

    return (
        <>
            {/* <div style={gallerySectionStyle} id='gallery'> */}
            <div className={styles.gallerySection} id='gallery'>
                <h5>Odkryj</h5>
                <h4>NASZĄ GALERIĘ</h4>
                <div className={styles.galleryContainer}>
                    <ImageGallery items={images} />
                </div>
            </div>
            {/* <div className={styles.bottomBar}> </div> */}
        </>
    );
};

export default GellerysSection;
