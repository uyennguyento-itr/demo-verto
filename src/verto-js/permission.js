import {
  check,
  checkMultiple,
  PERMISSIONS,
  request,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import _ from 'lodash';
import {Platform} from 'react-native';

export const requestMultiplePermission = async permissions => {
  try {
    const result = await requestMultiple(permissions);
    const accumulateResult = _.reduce(
      result,
      (accumulate, value, key) => {
        switch (value) {
          case RESULTS.GRANTED:
            accumulate.isGranted = accumulate.isGranted && true;
            break;
          default:
            accumulate.isGranted = false;
            break;
        }

        return accumulate;
      },
      {
        isGranted: true,
      },
    );

    return accumulateResult.isGranted;
  } catch (error) {
    console.log('error request multiple permission', error);
    return false;
  }
};

export const checkMultiplePermission = async permissions => {
  try {
    const result = await checkMultiple(permissions);
    const accumulateResult = _.reduce(
      result,
      (accumulate, value, key) => {
        switch (value) {
          case RESULTS.GRANTED:
            accumulate.isGranted = accumulate.isGranted && true;
            break;
          default:
            accumulate.isGranted = false;
            break;
        }

        return accumulate;
      },
      {
        isGranted: true,
      },
    );

    return accumulateResult.isGranted;
  } catch (error) {
    console.log('error request multiple permission', error);
    return false;
  }
};

export const checkPermissionVideoCall = async () => {
  let permissionAllowed = false;
  const dataPermission =
    Platform.OS === 'android'
      ? [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.RECORD_AUDIO]
      : [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE];
  permissionAllowed = await checkMultiplePermission(dataPermission);
  console.log(
    '🚀 ~ file: permission.js:76 ~ checkPermissionVideoCall ~ permissionAllowed:',
    permissionAllowed,
  );
  if (!permissionAllowed) {
    permissionAllowed = await requestMultiplePermission(dataPermission);
  }
  return permissionAllowed;
};
