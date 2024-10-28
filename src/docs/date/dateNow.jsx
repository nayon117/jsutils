import CodeBlock from "../../components/codeBlock";

const DateNow = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Date.now()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Date.now()</code> method in JavaScript returns the current timestamp in milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC). It is useful for measuring the time or calculating time differences.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>Date.now()</code> is often sufficient for measuring time intervals and creating timestamps. However, for more precise timing (especially within short intervals or animations), consider using <code>performance.now()</code>, which provides sub-millisecond accuracy.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        <code>Date.now()</code> is helpful when you need a precise timestamp for:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Logging the exact moment an event occurs</li>
        <li>Calculating time intervals</li>
        <li>Benchmarking code execution time</li>
      </ul>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Date.now();`} />

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Getting the Current Timestamp</h3>
      <CodeBlock code={`const timestamp = Date.now();\nconsole.log(timestamp); // Output: current timestamp in milliseconds`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Measuring Code Execution Time</h3>
      <CodeBlock
        code={`const startTime = Date.now();\n// Code to measure execution time\nfor (let i = 0; i < 1e6; i++) { /* some operation */ }\nconst endTime = Date.now();\nconsole.log(\`Execution time: \${endTime - startTime} ms\`);`}
      />

      <h3 className="text-lg font-semibold mb-2">Example 3: Creating a Custom Timestamp in Seconds</h3>
      <CodeBlock code={`const timestampInSeconds = Math.floor(Date.now() / 1000);\nconsole.log(timestampInSeconds); // Output: timestamp in seconds`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>Date.now()</code> to measure the time it takes to execute a loop from 1 to 10,000.</li>
        <li className="mt-2">Exercise 2: Write a function that returns the current timestamp in seconds using <code>Date.now()</code>.</li>
        <li className="mt-2">Exercise 3: Create a function that calculates the time difference (in milliseconds) between two calls to <code>Date.now()</code>.</li>
      </ul>
    </div>
  );
};

export default DateNow;
