import CodeBlock from "../../components/codeBlock";

const trimMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.trim()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .trim() method removes whitespace from both ends of a string, returning a new string without modifying the original.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .trim() when you need to clean up user input or strings that may have leading or trailing whitespace.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`string.trim();`} />

      <h2 className="text-xl font-semibold my-3">Return Value</h2>
      <p className="my-3">
        Returns a new string with whitespace removed from both ends. The original string remains unchanged.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const str = "   Hello, World!   ";\nconst trimmedStr = str.trim();\nconsole.log(trimmedStr); // Output: "Hello, World!"`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .trim()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Clean user input.</h3>
      <p className="my-3">Description: Given a user&apos;s input string with potential leading or trailing spaces, use .trim() to clean it up.</p>
      <CodeBlock code={`const userInput = "   John Doe   ";\nconst cleanedInput = userInput.trim();\nconsole.log(cleanedInput); // Output: "John Doe"`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Normalize data for comparison.</h3>
      <p className="my-3">Description: When comparing two strings, use .trim() to ensure that there are no extra spaces affecting the result.</p>
      <CodeBlock code={`const str1 = "  Hello  ";\nconst str2 = "Hello";\nconst isEqual = str1.trim() === str2;\nconsole.log(isEqual); // Output: true`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a function that accepts a string and returns the trimmed version of that string.</li>
        <li className="mt-2">Exercise 2: Given an array of strings with spaces, use .trim() to clean up each string in the array.</li>
      </ul>
    </div>
  );
};

export default trimMethod;
