/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

window.LOG_LEVEL = 'DEBUG';

AppRegistry.registerComponent(appName, () => App);
