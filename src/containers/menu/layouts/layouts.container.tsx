import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Layouts } from './layouts.component';
import { LayoutsContainerData } from './type';
import { routes } from './routes';

export class LayoutsContainer extends React.Component<NavigationScreenProps> {

  private data: LayoutsContainerData[] = routes;
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
        data={this.data}
        navigate={this.navigate}
      />
    );
  }
}
