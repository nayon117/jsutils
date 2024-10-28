import CodeBlock from "../../components/codeBlock";

const newDate = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">new Date()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>new Date()</code> constructor in JavaScript creates a new <code>Date</code> object representing a specific point in time. It can be used without parameters to get the current date and time or with parameters to represent a particular date and time.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> When working with <code>Date</code> objects, remember that JavaScript’s <code>Date</code> handling is based on the local timezone, which may affect results across different regions. To work in UTC or in specific time zones, you may need to use methods like <code>toUTCString()</code> or a library like <code>moment.js</code> for more complex time zone support.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        <code>new Date()</code> is useful for:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Getting the current date and time</li>
        <li>Calculating time differences or durations</li>
        <li>Parsing and formatting dates</li>
      </ul>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`new Date();`} />
      <p className="my-3">The <code>Date</code> constructor has several ways to initialize:</p>
      <ul className="list-disc list-inside mb-4">
        <li><code>new Date()</code> - Current date and time</li>
        <li><code>new Date(milliseconds)</code> - Date based on milliseconds from 1970-01-01</li>
        <li><code>new Date(dateString)</code> - Parses a date string</li>
        <li><code>new Date(year, month, day, hours, minutes, seconds, milliseconds)</code> - Specific date and time (month is 0-indexed)</li>
      </ul>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Creating the Current Date</h3>
      <CodeBlock code={`const currentDate = new Date();\nconsole.log(currentDate); // Output: current date and time`} />

      <h3 className="text-lg font-semibold my-5">Example 2: Creating a Date from a Timestamp</h3>
      <CodeBlock code={`const dateFromTimestamp = new Date(1625097600000);\nconsole.log(dateFromTimestamp); // Output: date corresponding to the timestamp`} />

      <h3 className="text-lg font-semibold my-5">Example 3: Creating a Date from a Date String</h3>
      <CodeBlock code={`const specificDate = new Date("2023-12-31");\nconsole.log(specificDate); // Output: Sun Dec 31 2023`} />

      <h3 className="text-lg font-semibold my-5">Example 4: Creating a Date with Specific Components</h3>
      <CodeBlock
        code={`const customDate = new Date(2023, 11, 25, 10, 30, 0);\nconsole.log(customDate); // Output: Mon Dec 25 2023 10:30:00`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a <code>Date</code> object for your birthdate and log it to the console.</li>
        <li className="mt-2">Exercise 2: Use <code>new Date()</code> to get the current year, month, and day.</li>
        <li className="mt-2">Exercise 3: Write a function that accepts a date string and returns the day of the week for that date.</li>
      </ul>
    </div>
  );
};

export default newDate;
