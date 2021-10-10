import * as React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import * as styles from './header.module.scss';
import { LinkType } from '../../shared/interfaces/LinkType';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { navItems, accessibilityItems } from '../MobileNav/MobileNavScroll';
import { useAppContext, Themes } from '../../context/AppContext';
import contrastIcon from 'public/images/sys-kontrast.png';

const generateButton = ({ to, text, disabled = false, index, section, callback, icon }: LinkType) => {
    return (
        <Nav.Item as={'li'} key={index}>
            <Nav.Link as={ScrollLink}
                activeClass='active'
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={(e) => {
                    if (callback !== undefined) {
                        callback();
                    }
                }}>
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
            </Nav.Link>
        </Nav.Item>
    );
};

export const HeaderBottom: React.FC<{}> = () => {
    const [appState, dispatch] = useAppContext();
    const handleShowOrderModal = () => {
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
    return (
        <Container className={styles.headerBottom}>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Nav className='justify-content-center' as={'ul'}>
                        {navItems.map((item, indexx) => {
                            if (item.section === 'reservations') {
                                item.callback = handleShowOrderModal;
                            }
                            return generateButton({ ...item, index: indexx + 10 });
                        })}
                    </Nav>
                </Col>
                <Nav className='justify-content-center' as={'ul'}>
                    {accessibilityItems.map((item, index) => {
                        if (item.text === 'O') {
                            item.callback = handleToggleTheme;
                        } else if (item.text === 'A+') {
                            item.callback = handleIncFontSize;
                        } else if (item.text === 'A-') {
                            item.callback = handleDecFontSize;
                        }
                        return <Col key={index} className={styles.accesibilityMenu} md={2}>{generateButton({ ...item, index })}</Col>;
                    })}
                </Nav>
            </Row>
        </Container>
    );
};
