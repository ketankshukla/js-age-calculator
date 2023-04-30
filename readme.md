# Age Calculator

The Age Calculator is a simple web application that allows users to input their date of birth and calculates their age.
The project consists of three files: an HTML file (index.html), a CSS file (style.css), and a JavaScript file (
index.js).

## HTML (index.html)

The HTML file structures the web page and defines its elements:

1. `<!DOCTYPE html>`: Defines the document type and version of HTML.
2. `<html lang="en">`: The root element of the page, with a `lang` attribute specifying the language as English.
3. `<head>`: Contains meta information, the title, and a link to the CSS file.
   - `<meta charset="UTF-8">`: Specifies the character encoding for the document.
   - `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: Ensures compatibility with older versions of Internet
     Explorer.
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Sets the viewport width and initial scale
     for responsive design.
   - `<title>Age Calculator</title>`: Defines the title of the web page.
   - `<link rel="stylesheet" href="style.css">`: Links the CSS file for styling the web page.
4. `<body>`: Contains the content of the web page.
   - `<div class="container">`: A wrapper for centering and styling the content.
      - `<h1>Age Calculator</h1>`: The main heading of the web page.
      - `<div class="form">`: A container for the form elements.
         - `<label for="birthday">Enter Your Date of Birth</label>`: A label for the date input field, linked by
           the `for` attribute to the `birthday` input.
         - `<input type="date" id="birthday" name="birthday">`: A date input field for users to select their date of
           birth.
         - `<button id="btn">Calculate Age</button>`: A button for users to click and trigger the age calculation.
         - `<p id="result"></p>`: A paragraph element for displaying the calculated age.
   - `<script src="index.js"></script>`: Includes the JavaScript file for the web page's functionality.

## CSS (style.css)

The CSS file styles the web page elements:

1. `body`: Styles for the entire body of the web page, including margin, padding, font-family, and background-color.
2. `.container`: Styles for the container `div`, including background-color, box-shadow, padding, max-width,
   border-radius, and centered margin.
3. `h1`: Styles for the `h1` heading, including font-size, text-align, and margin.
4. `.form`: Styles for the form `div`, including display, flex-direction, and align-items to create a vertical layout
   and center the form elements.
5. `label`: Styles for the label element, including font-weight and margin-bottom.
6. `input`: Styles for the date input field, including padding, border, border-radius, and width to make the input field
   visually appealing and easy to use.
7. `button`: Styles for the button element, including background-color, color, border, padding, border-radius,
   margin-top, cursor, and transition to create an attractive and interactive button.
8. `button:hover`: A hover effect for the button element, changing the background-color when the user hovers over it.
9. `#result`: Styles for the result paragraph element, including margin-top, font-size, and font-weight to make the age
   result stand out.

## JavaScript (index.js)

The JavaScript file provides functionality for calculating and displaying the user's age:

1. Variable declarations:
   - `const btnEl`: Stores a reference to the button element using its ID "btn".
   - `const birthdayEl`: Stores a reference to the date input element using its ID "birthday".
   - `let resultEl`: Stores a reference to the result paragraph element using its ID "result".

2. `calculateAge` function: Performs the age calculation and displays the result.
   - Clears the result element's text to start fresh with every new calculation.
   - Retrieves the value of the date input.
   - If the input is empty, an alert is shown, asking the user to enter their birthday.
   - If the input is valid, the `getAge` function is called with the input date value to calculate the age.
      - If the calculated age is negative (i.e., the input date is greater than the current date), an error message is
        displayed in the result element.
      - If the calculated age is non-negative, the result is displayed in the result element, using a conditional
        expression to determine whether to use "year" or "years" based on the calculated age.

3. `getAge` function: Calculates the user's age based on their date of birth.
   - Takes the input date value as an argument.
   - Creates a `currentDate` variable to store the current date and time.
   - Creates a `birthDate` variable to store the input date as a Date object.
   - Calculates the age as the difference between the current year and the input year.
   - Calculates the difference in months between the current date and the input date.
      - If the difference in months is negative, or if the difference in months is zero and the current day of the month
        is less than the input day of the month, the age is decremented by 1.
   - Returns the calculated age.

4. Event listener: Adds a click event listener to the button element.
   - When the button is clicked, the `calculateAge` function is called to perform the age calculation and display the
     result.

By combining the HTML structure, CSS styling, and JavaScript functionality, the Age Calculator web application provides
a user-friendly and responsive interface for users to calculate and display their age based on their date of birth.