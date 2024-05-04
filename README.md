### 2023-24 Harvey Mudd Clinic Project with Webflow

#### Team members

- Amy Liu
- Aryaman Jaiswal (Spring TL)
- Eden Goldberg
- Htoomyat Naing (Fall TL)

#### About

The goal of this project is to build a Webflow Designer Extension App that guides the user through the process of building a website in Webflow by offering guided-completion interactive tutorials/ games.

This app is built using Webflow Designer APIs, Next.js, and Tailwind.

### Guide to the Repo

This repo represents a Designer Extension web app built in NextJS. The demo game we built is inside the `navbar-game` directory. Inside this directory,
the `checkFunctions` file has the functions we use to check the user progress in each step of the game, and the `instructionBlobs` contain static text and image
content that we display for each step of the game. The `generateTemplate` file includes a function we use to generate a DOM tree inside the Designer.
