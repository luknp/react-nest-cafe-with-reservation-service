import * as React from 'react';

interface IPageContentWrapperProps { }

interface IPageContentWrapperState { }

export default class PageContentWrapper extends React.PureComponent<IPageContentWrapperProps, IPageContentWrapperState> {
    public render() {
        return (
            <main style={{ minHeight: '700px' }}>
                {this.props.children}
            </main>
        );
    }
}
