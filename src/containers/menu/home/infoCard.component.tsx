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
  ProfileParameterCard,
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

interface ComponentProps {
  // profile: ProfileModel;
  // socials: ProfileSocialsModel;
  // onFollowPress: () => void;
  // onFollowersPress: () => void;
  // onFollowingPress: () => void;
  // onPostsPress: () => void;
  // onRateChange: (value: number) => void;
  income: any,
  expense: any,
}

export type InfoCardProps = ThemedComponentProps & ComponentProps;

class InfoCardComponent extends React.Component<InfoCardProps> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
        <View style={themedStyle.parameterContainer}>
          <ProfileParameterCard
            style={themedStyle.profileParameter}
            hint='Income'
            value={`RM${this.props.income}`}
            icon={ArrowHeadUpIconFill}
          />
          <ProfileParameterCard
            style={themedStyle.profileParameter}
            hint='Expense'
            value={`RM${this.props.expense}`}
            icon={ArrowHeadDownIconFill}
          />
        </View>
    );
  }
}

export const InfoCard = withStyles(InfoCardComponent, (theme: ThemeType) => ({
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
