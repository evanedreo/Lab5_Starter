1. ID and classes help us in connecting our HTML, CSS, and JS. Putting thought into the naming, will help to ease us understand and manage tings. 
2. data atribute lets us store extra information on an HTML element without affecting the look. 

Example = `<div data-user-id="123"></div>`

How to use:

`div.dataset.userId`

which will give us `123`

Useful becuase keep data with the element and font affect how the element looks.

Data attributes are great to store custom data for JavaScript, but they aren't seen by search engines. If we use it instead of microdata, important information such as prices or product details wont be recognized in search results. We use data attributes for code, and microdata for meaning.

3. DOM fragment is a temporary container for elements, where we can put HTMl elements before adding them to the page. Its powerful because if we use DOM fragment, adding the whole fragment at once is faster than adding lots of things (list items) one by one to the page.

4. Virtual DOM is a copy of the real DOM in memory and used by tools like React, it changes the copy first then updates

benefits = 
- speed and performance
- cleaner code

drawbacks = 
- more complex
- we don't work directly with the real dom

5. 
- class = a reserved keyword in JS (for writing classes)
- className = used on DOM elements to avoid a naming conflicts

6. 
addEventListener() = 
- benefit = allow multiple handlers/listeners
- drawback = more complex

example = `element.addEventListener('click', () => console.log('clicked'));`

onClick = 
- benefit = simple and easy
- drawback = only assign a single event handler

example = `element.onclick = () => console.log('clicked'); `