import React from 'react';
import { useScreens } from 'react-native-screens';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  HomeContainer,
  MenuContainer,
  ThemesContainer,
} from '@src/containers/menu';
import {
  AuthContainer,
  ForgotPasswordContainer,
  SignIn2Container,
  SignUp2Container,
} from '@src/containers/layouts/auth';
import {
  InputContainer,
  ListContainer,
} from '@src/containers/components';
import {
  MenuNavigationOptions,
} from './options';

const AuthNavigationMap: NavigationRouteConfigMap = {
  ['Sign In 2']: SignIn2Container,
  ['Sign Up 2']: SignUp2Container,
  ['Forgot Password']: ForgotPasswordContainer,
};

const ThemesNavigator: NavigationContainer = createStackNavigator(
  {
    ['Themes']: ThemesContainer,
  }, {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const LayoutsNavigator: NavigationContainer = createStackNavigator(
  {
    ['Layouts']: HomeContainer,
    ['Auth']: AuthContainer,
    ['Input']: InputContainer,
  },
  {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const MenuNavigator: NavigationContainer = createBottomTabNavigator({
  ['Layouts']: LayoutsNavigator,
}, {
  tabBarComponent: MenuContainer,
});

const AppNavigator: NavigationContainer = createStackNavigator({
  //...AuthNavigationMap,
  ['Home']:MenuNavigator,
}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    header: null,
  },
});

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
  useScreens();
  return createAppContainer(container);
};


export const Router: NavigationContainer = createAppRouter(AppNavigator);
