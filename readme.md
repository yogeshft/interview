##notes

<b> - makes text bold
<i> - makes text italic
<em> - makes text italic but with added semantics importance
<big> - increases the font size of the text by one unit
<small> - decreases the font size of the text by one unit
<sub> - makes the text a subscript
<sup> - makes the text a superscript
<del> - displays as strike out text
<strong> - marks the text as important
<mark> - highlights the text
<ins> - displays as added text



The three kinds of Doctypes which are available:

Strict Doctype 
Transitional Doctype
Frameset Doctype

<!--  -->
there can be only 1 <head> tag in the entire Html document

There are mainly 7 values of position attribute that can be used to position an HTML element:

static: Default value. Here the element is positioned according to the normal flow of the document.
absolute: Here the element is positioned relative to its parent element. The final position is determined by the values of left, right, top, bottom.
fixed: This is similar to absolute except here the elements are positioned relative to the <html> element.
relative: Here the element is positioned according to the normal flow of the document and positioned relative to its original/ normal position.
initial: This resets the property to its default value.
inherit: Here the element inherits or takes the property of its parent.



<!-- What are the different ways of making an image responsive? -->
Art Direction – The landscape image fully shown in desktop layout can be zoomed in with the main subject in focus for a portrait layout by using <picture>.
For example:

<picture>
<source media="(min-width: 650px)" srcset="img_flower.jpg">
 <img src="img_marsh.jpg" style="width:auto;">
</picture>
 For any other screen:

Resolution Switching – Instead of zooming and cropping, the images can be scaled accordingly with the help of vector graphics. It can be set to serve different pixel density screens as well.
For example SVG:

<svg width="100" height="100">
 <circle cx="50" cy="50" r="40"
 stroke="green" stroke-width="4" fill="yellow" />
</svg>




inline: Using this we can display any block-level element as an inline element. The height and width attribute values of the element will not affect.
block: using this, we can display any inline element as a block-level element. 
inline-block: This property is similar to inline, except by using the display as inline-block, we can actually format the element using height and width values.
flex: It displays the container and element as a flexible structure. It follows flexbox property.
inline-flex: It displays the flex container as an inline element while its content follows the flexbox properties.
grid: It displays the HTML elements as a grid container.
none: Using this property we can hide the HTML element.


<meta> tag is a void tag

<!-- web storage -->
This web storage helps in storing some of the static data in the local storage of the browser so that we do not need to fetch it from the server every time we need it. There is a size limit based on different browsers. This helps in decreasing the load time and a smooth user experience. There are two types of web storage that are used to store data locally in HTML5:

Local Storage - This helps in storing data that will be retained even though the user reopens the browser. It is stored for each webapp on different browsers.
Session Storage - This is used for one session only. After the user closes the browser this gets deleted

<!-- hyper link -->
The HTML provides an anchor tag to create a hyperlink that links one page to another page. These tags can appear in any of the following ways:

Unvisited link - It is displayed, underlined and blue.
Visited link - It is displayed, underlined and purple.
Active link - It is displayed, underlined and red.


<!-- semantic HTML?  -->

Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is used for italic. Instead of these we use <strong></strong> and <em></em> tags.

<!--What is a style sheet?  -->
A style sheet is used to build a consistent, transportable, and well-designed style template. You can add these templates on several different web pages. It describes the look and formatting of a document written in markup language.

<!-- difference between progress and meter tag? -->
The progress tag is used to represent the progress of the task only while the meter tag is used to measure data within a given range.

<!-- How do you separate a section of texts in HTML? -->
We separate a section of texts in HTML using the below tags:

<br> tag – It is used to separate the line of text. It breaks the current line and shifts the flow of the text to a new line.
<p> tag–This tag is used to write a paragraph of text.
<blockquote> tag–This tag is used to define large quoted sections.

<!--  Are the HTML tags and elements the same thing? -->
No, HTML tags are used to define the structure of a web page, while HTML elements are made up of a set of tags that define a specific part of a web page.

<!-- How to redirect to a particular section of a page using HTML?  -->
One can use the anchor tag to redirect to a particular section on the same page. You need to add “id attribute” to the section that you want to show and use the same id in href attribute with “#” in the anchor tag. So that On click a particular link, you will be redirected to the section that has the same id mentioned in the anchor tag.

<!--  Compare and contrast an HTML specification with a browser’s implementation.-->
For a document to be considered “valid” in accordance with an HTML specification, such as HTML5, it must follow a set of requirements. In addition, a specification gives guidelines for how a browser should comprehend and display such a document. 

A browser is deemed to “support” a specification if it processes legitimate documents in accordance with the specifications’ guidelines. Although most of the HTML5 specification is supported by all of the main browsers, not all of it is supported by any browser as of yet, hence it is up to the developer to determine whether the feature they plan to utilize will be supported by all of the browsers they intend to use to view their content.

