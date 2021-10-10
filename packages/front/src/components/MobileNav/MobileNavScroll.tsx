import * as React from 'react';
import { Component } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import * as light from './nav.module.scss';
import * as dark from './navDark.module.scss';
import { LinkType } from '../../shared/interfaces/LinkType';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useAppContext, Themes } from '../../context/AppContext';
import contrastIcon from 'public/images/sys-kontrast.png';

export const navItems: LinkType[] = [
    {
        to: '/',
        text: 'Start',
        section: 'start',
    },
    {
        to: '/kawy',
        text: 'Kawy',
        section: 'products',
    },
    {
        to: '/rezerwacje',
        text: 'Rezerwacje',
        section: 'reservations',
        // callback: handleShowOrderModal,
    },
    {
        to: '/kontakt',
        text: 'Kontakt',
        section: 'contact',
    },
];
export const accessibilityItems: LinkType[] = [
    {
        to: '',
        text: 'A+',
    },
    {
        to: '',
        text: 'A-',
    },
    {
        to: '',
        text: 'O',
        icon: contrastIcon,
    },
];

export interface MobileNavProps {
    open: boolean;
    closeMobileMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
}

// export default class MobileNav extends Component<MobileNavProps, {}> {
export const MobileNav: React.FC<MobileNavProps> = (props: MobileNavProps) => {
    const [appState, dispatch] = useAppContext();
    const styles = appState.theme === Themes.light ? light : dark; const handleShowOrderModal = () => {
        dispatch({ actionType: 'SET_ORDER_MODAL', payload: { ...appState, isOrderModal: true } });
    };
    const handleToggleTheme = () => {
        dispatch({ actionType: 'TOGGLE_THEME' });
    };
    const handleIncFontSize = () => {
        dispatch({ actionType: 'INC_FONT_SIZE' });
    };
    const handleDecFontSize = () => {
        dispatch({ actionType: 'DEC_FONT_SIZE' });
    };
    // constructor(props: MobileNavProps); {
    //     super(props);

    // }
    // const[appState, dispatch] = useAppContext();

    // componentDidUpdate(prevProps: MobileNavProps) {
    //     if (prevProps.open === false && prevProps.open !== this.props.open) {
    //         window.scrollTo(0, 0);
    //     }
    // }

    // Don't hide when clicked on nav
    const preventHide = (event: React.MouseEvent<HTMLDivElement>) => {
        event.nativeEvent.preventDefault();
    };

    const generateButton = ({ to, text, disabled = false, index, section, callback, icon }: LinkType) => {
        return (
            <Nav.Link
                as={ScrollLink}
                // disabled={disabled}
                activeClass='active'
                onClick={(e) => {
                    props.closeMobileMenu(e);
                    if (callback !== undefined) {
                        callback();
                    }
                }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                to={section}
                key={index}
                eventKey={index}
            >
                {icon === undefined &&
                    text
                }
                {icon !== undefined &&
                    <img
                        src={contrastIcon}
                        alt='ikona zmiany kontrastu'
                        className={styles.contrastIcon}
                    />
                }
            </Nav.Link >
        );
    };

    return (
        <Nav
            defaultActiveKey='/home'
            className={[styles.nav1, 'st-menu'].join(' ')}
            onClick={preventHide}
        >
            <Row className='justify-content-center'>
                {accessibilityItems.map((item, index) => {
                    if (item.text === 'O') {
                        item.callback = handleToggleTheme;
                    } else if (item.text === 'A+') {
                        item.callback = handleIncFontSize;
                    } else if (item.text === 'A-') {
                        item.callback = handleDecFontSize;
                    }
                    return <Col key={index} xs={4}>{generateButton({ ...item, index })}</Col>;
                })}
            </Row>
            {navItems.map((item, indexx) => {
                if (item.section === 'reservations') {
                    item.callback = handleShowOrderModal;
                }
                return generateButton({ ...item, index: indexx + 10 });
            })}
        </Nav>
    );
};
