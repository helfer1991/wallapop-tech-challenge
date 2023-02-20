# Wallapop Tech Challenge by Helder Ferreira :)

Hola Wallapop!

I'm Helder Ferreira, a FE engineer with close to 2 years of experience and a big fan of React and programming in general :)
I'm super happy to be a candidate for Wallapop and I must confess that I really like the UI/UX of your web application along with the palette of colors! 

In fact, I've taken a bit of inspiration on that to solve this tech challenge, because your green color is just very easy and cool on the eyes and creates a nice contrast with white :)

Regarding the tech stack, I've been used Typescript, Styled-Components and React for almost 2 years. For unit-testing, we use React-Testing-Library on New Work SE, hence that's the tech stack I've chosen to complete this tech challenge.

The application meets (I think! I hope!) all the requirements you've specified. There is one modal for the favourites.
I've decided to also use a modal to choose the category to filter the items.
To choose the category to use as a filter on the search bar I thought 4 buttons would be ok. The selected button is the green one. Every time you click on a different button its style will change :)

There's also an Empty State component to display when a given search yields no results.

I have created 2 hooks: 1 used to filter and sort the items, the other to call the Context API to allocate the favourites and manipulate that list.

The favourites are accessible by a button on the Header component.
The footer component is a static and simple one, just with the Wallapop name and a nice string using my name :)

The items-list folder has:
- items-list.container, where the API call (using Axios) is done - separation of data fetching and presentional logic layer;
- items-list, where the action takes place;
- item-list, that renders a list of items. That list of items is already sorted. This component was wrapped in memo in order to avoid unnecessary rerenders everytime another action takes place on the parent component (for example, when choosing another filter, or sorting method);
- items -, an item to be rendered by the item-list.

I've also used React Icons to display enable adding (or removing) items to the favourites. They are hearts that are attached to each card item. So, if you want to add a given item to the favourites, just click on the heart! Once you click, it gets disabled, so to remove it you have to click on the "Remove" button on the favourites, as mentioned :)

On the favourites modal, if you click somewhere outside of the modal it will get closed :)
For the modal you open when you want to define the sorting criteria, it will close when you click on a criteria, or outside of the modal also :)

I've also taken a bit of care when it comes to accessibility by adding some aria-label tags.

The goal was to develop an optimized version of the application, hence the use of memoization, albeit not excessively, as memoization always comes with a cost, thus a cost-benefit analysis has to get done.
This solution also has a Responsive Design :)
Essentially, there are 3 breakpoints: smallscreen (until 700px width), tablet (until 1200px) and desktop.

I didn't think it was necessary to use any kind of hook to determine the viewport and render X or Y component/image, I've only written CSS.

On the FavouritesContext I could have used an useReducer hook to deal with adding/removing items to favourites, although I guess that's a matter of personal preference and the overall manipulation of that list is simple.

When it comes to improvements, I would have liked to have written more unit-tests and created a loading state component to show when the data is being fetched.
However, unfortunately I did not have time. In the last weekend by grandmother has died and I took some days off as I was having a hard time at focusing on my tasks and needed a bit of time to clear my head up.

I hope you enjoy :)

## Available Scripts

In the project directory (cd wallapop), you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`


## Learn More


