import React from 'react';
import addons from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';

class SeeAlsoPanel extends React.Component {
  state = { seeAlso: {} };
  
  setData = (seeAlso) => {
    this.setState({ seeAlso })
  };
  
  clearState = () => {
    this.setState({seeAlso: null})
  };
  
  componentDidMount() {
    const { api } = this.props;
    api.on("testSeeAlso/storySelected", this.setData);
    api.on(STORY_CHANGED, this.clearState);
  }
  
  componentWillMount() {
    const { api } = this.props;
    api.off("testSeeAlso/storySelected", this.setData);
    api.off(STORY_CHANGED, this.clearState);
  }
  
  render(){
    const { seeAlso } = this.state;
    const { api } = this.props;
    
    return seeAlso ? <a onClick={() => api.selectStory(seeAlso.story)}
      style={{marginLeft: '20px', cursor: 'pointer'}}>
      {seeAlso.label}
    </a> : null;
  }
}

addons.register('test-see-also', (api) => {
  addons.addPanel('test-see-also/panel', {
    title: 'See Also',
    render: ({key}) => <SeeAlsoPanel key={key} api={api} />
  })
});
