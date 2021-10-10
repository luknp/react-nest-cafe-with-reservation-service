import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './shared/scss/_sharedStyles.scss';
import 'bootstrap/scss/bootstrap.scss';
import App from './components/App/App';
import { AppContextProvider } from '../src/context/AppContext';

ReactDOM.render(
    <AppContextProvider>
        <App />
    </AppContextProvider >,
    document.getElementById('root'),
);
