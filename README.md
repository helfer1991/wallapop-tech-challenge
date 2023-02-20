# Wallapop Tech Challenge by Helder Ferreira :)

Hola Wallapop!

I'm Helder Ferreira, a FE engineer with close to 2 years of experience and a big fan of React and programming in general :)
I'm super happy to be a candidate for Wallapop and I must confess that I really like the UI/UX of your web application along with the palette of colors! 

In fact, I've taken a bit of inspiration on that to solve this tech challenge, because your green color is just very easy and cool on the eyes and creates a nice contrast with white :)

Regarding the tech stack, I've been used Typescript, Styled-Components and React for almost 2 years. For unit-testing, we use React-Testing-Library on New Work SE, hence that's the tech stack I've chosen to complete this tech challenge.

The application meets (I think! I hope!) all the requirements you've specified. There is one modal for the favourites.
I've decided to also use a modal to choose the category to filter the items.
The search feature has a debouncer that acts after 500ms :)
To choose the category to use as a filter on the search bar I thought 4 buttons would be ok. The selected button is the green one. Every time you click on a different button its style will change :)

There's also an Empty State component to display when a given search yields no results.

I have created 2 hooks: 1 used to filter and sort the items, the other to call the Context API to allocate the favourites and manipulate that list. The hook used over there was an useReducer to manipulate the state.

The favourites are accessible by a button on the Header component.
The footer component is a static and simple one, just with the Wallapop name and a nice string using my name :)

The items-list-manager folder has:
- items-list-manager.container, where the API call (using Axios) is done - separation of data fetching and presentional logic layer;
- items-list-manager, where the action takes place;
- items-list, that renders a list of items. That list of items is already sorted. This component was wrapped in memo in order to avoid unnecessary rerenders everytime another action takes place on the parent component (for example, when choosing another filter, or sorting method);
- item, an item to be rendered by the items-list.

I've also used React Icons to display enable adding (or removing) items to the favourites. They are hearts that are attached to each card item. So, if you want to add a given item to the favourites, just click on the heart! Once you click, it gets disabled, so to remove it you have to click on the "Remove" button on the favourites, as mentioned :)

On the favourites modal, if you click somewhere outside of the modal it will get closed :)
For the modal you open when you want to define the sorting criteria, it will close when you click on a criteria, or outside of the modal also :)

I've also taken a bit of care when it comes to accessibility by adding some aria-label tags.

The goal was to develop an optimized version of the application, hence the use of memoization, albeit not excessively, as memoization always comes with a cost, thus a cost-benefit analysis has to get done.
This solution also has a Responsive Design :)
Essentially, there are 3 breakpoints: smallscreen (until 700px width), tablet (until 1200px) and desktop.

I didn't think it was necessary to use any kind of hook to determine the viewport and render X or Y component/image, I've only written CSS.

I have created also loading-states for the items-list component. Essentially, while the data is being fetched the Skeletons will appear (which are also responsive). If you want to check them out first on line 27 of the items-list.container file just type (if(!loading)) and you can see them with a bit more detail :)

In order to improve the user experience I thought it was best to add a scroll to top button, which is essentially an arrow pointing up (with a bit of transparency). It will appear once you scroll down by about 1500 px.

The unit-testing for this was a bit tricky. I wasn't able to test its appearance and, according to what I've researched, it is because JSDOM doesn't allow the engineers to set the height.

I hope you enjoy this as much as I liked doing this tech challenge!
Kudos for you for having designed such a cool tech challenge ::)


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


