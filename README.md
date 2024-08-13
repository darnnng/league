# Image gallery

Frontend app created with Typescript, React, Styled Components, MobX, Vite.
Tested with Jest, React-testing-library.

1. Run `pnpm install` in the root directory.
2. Run `pnpm dev` in the root directory.
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `pnpm build`

Builds the app for production in the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Assumptions

While developing this project, several assumptions were made. The following changes and improvements can be considered:

- **Error Handling and Notifications**: Added user notifications to provide better user experience in case of errors.

- **Layout Flexibility**: Implemented functionality to switch between different layout modes such as grid and list views.

- **Architecture**: Considered adopting an Atomic Design approach if the project was larger and required more structured component management.

- **Testing**: Expanded the testing suite to include different types of tests. Would also improve their number and quality. This would improve the reliability of the application.

- **Framework Choice**: Next.js can be used if for example server-side rendering and great SEO was required. Next.js could offer additional features like built-in routing and server-side rendering that might be beneficial for certain use cases.
