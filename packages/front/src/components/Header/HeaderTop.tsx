import * as React from 'react';
import { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonHeader from '../../shared/components/ButtonHeader/ButtonHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faClipboard, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as styles from './header.module.scss';
import { HeaderProps } from './Header';
import { Link } from 'react-router-dom';

export interface HeaderTopProps {
    toggleMobileMenu: HeaderProps['toggleMobileMenu'];
    isMobileMenuOpen: HeaderProps['isMobileMenuOpen'];
}

export default class HeaderTop extends PureComponent<HeaderTopProps, {}> {
    constructor(props: HeaderTopProps) {
        super(props);
    }

    clickHandler = () => {
        this.props.toggleMobileMenu();
    }

    render() {
        const { isMobileMenuOpen } = this.props;
        return (
            <Container className={styles.headerTop}>
                <Row>
                    <Col xs={4} sm={4} md={4} className={'p-0 m-0'}>
                        <ButtonHeader onClick={this.clickHandler}>
                            <a>
                                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size={'1x'} />
                            </a>
                        </ButtonHeader>
                    </Col>
                    <Col xs={4} sm={4} md={4} className={'p-0 m-0'}>
                        <ButtonHeader>
                            <a>
                                <FontAwesomeIcon icon={faUser} size={'1x'} />
                            </a>
                        </ButtonHeader>
                    </Col>
                    <Col xs={4} sm={4} md={4} className={'p-0 m-0'}>
                        <ButtonHeader>
                            <Link to='/cart'>
                                <FontAwesomeIcon icon={faClipboard} size={'1x'} />
                            </Link>
                        </ButtonHeader>
                    </Col>
                </Row>
            </Container>
        );
    }
}
