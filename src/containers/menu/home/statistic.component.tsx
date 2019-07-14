import React from 'react';
import { ScrollView, StatusBar, Dimensions, View, Text } from 'react-native'
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
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

const MARGIN = 12;

const pieChartData = [
  { name: 'Food', category: 200, color: '#A3BDFF', legendFontColor: '#FFF', legendFontSize: 15 },
  { name: 'Petrol', category: 30, color: '#88a8ff', legendFontColor: '#FFF', legendFontSize: 15 },
  { name: 'Bills', category: 40, color: '#6c93ff', legendFontColor: '#FFF', legendFontSize: 15 },
  { name: 'Others', category: 70, color: '#517dff', legendFontColor: '#FFF', legendFontSize: 15 },
];

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ]
  }]
}

const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#3366ff',
  backgroundGradientTo: '#4a68ff',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  }
}

interface ComponentProps {
  // profile: ProfileModel;
  // socials: ProfileSocialsModel;
  // onFollowPress: () => void;
  // onFollowersPress: () => void;
  // onFollowingPress: () => void;
  // onPostsPress: () => void;
  // onRateChange: (value: number) => void;
}

export type StatisticProps = ThemedComponentProps & ComponentProps;

class StatisticComponent extends React.Component<StatisticProps> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.chartContainer}>
        <Text>
          Monthly Expense
        </Text>
        <LineChart
          data={lineChartData}
          width={Dimensions.get('window').width - MARGIN*2} // from react-native
          height={220}
          yAxisLabel={'$'}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <PieChart
          data={pieChartData}
          width={Dimensions.get('window').width - MARGIN*2} // from react-native
          height={200}
          chartConfig={chartConfig}
          accessor="category"
          style={{
            borderRadius: 16
          }}
          backgroundColor={"#4a68ff"}
        />
      </View>
    );
  }
}

export const Statistic = withStyles(StatisticComponent, (theme: ThemeType) => ({
  chartContainer: {
    alignSelf: 'center',
    flexDirection: 'column',
  },
}));
