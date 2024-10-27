import CodeBlock from "../../components/codeBlock";

const reduceMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.reduce()</h1>

      <p className="text-lg text-gray-600 mb-6">
        The .reduce() method executes a reducer function on each element of the array, resulting in a single output value.
      </p>

      <h2 className="text-xl font-semibold mt-3">Use Cases</h2>
      <p className="my-3">
        Use .reduce() when you need to accumulate or combine all elements of an array into a single value, such as calculating a sum or merging objects.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.reduce(callback(accumulator, currentValue, index, array), initialValue);`} />

      <h2 className="text-xl font-semibold mb-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>callback</strong>: Function to execute on each element in the array, taking four arguments:</li>
        <ul className="list-disc list-inside">
          <li><strong>accumulator</strong>: The accumulated value previously returned in the last invocation of the callback.</li>
          <li><strong>currentValue</strong>: The current element being processed in the array.</li>
          <li><strong>index (optional)</strong>: The index of the current element being processed.</li>
          <li><strong>array (optional)</strong>: The array reduce was called upon.</li>
        </ul>
        <li><strong>initialValue (optional)</strong>: Value to use as the first argument to the first call of the callback.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-3">Return Value</h2>
      <p className="my-3">
        Returns a single value: the final result of the reduction.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, current) => acc + current, 0);\nconsole.log(sum); // Output: 10`} />

      <h2 className="text-xl font-semibold mb-3">Problem Solving with .reduce()</h2>

      <h3 className="text-lg font-semibold">Problem 1: Calculate the total price of items in a cart.</h3>
      <p className="my-3">Description: Given an array of product objects, use .reduce() to calculate the total price.</p>
      <CodeBlock code={`const cart = [\n  { name: "Apple", price: 1 },\n  { name: "Banana", price: 2 },\n  { name: "Cherry", price: 3 }\n];\nconst total = cart.reduce((acc, item) => acc + item.price, 0);\nconsole.log(total); // Output: 6`} />

      <h3 className="text-lg font-semibold">Problem 2: Flatten an array of arrays.</h3>
      <p className="my-3">Description: Given an array of arrays, use .reduce() to flatten it into a single array.</p>
      <CodeBlock code={`const arrayOfArrays = [[1, 2], [3, 4], [5]];\nconst flattened = arrayOfArrays.reduce((acc, current) => acc.concat(current), []);\nconsole.log(flattened); // Output: [1, 2, 3, 4, 5]`} />

      <h2 id="exercise" className="text-xl font-semibold mb-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Start with an array of numbers. Use .reduce() to find the maximum number in the array.</li>
        <li className="mt-3">Exercise 2: Given an array of strings, use .reduce() to create a single string that concatenates all elements.</li>
      </ul>
    </div>
  );
};

export default reduceMethod;
