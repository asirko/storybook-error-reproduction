import { Meta, moduleMetadata, Story } from '@storybook/angular';

import {BrowserModule} from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { MyCompoComponent } from "./my-compo.component";

// eslint-disable-next-line import/no-default-export
export default {
  title: 'MyCompo/TS',
  component: MyCompoComponent,
  decorators: [
    moduleMetadata({
      declarations: [MyCompoComponent],
      imports: [BrowserModule, DragDropModule],
    }),
  ],
} as Meta;

const Template: Story<MyCompoComponent> = (args: MyCompoComponent) => ({ props: args });

export const WithArgs = Template.bind({});
WithArgs.args = {
  movies: ['val 1', 'val 2', 'val 3', 'val 4'],
};
export const EmptyArgs = Template.bind({});
