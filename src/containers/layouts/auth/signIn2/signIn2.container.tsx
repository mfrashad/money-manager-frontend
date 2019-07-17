import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignInForm2Data } from '@src/components/auth';
import { SignIn2 } from './signIn2.component';
import { Alert } from 'react-native';

export class SignIn2Container extends React.Component<NavigationScreenProps> {

  private navigationKey: string = 'SignIn2Container';

  private onSignInPress = (data: SignInForm2Data) => {
    return fetch('https://mfrashad-money-manager.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.username,
        password: data.password,
        json: true
      })
    })
    .then((response) => response.json())
    .then((response: any)=>{
      console.log(response)
      if(response.id != null){
        this.props.navigation.navigate({
          key: this.navigationKey,
          routeName: 'Home',
        });
      }
      else {
        Alert.alert('Wrong email or password!')
      }
    })
  };

  private onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 2',
    });
  };

  private onForgotPasswordPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Forgot Password',
    });
  };

  public render(): React.ReactNode {
    return (
      <SignIn2
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
      />
    );
  }
}
