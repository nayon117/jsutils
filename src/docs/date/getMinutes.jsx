import CodeBlock from "../../components/codeBlock";

const getMinutes = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">getMinutes()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>getMinutes()</code> method in JavaScript returns the minutes (0-59) of the specified date, according to local time. It is commonly used to extract the minutes component from a <code>Date</code> object.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>getMinutes()</code> is based on the local time zone of the system.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`date.getMinutes();`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Getting the Current Minutes</h3>
      <CodeBlock
        code={`const currentMinutes = new Date().getMinutes();\nconsole.log(currentMinutes); // Output: (0-59) based on the current minute`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Getting Minutes of a Specific Date</h3>
      <CodeBlock
        code={`const specificDate = new Date("2024-10-28T15:45:00");\nconst minutes = specificDate.getMinutes();\nconsole.log(minutes); // Output: 45`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a function that returns top of the hour if minutes equal 0.</li>
        <li className="mt-2">Exercise 2: Check if the current minute is an odd or even number.</li>
      </ul>
    </div>
  );
};

export default getMinutes;
