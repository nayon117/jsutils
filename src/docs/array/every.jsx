import CodeBlock from "../../components/codeBlock";

const everyMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.every()</h1>
      
      <p className="text-lg text-gray-700 mb-6">
        The .every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .every() when you need to check if all elements in an array meet a specific condition.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.every(callback(element, index, array), thisArg);`} />

      <h2 className="text-xl font-semibold mb-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>callback</strong>: Function to execute on each element, taking three arguments:</li>
        <ul className="list-disc list-inside mb-2">
          <li><strong>element</strong>: The current element being processed in the array.</li>
          <li><strong>index (optional)</strong>: The index of the current element being processed.</li>
          <li><strong>array (optional)</strong>: The array every was called upon.</li>
        </ul>
        <li><strong>thisArg (optional)</strong>: Value to use as this when executing callback.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns true if all elements in the array pass the test; otherwise, false.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every((num) => num % 2 === 0);\nconsole.log(allEven); // Output: true`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .every()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Check if all users are adults.</h3>
      <p className="my-3">Description: Given an array of user objects, use .every() to check if all users are 18 or older.</p>
      <CodeBlock code={`const users = [\n  { name: "Alice", age: 20 },\n  { name: "Bob", age: 25 }\n];\nconst allAdults = users.every((user) => user.age >= 18);\nconsole.log(allAdults); // Output: true`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Check if all products are in stock.</h3>
      <p className="my-3">Description: You have an array of product objects. Use .every() to check if all products are in stock.</p>
      <CodeBlock code={`const products = [\n  { name: "Apple", inStock: true },\n  { name: "Banana", inStock: true }\n];\nconst allInStock = products.every((product) => product.inStock);\nconsole.log(allInStock); // Output: true`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Given an array of grades, use .every() to check if all grades are passing.</li>
        <li className="mt-2">Exercise 2: Start with an array of user ages. Use .every() to check if all users are older than 12.</li>
      </ul>
    </div>
  );
};

export default everyMethod;
