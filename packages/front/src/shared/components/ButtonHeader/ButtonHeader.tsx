import * as React from 'react';
import { Component } from 'react';
import * as styles from './buttonHeader.module.scss';

type ButtonHeaderProps = any;

export default class ButtonHeader extends Component<ButtonHeaderProps, any> {
    constructor(props: ButtonHeaderProps) {
        super(props);
    }
    render() {
        const { children, ...props } = this.props;
        return (
            <div className={styles.btn1} {...props}>
                {children}
            </div>
        );
    }
}
