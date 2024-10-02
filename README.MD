### Reservamos Browser Analytics

This project is an example of how to use the [@reservamos/browser-analytics](https://www.npmjs.com/package/@reservamos/browser-analytics) library.

The project has two main files:

- `main.ts`: Shows how to use the library with a modern stack, Typescript and esm syntax.

- `main.js`: Shows how to use the library with a commonjs syntax. Useful for outdated stacks.

#### Using the project

##### Configure envs:

1. Create a .env file at the root directory
2. Add the following envs:

```bash
VITE_ANALYTICS_MIXPANEL_TOKEN=your mixpanel token
VITE_ANALYTICS_IDENTIFICATION_KEY=your identification key
VITE_ANALYTICS_DEBUG=true
```

##### Run the project

1. Install dependencies: `bun install`
2. Run in dev mode: `bun run dev`

##### What you'll see?

After entering the page, open the browser console and you should see the events being triggered twice, one for each main file.
