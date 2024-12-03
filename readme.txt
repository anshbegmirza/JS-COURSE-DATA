This is the repo created to contain all the js programs from JONAS course.

use video no 25 to revise logical operators (and, not, or);

video 37 to revise functions

video 80 to add and remove classes.


105: Learned about the spread operator, how to unpack arrays and iterables. Also spread operator works on objects also just like arrays. Unpacking and all that stuff can be done using ...

106: Rest it works contradicting the spread operator, rest actually builds up arrays (gathers them or joins them) and objects. (iterables).

107: On short circuting the OR (||) operator it returns the first truthy value found, whereas the AND (&&) operator returns the first falsy value found.

108:Nullish operator treats 0 and '' (empty string as truthy values.)

109: Coding Challenge #1

110 : Use for of loop to iterate through each element of our restaurant object and print a string to the user.

111: used enhanced lietrals for object creation.

112: Nullish and optional chaining works very well together. Optional chaining can be used to see if the obj or element is empty (refer to array example user)

113: We can loop object using their property names and Object.keys(), Object.values() to loop through. Also then further we can use for(const var_name of obj_name) to loop further and retrieve data from a object.

114: Coding challenge #2

115: Set is a collection of unique data. We cant use set to retrieve data, only to check unique data from a source like array or object.

116 : Maps works in a similar way to sets. (collection of key value pairs ) (A map is iterated by using key property/value)

117 : Sinces map are part of iterables we can also loop them.

118 : Which data structure to use based on requirement, for simple list like information which we want to modify later we have to use arrays for unique items also to remove them later we have to use sets.

Maps and objects are used when we are getting data from a api which we are going to use further in the application

119 : Challenge #3

120-123: String methods indexOf(),lastIndexOf(),slice(),split(),join(),tolowercase(),touppercase(),replace(),trim(),repeat(),startsWith(),endsWith(),padStart(),padEnd()

126: setting default parameters in functions

127: Value vs reference arguments in functions, works (similar to c program of swapping two nos.)
Learned call by value and by refrence using a imaginery passport concept. JS does not have call/passing by reference. Only call/pass by value.

128: Simple functions are known as first class functions and the function which receives another function as argument are known as higher order functions.

129 : Learned about call back functions, and using different functions all together in one big function. Higher order function in practice. 

130 : Functions returning function, used a function like greet to return another function.

131 : Used this keyword and manually set it to something else using call() and apply() methods on a function.

132 : Bind method, used to manually set the this keywords but it creates a new function

133 : Challenge #1

started from 153
154 : The find method of arrays

162 : The best video to revise array methods, which one to use when.

23 array methods in js

/////// FOLDER 12

166:  Math and Rounding
Keyfactors learned: Checking for number is a interger or not.Converting a string to number, not a number and to see if a value is a number or not. Parsing and how to use it.

167:  Numbers, dates, intl and timers.
Keyfactors learned: Learned about rounding up numbers, using floor, ceil and trunc. Used .toFixed(2) also in our bankist project.

168: Remainder Operator
Learned about the remainder operator (%) and the divide (/), its difference and how we can use it in some practical works.

169: Working BigInt
How we can create bigint, use them, math operation does not work on bigints. Do not mix bigint with normal interger

// http://www.lingoes.net/en/translator/langcode.htm

use the lingos site to get international codes for dates, along with language codes beside it.

173 : Internationalizing dates, used intl date formate to set dates to international standard. Used locale from navigator to set it to users language settings.

174: Learned about internationalizing numbers api, and used it to set specific data like currency type and seperator between numbers using users locale.

175: Timers: Set timers and Set intervals
Learned how to create setTimeout() functions and to use a delay of 3000 (3seconds) written in milliseconds, on our bankist app.

176: Implementing a countdown timer
Created a simple timer and set into login for like 2 mins, also on doing any activity like transfer money or loan the timer resets and starts again from 2 mins. Also after 2mins the application will get logged out.

--------------------------------------------------------------------------------------------------------------------------
                                              ***** FOLDER 13 *****  
                                              Advanced Dom & Events
