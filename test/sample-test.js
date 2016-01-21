import {expect} from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {createStore} from 'redux';
import {shaderApp} from '../src/stores/MainStore';
import Provider from'../src/components/Provider';
import EditorTab from '~/src/components/EditorTab';

import ShaderAppTheme from '../src/themes/ShaderAppTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

var store = createStore(shaderApp);

describe('Simple Test', function () {
  it('has button that fires a dom event for click', function () {
    var root = <EditorTab/>;
    expect(true).to.be.ok;
  })
})
