This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Integration with backend

This boilerplate rely on [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for any sort of api calls, rather than using `react-query` hooks. I find RTK Query much cleaner and easier to handle since we can declare the typing of response/request and easily make rules for refetching and much more.

The RTK Query file is stored on `src/features/`, with the generic types declared on each of the folders there.

To make a new feature, create a new folder in `features/`. For example, we want to create integration for a simple blog feature, make a new folder `features/blog/`, the inside of the folder will generally contain 2 files, `api.ts` and `type.d.ts`, follow the example in `src/features/auth/` folder to see example.

## Atomic Design System

This boilerplate follow the rules of [Atomic Design System](https://atomicdesign.bradfrost.com/chapter-2/)

The components folder contain 4 subfolders:

- `atoms/`
- `molecules/`
- `organisms/`
- `templates/`

Atomic design is a methodology for creating and managing user interfaces in a systematic and efficient way. It was introduced by Brad Frost and is widely used in web and app development. The core concept of atomic design is breaking down a user interface into its fundamental building blocks, called "atoms," and then organizing them into higher-level components.

The atomic design system is composed of five distinct levels, each representing a different level of abstraction:

- Atoms

  These are the basic building blocks of the UI, such as buttons, input fields, and icons. Atoms are small, reusable elements that cannot be broken down further.

- Molecules

  Molecules are combinations of atoms that work together as a functional unit, like a search bar or a navigation menu.

- Organisms

  Organisms are more complex components that combine multiple molecules and/or atoms to form a distinct section of the UI, like a header or a product card.

- Templates

  Templates are page-level layouts that define the overall structure and the placement of organisms on a page.

- Pages

  Pages are the final implementation of the design, where specific content is added to the templates to create fully functional user interfaces.

The atomic design system promotes consistency, reusability, and scalability in UI development. By breaking the design down into discrete components, developers and designers can easily maintain and modify the interface. It also fosters collaboration among team members as they can refer to the shared language of atoms, molecules, organisms, templates, and pages. Overall, atomic design helps create cohesive and user-friendly experiences across different digital products and platforms.

## Better Code Practices

This boilerplate is integrated with:

- [Prettier](https://prettier.io/)

  `.prettierrc` configures the default prettier configuration of the project, this will make sure any use of auto formatting follow the prettier rules listed in the file

- [ESLint](https://eslint.org/)

  `.eslintrc.js` configures the rules that will be applied in the codebase. For example, each line has to end with a semicolon, and the linter will throw an error whenever this rule is not followed.

  Make sure you have the Eslint extension installed in your editor of choice :)

  In my VSCode user settings, i had to add the following line in order for VSCode to automatically fix the code to follow the ESLint rules:

  ```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
