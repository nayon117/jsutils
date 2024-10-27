import CodeBlock from "../../components/codeBlock";

const substringMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.substring()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .substring() method returns a new string that contains a portion of the calling string, extracted from the start index up to, but not including, the end index.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .substring() when you need to extract a specific section of a string without modifying the original string.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`string.substring(start, end);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>start</strong>: The index at which to begin extraction (inclusive).</li>
        <li><strong>end (optional)</strong>: The index at which to end extraction (exclusive). If omitted, substring extracts to the end of the string.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns a new string containing the extracted part of the string. If the start index is greater than the end index, .substring() swaps the two.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const str = "Hello, World!";\nconst subStr = str.substring(7, 12);\nconsole.log(subStr); // Output: "World"`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .substring()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Extract a word from a sentence.</h3>
      <p className="my-3">Description: Given a sentence, use .substring() to extract a specific word.</p>
      <CodeBlock code={`const sentence = "The quick brown fox";\nconst word = sentence.substring(4, 9);\nconsole.log(word); // Output: "quick"`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Get initials from a name.</h3>
      <p className="my-3">Description: Given a full name, use .substring() to extract the initials.</p>
      <CodeBlock code={`const name = "John Doe";\nconst initials = name.substring(0, 1) + name.substring(5, 6);\nconsole.log(initials); // Output: "JD"`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Extract the last three characters from a string.</li>
        <li className="mt-2">Exercise 2: Given a date string in &quot;YYYY-MM-DD&quot; format, use .substring() to get the month and day separately.</li>
      </ul>
    </div>
  );
};

export default substringMethod;
