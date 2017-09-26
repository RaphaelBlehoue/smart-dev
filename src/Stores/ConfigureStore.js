import configureStoreProd from './ConfigureStore.prod';
import configureStoreDev from './ConfigureStore.dev';

const environment = (process.env.NODE_ENV === 'production') ? configureStoreProd : configureStoreDev;
export default environment;