Due to this, despite the enhanced specifications, cross-browser support still causes developers problems. Additionally, while HTML5 specifies certain guidelines for invalid documents (those with syntactical faults), faulty documents may contain anything, making it hard for the specification to fully address every scenario. Thus, the browser is left in charge of making numerous decisions regarding how to handle damaged documents.


<!-- How can website assets be optimized? -->
Ans. To optimize website assets, we must comprehend a few fundamental optimization principles. First, we need to reduce the download size and the number of HTTP queries. We can use the following strategies to optimize website assets:
File compression
File concatenation
CDN Hosting
Offloading assets
Re-organizing
Refining code


 <!-- How to create a new HTML element? -->
You can create new elements for the document in the following way:
<script>
document.createElement﴾"myElement"﴿
</script>


<!--  ----------------------------------------------------------------
                                        css
----------------------------------------------------------------------  -->


<!-- 

box-sizing: border-box; Note :- when using box-sizing : content-box; the content size remain same while border-box size grows as padding and border grow. but when using box-sizing: border-box; , the size of border-box remains same while size of content decreases as padding and border grow. -->

<!-- At-Rule:
An at-rule is a special type of instruction in CSS that begins with the @ symbol. At-rules are used to apply special behaviors, conditions, or rules to a CSS stylesheet or to specific sections of code.  -->

<!-- What is the difference between CSS variables and preprocessor(SASS, LESS, Stylus) variables? -->
CSS variables can be used without the need for a preprocessor. Currently, all the major browsers support the CSS variables. 
CSS variable cascade. But the preprocessor variables don’t cascade. 
CSS variable can be accessed and manipulated in javascript



It is to be noted that the padding does not allow negative values.

<!-- What is common between class and ID? -->
Both class and ID are used in HTML to assign a value from CSS. The ID is used as an element, whereas the class is used as a block. 

<!-- What is the difference between margin and padding? -->
Margin is used to create space around elements and padding is used to create space around elements inside the border.
We can set the margin property to auto but we cannot set the padding property to auto.
In Margin property we can allow negative or float number but in padding we cannot allow negative values.
Margin and padding target all the 4 sides of the element. Margin and padding will work without the border property also. 

<!-- What are the different CSS link states? -->
A link is a connection from one web page to another web page. CSS property can be used to style the links in various different ways.

States of Link: Before discussing CSS properties, it is important to know the states of a link. Links can exist in different states and they can be styled using pseudo-classes.
There are four states of links given below:

a:link: This is a normal, unvisited link.
a:visited: This is a link visited by a user at least once
a:hover: This is a link when the mouse hovers over it
a:active: This is a link that is just clicked.


<!-- What is CSS overflow?  -->
The CSS overflow controls the big content. It tells whether to clip content or to add scroll bars. The overflow contains the following property:

visible
hidden
scroll
auto
1. Visible: The content is not clipped and is visible outside the element box.

2. Hidden: The overflow is clipped and the rest of the content is invisible.

3. Scroll: The overflow is clipped but a scrollbar is added to see the rest of the content. The scrollbar can be horizontal or vertical.

4. Auto: It automatically adds a scrollbar whenever it is required.

Overflow-x and Overflow-y: This property specifies how to change the overflow of elements. x deals with horizontal edges and y deals with vertical edges.


<!-- Can we add 2D transformations to our project using CSS? -->
Yes, we can, a transformation modifies an element by its shape, size, and position. It transforms the elements along the X-axis and Y-axis.
There are six main types of 2D transformations which are listed below:

translate()
rotate()
scale()
skewX()
skewY()
matrix()


<!--  Can we add 3D transformations to our project using CSS? -->
Yes, it allows changing elements using 3D transformations. In 3D transformation, the elements are rotated along the X-axis, Y-axis, and Z-axis.

There are three main types of transformation which are listed below:

rotateX()
rotateY()
rotateZ()


<!-- How can we make our website responsive using CSS?  -->
Media queries can be used to check many things:

width and height of the viewport
width and height of the device
Orientation
Resolution

<!-- length -->
Relative Length:
UNIT	DESCRIPTION
em	     Relative to the font-size of the element 
ex	     Relative to the x-height of the current font (rarely used)
ch	     Relative to the width of the “0” (zero)
rem	     Relative to font-size of the root element
vw	     Relative to 1% of the width of the viewport*
vh	     Relative to 1% of the height of the viewport*
vmin     Relative to 1% of viewport’s* smaller dimension
vmax     Relative to 1% of viewport’s* larger dimension
%	     to the parent elemen 


Absolute Length

