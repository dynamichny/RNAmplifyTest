import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import Amplify, {Auth, Hub} from 'aws-amplify';
import {withOAuth} from 'aws-amplify-react-native';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App(props) {
  const {oAuthUser, googleSignIn, signOut} = props;

  useEffect(() => {
    console.log(oAuthUser ? JSON.stringify(oAuthUser.attributes) : 'None')
    
  }, [oAuthUser])
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        User: {oAuthUser ? JSON.stringify(oAuthUser.attributes) : 'None'}
      </Text>
      {oAuthUser ? (
        <Button title="Sign Out" onPress={signOut} />
      ) : (
        <>
          <Button title="Google" onPress={googleSignIn} />
        </>
      )}
    </View>
  );
}

export default withOAuth(App);
