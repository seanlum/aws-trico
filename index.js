import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import App from './App'
import './index.css';
import { reportWebVitals } from 'next/dist/build/templates/pages';

Amplify.configure(config)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AmplifyProvider>
    <App />
</AmplifyProvider>);

reportWebVitals();