# Course Code for [What is React](https://pluralsight.com/courses/what-is-react) on Pluralsight

![Update Course Release!](ImportantNotice.png)

Updated Course: [What is React (Released January 2025)](https://www.pluralsight.com/library/courses/react-what-is/)

This course has been updated to reflect the latest changes in React 19 production. It includes completely a completely new discussion
around using React Server Components with Suspense and promises*. This includes running React Server Components where the data is retrieve and rendered
in the Node server, as well as the very powerful scenario where the data is downloaded in the node server, and then automatically sent to the React 
client without ever having to go through an REST server.

All examples in this repository are converted to React 19.0.0 production.

__The new Clips are Module 4, Clip 9 and Clip 10. Both, completely new__

## OTHER Recently Released Courses From Peter Kellner

| **Course**                                                                                                                 | Release Date  |
|----------------------------------------------------------------------------------------------------------------------------|---------------|
| **[AI-Powered React Applications: Building Intelligent Interfaces](https://app.pluralsight.com/library/courses/ai-powered-react-applications-building-intelligent-interfaces/)**  | February 2025 |
| **[What is React](https://pluralsight.com/courses/react-what-is/)**  *(this course)*                                       | January 2025  |
| **[Working With Data in React](http://www.pluralsight.com/courses/react-working-data)**                                    | February 2024 |
| **[Server Component Fundamentals in React 18](http://www.pluralsight.com/courses/react-18-server-component-fundamentals)** | June 2023     |
| **[Working with Components in React 18](https://pluralsight.com/courses/react-18-working-components/)**                    | February 2023 |
| **[Using Hooks in React 18](https://pluralsight.com/courses/react-18-using-hooks/)**                                       | November 2022 |
| **[What's New in React 18](https://pluralsight.com/courses/react-18-whats-new/)**                                          | May 2022      |
| **[Data and UI Patterns in React](https://github.com/pkellner/pluralsight-building-essential-ui-data-elements-in-react/)** | December 2021 |

<hr/>

The main branch here is the latest updates to the Pluralsight course <b>What Is React</b>. This GitHub repo includes the final code for all the modules in the course.

## Course Description

This course will teach you what  React is, and help you  understand why React is the number one  JavaScript library for building JavaScript Apps in a browser.

In this course, What is React, you’ll learn all about the component based nature of React and how that translates into highly performant and easy to use web applications.. First, you’ll explore the nature of React and fundamentally how it addresses building component based web apps.. Next, you’ll discover more specifically how React is based on a virtual DOM that efficiently maintains the applications user interface to mirror that Virtual DOM. Finally, you’ll learn how React uses the powerful JSX syntax to represent components and the actual UI of a running web app.. When you’re finished with this course, you’ll have an excellent understanding of why  React is the most popular JavaScript library for building web apps, as well as what it takes to build a React app.

## Getting Started
1. **Install [Node 18.17 or later](https://nodejs.org)**.
2. **Clone this repository.** - `https://github.com/pkellner/pluralsight-what-is-react` or [download the zip](https://github.com/pkellner/pluralsight-what-is-react/archive/main.zip)
3. **Set your default directory to which module you want (example: `cd m3-hands-on-moving-to-concurrent-rendering` - `cd m4-hands-on-with-the-new-react-hooks`
4. **Install Node Packages with Dependencies.** - `npm install`

## Directory Structure Here

Each of the folders here represent one module of the course.  In each folder, there are subfolders that represent the completed code at the end of each clip. Where this is no clip reference, either there is no code in that clip or nothing changed from the previous clip.

Once in a clip directory, the easiest way to test the app is to first install the packages by typing at the root of that directory (in a terminal window or DOS prompt)

`npm install`

Then, do run the app you just need type

`npm run dev`

That will launch the web server on port 3000 where you can browser to it at the url: `http://localhost:3000`


## Repo or Course Issues

If you find any problems or issues, feel free to post it as an issue here at this forum and I will look into it as soon as I can. You can also contact me directly at http://peterkellner.net/contact/ 

I hope you enjoy the course!











