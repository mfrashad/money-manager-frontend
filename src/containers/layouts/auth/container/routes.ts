import {
  imageForgotPasswordLayout,
  imageSignIn2Layout,
  imageSignUp2Layout,
} from '@src/assets/images';
import { AuthContainerData } from './type';

export const routes: AuthContainerData[] = [
  {
    title: 'Sign In',
    description: 'Option 2',
    image: imageSignIn2Layout.imageSource,
    route: 'Sign In 2',
  },
  {
    title: 'Sign Up',
    description: 'Option 2',
    image: imageSignUp2Layout.imageSource,
    route: 'Sign Up 2',
  },
  {
    title: 'Forgot Password',
    description: 'Option 1',
    image: imageForgotPasswordLayout.imageSource,
    route: 'Forgot Password',
  },
];
