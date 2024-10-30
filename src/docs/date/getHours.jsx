import CodeBlock from "../../components/codeBlock";

const getHours = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">getHours()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>getHours()</code> method in JavaScript returns the hour (0-23) of the specified date, according to local time. This method is often used to retrieve the hour component from a <code>Date</code> object.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>getHours()</code> returns hours in 24-hour format, where <code>0</code> represents midnight and <code>23</code> represents 11 PM. If a 12-hour format is needed, additional logic is required.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`date.getHours();`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Getting the Current Hour</h3>
      <CodeBlock
        code={`const currentHour = new Date().getHours();\nconsole.log(currentHour); // Output: (0-23) based on the current hour`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Getting the Hour of a Specific Date</h3>
      <CodeBlock
        code={`const specificDate = new Date("2024-10-28T15:30:00");\nconst hour = specificDate.getHours();\nconsole.log(hour); // Output: 15 (for 3 PM)`}
      />

      <h3 className="text-lg font-semibold my-5">Example 3: Converting to 12-Hour Format</h3>
      <CodeBlock
        code={`const hour = new Date().getHours();\nconst formattedHour = hour % 12 || 12;\nconst period = hour >= 12 ? "PM" : "AM";\nconsole.log(\`\${formattedHour} \${period}\`); // Output: e.g., 3 PM`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a function that returns Morning,Afternoon, Evening, or Night based on the current hour.</li>
        <li className="mt-2">Exercise 2: Write a function that converts a 24-hour format time to a 12-hour format.</li>
        <li className="mt-2">Exercise 3: Use <code>getHours()</code> to check if the current time is within business hours (e.g., 9 AM to 5 PM).</li>
      </ul>
    </div>
  );
};

export default getHours;
