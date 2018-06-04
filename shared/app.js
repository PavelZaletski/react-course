import React from 'react';
import { ErrorBoundary } from './components/errorBoundary';
import Footer from './components/footer';

export default class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <div>{this.props.children}</div>
                <Footer />
            </ErrorBoundary>
        );
    }
}



