# PROJECT 4 README <!-- omit in toc -->

## Overview

_**Crate Digger** is a full-stack webapp built using the "React on Rails" stack. It provides information on where famous songs got their samples. Users will be able to look up songs to see if they've been sampled, and checkout songs that use the same sample. The site has full-crud and uses a RESTful JSON API. This is my fourth and final project for a 'Software Engineering Immersive' course at General Assembly. The inspiration for this project is whosampled.com(https://www.whosampled.com/)_


<br>

## MVP

### Goals

- _4 datatables: one for songs that have been sampled (with relevant information such as the artist,producer, and year released, and if they contain samples), one for songs in which the samples appear, one for producers and the songs they have worked on, and a table to join songs and samples_ 
- _Have full crud: eg, users can submit songs that have been sampled or contain samples_
- _Have a working searchbar where users can search for songs and producers._
- _Have a detail page where users can edit or delete a song._


<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React is a JavaScript library for frontent development_ |
|   React Router   | _This allows you to handle routes in a React app_ |
| Ruby on Rails    | _This is a server side framework written in Ruby._ |
| axios    | _This is a library that is used for making API calls._ |
| cors    | _Helps connect the frontend to the backend._ |


<br>

### Client (Front End)

#### Wireframes

Whimsical link: https://whimsical.com/crate-digger-GG3AD9rJCquxBowM3wm2AA

Desktop Landing Page:

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%201.13.48%20AM.png "Wireframe for Desktop Landing Page")

Tablet, Landing Page:

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%201.26.56%20AM.png "Wireframe for Tablet, Landing Page")

Mobile Landing page:

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%201.10.08%20AM.png "Wireframe for Mobile Landing Page")

Desktop, 'Add song' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%201.14.00%20AM.png "Wireframe for Desktop, 'Add song' page")

Desktop, 'All Songs' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%2011.50.04%20AM.png "Wireframe for Desktop, 'All Songs' page")

Desktop, 'Search Results' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%2011.54.24%20AM.png "Wireframe for Desktop, 'Search Results' page")

Desktop, 'Song Detail' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%209.15.10%20AM.png "Wireframe for Desktop, 'Song Detail' page")

Desktop, 'Editing song' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%2012.12.23%20PM.png "Wireframe for Desktop, 'Song Detail' page")


#### Component Hierarchy

``` structure

src
|__ components/
    |__ Card/
       |__ Card.jsx
       |__ Card.css
    |__ Footer/
       |__ Footer.jsx
       |__ Footer.css
    |__ Header/
       |__ Header.jsx
       |__ Header.css
|__ containers/
    |__ Container/
       |__ Container.jsx
       |__ Container.css
|__ Layouts/
    |__ Layout.jsx
    |__ Layout.css
|__ screens/
    |__ Add/
       |__ Add.jsx
       |__ Add.css
    |__ Detail/
       |__ Detail.jsx
       |__ Detail.css
    |__ Editing/
       |__ Editing.jsx
       |__ Editing.css
    |__ Listing/
       |__ Listing.jsx
       |__ Listing.css
|__ services/
    |__ api-config.js
    |__ songs.jsx

```

#### Component Tree

Figma link: https://www.figma.com/file/ijAjLad8c0m3fUxeAPb684/Untitled

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%2010.15.56%20AM.png "Component Tree")



[Component tree](url)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Researching song    |    L     |     1.5 hrs      |     n/a     |     n/a   |
| Setting up Rails    |    H     |     3 hrs      |     n/a     |     n/a   |
| Setting up React |    H     |     3 hrs      |     n/a     |     n/a    |
| Setting up CRUD functions |    H     |     3 hrs      |     n/a     |     n/a    |
| Writing song descriptions |    L     |     2 hrs      |     n/a     |     n/a    |
| Graphic Design |    L     |     2 hrs      |     n/a     |     n/a    |
| Mobile Responsiveness |    H    |     3 hrs      |     n/a     |     n/a    |
| Debugging    |    H     |     3 hrs      |     n/a    |    n/a    |
| Testing |    H     |     3 hrs      |     n/a     |     n/a    |
| Cleaning up the code       | Moderate |      2hrs      |      n/a       | n/a            |
| Pseudocode                 |   Low    |      1hr       |      n/a      |     n/a    |
| Feedback                   | Moderate |      2hrs      |       n/a     |    n/a     |
| Incorporating Suggestions  | Moderate |      1hrs      |     n/a      |    n/a      |
| Preparing for presentation | Moderate |      1hr       |      n/a       |     n/a     |
| TOTAL               |          |     30.5 hrs      |     n/a     |     n/a     |

<br>

### Server (Back End)

#### ERD Model
Lucid chart link: https://lucid.app/lucidchart/1f470e7b-8921-490e-9d65-43201f871f91/edit?page=0_0#?folder_id=home&browser=icon

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%203.29.09%20PM.png "Wireframe for Desktop, 'Song Detail' page")


<br>

***

## Post-MVP

- Have a built-in music visualizer. 
- Include information about songs that contain the same chords, or similar melodies or lyrics. 
- Sort function: eg sort songs by the number of times they have been sampled.
- Authorization.
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.