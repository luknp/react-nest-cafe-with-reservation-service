import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import * as styles from './header.module.scss';
import { LinkType } from '../../shared/interfaces/LinkType';

const generateButton = ({ to, text, disabled = false, index }: LinkType) => {
    return (
        <Nav.Item as={'li'} key={index}>
            <Nav.Link as={Link} to={to} disabled={disabled}>
                {text}
            </Nav.Link>
        </Nav.Item>
    );
};

const navItems: LinkType[] = [
    {
        to: '/',
        text: 'Start',
    },
    {
        to: '/kawy',
        text: 'Kawy',
    },
    {
        to: '/rezerwacje',
        text: 'Rezerwacje',
    },
    {
        to: '/kontakt',
        text: 'Kontakt',
    },
];

export const HeaderBottom: React.FC<{}> = () => {
    return (
        <Container className={styles.headerBottom}>
            <Row>
                <Col md={3}>LOGO</Col>
                <Col md={6}>
                    <Nav className='justify-content-center' as={'ul'}>
                        {navItems.map((item, index) => generateButton({ ...item, index }))}
                    </Nav>
                </Col>
                <Col md={3}>A-+...</Col>
            </Row>
        </Container>
    );
};
