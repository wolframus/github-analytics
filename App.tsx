import { StatusBar } from 'react-native';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Index from './src';

export default function App() {
  return (
    <Host>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Index />
      </SafeAreaProvider>
    </Host>
  );
}
