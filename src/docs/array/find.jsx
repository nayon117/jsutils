import CodeBlock from "../../components/codeBlock";

const findMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.find()</h1>

      <p className="text-lg text-gray-600 mb-6">
        The .find() method returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise, it returns undefined.
      </p>

      <h2 className="text-xl font-semibold mt-3">Use Cases</h2>
      <p className="my-3">
        Use .find() when you need to search for an element in an array that meets a specific condition, such as finding an object with a particular property value.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.find(callback(element, index, array), thisArg);`} />

      <h2 className="text-xl font-semibold mb-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>callback</strong>: Function to execute on each element, taking three arguments:</li>
        <ul className="list-disc list-inside">
          <li><strong>element</strong>: The current element being processed in the array.</li>
          <li><strong>index (optional)</strong>: The index of the current element being processed.</li>
          <li><strong>array (optional)</strong>: The array find was called upon.</li>
        </ul>
        <li><strong>thisArg (optional)</strong>: Value to use as this when executing callback.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-3">Return Value</h2>
      <p className="my-3">
        Returns the value of the first element in the array that satisfies the testing function; otherwise, undefined.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const numbers = [1, 2, 3, 4];\nconst found = numbers.find((element) => element > 2);\nconsole.log(found); // Output: 3`} />

      <h2 className="text-xl font-semibold mb-3">Problem Solving with .find()</h2>

      <h3 className="text-lg font-semibold">Problem 1: Find a user by ID in an array of users.</h3>
      <p className="my-3">Description: Given an array of user objects, use .find() to locate a user with a specific ID.</p>
      <CodeBlock code={`const users = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" },\n  { id: 3, name: "Charlie" }\n];\nconst user = users.find((u) => u.id === 2);\nconsole.log(user); // Output: { id: 2, name: "Bob" }`} />

      <h3 className="text-lg font-semibold">Problem 2: Find a product by name in an array of products.</h3>
      <p className="my-3">Description: You have an array of product objects. Use .find() to get the product with a specific name.</p>
      <CodeBlock code={`const products = [\n  { name: "Apple", price: 1 },\n  { name: "Banana", price: 2 },\n  { name: "Cherry", price: 3 }\n];\nconst product = products.find((p) => p.name === "Banana");\nconsole.log(product); // Output: { name: "Banana", price: 2 }`} />

      <h2 id="exercise" className="text-xl font-semibold mb-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Given an array of ages, use .find() to get the first age that is greater than or equal to 18.</li>
        <li className="mt-3">Exercise 2: Start with an array of book titles. Use .find() to locate a specific title.</li>
      </ul>
    </div>
  );
};

export default findMethod;
