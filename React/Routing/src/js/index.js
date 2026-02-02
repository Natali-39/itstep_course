import App from './components/App';
import '../scss/index.scss';
import {createRoot} from 'react-dom/client';

const appElement = document.getElementById('app');

const root = createRoot(appElement);

root.render(<App/>);
