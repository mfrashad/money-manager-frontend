import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
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

type InputContainerProps = ThemedComponentProps & NavigationScreenProps;

class InputContainerComponent extends React.Component<InputContainerProps> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <Showcase>
        <ShowcaseSection title='State'>
          <ShowcaseItem title='Default'>
            <DefaultInput
              style={themedStyle.component}
              textStyle={themedStyle.componentText}
            />
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

export const InputContainer = withStyles(InputContainerComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  component: {
    flex: 1,
  },
  componentText: textStyle.paragraph,
}));
