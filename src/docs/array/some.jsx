import CodeBlock from "../../components/codeBlock";

const someMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.some()</h1>
      
      <p className="text-lg text-gray-700 mb-6">
        The .some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.
      </p>

      <h2 className="text-xl font-semibold mt-3">Use Cases</h2>
      <p className="my-3">
        Use .some() when you need to check if any elements in an array meet a specific condition.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.some(callback(element, index, array), thisArg);`} />

      <h2 className="text-xl font-semibold my-4">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>callback</strong>: Function to execute on each element, taking three arguments:</li>
        <ul className="list-disc list-inside">
          <li><strong>element</strong>: The current element being processed in the array.</li>
          <li><strong>index (optional)</strong>: The index of the current element being processed.</li>
          <li><strong>array (optional)</strong>: The array some was called upon.</li>
        </ul>
        <li><strong>thisArg (optional)</strong>: Value to use as this when executing callback.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-3">Return Value</h2>
      <p className="my-3">
        Returns true if at least one element in the array passes the test; otherwise, false.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const numbers = [1, 2, 3, 4];\nconst hasEven = numbers.some((num) => num % 2 === 0);\nconsole.log(hasEven); // Output: true`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .some()</h2>

      <h3 className="text-lg font-semibold">Problem 1: Check if any users are adults.</h3>
      <p className="my-3">Description: Given an array of user objects, use .some() to check if any user is 18 or older.</p>
      <CodeBlock code={`const users = [\n  { name: "Alice", age: 17 },\n  { name: "Bob", age: 20 }\n];\nconst hasAdult = users.some((user) => user.age >= 18);\nconsole.log(hasAdult); // Output: true`} />

      <h3 className="text-lg font-semibold mt-3">Problem 2: Check if any products are on sale.</h3>
      <p className="my-3">Description: You have an array of product objects. Use .some() to check if any product is on sale.</p>
      <CodeBlock code={`const products = [\n  { name: "Apple", onSale: false },\n  { name: "Banana", onSale: true }\n];\nconst hasSale = products.some((product) => product.onSale);\nconsole.log(hasSale); // Output: true`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Given an array of ages, use .some() to check if any age is less than 18.</li>
        <li className="mt-3">Exercise 2: Start with an array of scores. Use .some() to check if any score is below passing grade.</li>
      </ul>
    </div>
  );
};

export default someMethod;
