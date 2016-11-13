import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

import Constans from '/import/frontend/Classes/Constants';
import App from '/import/frontend/App.jsx';

const $C = window.$C = Constans;

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});