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

export const AccessoryList = (): ListElement => {

  const data: ListItemModel[] = Array(4).fill({
    title: '-RM20',
    description: '26/07/2019'
  });

  const renderAccessory = (): React.ReactElement<any> => {
    return (
    <ButtonGroup size="small">
      <Button size="small" >Edit</Button>
      <Button size="small" >Delete</Button>
    </ButtonGroup>
      );
  };

  const renderItem = (info: ListRenderItemInfo<ListItemModel>): ListItemElement => {
    const { title, description } = info.item;

    return (
      <ListItem
        title={title}
        description={description}
        icon={StarIconFill}
        accessory={renderAccessory}
      />
    );
  };

  return (
    <List
      data={data}
      renderItem={renderItem}
    />
  );
};
