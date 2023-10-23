/*
->  20. How can you create a CSS animation? Provide an example.
->  psudo elements and psudo class
->  Explain the difference between "fluid" and "adaptive" design.
->  flex:1
->  How can you hide an element on larger screens and show it on smaller screens using CSS?
->  How can you create a sticky footer that stays at the bottom of the page, regardless of content height?
->  Create a layout where the sidebar is fixed, the header and footer are at the top and bottom, and the main content scrolls in between.
->  How can you create a CSS-only custom checkbox with a unique design?
->  Explain the "transform" property and provide an example.
->  How can you create a gradient border effect using CSS?
->  How can you create a multi-line text ellipsis using CSS?
->  -webkit
->  float property
->  Explain the "align-content" property in Flexbox.
->  Explain the difference between a pseudo-class and a pseudo-element.
        A pseudo-class targets a specific state of an element (e.g., :hover, :active), while a pseudo-element targets a specific part of an element (e.g., ::before, ::after).
->  Explain the "before" and "after" pseudo-elements and how they are used.
-> Explain the "animation-timing-function" property and its possible values.
-> How can you make a background image responsive using CSS?
-> Explain the difference between "em" and "rem" units in CSS.
-> How can you create a responsive text that adjusts its size based on the screen width?
-> Explain the "flex-grow" property and how it affects Flexbox items
-> Explain the concept of a "sticky" element in CSS and how to create one.
-> calc()
-> Explain the difference between "hover" and "focus" pseudo-classes in CSS.
-> n-th child
-> Explain the "transition" property and its syntax.
-> What is the purpose of the "::first-letter", "::first-line", ":first-child
-> How can you create a transparent background overlay on an image when hovered over?
-> text-overflow
-> outile in css



/* 
css interview questions
*/
// css but tricky
/* 
what is css?
What is cascading in CSS?
Tell us something about CSS3.
What do you understand by W3C?
Define property?
What is at-rule?
Name all the modules which are used in the current version of CSS.
How is a CSS selector used?
Explain CSS image scripts.
Define CSS frameworks?
What is the meaning of the CSS selector?
What are the media types allowed by CSS?
What are the various positioning properties in CSS?
What is the use of ruleset?
Tell me how we can declare element dimension? 
What are CSS transitions?
Name some CSS style components. (eg. selector, property, value)
How is margin different from padding in CSS?
Name some font-related CSS attributes.
What is the difference between CSS border and outline? 
What is the difference between margin and padding?
How does Calc work?
How can we calculate specificity?
What are Vendor-Prefixes? 
ow does a browser determine what elements match a CSS selector?
Can we add 2D transformations to our project using CSS?
Can we add 3D transformations to our project using CSS?
What is meant by CSS working under the hood?
When should you use translate () instead of absolute positioning?
What does * { box-sizing: border-box; } do? What are its advantages?
Define contextual selectors.
Explain the scenario you would use translate() instead of absolute positioning? 
What is Block Formatting Context? How does it work?
What are CSS Combinators?
What are Pseudo elements and Pseudo classes?
Tell us about the property used for image scroll controlling?
Name media types allowed by CSS.
What does * { box-sizing: border-box; } do? What are its advantages?
Can you name the four types of @media properties?
What is the importance of CSS Sprites?
What is the difference between inline, inline-block, and block?
What is the Box model in CSS? Which CSS properties are a part of it?
What are the limitations of CSS?
What are the advantages of CSS?
What is the float property of CSS?
What are the different CSS link states?
What are the advantages of using translate() instead of absolute position?
what is transform property and its type?
What is specificity? How to calculate specificity?
Different Box Sizing Property?
What is the grid system?
What are mixins?
Define gradients in CSS and types?
How can we use pagination in CSS?
Name different ways to position some aspects in CSS. 
Difference between CSS grid vs flexbox?
What is CSS Image reflection?
Why is the imported function an easy way to insert a file?
What are the differences between adaptive design and responsive design?
Does margin-top or margin-bottom have an effect on inline elements?
What are the different types of Selectors in CSS?
What is a CSS Preprocessor? What are Sass, Less, and Stylus? Why do people use them?
What is VH/VW (viewport height/ viewport width) in CSS?
Difference between reset vs normalize CSS?. How do they differ? -optional
How do you specify units in the CSS?. What are the different ways to do it?
What property is used for changing the font face?
How are the CSS selectors matched against the elements by the browser?
How is border-box different from content-box?
Why should we use float property in CSS?
What is a z-index, how does it function?
What are the attribute selectors?
What do the following CSS selectors mean?  div, p || div p || div ~ p || div + p ||div > p
What are the properties of flexbox?
How will you align content inside the p tag at the exact center inside the div?
Explain CSS position property?
When does DOM reflow occur?
How case-sensitive is CSS?
What does the :root pseudo-class refer to?
What does Accessibility (a11y) mean?
How do I restore the default value of a property?
What do CSS Custom properties variables mean?
What is the difference between CSS variables and preprocessor(SASS, LESS, Stylus) variables?
How to determine if the browser supports a certain feature?
How does this property work overflow: hidden?
overflow properties?
inherit
What is the CSS3 counter?
Can we overrule underlining hyperlinks?
What do you have to do to automatically number the heading values of sections and categories? -optional
How is the nth-child() different from nth of type selectors?
What do you understand by tweening in CSS?
How will you fix browser-specific styling issues?
Which CSS properties DOES NOT influence the box model?
Why background and color are the separate properties if they should always be set together?
Difference between reset vs normalize CSS? How do they differ?
What does Accessibility (a11y) mean?
What is progressive rendering? How do you implement progressive rendering on the website? What are its advantages?
Give an example of how you would use counter-increment and counter-reset in CSS to create automatic numbering within a webpage.
What is file splitting? When is it used?
What are functions/mixins? 
Define different cascading methods that can be used inside the cascading order.
How is the concept of inheritance applied in CSS?
Compare Hexadecimal color codes with RGB values?
How can the dimensions of an element be defined?
Which of them is precedent: HTML procedures or CSS properties?
What is the property used for image scroll controlling?
What is the general CSS nomenclature?
what is stylesheet?
*/

