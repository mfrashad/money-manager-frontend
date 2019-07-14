import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Layouts } from './layouts.component';

export class LayoutsContainer extends React.Component<NavigationScreenProps> {

  private navigationKey: string = 'LayoutsContainer';

  private navigate = (route: string) => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: route,
    });
  };

  public render(): React.ReactNode {
    return (
      <Layouts
        navigation={this.props.navigation}
        navigate={this.navigate}
      />
    );
  }
}
