import React from 'react';
import addons from '@storybook/addons';

class SeeAlsoPanel extends React.Component {
  state = { seeAlso: {} };
  
  setData = (seeAlso) => {
    this.setState({ seeAlso });
  };
  
  componentDidMount() {
    const { api } = this.props;
    api.on("testSeeAlso/storySelected", this.setData);
  }
  
  componentWillMount() {
    const { api } = this.props;
    api.off("testSeeAlso/storySelected", this.setData);
  }
  
  render(){
    const { seeAlso } = this.state;
    return <div>{seeAlso.label}</div>
  }
}

addons.register('test-see-also', (api) => {
  addons.addPanel('test-see-also/panel', {
    title: 'See Also',
    render: ({key}) => <SeeAlsoPanel key={key} api={api} />
  })
});
