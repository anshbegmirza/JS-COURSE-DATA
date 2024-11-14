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


--------------------------------------------------------------------------------------------------------------------------
                                              ***** FOLDER 14 *****  
                                                       OOP
--------------------------------------------------------------------------------------------------------------------------

201 : What is OOP?

Brief overview of what oops is.
encapsulation, abstraction, inheritance and polymorphism. explained
classes and objects explained.

202: OOP in JS