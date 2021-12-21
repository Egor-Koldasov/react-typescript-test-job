This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I have chosen it to focus on the app implementation rather than on the project setup.

![2021-12-21_16-34](https://user-images.githubusercontent.com/15964628/146942071-8b406f4d-3498-4a02-81dc-71533c87afd9.png)

## How to use

### Running the development server
Start the server: 
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) with your browser.

### Exporting the static version

Generate files:
```bash
npm run static
```
Then open a generated file in `./out/index.html`

### Runnnig tests

```bash
npm run test
```

## Out of the scope

This is a very basic implementation, some things which I would usually do are left out since they may require more effort. For example:
- I do not usually implement the state management with separate hooks. Instead I like the app state to be in the single place. One way to organize this is to use React Context with [use-context-selector](https://github.com/dai-shi/use-context-selector)
- The responce from the API is being casted into the nesessary type. The validation library like [yup](https://github.com/jquense/yup) can be used instead. There is also no handler for server errors.
- No server-side rendering. NextJS built-in functionality can be used, but of cource it does not work with static export.
- No infinite scroll with more and more news loading. This can be done without libraries just by checking the scroll value and loading more.