--------------------------------------------------------------------------------------------------------------------------

177 : Section Intro 

179 : Project : Bankist Website
General overview of the bankist marketting website, what we are going to create in this section. Some small changes in the model functionality.

180: How the DOM Really works
How all the nodes are connected with other nodes, concept of inheritance and a diagram to understand how they interact with each other

181: Selecting creating & Deleting Elements

always select your elements at the top of page.
// used for selecting
used queryselector, queryselectorall, getelementbyID,getelementbyclassname,getElementsByTagName

Used insertadjacenthtml, innerhtml,textcontent,createelement,add, appened,prepend,before,after,

// for Deleting
remove and parentchild mthod (older way)

182 : Styles Attributes and Classes
Learned about how to add styles to elements, create new elements using js set various information like data, attributes and to get them also.


183: Implementing Smooth Scrolling
Learned how to calc the height and width of the users viewport, used that to implement old way of scroll to.

Also learned newer way of doing it, using scrollIntoView() function.

184: Types of events and event handlers.
Used different ways to add events to our elements. addEventListener, onmouseenter, and html js way. 
Also used removeEventListener to remove events.

185: Event Propogation: Bubbling and Capturing.
How the events travel from document to the target, where the start and end till bubble phase.

186: Event Propagation in practice
Learned how the event propagation works, in real using a random integer generator and a random color generator assigned them to a links.

187: Event Delegation Implementing Page Navigation
Used matching strategy to implement nav links and smooth behavior.

188: DOM Traversing
Learned how to travers meaning moving up and down in dom, getting elements from top and bottom. getting child elements, parent elements.

189: Building a tabbed component.
Created a simple toggling tab component by adding and removing active classes.

190: Passing Arguments to event handlers.
Created a nice hover effect, on the navigation using a handleHover function and used it on mouseover, and mouseout.

191: Implementing a Sticky Navigation the scroll event.
Created a simple sticky nav using scroll event on window object then add sticky class and removing it.

192: A Better Way: The Intersection Observer API.
Used intersection observer api and improved the sticky nav functionality without using the scroll event on window object, this the code is alot system intensive. 


193: Revealing Elements on Scroll 
Created a simple reveal on scroll animation using intersection observer api, used it on entry and added the section-hidden class to it.


194: Lazy Loading Images
Created a smooth on scroll load image thing for our bankist website, features section. Just removed a lazy-img class using intersectionObserver api, and used data-src for the same. (paste the code in chat and understand it better for revision.)


195: Building a Slider Component Part 1



// Events delegation means rather than assigning functionality to each component we assign it to the parent component of thos elements.

// All the custom data variables are in the data variable like data-slide (in html), then it is stored in dataset.slide (in js)

196: BUilding a slider component part 2

197: Lifecycle of DOM EVENTS
How we can see if the dom is loaded, pop the user to leave the site in the middle of something in which data could be lost.

198: Efficient Script Loading: Defer & Async

 <!-- To load our on scripts we should use this way. -->
  <script defer src="script.js"></script>
in the head tag 

Different ways of loading a js file in a browser (html)

How defer and async js works in the browser.

When to Use defer vs async:
Use defer for scripts that are dependent on the complete HTML structure or need to maintain execution order.

Use async for independent scripts that don't need to wait for other scripts or the full HTML parsing, allowing for faster page loading.


--------------------------------------------------------------------------------------------------------------------
                                              ***** FOLDER 14 *****  
                                                       OOP
--------------------------------------------------------------------------------------------------------------------

201 : What is OOP?

--Brief overview of what oops is.
encapsulation, abstraction, inheritance and polymorphism. explained
classes and objects explained.

202: OOP in JS

203: Constructor Functions with new Operator

204: Prototypes, 
--Learned how prototypes work in js, how they are assigned to an object, how they are called.

205. Prototypal inheritance and the Prototype chain
--How the protoypes are chained on one another, see the image for more information

206. Prototypal Inheritance on Built-in Objects.
--How prototypal inheritance works, also do read mdn documentation for more information and understanding

