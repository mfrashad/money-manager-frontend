import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListContainer } from '@src/containers/components/list/list.container';

export class ListTransactionContainer extends React.Component<NavigationScreenProps> {

  public state = {
    data: []
  }

  private fetchTransactions = () => {
    return fetch('https://mfrashad-money-manager.herokuapp.com/transactions.json')
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson)
      this.setState({data: responseJson})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  private onItemDelete = (id) => () => {
    return fetch(`https://mfrashad-money-manager.herokuapp.com/transactions/${id}.json`, {
      method: 'DELETE'
    }).then((response)=>{
      console.log('Deleted')
      this.fetchTransactions()
    })
  }

  private onItemEdit = (id) => () => {
    fetch(`https://mfrashad-money-manager.herokuapp.com/transactions/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const {id, user_id, amount, date, time, role, category} = data
      this.props.navigation.navigate('Edit', {
        id,
        user_id,
        amount,
        date,
        time,
        type: role,
        category
      })
    })
    .catch((error) => {
      console.error(error);
    });
    
  }
 
  public componentDidMount() {
    this.fetchTransactions()
  }

  public render(): React.ReactNode {
    return (
      <ListContainer navigation={this.props.navigation} data={this.state.data} onItemEdit={this.onItemEdit} onItemDelete={this.onItemDelete} />
    );
  }
}
