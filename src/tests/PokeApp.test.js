import React from 'react';
import ReactDOM from 'react-dom';
import PokeApp from '../components/PokeApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PokeApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
