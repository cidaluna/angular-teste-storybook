import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Componentes',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic', // code json or dynamic
      }
    }
  }
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const SubmitButton: Story = {
  args: {
    text: 'Button',
    variant: 'submit',
    disabled: false,
    size: 'medium'
  },
};

export const ResetButton: Story = {
  args: {
    ...SubmitButton.args,
    text: 'Reset',
    variant: 'reset',
  },
};

export const GoBackButton: Story = {
  args: {
    ...SubmitButton.args,
    text: 'Go Back',
  },
};

export const GoBackButtonDisabled: Story = {
  args: {
    ...SubmitButton.args,
    text: 'Go Back Disabled',
    disabled: true,
  },
};
