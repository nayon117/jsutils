import CodeBlock from "../../components/codeBlock";

const unshiftMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.unshift()</h1>

      <p className="text-lg text-gray-600 mb-6">
        The .unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
      </p>

      <h2 className="text-xl font-semibold mt-3">Use Cases</h2>
      <p className="my-3">
        Use .unshift() when you need to add elements to the start of an array, such as when managing a list of items or implementing a stack.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.unshift(element1, element2, ..., elementN);`} />

      <h2 className="text-xl font-semibold mb-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>element1, element2, ..., elementN</strong>: The elements to add to the beginning of the array.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-3">Return Value</h2>
      <p className="my-3">
        Returns the new length of the array after adding the elements.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const fruits = ["banana", "orange"];\nconst newLength = fruits.unshift("apple");\nconsole.log(fruits); // Output: ["apple", "banana", "orange"]\nconsole.log(newLength); // Output: 3`} />

      <h2 className="text-xl font-semibold mb-3">Problem Solving with .unshift()</h2>

      <h3 className="text-lg font-semibold">Problem 1: Add elements to the start of an array.</h3>
      <p className="my-3">Description: Given an array of numbers, use .unshift() to add a new number at the beginning.</p>
      <CodeBlock code={`const numbers = [2, 3, 4];\nnumbers.unshift(1);\nconsole.log(numbers); // Output: [1, 2, 3, 4]`} />

      <h3 className="text-lg font-semibold">Problem 2: Add a new user at the start of a user list.</h3>
      <p className="my-3">Description: You have an array of user names. Use .unshift() to add a new user at the beginning of the list.</p>
      <CodeBlock code={`const users = ["Bob", "Charlie"];\nusers.unshift("Alice");\nconsole.log(users); // Output: ["Alice", "Bob", "Charlie"]`} />

      <h2 id="exercise" className="text-xl font-semibold mb-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Start with an empty array and use .unshift() to add numbers from 1 to 5 one by one. Check the array after each addition.</li>
        <li className="mt-3">Exercise 2: Given an array of favorite books, use .unshift() to add a new book to the beginning of the array.</li>
      </ul>
    </div>
  );
};

export default unshiftMethod;
