import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  ProfileInfo1,
  ProfileParameterCard,
  ProfileSocials,
} from '@src/components/social';
import {
  ContainerView,
  RateBar,
  textStyle,
} from '@src/components/common';
import {
  ArrowHeadDownIconFill,
  ArrowHeadUpIconFill,
} from '@src/assets/icons';
import {
  Profile as ProfileModel,
  ProfileSocials as ProfileSocialsModel,
} from '@src/core/model';

interface ComponentProps {
  // profile: ProfileModel;
  // socials: ProfileSocialsModel;
  // onFollowPress: () => void;
  // onFollowersPress: () => void;
  // onFollowingPress: () => void;
  // onPostsPress: () => void;
  // onRateChange: (value: number) => void;
}

export type Profile4Props = ThemedComponentProps & ComponentProps;

class Profile4Component extends React.Component<Profile4Props> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
        <View style={themedStyle.parameterContainer}>
          <ProfileParameterCard
            style={themedStyle.profileParameter}
            hint='Income'
            value={`RM123.00`}
            icon={ArrowHeadUpIconFill}
          />
          <ProfileParameterCard
            style={themedStyle.profileParameter}
            hint='Expense'
            value={`RM59.00`}
            icon={ArrowHeadDownIconFill}
          />
        </View>
    );
  }
}

export const Profile4 = withStyles(Profile4Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  infoContainer: {
    paddingHorizontal: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  parameterContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  rateBar: {
    marginTop: 24,
  },
  followButton: {
    marginTop: 16,
    fontSize: 14,
  },
  profileSocials: {
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
  descriptionLabel: {
    marginVertical: 24,
    ...textStyle.paragraph,
  },
  profileParameter: {
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: theme['background-basic-color-1'],
  },
}));
