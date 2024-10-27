import CodeBlock from "../../components/codeBlock";

const splitMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.split()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .split() method splits a string into an array of substrings, based on a specified separator. The original string remains unchanged.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .split() when you need to divide a string into parts, such as when processing user input, CSV data, or any delimited text.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`string.split(separator, limit);`} />

      <h2  className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>separator</strong>: The string or regular expression to use for splitting the string. If omitted, the entire string is returned as a single element array.</li>
        <li><strong>limit (optional)</strong>: An integer that specifies the maximum number of splits. The remaining part of the string will be returned as the last element of the array.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns an array of substrings created by splitting the original string. If the separator is not found, an array containing the original string is returned.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const str = "Hello, World!";\nconst words = str.split(", ");\nconsole.log(words); // Output: ["Hello", "World!"]`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .split()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Split a sentence into words.</h3>
      <p className="my-3">Description: Given a sentence, use .split() to create an array of words.</p>
      <CodeBlock code={`const sentence = "This is a test.";\nconst wordsArray = sentence.split(" ");\nconsole.log(wordsArray); // Output: ["This", "is", "a", "test."]`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Parse CSV data.</h3>
      <p className="my-3">Description: Given a string of comma-separated values, use .split() to create an array of values.</p>
      <CodeBlock code={`const csvData = "name,age,gender\\nJohn,30,male\\nJane,25,female";\nconst rows = csvData.split("\\n");\nconsole.log(rows); // Output: ["name,age,gender", "John,30,male", "Jane,25,female"]`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a function that takes a string and a separator, and returns an array of substrings.</li>
        <li className="mt-2">Exercise 2: Given a string of space-separated numbers, use .split() to return an array of numbers as strings.</li>
      </ul>
    </div>
  );
};

export default splitMethod;
