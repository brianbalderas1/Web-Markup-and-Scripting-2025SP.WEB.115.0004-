# Web-Markup-and-Scripting-2025SP.WEB.115.0004-
# Form Validation with Regular Expressions

This project demonstrates how to implement simple form validation using regular expressions (RegEx) in JavaScript. The form allows the user to input alphanumeric characters (letters and numbers only). If the input matches the regular expression pattern, a success message will be displayed. Otherwise, an error message will inform the user to enter only alphanumeric characters.

## Features

- **Alphanumeric Input Validation:** Only letters and numbers are allowed in the input field.
- **Dynamic Feedback:** Real-time feedback is shown after the user submits the form, with messages displayed based on whether the input is valid or not.

## How It Works

1. The form consists of a single input field and a submit button.
2. When the user submits the form, JavaScript prevents the default form submission behavior using `event.preventDefault()`.
3. A regular expression (`/^[a-zA-Z0-9]+$/`) is used to validate if the input contains only alphanumeric characters.
4. If the input matches the pattern, a success message is displayed in green.
5. If the input does not match the pattern, an error message is shown in red.

## Technologies Used

- HTML5
- CSS3 (for styling)
- JavaScript (for form validation)

## Files

- **index.html**: Contains the structure of the page, including the form and styling.
- **validationScript.js**: Handles form validation and dynamic message display based on the input.

## Usage

1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Enter an alphanumeric value in the input field and submit the form.
4. Check the validation message that appears below the form.

## Example

- **Valid Input:** `abc123` (Displays success message in green)
- **Invalid Input:** `abc!@#` (Displays error message in red)

