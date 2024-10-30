import CodeBlock from "../../components/codeBlock";

const getDate = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">getDate()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>getDate()</code> method in JavaScript returns the day of the month (1-31) for a specified date according to the local time. This method is helpful for extracting the day component of a <code>Date</code> object.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>getDate()</code> returns the day as a number between 1 and 31, depending on the month and year. It represents the actual calendar day, not the zero-based indexing commonly used with other methods (e.g., <code>getMonth()</code>).
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`date.getDate();`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Getting Today’s Date</h3>
      <CodeBlock
        code={`const today = new Date().getDate();\nconsole.log(today); // Output: today's date (e.g., 28 for October 28th)`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Getting Date from a Specific Date</h3>
      <CodeBlock
        code={`const specificDate = new Date("2024-07-15");\nconst date = specificDate.getDate();\nconsole.log(date); // Output: 15`}
      />

      <h3 className="text-lg font-semibold my-5">Example 3: Using getDate() for Comparison</h3>
      <CodeBlock
        code={`const date1 = new Date("2024-10-15").getDate();\nconst date2 = new Date("2024-10-28").getDate();\nconsole.log(date1 < date2); // Output: true`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a function that returns the day of the month for a given date.</li>
        <li className="mt-2">Exercise 2: Create a function that checks if today’s date is even or odd.</li>
        <li className="mt-2">Exercise 3: Use <code>getDate()</code> to find if a given day is the last day of its month.</li>
      </ul>
    </div>
  );
};

export default getDate;
