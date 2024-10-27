import CodeBlock from "../../components/codeBlock";

const filterMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.filter()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .filter() when you need to create a new array that contains only elements that meet specific criteria, such as filtering out unwanted values.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.filter(callback(element, index, array), thisArg);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>callback</strong>: Function that tests each element. Return true to keep the element, false otherwise.</li>
        <li><strong>thisArg (optional)</strong>: Value to use as this when executing the callback.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns a new array with the elements that pass the test. If no elements pass, an empty array is returned.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(number => number % 2 === 0);\nconsole.log(evens); // Output: [2, 4]`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .filter()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Filter out odd numbers from an array.</h3>
      <p className="my-3">Description: Given an array of numbers, use .filter() to create a new array containing only even numbers.</p>
      <CodeBlock code={`const nums = [1, 2, 3, 4, 5, 6];\nconst evens = nums.filter(num => num % 2 === 0);\nconsole.log(evens); // Output: [2, 4, 6]`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Get users above a certain age.</h3>
      <p className="my-3">Description: Given an array of user objects, use .filter() to return only those users whose age is greater than 18.</p>
      <CodeBlock code={`const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 17 },\n  { name: "Charlie", age: 30 }\n];\nconst adults = users.filter(user => user.age > 18);\nconsole.log(adults); // Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Start with an array of mixed numbers and strings. Use .filter() to create an array that contains only numbers.</li>
        <li className="mt-2">Exercise 2: Given an array of products with prices, use .filter() to get only those products that are above a specified price.</li>
      </ul>
    </div>
  );
};

export default filterMethod;