UNIT	DESCRIPTION
CM	    centimetres
MM	    millimetres
IN	    inches (1in = 96px = 2.54cm)
PX	    pixels (1px = 1/96th of 1in)
PT	    points (1pt = 1/72 of 1in)
PC	    picas (1pc = 12 pt)


<!-- What is the use of box-shadow in CSS? -->
The box-shadow CSS property adds shadow effects around an element’s frame. You can set multiple effects separated by commas. A box-shadow is described by X and Y offsets relative to the element, color, blur and spread radii. Below are a few implementations of box-shadow

box-shadow: 10px 5px 5px red;

box-shadow: 60px -16px teal;

box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);

box-shadow: inset 5em 1em gold;


<!-- What are Vendor-Prefixes?  -->
Browser vendors sometimes add prefixes to experimental or nonstandard CSS properties and JavaScript APIs, so developers can experiment with new ideas while—in theory—preventing their experiments from being relied upon and then breaking web developers’ code during the standardization process. Developers should wait to include the unprefixed property until browser behaviour is standardized.

The major browsers use the following prefixes:

-webkit- (Chrome, Safari, newer versions of Opera, almost all iOS browsers (including Firefox for iOS); basically, any WebKit based browser)
-moz- (Firefox)
-o- (Old, pre-WebKit, versions of Opera)
-ms- (Internet Explorer and Microsoft Edge)

<!--  What do you know about the CSS3 element selector?-->
CSS3 element selector helps to find out the HTML elements name which we want to apply in a style sheet. It has five categories. They are

Attribute Selectors: Find an attribute or attribute value of an HTML element.
Combinator Selectors: Find a specific relationship between elements.
Simple Selectors: Find a name, id, or class of an element.
Pseudo Class Selectors: Find a certain state of an element.
Pseudo Elements Selectors: Find the style part and select an element.

<!--  Name all the modules which are used in the current version of CSS. -->
There are several modules in CSS as stated below:

Selectors
Box Model
Backgrounds and Borders
Text Effects
2D/3D Transformations
Animations
Multiple Column Layout
User Interface.


<!-- Define different cascading methods that can be used inside the cascading order. -->
Cascading order is itself a sorting method that allows many other different sorting methods:

a) Sort by origin: There are some rules which can provide an alternate way defined as:

The normal weight of the style sheet of a particular provider will be overridden by the increased weight of the user’s style sheet.
Stylesheet rules of a particular user will be overridden by the normal width of the provider’s style sheet.
b) Sort by selector’s specificity: Less specific selector is been overridden by the more specific selector.

For example, A contextual selector is less specific in comparison to the ID selector which is a more specific one and with that contextual selector is been overridden by the ID selector.

c) Sort by order specified: This comes in the scenario when the two selectors are of same weight and the other properties than the specification which will be seen for overriding.


<!-- Is there Case-sensitivity in CSS? -->
There is no case sensitivity in CSS, although font families and URLs have case sensitivity.

<!-- ---------------------------------------------------------------- 
                                        js
 ------------------------------------------------------------------ -->

 <!-- Explain Closures in JavaScript. -->
Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

<!-- What are callbacks? -->
A callback is a function that will be executed after another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used as a property of an object.




<!-- How many ways an HTML element can be accessed in JavaScript code?  -->
There are four possible ways to access HTML elements in JavaScript which are:

getElementById() Method: It is used to get the element by its id name.
getElementsByClass() Method: It is used to get all the elements that have the given classname.
getElementsByTagName() Method: It is used to get all the elements that have the given tag name.
querySelector() Method: This function takes CSS style selector and returns the first selected element.




<!-- Which method is used to retrieve a character from a certain index? -->
The charAt() function of the JavaScript string finds a char element at the supplied index. The index number begins at 0 and continues up to n-1, Here n is the string length. The index value must be positive, higher than, or the same as the string length.

<!-- there is no binding of this keyword. -->

<!-- Differences between declaring variables using var, let and const. -->
keyword	                const	let	     var
global scope	        no	    no	     yes
function scope	        yes	    yes	     yes
block scope		        yes	    yes      no
can be reassigned	    no	    yes	     yes


<!-- In javascript, a block means the code written inside the curly braces {}. -->


<!-- In JavaScript, how many different methods can you make an object?
In JavaScript, there are several ways to declare or construct an object. -->

Object.
using Class.
create Method.
Object Literals.
using Function.
Object Constructor.

<!-- then() method is used to access the result when the promise is fulfilled. -->
 <!-- catch() method is used to access the result/error when the promise is rejected. -->

<!-- What is the use of promises in javascript? -->
Promises are used to handle asynchronous operations in javascript.
Before promises, callbacks were used to handle asynchronous operations. But due to the limited functionality of callbacks, using multiple callbacks to handle asynchronous code can lead to unmanageable code.

