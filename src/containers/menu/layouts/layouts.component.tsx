import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import { ScrollView, StatusBar, Dimensions, Text, View } from 'react-native'
import { Profile4 } from './profile4.component';
import { LayoutsList } from '@src/components/menu';
import { LayoutsData } from './type';
import { PlusIconFill } from '@src/assets/icons';
import {
  Button,
} from 'react-native-ui-kitten';
import { NavigationScreenProps } from 'react-navigation';

const MARGIN = 12;

const pieChartData = [
  { name: 'Food', category: 200, color: '#A3BDFF', legendFontColor: '#FFF', legendFontSize: 15 },
  { name: 'Petrol', category: 30, color: '#88a8ff', legendFontColor: '#FFF', legendFontSize: 15 },
  { name: 'Bills', category: 40, color: '#6c93ff', legendFontColor: '#FFF', legendFontSize: 15 },
  { name: 'Others', category: 70, color: '#517dff', legendFontColor: '#FFF', legendFontSize: 15 },
];

interface ComponentProps {
  navigate: (route: string) => void;
}

type Props = ThemedComponentProps & ComponentProps & NavigationScreenProps;

class LayoutsComponent extends React.Component<Props> {


  private onPress = () => {
    this.props.navigate('Input')
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ScrollView style={themedStyle.contentContainer}>
        <Button icon={PlusIconFill} style={themedStyle.button} size="giant" onPress={this.onPress}>Add Transaction</Button>
        <Profile4 />
        <View style={themedStyle.chartContainer}>
        <Text>
          Bezier Line Chart
        </Text>
        <LineChart
          data={{
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
          }}
          width={Dimensions.get('window').width - MARGIN*2} // from react-native
          height={220}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#3366ff',
            backgroundGradientTo: '#4a68ff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
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
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            color: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
          }}
          accessor="category"
          style={{
            borderRadius: 16
          }}
          backgroundColor={"#4a68ff"}
        />
        </View>
        
      </ScrollView>
    );
  }
}

export const Layouts = withStyles(LayoutsComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme['background-basic-color-2'],
  },
  chartContainer: {
    alignSelf: 'center',
    flexDirection: 'column',
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
