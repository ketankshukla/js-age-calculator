# Age Calculator

This project is an age calculator web application. The user can input their date of birth, and the application will
calculate and display their age. The project consists of an HTML file, a CSS file, and a JavaScript file.

## HTML (index.html)

The HTML file sets up the structure of the web page. It includes the following elements:

- A `DOCTYPE` declaration
- A `head` section with meta information, the title "Age Calculator", and a link to the CSS file
- A `body` section containing a `div` with the class "container"
    - Inside the container, there's an `h1` element with the text "Age Calculator"
    - A `div` with the class "form" that contains the following elements:
        - A `label` element for the date input
        - An `input` element with type "date" and an ID "birthday"
        - A `button` element with an ID "btn" and the text "Calculate Age"
        - A `p` element with an ID "result" for displaying the calculated age
    - A `script` element with a reference to the JavaScript file

## CSS (style.css)

The CSS file provides styling for the web page. It sets the following styles:

- General styles for the `body`, including margin, padding, font-family, and background-color
- Styles for the `.container` class, including background-color, box-shadow, padding, max-width, border-radius, and
  centered margin
- Styles for the `h1` element, including font-size, text-align, and margin
- Styles for the `.form` class, including display, flex-direction, and align-items
- Styles for the `label` element, including font-weight and margin-bottom
- Styles for the `input` element, including padding, border, border-radius, and width
- Styles for the `button` element, including background-color, color, border, padding, border-radius, margin-top,
  cursor, and transition
- A hover effect for the `button` element, with a different background-color
- Styles for the `#result` element, including margin-top, font-size, and font-weight

## JavaScript (index.js)

The JavaScript file provides the functionality for calculating and displaying the user's age. It contains the following:

- Variables for the button (`btnEl`), the date input (`birthdayEl`), and the result paragraph (`resultEl`)
- A `calculateAge` function that does the following:
    - Clears the result element's text
    - Gets the value of the date input
    - If the input is empty, an alert is shown
    - If the input is valid, the age is calculated and displayed in the result element
- A `getAge` function that calculates the age based on the input date:
    - It takes the input date and calculates the difference between the current date and the input date
    - It adjusts the age if the current month and day are before the input month and day
- An event listener for the button's click event, which triggers the `calculateAge` function