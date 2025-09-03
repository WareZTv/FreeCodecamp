import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import store from './store'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.scss'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
