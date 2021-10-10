import * as React from 'react';
import { MainButton } from '../../../shared/components/MainButton/MainButton';
import { Section } from '../../../shared/components/Section/Section';
import * as light from './homeSection.module.scss';
import * as dark from './homeSectionDark.module.scss';
import { OrderModal } from './OrderModal/OrderModal';
import { useAppContext, Themes } from '../../../context/AppContext';

export const HomeSection: React.FC<any> = () => {
    const [appState, dispatch] = useAppContext();
    const styles = appState.theme === Themes.light ? light : dark;

    const handleShowOrderModal = (state: boolean) => {
        dispatch({ actionType: 'SET_ORDER_MODAL', payload: { ...appState, isOrderModal: state } });
    };

    const homeSectionStyle2: React.CSSProperties = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3))
        ,url("/public/images/bg_coffee.jpg")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        // <Section style={homeSectionStyle} isFullHeight={true}>
        // <Section isFullHeight={true}>
        <div className={styles.homeSectionStyle}>
            <div className={styles.contentContainer}>
                <h2>Witaj w</h2>
                <h2 className={styles.cafeNameText}>
                    <b>La Cafe</b>
                </h2>
                <div className={styles.paragraphDivider}></div>
                <h5>
                    {/* tslint:disable-next-line:max-line-length */}
                La Cafe to klimatyczna kawiarnia powstała w 2014 r., w której wypijesz aromatyczną kawę parzoną przez baristów a także zjesz coś pysznego – od przekąsek bo smaczne dania deserowe.
                <br />
                    <br />
                Bez obaw, że nie zastaniesz u nas wolnego miejsca na Twoje planowane spotkanie - po prostu zarezerwuj je ONLINE!
                </h5>
                <div className={styles.orderButton} onClick={() => handleShowOrderModal(true)}>
                    {/* <div onClick={() => handleShowOrderModal(true)}> */}
                    Rezerwuj Stolik
                    {/* <MainButton to=''>Rezerwuj Stolik</MainButton> */}
                </div>
            </div>
            <OrderModal
                handleShow={(state: boolean) => handleShowOrderModal(state)}
                show={appState.isOrderModal}
            />
        </div>
        // </Section>
    );
};

export default HomeSection;
