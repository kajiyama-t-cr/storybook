import type { Preview } from "@storybook/react";
import { withScreenshot } from "storycap";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
	decorators: [withScreenshot()], // <--- just added `withScreenshot()` to `decorators`
};

export default preview;