/*javascript interview questions */
/*
What are callbacks?👀👀👀 🧡💤💤💤💤
What is the use of promises in javascript?👀👀👀 🧡💤💤💤💤
Why do we use callbacks?👀👀👀 🧡💤💤💤💤
What is Object Destructuring?👀👀👀 🧡💤💤💤💤
How to handle exceptions in JavaScript?👀👀👀 🧡💤💤💤💤
Difference between Async/Await and Generators usage to achieve the same functionality. 👀👀👀 🧡💤💤💤💤
What are the differences between Java and JavaScript?
What are the different data types present in javascript?
What is DOM?
What is the difference between Function declaration and Function expression?
what is the difference between argument and paramter?
List some of the disadvantages of JavaScript?
Can you write a JavaScript code for adding new elements in a dynamic manner?👀👀👀👀👀
What is the difference between Attributes and Property?👀👀👀👀👀👀
How many ways in HTML element can be accessed in JavaScript code
Explain Hoisting in javascript.
How to create objects in JavaScript?
Difference between Client side JavaScript and Server side JavaScript?
what is multithreading and multiprocessing?
what is  anonymous function?
Why do we use the word “debugger” in javascript?
What are classes in javascript?
what is the difference between classes and object in js?
Difference between “ == “ and “ === “ operators.
Difference between var and let and const keyword in javascript.
Explain Implicit Type Coercion in javascript.
Is javascript a statically typed or a dynamically typed language?
What is NaN property in JavaScript?
What are the types of Pop up boxes available in JavaScript?
Explain passed by value and passed by reference.
How do JavaScript primitive/object types passed in functions?
What is an Immediately Invoked Function in JavaScript?
What do you mean by strict mode in javascript and characteristics of javascript strict-mode?
Explain Higher Order Functions in javascript.
What is the difference between Document and Window in JavaScript?👀👀👀
Explain “this” keyword.
What is the difference between innerHTML and innertext👀👀👀
What is event bubbling in Js?👀👀👀
What is self invoking function and its syntax
Explain call(), apply() and, bind() methods.  👀👀👀
What is currying in JavaScript?
Implicit Type Coercion in javascript (in detail with examples)
What is the difference between exec () and test () methods in javascript?
Explain Scope and Scope Chain in javascript.
Explain Closures in JavaScript.👀👀👀
What are object prototypes?
What do you understand about cookies?

What are Imports and Exports in JavaScript?
What are the types of errors in javascript?
What is memoization?
What is recursion in a programming language?
what is difference between recursion and iteration?
What is the use of a constructor function in javascript?
what is constructor,arrow and expression functions in js?
Which method is used to retrieve a character from a certain index?
What do you mean by BOM?
What's the difference between event.preventDefault() and event.stopPropagation() methods in JavaScript?
What do mean by prototype design pattern?
Differences between declaring variables using var, let and const.
What is the rest parameter and spread operator?
In JavaScript, how many different methods can you make an object?
What are generator functions?
Explain WeakSet in javascript.
What is Map in javascript?
Prototypal vs Classical Inheritance?
What is the use of a Map object in JavaScript?
What is inheritance in javascript?
What is encapsulation in javasript?
what is polymorphism?
what is abstraction?
Difference between prototypal and classical inheritance
What is a Temporal Dead Zone?
What do you mean by JavaScript Design Patterns?
Is JavaScript a pass-by-reference or pass-by-value language?
What is the use of the isNaN function?
Is it possible to break JavaScript Code into several lines?
What do you mean by NULL in JavaScript?
Explain the working of timers in JavaScript? Also elucidate the drawbacks of using the timer, if any.
What is the difference between ViewState and SessionState?
Does JavaScript support automatic type conversion?  and How?
Difference between for,while and do while?
Explain how to read and write a file using JavaScript?
What is called Variable typing in JavaScript ?
What is the difference between an alert box and a confirmation box?
What is the disadvantage of using innerHTML in JavaScript?
What is the use of void(0) ?
What are JavaScript Cookies ?
How to create a cookie using JavaScript?
What are escape characters and escape() function?
Which keywords are used to handle exceptions?
What are the type of errors in JavaScript?
What is the use of window object?
What is the use of history object
How to write normal text code using JavaScript dynamically?👀👀👀👀👀
How can you check if the event.preventDefault() method was used in an element?
What is the difference between undefined value and null value?
What is the difference between View state and Session state?
What are the falsy values in JavaScript, and how can we check if a value is falsy?
Use of a constructor function (with examples)?
What are the pop-up boxes available in JavaScript?
What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
Write the code for adding new elements dynamically?
What is the difference between ViewState and SessionState?
How to read and write a file using JavaScript?
Does JavaScript has concept level scope?
What is break and continue statements?
Which keyword is used to print the text on the screen?
differences between append and push?
What boolean operators can be used in JavaScript?
How are DOM utilized in JavaScript?
What is the role of deferred scripts in JavaScript?
What are the various functional components in JavaScript?
What are Screen objects?
Why you should not use innerHTML in JavaScript?
What is Loop Though the Properties of an Object?
Mention the different types of functions that are supported by JavaScript? Define each of them.
Explain the terms array slice() and array splice()?
unary operator?
What is json?
How do you compare Object and Map
What are modules?

*/

// What is $() in jQuery library?
//How do CSS precedence/cascading rules work? How does the !important directive affect the rules?

