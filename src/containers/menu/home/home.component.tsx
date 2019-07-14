import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { ScrollView, View } from 'react-native'
import { InfoCard } from './infoCard.component';
import { Statistic } from './statistic.component';
import { PlusIconFill } from '@src/assets/icons';
import {
  Button,
} from 'react-native-ui-kitten';
import { NavigationScreenProps } from 'react-navigation';

const MARGIN = 12;

interface ComponentProps {
  navigate: (route: string) => void;
}

type Props = ThemedComponentProps & ComponentProps & NavigationScreenProps;

class HomeComponent extends React.Component<Props> {


  private onPress = () => {
    this.props.navigate('Input')
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ScrollView style={themedStyle.contentContainer}>
        <Button icon={PlusIconFill} style={themedStyle.button} size="giant" onPress={this.onPress}>Add Transaction</Button>
        <InfoCard />
        <Statistic/>
      </ScrollView>
    );
  }
}

export const Home = withStyles(HomeComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme['background-basic-color-2'],
  },
  button: {
    margin: MARGIN,
  },
  item: {
    flex: 1,
    height: 160,
    marginHorizontal: 8,
    marginVertical: 8,
  },
}));
