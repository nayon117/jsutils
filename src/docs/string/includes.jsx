import CodeBlock from "../../components/codeBlock";

const includesMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.includes()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .includes() method determines whether an array or string contains a certain value, returning true or false as appropriate.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .includes() when you want to check if a specific element or substring exists in an array or string.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.includes(value, fromIndex);\nstring.includes(searchString, position);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>value / searchString</strong>: The value to search for in the array or string.</li>
        <li><strong>fromIndex / position (optional)</strong>: The index at which to begin the search. Default is 0 for arrays and 0 for strings.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns true if the value exists in the array or string; otherwise, returns false.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.includes("banana")); // Output: true\nconsole.log(fruits.includes("grape")); // Output: false`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .includes()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Check if an item is in a shopping list.</h3>
      <p className="my-3">Description: Given a shopping list array, use .includes() to determine if a specific item is present.</p>
      <CodeBlock code={`const shoppingList = ["milk", "bread", "eggs"];\nconst hasBread = shoppingList.includes("bread");\nconsole.log(hasBread); // Output: true`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Validate user input.</h3>
      <p className="my-3">Description: Check if a user’s input matches any of the allowed values using .includes().</p>
      <CodeBlock code={`const allowedColors = ["red", "green", "blue"];\nconst userColor = "purple";\nconst isValid = allowedColors.includes(userColor);\nconsole.log(isValid); // Output: false`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a function that checks if a number exists in an array of numbers using .includes().</li>
        <li className="mt-2">Exercise 2: Write a function that takes a string and checks if it contains a specific substring using .includes().</li>
      </ul>
    </div>
  );
};

export default includesMethod;
