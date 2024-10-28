import CodeBlock from "../../components/codeBlock";

const getFullYear = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">getFullYear()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>getFullYear()</code> method in JavaScript returns the year of the specified date according to local time. This is especially useful when extracting the year from a <code>Date</code> object.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> The <code>getFullYear()</code> method always returns a four-digit year (e.g., 2024). If you are working with older two-digit year methods like <code>getYear()</code>, consider switching to <code>getFullYear()</code> for accuracy and consistency.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`date.getFullYear();`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Getting the Current Year</h3>
      <CodeBlock
        code={`const currentYear = new Date().getFullYear();\nconsole.log(currentYear); // Output: current year, e.g., 2024`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Getting the Year from a Specific Date</h3>
      <CodeBlock
        code={`const specificDate = new Date("2000-01-01");\nconst year = specificDate.getFullYear();\nconsole.log(year); // Output: 2000`}
      />

      <h3 className="text-lg font-semibold my-5">Example 3: Comparing Years of Two Dates</h3>
      <CodeBlock
        code={`const date1 = new Date("2024-05-01");\nconst date2 = new Date("2022-05-01");\n\nif (date1.getFullYear() === date2.getFullYear()) {\n  console.log("Same year");\n} else {\n  console.log("Different years");\n}\n// Output: Different years`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a function that takes a date as input and returns just the year.</li>
        <li className="mt-2">Exercise 2: Write a function that checks if two dates are in the same year.</li>
        <li className="mt-2">Exercise 3: Use <code>getFullYear()</code> to find the age of a person born on a given date.</li>
      </ul>
    </div>
  );
};

export default getFullYear;
