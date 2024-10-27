import CodeBlock from "../../components/codeBlock";

const toUpperCaseMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.toUpperCase()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .toUpperCase() method returns a new string with all lowercase letters converted to uppercase.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .toUpperCase() when you need to standardize strings for case-insensitive comparisons or to ensure consistency in formatting.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`string.toUpperCase();`} />

      <h2 className="text-xl font-semibold my-3">Return Value</h2>
      <p className="my-3">
        Returns a new string with all characters converted to uppercase. The original string remains unchanged.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const str = "Hello, World!";\nconst upperStr = str.toUpperCase();\nconsole.log(upperStr); // Output: "HELLO, WORLD!"`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .toUpperCase()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Case-insensitive comparison.</h3>
      <p className="my-3">Description: Given two strings, use .toUpperCase() to compare them without regard to case.</p>
      <CodeBlock code={`const str1 = "JavaScript";\nconst str2 = "JAVASCRIPT";\nconst isEqual = str1.toUpperCase() === str2.toUpperCase();\nconsole.log(isEqual); // Output: true`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Normalize user input.</h3>
      <p className="my-3">Description: Given user input for a product code, use .toUpperCase() to store it in a standardized format.</p>
      <CodeBlock code={`const productCode = "abc123";\nconst normalizedCode = productCode.toUpperCase();\nconsole.log(normalizedCode); // Output: "ABC123"`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Convert a string containing a mix of uppercase and lowercase letters to all uppercase.</li>
        <li className="mt-2">Exercise 2: Create a function that checks if two string inputs are the same, ignoring case by converting both to uppercase.</li>
      </ul>
    </div>
  );
};

export default toUpperCaseMethod;
