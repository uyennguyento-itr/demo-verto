/*
import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-verto-ts' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type VertoTypescriptProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'VertoTypescriptView';

export const VertoTypescriptView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<VertoTypescriptProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
*/

import Call from './verto/Call';
import ConferenceLiveArray from './conference/ConferenceLiveArray';
import LoginScreen from './vertoView/LoginScreen';
import CallInfoParams from './models/Call/CallInfoParams';
import MediaState from './enums/MediaState.enum';
import VertoClient from './verto/VertoClient';
import VertoInstanceManager from './vertoView/VertoInstanceManager';
import VertoParams from './models/VertoParams';
import VertoView from './vertoView/index';
import ViewType from './enums/ViewType.enum';

export {
  Call,
  CallInfoParams,
  ConferenceLiveArray,
  LoginScreen,
  CallInfoParams as MakeCallParams, // TODO Remove this property after transition has completed for name convention
  MediaState,
  VertoClient,
  VertoInstanceManager,
  VertoParams,
  ViewType,
  VertoView,
};
