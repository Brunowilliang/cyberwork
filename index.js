import { registerRootComponent } from 'expo';

import App from './App';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Calling `getNode()` on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.']);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
