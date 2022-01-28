import { render, fireEvent } from '@testing-library/vue';
import Component from '../src/components/HelloWorld.vue';

test('increments value on click', async () => {
  const { getByText } = render(Component);
  getByText('count is: 0');

  const button = getByText('count is: 0');
  await fireEvent.click(button);

  getByText('count is: 1');
});