import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {RTCView, MediaStream, mediaDevices} from 'react-native-webrtc';
import {Params, defaultVertoCallbacks} from '../store';
import styles from './styles';
import {VertoClient} from '../index';

let vertoClient = null;

function VertoView({vertoParams = Params, callbacks = defaultVertoCallbacks}) {
  const [localStreamURL, setLocalStreamURL] = useState('');
  const [remoteStreamURL, setRemoteStreamURL] = useState('');

  useEffect(() => {
    const initData = () => {
      const localVideoConstraints = {
        audio: {},
        video: {},
      };
      // mediaDevices
      //   .getUserMedia(localVideoConstraints)
      //   .then(stream => {
      //     console.log('🚀 ~ file: index.js:28 ~ initData ~ stream:', stream);
      //     setLocalStreamURL(stream.toURL());
      //   })
      //   .catch(error => {
      //     console.log('🚀 ~ file: index.js:48 ~ initData ~ error:', error);
      //   });
    };
    // vertoClient = new VertoClient(vertoParams, {
    //   onPlayLocalVideo,
    //   onPlayRemoteVideo,
    //   ...callbacks,
    // });

    initData();
    // return () => vertoClient.destroy();
  }, []);

  function onPlayLocalVideo(stream) {
    console.log(' onPlayLocalVideo ~ stream:', stream);
    setLocalStreamURL(stream.toURL());
  }
  function onPlayRemoteVideo(stream) {
    console.log('onPlayRemoteVideo ~ stream:', stream);
    setRemoteStreamURL(stream.toURL());
  }
  console.log('remoteStreamURL: + local', remoteStreamURL, localStreamURL);

  return (
    <View style={styles.container}>
      <View style={styles.remoteStreamContainer}>
        <RTCView streamURL={remoteStreamURL} style={styles.remoteStream} />
      </View>
      <View style={styles.localStreamContainer}>
        <RTCView streamURL={localStreamURL} style={styles.localStream} />
      </View>
    </View>
  );
}

export default VertoView;
