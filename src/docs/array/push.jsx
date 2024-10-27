import CodeBlock from "../../components/codeBlock";

const PushMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.push()</h1>
      
      <p className="text-lg text-gray-700 mb-6">
        The .push() method adds one or more elements to the end of an array and returns the new length of the array.
      </p>

      <h2 className="text-xl font-semibold mt-3">Use Cases</h2>
      <p className="my-3">
        Use .push() when you need to add elements to the end of an array, such as adding items to a list or queue.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.push(element1, element2, ..., elementN);`} />

      <h2 className="text-xl font-semibold my-4">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>element1, element2, ..., elementN</strong>: The elements to add to the end of the array.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-3">Return Value</h2>
      <p className="my-3">
        Returns the new length of the array after adding the elements.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const fruits = ["apple", "banana"];\nconst newLength = fruits.push("orange");\nconsole.log(fruits); // Output: ["apple", "banana", "orange"]\nconsole.log(newLength); // Output: 3`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .push()</h2>

      <h3 className="text-lg font-semibold ">Problem 1: Add elements from another array to an existing array.</h3>
      <p className="my-3">Description: Given two arrays, use .push() to add all elements from the second array to the first.</p>
      <CodeBlock code={`const array1 = [1, 2, 3];\nconst array2 = [4, 5];\narray1.push(...array2);\nconsole.log(array1); // Output: [1, 2, 3, 4, 5]`} />

      <h3 className="text-lg font-semibold mt-3">Problem 2: Add a user to a list.</h3>
      <p className="my-3">Description: You have an array of user names. Use .push() to add a new user to the list.</p>
      <CodeBlock code={`const users = ["Alice", "Bob"];\nusers.push("Charlie");\nconsole.log(users); // Output: ["Alice", "Bob", "Charlie"]`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Start with an empty array and use .push() to add numbers from 1 to 5 one by one. Check the array after each addition.</li>
        <li className="mt-3">Exercise 2: Given an array of names, use .push() to add a new name only if it&apos;s not already in the array.</li>
      </ul>
    </div>
  );
};

export default PushMethod;
