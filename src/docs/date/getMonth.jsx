import CodeBlock from "../../components/codeBlock";

const getMonth = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">getMonth()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>getMonth()</code> method in JavaScript returns the month (0-11) of a specified date, where January is 0 and December is 11. This method is helpful for extracting the month from a <code>Date</code> object.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> Remember that <code>getMonth()</code> returns months as a zero-based index, with 0 representing January and 11 representing December. You may need to add 1 to the result to display it in a user-friendly format (e.g., January as 1).
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`date.getMonth();`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Getting the Current Month</h3>
      <CodeBlock
        code={`const currentMonth = new Date().getMonth();\nconsole.log(currentMonth); // Output: current month as 0-11, e.g., 0 for January`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Getting the Month from a Specific Date</h3>
      <CodeBlock
        code={`const specificDate = new Date("2024-07-15");\nconst month = specificDate.getMonth();\nconsole.log(month); // Output: 6 (July)`}
      />

      <h3 className="text-lg font-semibold my-5">Example 3: Displaying Month in a User-Friendly Format</h3>
      <CodeBlock
        code={`const userFriendlyMonth = new Date().getMonth() + 1;\nconsole.log(userFriendlyMonth); // Output: current month as 1-12, e.g., 1 for January`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a function that takes a date and returns the name of the month (e.g., January).</li>
        <li className="mt-2">Exercise 2: Create a function that returns the current month as a user-friendly number (1-12).</li>
        <li className="mt-2">Exercise 3: Use <code>getMonth()</code> to check if a date falls in the first or second half of the year.</li>
      </ul>
    </div>
  );
};

export default getMonth;
