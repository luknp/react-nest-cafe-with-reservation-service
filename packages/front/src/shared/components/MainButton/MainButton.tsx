import * as React from 'react';
import * as styles from './mainButton.module.scss';
import { Link } from 'react-router-dom';
interface IMainButtonProps {
    href?: string;
    className?: string;
    to: string;
    children?: React.ReactNode;
}

export const MainButton: React.FC<IMainButtonProps> = (props: IMainButtonProps) => {
    const { children, className, ...rest } = props;
    return (
        <Link {...rest} className={[styles.btn, className].join(' ')}>
            {children}
        </Link>
    );
};
