Kanban React.js App - Chapter 3
=================================

Kanban-style project management tool built throughout the Pro React book. End of chapter 3.

### Summary

Chapter 3 covered propTypes, data flow in React applications, component types (Stateful components, pure components, containers...), React immutable helper, among other topics.

The Kanban app now fetches data from remote API and the user can add, remove and toggle tasks.

![Chapter 3 Screen Shot](https://cloud.githubusercontent.com/assets/33676/10974676/5f8d8152-83ca-11e5-90f3-eb60b4a978ec.png)

### How the repository is organized

You are in the Chapter 3 Branch.

The repository is organized in branches: Each branch corresponds to the end of a specific chapter. The master branch contains the final source code.

After cloning and fetching all of the remote branches, you can switch branches using `git checkout`, for example:

```
git clone git@github.com:pro-react/kanban-app.git
git fetch
git checkout chapter3
```

### Usage

**1. Change the Authorization code at app/KanbanBoardContainer.js**

**2. Install**
```
npm install
```

**3. Start the application**
```
npm start
```

Open http://localhost:8080 in your browser.
