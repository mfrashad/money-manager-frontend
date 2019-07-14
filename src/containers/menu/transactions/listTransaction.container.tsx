import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListContainer } from '@src/containers/components/list/list.container';

export class ListTransactionContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <ListContainer navigation={this.props.navigation} />
    );
  }
}
