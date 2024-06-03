import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify'
import config from './amplify_outputs.json'
import { ThemeProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import App from './App'
import './index.css';

Amplify.configure(config)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ThemeProvider>
    <App />
</ThemeProvider>);