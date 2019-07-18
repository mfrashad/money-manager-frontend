import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUpForm2Data } from '@src/components/auth';
import { SignUp2 } from './signUp2.component';
import {Alert} from 'react-native';

export class SignUp2Container extends React.Component<NavigationScreenProps> {

  private navigationKey: string = 'SignUp2Container';

  private onSignUpPress = (data: SignUpForm2Data) => {
    return fetch('https://mfrashad-money-manager.herokuapp.com/users.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          name: data.username,
          email: data.email,
          password: data.password,
          password_confirmation: data.password,
          role: 'free'
        }
      })
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      if(response.id != null){
        this.props.navigation.navigate({
          key: this.navigationKey,
          routeName: 'Sign In 2',
        });
      }
      else {
        Alert.alert('Error!')
      }
    })
  };

  private onSignInPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign In 2',
    });
  };


  private onPhotoPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignUp2
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
