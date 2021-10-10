import * as React from 'react';
import Alert, { AlertProps } from 'react-bootstrap/Alert';

interface IPageAlertProps extends AlertProps {
    styles?: React.CSSProperties;
}

const PageAlert: React.FunctionComponent<IPageAlertProps> = React.forwardRef((props: IPageAlertProps, ref) => {
    return (
        <Alert ref={ref} {...props} style={{ textAlign: 'center', ...props.styles}} className='py-5'>
            {props.children}
        </Alert>
    );
});

export default PageAlert;
