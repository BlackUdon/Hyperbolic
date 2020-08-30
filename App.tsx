import 'reflect-metadata';
import {Providers} from './src/_core/services/provider.service';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default Providers;
