# Welcome to Aprycot Restaurant


## Available Scripts

To use this project, run the following commands:

#### `git clone https://github.com/huuthotn01/restaurant-management.git`

Clone the project to your machine. The default branch `master` will be cloned. For cloning all existing branches, continue with command: `git fetch --all`.

#### `cd restaurant-management`

Navigate to the cloned directory.

#### `npm install`

Install neccessary packages listed in [package.json](package.json) for server side.

#### `cd client && npm install`

Navigate to `client` folder and install neccessary packages listed in [package.json](client/package.json) for client side.

### Development build:

If you want to run in development mode, run the following commands (assume you are in `client` folder after the previous command):

#### `npm start`

Start the project. A new browser tab for the project will be opened at `localhost`. Port number is platform-specific, default value is 3000. Development mode provide `hot reloading` - any change in code now will be automatically updated to your website.

The project contains server-side works. To run the project with server, open a new terminal in the project root directory and run the following command:

#### `cd server && node server.js`

The command navigates into `server` folder and start the NodeJS server with default port 5000. The connection from React client side to Node server side is defined with `proxy` key in [client/package.json](client/package.json).

### Production build:

You may want to run the project in production build. To do this, navigate to the root directory and run the following commands:

#### `npm run build`

This command will build the project into uglified and minimized files which is run on client's machines.\
The build process is defined in [script field](package.json), involving install neccessary packages and build the React code.

#### `npm run start`

Run the project after building. Now your app will be in production mode. There is no hot reloading, and any changes in code have to be built again. The port number of the website will be shown on terminal (default value is 5000), access `localhost` with given port number to use the project.

## Available Features

The project contains the following features:

    - Login: including sign in, sign up and modify account infomation. 
    - Table services: including table reservation and table cancellation.
    - Food ordering.
    - Payment: after ordering food.
    - Management: for admin/manager only. This feature includes order management, customer management, staff managemenet and menu management.

For detailed flows and usages of available features, refer to [User Manual](/document/UserManual/UserManual.pdf)
