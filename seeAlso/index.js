import addons, { makeDecorator } from "@storybook/addons";

const withSeeAlso = makeDecorator({
  name: 'withSeeAlso',
  parameterName: 'seeAlso',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();
    
    channel.emit("testSeeAlso/storySelected", parameters);
    
    return getStory(context);
  }
});

export default withSeeAlso;
