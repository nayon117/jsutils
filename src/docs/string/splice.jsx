import CodeBlock from "../../components/codeBlock";

const spliceMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.splice()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .splice() when you need to add or remove items from an array at a specific index without creating a new array.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.splice(start, deleteCount, item1, item2, ...);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>start</strong>: The zero-based index at which to start changing the array.</li>
        <li><strong>deleteCount</strong>: The number of elements to be removed from the array.</li>
        <li><strong>item1, item2, ... (optional)</strong>: The elements to add to the array, starting at the index specified by start.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns an array containing the deleted elements. If no elements are removed, an empty array is returned.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const numbers = [1, 2, 3, 4, 5];\nconst removed = numbers.splice(2, 2, 6, 7);\nconsole.log(numbers); // Output: [1, 2, 6, 7, 5]\nconsole.log(removed); // Output: [3, 4]`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .splice()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Remove items from an array.</h3>
      <p className="my-3">Description: Given an array of fruits, use .splice() to remove the first two fruits.</p>
      <CodeBlock code={`const fruits = ["apple", "banana", "cherry", "date"];\nconst removedFruits = fruits.splice(0, 2);\nconsole.log(fruits); // Output: ["cherry", "date"]\nconsole.log(removedFruits); // Output: ["apple", "banana"]`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Add items to an array.</h3>
      <p className="my-3">Description: Given an array of colors, use .splice() to add new colors at a specific index.</p>
      <CodeBlock code={`const colors = ["red", "blue", "green"];\ncolors.splice(1, 0, "yellow", "purple");\nconsole.log(colors); // Output: ["red", "yellow", "purple", "blue", "green"]`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Start with an array of numbers and use .splice() to remove the last element.</li>
        <li className="mt-2">Exercise 2: Given an array of movie titles, use .splice() to insert a new title at the second position.</li>
      </ul>
    </div>
  );
};

export default spliceMethod;
