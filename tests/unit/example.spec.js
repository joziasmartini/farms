import { shallowMount } from '@vue/test-utils';
import Grid from '@/components/Grid.vue';

describe('Grid.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Grid, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
