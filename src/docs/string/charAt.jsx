import CodeBlock from "../../components/codeBlock";

const charAtMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.charAt()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .charAt() method returns the character at a specified index in a string.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .charAt() when you need to retrieve a specific character from a string based on its index.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`string.charAt(index);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>index</strong>: (Number) The zero-based index of the character to return.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns the character at the specified index. If the index is out of range, an empty string is returned.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`let str = "Hello, World!";\nlet char = str.charAt(0); // 'H'\nconsole.log(char); // Output: H`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .charAt()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Get the first character of a string.</h3>
      <p className="my-3">Description: Given a string, use .charAt() to retrieve the first character.</p>
      <CodeBlock code={`let message = "JavaScript";\nlet firstChar = message.charAt(0);\nconsole.log(firstChar); // Output: J`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Safely access a character in a string.</h3>
      <p className="my-3">Description: Given a string, use .charAt() to return a character at a specified index, and handle the case when the index is out of range.</p>
      <CodeBlock code={`let text = "Programming";\nlet charAtInvalid = text.charAt(20); // Returns '' (empty string)\nconsole.log(charAtInvalid);`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a function that takes a string and an index as arguments and returns the character at that index using .charAt().</li>
        <li className="mt-2">Exercise 2: Write a program that checks if the first character of a string is a vowel using .charAt().</li>
      </ul>
    </div>
  );
};

export default charAtMethod;
