import { Meta, StoryObj} from '@storybook/angular';
import { SignalsArgsComponent } from './signals-args.component';

const meta: Meta<SignalsArgsComponent> = {
    title: 'Components/SignalsArgs',
    component: SignalsArgsComponent,
    argTypes: {
        initialCount: { control: 'number', description: 'Initial value of the counter' },
    },
};
export default meta;



type Story = StoryObj<SignalsArgsComponent>;
export const Primary: Story = {
  args: {
    initialCount: 0,
  },
};







