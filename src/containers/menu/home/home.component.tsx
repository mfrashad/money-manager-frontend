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

const pieColor = ['#A3BDFF','#88a8ff','#6c93ff','#517dff', '#314dff']

const pieChartData = [
  { name: 'Food', category: 200, color: '#A3BDFF', legendFontColor: '#FFF', legendFontSize: 15 },
  { name: 'Petrol', category: 30, color: '#88a8ff', legendFontColor: '#FFF', legendFontSize: 15 },
  { name: 'Bills', category: 40, color: '#6c93ff', legendFontColor: '#FFF', legendFontSize: 15 },
  { name: 'Others', category: 70, color: '#517dff', legendFontColor: '#FFF', legendFontSize: 15 },
];

const lineChartData = {
  labels: ['March', 'April', 'May', 'June', 'July'],
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

interface ComponentProps {
  navigate: (route: string) => void;
}

type Props = ThemedComponentProps & ComponentProps & NavigationScreenProps;

class HomeComponent extends React.Component<Props> {
  public state = {
    token: this.props.navigation.getParam('token'),
    income: 0,
    expense: 0,
    pieChartData: pieChartData,
    lineChartData: lineChartData
  }
  

  private onPress = () => {
    this.props.navigate('Add')
  };

  private fetchStatistic = () => {
    return fetch('https://mfrashad-money-manager.herokuapp.com/statistic/1')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      
      let newPieChartData = []
      let newLineChartData = {
        labels: [], 
        datasets: [{
            data: []
          }]
      }
      responseJson.category.forEach((e,i) => {
        newPieChartData.push({name: e[0], category: e[1], color: pieColor[i], legendFontColor: '#FFF', legendFontSize: 15})
        
      });

      responseJson.date.forEach((e,i) => {
          console.log(e)
          newLineChartData.labels.push(e[0])
          newLineChartData.datasets[0].data.push(e[1])
      })

      const { income, expense } = responseJson.total

      this.setState({
        pieChartData: newPieChartData,
        lineChartData: newLineChartData,
        income: income ? income : 0,
        expense: expense ? expense : 0
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  public componentDidMount() {
    this.fetchStatistic()
  }

  public componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.state.params.token) {
      this.fetchStatistic();
    }
  }

  public render(): React.ReactNode {
    const { themedStyle } = this.props;
    const {income, expense, lineChartData, pieChartData } = this.state
    return (
      <ScrollView style={themedStyle.contentContainer}>
        <Button icon={PlusIconFill} style={themedStyle.button} size="giant" onPress={this.onPress}>Add Transaction</Button>
        <InfoCard income={income} expense={expense} />
        <Statistic lineChartData={lineChartData} pieChartData={pieChartData} />
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
