/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
const isHermes = () => !!global.HermesInternal;
console.log(typeof HermesInternal);
console.log(isHermes);

AppRegistry.registerComponent(appName, () => App);
