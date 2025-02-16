import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';

import '@/styles/main.scss';
import '@/styles/UI/index.scss';
import '@/styles/components/index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<App />);
