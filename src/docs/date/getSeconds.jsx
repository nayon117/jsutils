import CodeBlock from "../../components/codeBlock";

const getSeconds = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">getSeconds()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>getSeconds()</code> method in JavaScript returns the seconds (0-59) of the specified date, according to local time. It is used to retrieve the seconds component from a <code>Date</code> object.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>getSeconds()</code> reflects the local time, and its value will update every second if used in a live clock.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`date.getSeconds();`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Getting the Current Seconds</h3>
      <CodeBlock
        code={`const currentSeconds = new Date().getSeconds();\nconsole.log(currentSeconds); // Output: (0-59) based on the current second`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Getting Seconds of a Specific Date</h3>
      <CodeBlock
        code={`const specificDate = new Date("2024-10-28T15:45:30");\nconst seconds = specificDate.getSeconds();\nconsole.log(seconds); // Output: 30`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a function that checks if the seconds are divisible by 10.</li>
        <li className="mt-2">Exercise 2: Create a countdown timer using <code>getSeconds()</code>.</li>
      </ul>
    </div>
  );
};

export default getSeconds;
