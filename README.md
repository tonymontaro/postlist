[![Build Status](https://travis-ci.org/tonymontaro/postlist.svg?branch=master)](https://travis-ci.org/tonymontaro/postlist)
[![Maintainability](https://api.codeclimate.com/v1/badges/8c3f7092185aafba9999/maintainability)](https://codeclimate.com/github/tonymontaro/postlist/maintainability)
[![codecov](https://codecov.io/gh/tonymontaro/postlist/branch/master/graph/badge.svg)](https://codecov.io/gh/tonymontaro/postlist)

# PostList

Sortable Post List - Challenge to demonstrate the following; VueJs, Vuex, Animation, State Management, Events, Testing, and CI/CD.
The application is a sortable post list with slide animations and a time-travel feature. Actions (moving a post up or down) are recorded in History, and the user can go back to previous states.

Note: The time-travel button takes you to a previous state, just before the action was performed.

[Live Demo](https://postlist-temper.netlify.com/)

### Project Management

[Trello Board](https://trello.com/b/j8jTlo3X/postlist-temper-caspar)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## Testing

### Run unit tests

```
npm run test:unit
```

#### Run tests with Coverage report

```
npm run test:coverage
```

#### Run tests and watch files for changes (auto re-run)

```
npm run test:watch
```

### Lint files

```
npm run lint
```

## Deployment

Continuous Delivery was set up using Netlify. When a pull request is created, the changes are automatically deployed to a review server for inspection. When the pull request is merged to master, the production site is automatically re-deployed with the latest changes.

To deploy this project on your Server;

- compile and minify static files with

```
npm run build
```

- serve the static files found in the _dist_ folder

## Credits

I found the following resources usefull while working on the project:

- Mocking axios: https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions
- Testing Vue Components: https://github.com/vueschool/testing-vue-components
- Vue Animation: https://github.com/vuejs/vue-animated-list
