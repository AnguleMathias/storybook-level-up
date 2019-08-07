import React from 'react';
import addons from '@storybook/addons';

class SeeAlsoPanel extends React.Component {
  render(){
    return <div>See Also Panel</div>
  }
}

addons.register('test-see-also', (api) => {
  addons.addPanel('test-see-also/panel', {
    title: 'See Also',
    render: ({key}) => <SeeAlsoPanel key={key} api={api} />
  })
});
