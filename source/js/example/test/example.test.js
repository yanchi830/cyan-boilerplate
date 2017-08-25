import {createElement} from 'react';
import {shallow} from 'enzyme';
import test from 'ava';
import CyanExample from '../example';

// Helpers
const shalComp = props => shallow(createElement(CyanExample, props));

test('Pass', (t) => {
    t.is(typeof CyanExample, 'function');
});

test('CyanExample says Hello World', (t) => {
    const comp = shalComp();
    t.is(comp.find('div').text(), 'Hello world');
});

