import CodeBlock from "../../components/codeBlock";

const ShiftMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.shift()</h1>

      <p className="text-lg text-gray-600 mb-6">
        The .shift() method removes the first element from an array and returns that element. This method changes the length of the array.
      </p>

      <h2 className="text-xl font-semibold mt-3">Use Cases</h2>
      <p className="my-3">
        Use .shift() when you need to remove the first item from an array, such as when managing a queue or handling first-in-first-out (FIFO) operations.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.shift();`} />

      <h2 className="text-xl font-semibold mb-3">Parameters</h2>
      <p className="my-3">This method does not take any parameters.</p>

      <h2 className="text-xl font-semibold mt-3">Return Value</h2>
      <p className="my-3">
        Returns the removed element from the array. If the array is empty, it returns undefined.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const fruits = ["apple", "banana", "orange"];\nconst firstFruit = fruits.shift();\nconsole.log(fruits); // Output: ["banana", "orange"]\nconsole.log(firstFruit); // Output: "apple"`} />

      <h2 className="text-xl font-semibold mb-3">Problem Solving with .shift()</h2>

      <h3 className="text-lg font-semibold">Problem 1: Remove the first item from a queue.</h3>
      <p className="my-3">Description: You have an array representing a queue of people. Use .shift() to remove the first person in line.</p>
      <CodeBlock code={`const queue = ["Alice", "Bob", "Charlie"];\nconst firstPerson = queue.shift();\nconsole.log(queue); // Output: ["Bob", "Charlie"]\nconsole.log(firstPerson); // Output: "Alice"`} />

      <h3 className="text-lg font-semibold">Problem 2: Process the first task in a list.</h3>
      <p className="my-3">Description: You have an array of tasks. Use .shift() to get and remove the first task from the list.</p>
      <CodeBlock code={`const tasks = ["task1", "task2", "task3"];\nconst firstTask = tasks.shift();\nconsole.log(tasks); // Output: ["task2", "task3"]\nconsole.log(firstTask); // Output: "task1"`} />

      <h2 id="exercise" className="text-xl font-semibold mb-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Start with an array of numbers and use .shift() to remove the first number. Print the array after each removal until it is empty.</li>
        <li className="mt-3">Exercise 2: Create an array of favorite movies and use .shift() to remove the first movie. Then, check if the removed movie was Inception.</li>
      </ul>
    </div>
  );
};

export default ShiftMethod;
