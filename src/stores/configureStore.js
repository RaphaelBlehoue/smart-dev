import configureStoreProd from './configureStore.prod';
import configureStoreDev from './configureStore.dev';

const environment = (process.env.NODE_ENV === 'production') ? configureStoreProd : configureStoreDev;
export default environment;