import * as React from 'react';
import * as styles from './header.module.scss';
import HeaderTop from './HeaderTop';
import { HeaderBottom } from './HeaderBottomScroll';

export interface HeaderProps {
    toggleMobileMenu: () => void;
    isMobileMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <header className={styles.header}>
            <HeaderTop toggleMobileMenu={props.toggleMobileMenu} isMobileMenuOpen={props.isMobileMenuOpen} />
            <HeaderBottom />
        </header>
    );
};
