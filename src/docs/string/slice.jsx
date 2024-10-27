import CodeBlock from "../../components/codeBlock";

const sliceMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.slice()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .slice() method returns a shallow copy of a portion of an array or string into a new array or string object selected from start to end (end not included).
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .slice() when you want to extract a specific section of an array or string without modifying the original.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.slice(start, end);\nstring.slice(start, end);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>start</strong>: The zero-based index at which to begin extraction.</li>
        <li><strong>end (optional)</strong>: The zero-based index before which to end extraction (not included). If omitted, slices to the end of the array or string.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns a new array or string containing the extracted elements or characters.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const numbers = [1, 2, 3, 4, 5];\nconst slicedNumbers = numbers.slice(1, 3);\nconsole.log(slicedNumbers); // Output: [2, 3]`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .slice()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Extract a portion of an array.</h3>
      <p className="my-3">Description: Given an array of colors, use .slice() to create a new array containing a specific range of colors.</p>
      <CodeBlock code={`const colors = ["red", "green", "blue", "yellow", "purple"];\nconst selectedColors = colors.slice(1, 4);\nconsole.log(selectedColors); // Output: ["green", "blue", "yellow"]`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Get a substring from a string.</h3>
      <p className="my-3">Description: Use .slice() to extract a portion of a string.</p>
      <CodeBlock code={`const text = "Hello, World!";\nconst greeting = text.slice(0, 5);\nconsole.log(greeting); // Output: "Hello"`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Given an array of numbers, create a function that returns a new array containing the last three elements using .slice().</li>
        <li className="mt-2">Exercise 2: Write a function that takes a string and returns a substring that contains the last five characters.</li>
      </ul>
    </div>
  );
};

export default sliceMethod;
