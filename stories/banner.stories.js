import React from 'react';
import { storiesOf } from "@storybook/react";
import MajorBanner from "../components/major.banner";
import MinorBanner from "../components/minor.banner";
import { text } from "@storybook/addon-knobs";

storiesOf("Component | Banners/Major", module)
  .addParameters({
    info: {
      text: `
      ### When to use
      This banner should be used, at most, once per page. When it is used, it should be placed at the top of tha page, below the navigation bar. The banner is considered "Shouting", the focus is to grab the attention of the user before they have a chance to see anything else.
      ___
      **Location:** 1st element nelow navigation
      
      **Max Quantity:** 1
      
      **See Also:** Minor Banner
      `,
    },
  })
  .add("With Only Title", () => (
    <MajorBanner
      title="Banner Title"
      photo="People Outdoors/shutterstock_116403520.jpg"
    />
  ))
  .add("With all Text Options", () => {
    const title = text('Title', 'Banner Title');
    return (
      <MajorBanner
        title={title}
        photo="People Outdoors/shutterstock_116403520.jpg"
        subtitle="Banner Subtitle"
        body="Banner Body"
      />
    )
  });

storiesOf("Component | Banners/Minor", module)
  .add("No Pictures", () => (
    <MinorBanner
      title="Banner Title"
      subtitle="Banner Subtitle"
      body="Banner Body"
    />
  )).add("With Pictures", () => (
  <MinorBanner
    title="Banner Title"
    subtitle="Banner Subtitle"
    body="Banner Body"
    leftPhoto="Products/boots/shutterstock_66842440.jpg"
    rightPhoto="Products/boots/shutterstock_1121278055.jpg"
  />
));
