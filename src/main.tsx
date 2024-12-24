import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next'
import global_ar from './translations/ar/global.json';
import global_en from './translations/en/global.json';

const client = new ApolloClient({
  uri: `https://app.menahackathons.com/graphql`,
  // uri: `http://localhost:4003/graphql`,
  cache: new InMemoryCache()
})

i18next.init({
  resources: {
    ar: {
      global: global_ar
    },
    en:{
      global: global_en
    }
  },
  lng: `en`,
  fallbackLng: `en`,
  interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