Promise object has four states -
Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.
Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.
Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.
Settled - This state represents that the promise has been either rejected or fulfilled.
A promise is created using the Promise constructor which takes in a callback function with two parameters, resolve and reject respectively.



<!-- How to create objects in JavaScript? -->
There are 3 ways to create an object in JavaScript.

By object literal
By creating an instance of Object
By Object Constructor



<!-- Key points to remember about classes: -->

Unlike functions, classes are not hoisted. A class cannot be used before it is declared.
A class can inherit properties and methods from other classes by using the extend keyword.
All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. An error will be thrown if the strict mode rules are not followed.

<!-- What are generator functions? -->
Introduced in the ES6 version, generator functions are a special class of functions.

They can be stopped midway and then continue from where they had stopped.

Generator functions are declared with the function* keyword instead of the normal function keyword:

In normal functions, we use the return keyword to return a value and as soon as the return statement gets executed, the function execution stops:

In the case of generator functions, when called, they do not execute the code, instead, they return a generator object. This generator object handles the execution.

genFunc(); // Returns Object [Generator] {}
The generator object consists of a method called next(), this method when called, executes the code until the nearest yield statement, and returns the yield value.

<!-- Explain WeakSet in javascript. -->
In javascript, a Set is a collection of unique and ordered elements. Just like Set, WeakSet is also a collection of unique and ordered elements with some key differences:

Weakset contains only objects and no other type.
An object inside the weakset is referenced weakly. This means, that if the object inside the weakset does not have a reference, it will be garbage collected.
Unlike Set, WeakSet only has three methods, add() , delete() and has() .




<!-- What do you mean by JavaScript Design Patterns? -->
JavaScript design patterns are repeatable approaches for errors that arise sometimes when building JavaScript browser applications. They truly assist us in making our code more stable.
They are divided mainly into 3 categories 

Creational Design Pattern
Structural Design Pattern
Behavioral Design Pattern.
Creational Design Pattern: The object generation mechanism is addressed by the JavaScript Creational Design Pattern. They aim to make items that are appropriate for a certain scenario.
Structural Design Pattern: The JavaScript Structural Design Pattern explains how the classes and objects we've generated so far can be combined to construct bigger frameworks. This pattern makes it easier to create relationships between items by defining a straightforward way to do so.
Behavioral Design Pattern: This design pattern highlights typical patterns of communication between objects in JavaScript. As a result, the communication may be carried out with greater freedom


<!-- Is JavaScript a pass-by-reference or pass-by-value language? -->
The variable's data is always a reference for objects, hence it's always pass by value. As a result, if you supply an object and alter its members inside the method, the changes continue outside of it. It appears to be pass by reference in this case. However, if you modify the values of the object variable, the change will not last, demonstrating that it is indeed passed by value.



<!-- Can you write a JavaScript code for adding new elements in a dynamic manner? -->
<script type="text/javascript">
function addNode() { 
    var newP = document.createElement("p");
    var textNode = document.createTextNode(" This is a new text node");
    newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP);
}
</script>





<!-- How to convert the string of any base to integer in JavaScript? -->
In JavaScript, parseInt() function is used to convert the string to an integer. This function returns an integer of base which is specified in second argument of parseInt() function. The parseInt() function returns Nan (not a number) when the string doesn’t contain number.


 <!-- What are the types of Pop up boxes available in JavaScript? -->
There are three types of pop boxes available in JavaScript.

Alert
Confirm
Prompt


<!-- Which keywords are used to handle exceptions? -->
When executing JavaScript code, errors will almost definitely occur. These errors can occur due to the fault from the programmer’s side due to the wrong input or even if there is a problem with the logic of the program. But all errors can be solved by using the below commands.

The  <b>try</b> statement lets you test a block of code to check for errors.
The  <b>catch</b> statement lets you handle the error if any are present.
The  <b>throw</b> statement lets you make your own errors.



<!-- What is the use of window object? -->
The window object is created automatically by the browser that represents a window of a browser. It is not an object of JavaScript. It is a browser object.
The window object is used to display the popup dialog box. Let's see with description.

Method	
alert()	displays the alert box containing the message with ok button.
confirm()	displays the confirm dialog box containing the message with ok and cancel button.
prompt()	displays a dialog box to get input from the user.
open()	opens the new window.
close()	closes the current window.
setTimeout()	performs the action after specified time like calling function, evaluating expressions.





<!-- 
What are Pseudo-classes?
A pseudo-class is used to define a special state of an element.

For example, it can be used to:

Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus


A CSS pseudo-element is used to style specified parts of an element.
For example, it can be used to:

Style the first letter, or line, of an element
Insert content before, or after, the content of an element




 -->



Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic


this keyword refers to an object. ivoking this keyword is depending upon how and in what context it is called.