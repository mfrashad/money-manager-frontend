import React from 'react';
import { View, TouchableOpacity, TimePickerAndroid } from 'react-native';
import {  Button, Input } from 'react-native-ui-kitten';
import { NavigationScreenProps } from 'react-navigation';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  CaptionIconInput,
  CaptionInput,
  DangerInput,
  DefaultInput,
  DisabledInput,
  IconInput,
  InfoInput,
  LabelInput,
  PrimaryInput,
  SuccessInput,
  WarningInput,
} from './showcase';
import { textStyle } from '@src/components/common';
import { string } from 'prop-types';

type InputContainerProps = ThemedComponentProps & NavigationScreenProps;
interface State {
  date: Date,
  isDateTimePickerVisible: boolean
}

class InputContainerComponent extends React.Component<InputContainerProps, State> {

  public state : State = {
    date: new Date(),
    isDateTimePickerVisible: false
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

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.container}>
        <Input
          placeholder='Transaction amount'
        />
        <Input
          placeholder='Category'
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
        <Button>Add</Button>
      </View>
    );
  }
}

export const InputContainer = withStyles(InputContainerComponent, (theme: ThemeType) => ({
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
