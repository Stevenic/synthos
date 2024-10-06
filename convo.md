# Convo: The Conversational Programming Language

This conversational programming language is designed to be intuitive and accessible, using natural language constructs to simplify coding for users of all backgrounds. Below are the basic syntax rules that govern how to write code in this language.

## 1. Natural Language Statements
- Plain Language Syntax: Write code using sentences that resemble everyday speech.
  - Example: `If the user's age is 18 or more, then grant access.`

- Imperative Commands: Instructions are given as direct commands or statements.
  - Example: `Calculate the total price by adding tax to the subtotal.`

## 2. Variables
- Implicit Declaration: Variables are created when first mentioned.
  - Example: `Set the user's name to "Alice".`

- Descriptive Names: Use meaningful, descriptive names for variables.
  - Example: `Set the customer's loyalty status to "Gold".`

## 3. Assignments
- Natural Language Assignment: Use phrases like "set", "let", or "assign" to assign values.
  - Example: `Let the final score be the average of all scores.`

## 4. Control Structures
**Conditional Statements**
- If Statements: Begin conditions with "If", followed by the condition and "then".
  - Example: `If the temperature is below 0 degrees, then display "It's freezing!".`

- Else and Else If: Use "Otherwise" or "Else" for alternative conditions.
  - Example: `Otherwise, display "The weather is fine."`

**Loops**
- For Each Loops: Iterate over collections using "For each".
  - Example: `For each item in the shopping cart, apply the discount.`

- While Loops: Use "While" to execute code as long as a condition is true.

  - Example: `While the user is not logged in, prompt for credentials.`

## 5. Functions and Procedures
- Defining Functions: Start with "To" followed by the action.
  - Example: `To calculate the area of a circle, multiply pi by the radius squared.`

- Calling Functions: Simply state the desired action.
  - Example: `Calculate the area of the circle.`

## 6. Input and Output
- Displaying Output: Use "Display", "Show", or "Print" to output information.
  - Example: `Display "Welcome to the program!".`

- Receiving Input: Use "Ask", "Prompt", or "Get" to receive input.
  - Example: `Ask the user for their name.`

## 7. Comments
- Inline Comments: Include notes using "Note:" or parentheses.
  - Example: `Note: This function calculates the area.`

- Block Comments: For longer explanations, use a conversational style.
  - Example: `/* This section handles user authentication. */`

## 8. Data Structures
- Lists and Arrays: Create collections using natural phrases.
  - Example: `Create a list of fruits containing apples, bananas, and cherries.`

- Accessing Elements: Use phrases like "first item", "last item", "item number 3".
  - Example: `Set favorite fruit to the first item in the list of fruits.`

## 9. Error Handling
- Try-Catch Mechanism: Use "Attempt to" and "If that fails".
  - Example: `Attempt to open the file. If that fails, display an error message.`

## 10. Mathematical Operations
- Natural Expressions: Write calculations in plain language.
  - Example: `Calculate the total by adding the tax to the subtotal.`

- Operators in Words: Use words like "plus", "minus", "times", "divided by".
  - Example: `Set the average to the sum of the scores divided by the number of scores.`

## 11. Logical Operators
- Plain Language Logic: Use "and", "or", "not" for logical operations.
  - Example: `If the user is an admin and the account is active, then allow access.`

## 12. Comparison Operators
- Descriptive Comparisons: Use phrases like "is equal to", "is greater than".
  - Example: `If the score is greater than or equal to 90, then assign a grade of 'A'.`

## 13. Modularity and Organization
- Sections and Modules: Organize code using "Section", "Module", or "Part".
  - Example: `In the Payment Processing section, define how to handle transactions.`

- Importing Modules: Use "Include" or "Use" to import code from other modules.
  - Example: `Include the User Authentication module.`

## 14. Object-Oriented Concepts
- Defining Classes: Use "Define" followed by the class description.
  - Example: `Define a Vehicle as something that has a make, model, and year.`

- Creating Objects: Use "Create" or "Make" to instantiate objects.
  - Example: `Create a new Car with make "Toyota", model "Corolla", and year 2021.`
  
- Inheritance: Use "is a type of" to establish inheritance.
  - Example: `A SportsCar is a type of Car that has a top speed.`

## 15. Concurrency and Parallelism
- Asynchronous Actions: Use "Meanwhile" or "At the same time".
  - Example: `Download the file in the background while displaying the progress.`
  
## 16. Declarative Statements
- Outcome-Oriented Code: State the desired result, and the system handles the implementation.
  - Example: `Ensure all user inputs are validated.`

## 17. Formatting and Punctuation
- Flexible Punctuation: Use commas and periods as in regular writing; they are optional but improve readability.
  - Example: `If the user is not registered, then prompt for registration.`

- Case Insensitive: The language does not distinguish between uppercase and lowercase letters.
  - Example: `Display "Hello World". is the same as display "hello world".`

## 18. Internationalization
- Multilingual Support: Write code in your native language.
  - Example in Spanish: `Si la edad del usuario es 18 o más, entonces conceder acceso.`

## 19. Error Tolerance and Guidance
- Lenient Parsing: Minor grammatical errors are tolerated, and the interpreter infers meaning. 
  - Example: `Set total price to price times quantity (missing "the" and punctuation but still understood).`

- Helpful Feedback: The system provides suggestions if it cannot understand a statement.
  - Example: `Did you mean to calculate the average score?`

## 20. Security and Permissions
- Explicit Permissions: Use clear statements to handle permissions.
  - Example: `Allow access to the user's location only if they consent.`
  - 
## Example Program
Task: Create a program that asks for a user's name and age, then determines if they are eligible to vote.

```plaintext
Ask the user for their name.
Ask the user for their age.

If the user's age is 18 or more, then
    Display "Hello [user's name], you are eligible to vote."
Else
    Display "Hello [user's name], you are not eligible to vote yet."
```

**Explanation:**

- **Input:** `Ask the user for their name.` and `Ask the user for their age.` collect user input.

- **Variable Usage:** `user's name` and `user's age` are variables created implicitly.

- **Conditional Logic:** The `If...then...Else` structure controls program flow based on the user's age.

- **Output:** `Display` outputs a personalized message.

## Advanced Concepts
**Defining and Using Functions**

```plaintext
To greet the user:
    Display "Welcome, [user's name]!"

Ask the user for their name.
Greet the user.
```

**Working with Lists**

```plaintext
Create a list called shopping list containing milk, bread, and eggs.

For each item in the shopping list,
    Display "Remember to buy [item]."

Add "butter" to the shopping list.
```

**Object-Oriented Example**

```plaintext
Define a Dog as an animal that has a name and can bark.

Create a Dog named "Buddy".
Instruct the Dog to bark, and display "[Dog's name] is barking!"
```

## Notes on Usage
- **Interpreter Assistance:** The interpreter actively helps resolve ambiguities and provides real-time feedback.

- **Interactive Environment:** Code can be written and tested in an environment that supports conversation-like interactions.

- **Flexibility:** Users can write code in a way that feels most natural to them, with the system adapting accordingly.
