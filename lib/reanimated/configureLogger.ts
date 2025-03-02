import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  // Until this is fixed
  // https://github.com/nativewind/nativewind/issues/1153
  strict: false,
});
