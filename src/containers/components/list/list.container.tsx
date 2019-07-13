import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import {
  AccessoryList,
  IconList,
  PlainList,
} from './showcase';

export class ListContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='Transaction List'>
          <AccessoryList />
        </ShowcaseSection>
      </Showcase>
    );
  }
}
