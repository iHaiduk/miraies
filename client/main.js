import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '/imports/frontend/App.jsx';


Meteor.startup(() => {
    render(<div><App /></div>, document.getElementById('render-target'));
});