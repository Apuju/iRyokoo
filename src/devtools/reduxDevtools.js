import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { Apuju } from '../lib/commonLib';

const oUtil = new Apuju();

if(oUtil.isDebugMode)
  module.exports = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <LogMonitor/>
    </DockMonitor>
  );
else
  module.exports = React.createClass({
    render() {
      return null;
    }
  });