import * as React from 'react';
import { Component } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import * as styles from './nav.module.scss';
import { Link } from 'react-router-dom';
import { LinkType } from '../../shared/interfaces/LinkType';

export interface MobileNavProps {
  open: boolean;
  closeMobileMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default class MobileNav extends Component<MobileNavProps, {}> {
  constructor(props: MobileNavProps) {
    super(props);
  }

  componentDidUpdate(prevProps: MobileNavProps) {
    if (prevProps.open === false && prevProps.open !== this.props.open) {
      window.scrollTo(0, 0);
    }
  }

  // Don't hide when clicked on nav
  preventHide = (event: React.MouseEvent<HTMLDivElement>) => {
    event.nativeEvent.preventDefault();
  }

  generateButton({ to, text, disabled = false, index }: LinkType) {
    return (
      <Nav.Link
        disabled={disabled}
        onClick={this.props.closeMobileMenu as any}
        as={Link}
        to={to}
        key={index}
        eventKey={index}
      >
        {text}
      </Nav.Link>
    );
  }

  render() {
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
    const accessibilityItems: LinkType[] = [
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
      },
    ];
    return (
      <Nav
        defaultActiveKey='/home'
        className={[styles.nav1, 'st-menu'].join(' ')}
        onClick={this.preventHide}
      >
        <Row className='justify-content-center'>
          {accessibilityItems.map((item, index) => {
            return <Col key={index} xs={4}>{this.generateButton({ ...item, index })}</Col>;
          })}
        </Row>
        {navItems.map((item, indexx) => {
          return this.generateButton({ ...item, index: indexx + 10 });
        })}
      </Nav>
    );
  }
}
