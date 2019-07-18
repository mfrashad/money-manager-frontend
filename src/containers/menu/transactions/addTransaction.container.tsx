import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {  Button, Input } from 'react-native-ui-kitten';
import { NavigationScreenProps } from 'react-navigation';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import DateTimePicker from "react-native-modal-datetime-picker";
import { textStyle } from '@src/components/common';

type AddTransactionProps = ThemedComponentProps & NavigationScreenProps;
interface State {
  date: Date,
  amount: number,
  category: string,
  type: string,
  isDateTimePickerVisible: boolean
}

class AddTransactionComponent extends React.Component<AddTransactionProps, State> {

  public state : State = {
    date: new Date(),
    amount: 0,
    type: 'expense',
    category: 'food',
    isDateTimePickerVisible: false
  }

  private onChange = (key) => (value) => {
    let newState = {}
    newState[key] = value
    this.setState(newState)
  }

  private showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  private hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  private handleDatePicked = (date) => {
    console.log("A date has been picked: ", date);
    this.setState({date})
    this.hideDateTimePicker();
  };

  // Post Param Shape
//   {
//     "user_id": 1,
//     "date": "2019-07-17",
//     "time": "2019-07-17T18:32:00.000Z",
//     "role": "expense",
//     "category": "food",
//     "amount": 50,
//     "created_at": "2019-07-17T17:39:51.831Z",
//     "updated_at": "2019-07-17T17:39:51.831Z",
//     "url": "http://localhost:3000/transactions/3.json"
// }

  private onPress = () => {
    return fetch('https://mfrashad-money-manager.herokuapp.com/transactions.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 1,
        date: this.state.date.toISOString().slice(0,10),
        time: this.state.date.toISOString(),
        role: this.state.type,
        category: this.state.category,
        amount: this.state.amount,
      })
    }).then((response)=>{
      console.log(response)
      this.props.navigation.navigate('List', {token: Math.random()})
    })
  }

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.container}>
        <Input
          value={this.state.amount.toString()}
          onChangeText={this.onChange('amount')}
          placeholder='Transaction amount'
        />
        <Input
          value={this.state.category}
          onChangeText={this.onChange('category')}
          placeholder='Category'
        />
        <Input
          value={this.state.type}
          onChangeText={this.onChange('type')}
          placeholder='Type'
        />
        <TouchableOpacity onPress={this.showDateTimePicker}>
        <Input
          value={this.state.date.toDateString()}
          placeholder='Date'
          disabled
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
        </TouchableOpacity>
        <Input
          value={this.state.date.toLocaleTimeString()}
          placeholder='Time'
          disabled
        />
        <Button onPress={this.onPress}>Add</Button>
      </View>
    );
  }
}

export const AddTransactionContainer = withStyles(AddTransactionComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme['background-basic-color-1'],
  },
  component: {
    flex: 1,
  },
  componentText: textStyle.paragraph,
}));
