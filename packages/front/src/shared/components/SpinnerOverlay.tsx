import * as React from 'react';
import { Spinner } from 'react-bootstrap';

interface ISpinnerOverlayProps { }

interface ISpinnerOverlayState { }

export default class SpinnerOverlay extends React.Component<ISpinnerOverlayProps, ISpinnerOverlayState> {
    public render() {
        return (
            <div
                className={'p-3'}
                style={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%', minHeight: '200px',
                        height: '100%',
                        backgroundColor: 'rgba(240,240,240, 0.3)',
                    }
                }>
                <Spinner animation='border' />
            </div>
        );
    }
}
