import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  List,
  ListItem,
  ListItemProps,
  ListProps,
  Button,
  ButtonGroup
} from '@kitten/ui';
import { StarIconFill } from '@src/assets/icons';
import { BottomEndTooltip } from '../../tooltip/showcase';


interface ListItemModel {
  title: string;
  description: string;
}

type ListElement = React.ReactElement<ListProps>;
type ListItemElement = React.ReactElement<ListItemProps>;

export const AccessoryList = (props) => {

  // const data: ListItemModel[] = Array(4).fill({
  //   title: '-RM20',
  //   description: '26/07/2019'
  // });

  // data shape
//   [
//     {
//         "id": 4,
//         "user_id": 1,
//         "date": "2019-07-17",
//         "time": "2000-01-01T18:23:00.000Z",
//         "role": "expense",
//         "category": "role",
//         "amount": 100,
//         "created_at": "2019-07-17T18:23:46.609Z",
//         "updated_at": "2019-07-17T18:23:46.609Z",
//         "url": "http://localhost:3000/transactions/4.json"
//     }
// ]

  const renderAccessory = (id) => () => {
    return (
    <ButtonGroup size="small">
      <Button size="small" onPress={props.onItemEdit(id)}>Edit</Button>
      <Button size="small" onPress={props.onItemDelete(id)} >Delete</Button>
    </ButtonGroup>
      );
  };

  const renderItem = (info: ListRenderItemInfo<any>): ListItemElement => {
    const { id, user_id, date, time, role, category, amount } = info.item;
    const title = `RM${amount}`
    const description = `${date}`

    return (
      <ListItem
        title={title}
        description={description}
        icon={StarIconFill}
        accessory={renderAccessory(id)}
      />
    );
  };

  return (
    <List
      data={props.data}
      renderItem={renderItem}
    />
  );
};