207. Coding Challenge #1
-- OOP is a really nice way to structure our code into a nice formatted smaller modular objects which can later be called multiple times depending upon the need. 

208: ES 6 Classes
 0. Classes are just functions disguised.
 1. Classes are NOT hoisted 
--meaning we can't use them before they are declared, we have to declare them first to use them.
 2.classes are first-class citizens
 3. Classes are executed in strict mode.

 209: Setters & Getters
 We can set and get variables to a class or function depening upon our need, less used method.

 210: Static Methods


---Date 25th November,24

210: Static Methods

211: Object Create

212: Codding Challenge

213: Inheritance Between Classes, constructor functions.

214: Coding Challenge #3

--Date 26th November,24

215: Inheritance between classes es6 classes

216: Inheritance Between _Classes__ Object.create

217: 217 Another Class Example

218 Encapsulation_ Protected Properties and Methods

219 Encapsulation_ Private Class Fields and Methods

--Date 27th November,24

220 : Chaining methods

221: es6 classes summary

222: Coding Challenge #4.


--------------------------------------------------------------------------------------------------------------------
                                              ***** FOLDER 15 *****  
                                                       MAPTY
--------------------------------------------------------------------------------------------------------------------

// SINCE IT IS A MINI PROJECTS LEARNINGS WILL BE WRITTEN HERE.


223: SECTION INTRODUCTION

225: PROJECT OVERVIEW
  --:: GENERAL OVERVIEW OF THE MAPTY PROJECT, COPIED THE FILES. 

226: HOW TO PLAN A WEB PROJECT
  --:: View the slide images for a better understanding of how to start a project.

  General guidnace steps are
  -- Understand what user needs
  -- Identify what are the features from above infro.
  -- Create a rough outline about how you are going to implement it using a flowchart.
  -- Start with the implementation.

227: Using the geolocation api

  --Geolocation API : 
    The Geolocation API is a browser-based JavaScript API that allows websites and web applications to access the geographical location of a user's device, such as their latitude, longitude, and sometimes altitude, accuracy, and speed. This can be useful for various applications, such as displaying location-based information, providing directions, or enabling location-based services.


--Date 28th November,24

228: Displayed a map using leaflet

  -- Leaflet:   A Leaflet is a lightweight, open-source JavaScript library used for building interactive maps for websites and web applications. It is widely used because it is simple to implement, has good performance on both desktop and mobile devices, and offers a wide range of features for creating dynamic, customizable maps.

  -- Used a third party library to add map to our mapty project.

229: Displaying a map marker
  Displayed individual markers wherever a user click on the map, stays their for longer.

  Used leaflet documentation to implement it.


230: Rendering Workout Input form
  --When a user clicks on the map, a map with basic workout detail input is given, thereby they have to fill it and press enter so that form is submitted, and a marker is appeared on the screen.

231: Project Architecture

232 Refactoring for Project Architecture

233 Managing Workout Data_ Creating Classes

234 Creating a New Workout

235 Rendering Workouts

236 Move to Marker On Click

237 Working with localStorage

238 Final Considerations


--------------------------------------------------------------------------------------------------------------------
                                                ***** FOLDER 16 *****  
                                                  Asynchronous JS
--------------------------------------------------------------------------------------------------------------------

239: Section Intro 

What is Async JavaScript?
Async JavaScript refers to techniques that allow JavaScript to handle tasks asynchronously. This is crucial because JavaScript is single-threaded, meaning it can only execute one task at a time. With asynchronous programming, JavaScript can perform tasks like fetching data, reading files, or setting timers without blocking the main thread. This ensures a smoother user experience, especially for tasks that might take time.

241: Asynchronous JavaScript, AJAX and APIs

--what is ajax?
-- Asynchronous javascript and xml: allows us to communicate with remote web servers in an asynchronous way.

-- With AJAX calls, we can request data from web servers dynamically.

What is API?

-- Application programming interface: piece of software that can be used by another piece of software, in order to allow applications to talk to each other.

Example : DOM API, Geolocation API, Leaflet.

What we generally use in async js is online api, which technically runns on a server, receives requests for data and sends data back as response.

                                "There is an API for everything"

