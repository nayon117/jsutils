import CodeBlock from "../../components/codeBlock";

const PopMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.pop()</h1>

      <p className="text-lg text-gray-600 mb-6">
        The .pop() method removes the last element from an array and returns that element. This method changes the length of the array.
      </p>

      <h2 className="text-xl font-semibold mt-3">Use Cases</h2>
      <p className="my-3">
        Use .pop() when you need to remove the last item from an array, such as when implementing a stack data structure or managing a queue.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.pop();`} />

      <h2 className="text-xl font-semibold mb-3">Parameters</h2>
      <p className="my-3">This method does not take any parameters.</p>

      <h2 className="text-xl font-semibold mt-3">Return Value</h2>
      <p className="my-3">
        Returns the removed element from the array. If the array is empty, it returns undefined.
      </p>

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const fruits = ["apple", "banana", "orange"];\nconst lastFruit = fruits.pop();\nconsole.log(fruits); // Output: ["apple", "banana"]\nconsole.log(lastFruit); // Output: "orange"`} />

      <h2 className="text-xl font-semibold mb-3">Problem Solving with .pop()</h2>

      <h3 className="text-lg font-semibold">Problem 1: Remove the last item from a shopping cart.</h3>
      <p className="my-3">Description: You have an array representing items in a shopping cart. Use .pop() to remove the last item.</p>
      <CodeBlock code={`const cart = ["apple", "banana", "orange"];\nconst removedItem = cart.pop();\nconsole.log(cart); // Output: ["apple", "banana"]\nconsole.log(removedItem); // Output: "orange"`} />

      <h3 className="text-lg font-semibold">Problem 2: Implement a simple stack.</h3>
      <p className="my-3">Description: Create a stack and use .pop() to remove the top item from it.</p>
      <CodeBlock code={`let stack = [1, 2, 3];\nconst topItem = stack.pop();\nconsole.log(stack); // Output: [1, 2]\nconsole.log(topItem); // Output: 3`} />

      <h2 className="text-xl font-semibold mb-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Start with an array of numbers and use .pop() to remove the last number. Print the array after each removal until it is empty.</li>
        <li className="mt-3">Exercise 2: Create an array of colors and use .pop() to remove the last color. Then, check if the removed color was red.</li>
      </ul>
    </div>
  );
};

export default PopMethod;
