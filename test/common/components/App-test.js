import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../../../src/common/App';


test('render with container div', t => {
  const wrapper = shallow(React.createElement(App));

  t.is(wrapper.find('#container').length, 1);
});
