import CodeBlock from "../../components/codeBlock";

const getDay = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">getDay()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>getDay()</code> method in JavaScript returns the day of the week (0-6) for a specified date, according to local time. Sunday is represented by <code>0</code>, Monday by <code>1</code>, and so on, up to Saturday as <code>6</code>.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>getDay()</code> is useful when working with dates that involve day-specific logic. Remember that it does not give the day of the month but rather the day of the week, where Sunday is always <code>0</code>.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`date.getDay();`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Getting the Day of the Week for Today</h3>
      <CodeBlock
        code={`const today = new Date().getDay();\nconsole.log(today); // Output: (0-6) based on the current day`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Getting Day for a Specific Date</h3>
      <CodeBlock
        code={`const specificDate = new Date("2024-10-28");\nconst day = specificDate.getDay();\nconsole.log(day); // Output: 1 (if it's a Monday)`}
      />

      <h3 className="text-lg font-semibold my-5">Example 3: Check if a Date Falls on a Weekend</h3>
      <CodeBlock
        code={`const date = new Date("2024-10-28");\nconst isWeekend = [0, 6].includes(date.getDay());\nconsole.log(isWeekend); // Output: false if not a weekend`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a function that returns Weekend or Weekday based on a given date.</li>
        <li className="mt-2">Exercise 2: Create a function that counts the number of weekends in a given month.</li>
        <li className="mt-2">Exercise 3: Use <code>getDay()</code> to determine if the current date is a Monday.</li>
      </ul>
    </div>
  );
};

export default getDay;
