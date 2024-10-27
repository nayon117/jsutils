import CodeBlock from "../../components/codeBlock";

const toLowerCaseMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.toLowerCase()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .toLowerCase() method returns a new string with all uppercase letters converted to lowercase.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .toLowerCase() when you need to standardize strings for case-insensitive comparisons or storage.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`string.toLowerCase();`} />

      <h2 className="text-xl font-semibold my-3">Return Value</h2>
      <p className="my-3">
        Returns a new string with all characters converted to lowercase. The original string remains unchanged.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const str = "Hello, World!";\nconst lowerStr = str.toLowerCase();\nconsole.log(lowerStr); // Output: "hello, world!"`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .toLowerCase()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Case-insensitive comparison.</h3>
      <p className="my-3">Description: Given two strings, use .toLowerCase() to compare them without regard to case.</p>
      <CodeBlock code={`const str1 = "JavaScript";\nconst str2 = "javascript";\nconst isEqual = str1.toLowerCase() === str2.toLowerCase();\nconsole.log(isEqual); // Output: true`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Normalize user input.</h3>
      <p className="my-3">Description: Given user input for an email address, use .toLowerCase() to store it in a standardized format.</p>
      <CodeBlock code={`const emailInput = "User@Example.com";\nconst normalizedEmail = emailInput.toLowerCase();\nconsole.log(normalizedEmail); // Output: "user@example.com"`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Convert a string containing a mix of uppercase and lowercase letters to all lowercase.</li>
        <li className="mt-2">Exercise 2: Create a function that checks if two string inputs are the same, ignoring case.</li>
      </ul>
    </div>
  );
};

export default toLowerCaseMethod;
