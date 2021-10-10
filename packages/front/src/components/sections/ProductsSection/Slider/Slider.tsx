import * as React from 'react';
import ReactSlider from 'react-slick';
import * as light from './slider.module.scss';
import * as dark from './sliderDark.module.scss';
import { useAppContext, Themes } from '../../../../context/AppContext';
import { IProducts } from '../mockProducts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProductSliderProps {
    products: IProducts[];
}

export const ProductsSlider: React.FC<ProductSliderProps> = ({
    products,
}: ProductSliderProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <ReactSlider {...settings}>
                {products.map((item) => {
                    return <ProductCard key={item.id} {...item}></ProductCard>;
                })}
            </ReactSlider>
        </div>
    );
};

export default ProductsSlider;

const ProductCard: React.FC<IProducts> = ({ id, name, image }: IProducts) => {
    const [appState, dispatch] = useAppContext();
    const styles = appState.theme === Themes.light ? light : dark;
    return (
        <div className={styles.card}>
            <img src={image} alt={`zdjecie kawy ${name}`} className={styles.coffeeImage} />
            <div className={styles.bottomRow}>
                <h4>{name}</h4>
                {/* <FontAwesomeIcon icon={faPlus} size={"2x"} /> */}
            </div>
        </div>
    );
};
