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
  ComponentsContainer,
  LayoutsContainer,
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
  AvatarContainer,
  BottomNavigationContainer,
  ButtonContainer,
  ButtonGroupContainer,
  CheckBoxContainer,
  InputContainer,
  ListContainer,
  OverflowMenuContainer,
  PopoverContainer,
  RadioContainer,
  TabViewContainer,
  TextContainer,
  ToggleContainer,
  TooltipContainer,
  TopNavigationContainer,
  ModalContainer,
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

const ComponentsNavigator: NavigationContainer = createStackNavigator(
  {
    ['Components']: ComponentsContainer,
    ['Button']: ButtonContainer,
    ['Button Group']: ButtonGroupContainer,
    ['CheckBox']: CheckBoxContainer,
    ['Toggle']: ToggleContainer,
    ['Radio']: RadioContainer,
    ['Input']: InputContainer,
    ['Text']: TextContainer,
    ['Avatar']: AvatarContainer,
    ['Tab View']: TabViewContainer,
    ['Popover']: PopoverContainer,
    ['Tooltip']: TooltipContainer,
    ['Overflow Menu']: OverflowMenuContainer,
    ['List']: ListContainer,
    ['Top Navigation']: TopNavigationContainer,
    ['Bottom Navigation']: BottomNavigationContainer,
    ['Modal']: ModalContainer,
  },
  {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const LayoutsNavigator: NavigationContainer = createStackNavigator(
  {
    ['Layouts']: LayoutsContainer,
    ['Auth']: AuthContainer,
    ['Input']: InputContainer,
  },
  {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const MenuNavigator: NavigationContainer = createBottomTabNavigator({
  ['Layouts']: LayoutsNavigator,
  ['Components']: ListContainer,
  ['Themes']: ThemesNavigator,
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
