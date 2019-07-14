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
  SignIn1Container,
  SignIn2Container,
  SignIn3Container,
  SignIn4Container,
  SignIn5Container,
  SignUp1Container,
  SignUp2Container,
  SignUp3Container,
  SignUp4Container,
} from '@src/containers/layouts/auth';
import {
  Feed1Container,
  Feed2Container,
  Profile1Container,
  Profile2Container,
  Profile3Container,
  Profile4Container,
  Profile5Container,
  Profile6Container,
  Profile7Container,
  ProfileSettings1Container,
  ProfileSettings2Container,
  ProfileSettings3Container,
  SettingsContainer,
  SocialContainer,
} from '@src/containers/layouts/social';
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
  ArticlesNavigationOptions,
  DashboardNavigationOptions,
  EcommerceNavigationOptions,
  MenuNavigationOptions,
  SocialNavigationOptions,
} from './options';

const SocialNavigationMap: NavigationRouteConfigMap = {
  ['Profile 1']: {
    screen: Profile1Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 2']: {
    screen: Profile2Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 3']: {
    screen: Profile3Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 4']: {
    screen: Profile4Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 5']: {
    screen: Profile5Container,
  },
  ['Profile 6']: {
    screen: Profile6Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 7']: {
    screen: Profile7Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile Settings 1']: {
    screen: ProfileSettings1Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile Settings 2']: {
    screen: ProfileSettings2Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile Settings 3']: {
    screen: ProfileSettings3Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Feed 1']: {
    screen: Feed1Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Feed 2']: {
    screen: Feed2Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Settings']: {
    screen: SettingsContainer,
    navigationOptions: SocialNavigationOptions,
  },
};

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
  ...SocialNavigationMap,
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