XML = data format
XML (Extensible Markup Language) is a markup language designed for storing and transporting data. It is both human-readable and machine-readable, making it widely used for data exchange between systems. XML was standardized by the World Wide Web Consortium (W3C).

json = js object but in string form
most apis use json data formate rather than xml

242: Our First AJAX Call_ XMLHttpRequest

To get data from a server we use the get method

Every api that we use should have a yes/no for cors = cross origin resource sharing

Used a public api named rest countries and used it to generate cards for different countries based on their names only 

243: [OPTIONAL] How the Web Works_ Requests and Responses

-- How the web works?
ANS -- 
1. Your Browser Sends a Request
You open a browser (like Chrome or Firefox) and type a website address, like www.google.com.
The browser sends a request over the internet to the computer (called a server) where that website is stored.

2. The Internet Finds the Server
Your request travels through a network of cables, satellites, and routers.
A system called DNS (like a phonebook for the internet) helps find the IP address of the server where www.google.com lives.

3. The Server Responds
Once your request reaches the server, the server prepares the content (like HTML, CSS, JavaScript, or images).
The server sends this content back to your browser over the internet.

4. Your Browser Displays the Website
Your browser receives the content and understands how to show it.
HTML: Provides the structure (like headings, paragraphs, images).
CSS: Makes it look nice (like colors, fonts, layout).
JavaScript: Adds interactivity (like buttons that do things when clicked).
Extra Details (Optional)
Web Pages Can Be Dynamic: Some websites pull fresh data (like your Instagram feed) from the server whenever you visit.
Secure Connections: If the website uses HTTPS, your data is encrypted, making it safer.
In Short
You ask for a page → The internet finds the server → The server sends the page back → Your browser shows it to you.
Let me know if you'd like me to explain any part in more detail!

What is the difference between HTTP and HTTPS

Ans : -- The main difference between HTTP and HTTPS is security. Here's a simple breakdown:

1. HTTP (HyperText Transfer Protocol)
What It Does: HTTP is a protocol used to transfer data (like text, images, and videos) between your browser and a server.
No Encryption: Data sent through HTTP is in plain text, meaning anyone who intercepts the connection (like hackers) can see or modify the information.
Use Case: Suitable for non-sensitive information (e.g., browsing public articles).


2. HTTPS (HTTP Secure)
What It Does: HTTPS is just HTTP with an added layer of security using SSL/TLS encryption.
Encryption: Data is scrambled (encrypted) before it’s sent, so even if someone intercepts it, they can’t read it.
Authentication: HTTPS ensures you're communicating with the intended website (prevents impersonation attacks).
Use Case: Essential for sensitive data (e.g., online banking, shopping, and login pages).

How HTTPS Works
--The website gets an SSL/TLS certificate (a digital ID proving it's legitimate).
  When you visit the site:
    Your browser and the server establish a secure, encrypted connection using this certificate.
    All data exchanged is encrypted, making it secure.



244: Welcome to Callback Hell

Callback Hell : when we have a lot of nested async callbacks after callbacks to something like finding neighbour and its neighbour and its neighbour and so that particular is known as call back hell.

also see the setTimeout call back example for better understanding.

245: Promises and the Fetch API

--What are promises?
  An object that is used as a placeholder for the future result of an async operation

or

  A container for async delivered value.

or

 A container for a future value.


Promise that I will revceive money, if I guess the correct outcome.
  I buy lottery ticket (promise) right network
  |
  |
  |
  V
  Lotery draw happens asynchronously

If correct outcome, I receive money, because it was Promised !

246: Consuming Promises
-- JSon method is available to all the objects coming from the fetch function. so we can use it.

-- very nice lecture do revise this before giving the test it will surely help.

247: Chaining Promises

251: Asynchronous Behind the Scenes_ The Event Loop
Rewatch this video atleast 2 time after completing the whole course for understanding how the async js works bts scenes and so that you will be able to perform well in a js interview. 


==== After completing the JS course creata simple book for revision having all the conclusion and guide for this course and JS in whole.