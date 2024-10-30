import CodeBlock from "../../components/codeBlock";

const toLocaleDateString = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">toLocaleDateString()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>toLocaleDateString()</code> method in JavaScript returns a string representing the date portion of a <code>Date</code> object in a specified locale format.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> You can customize the format of <code>toLocaleDateString()</code> by specifying a locale and options, making it useful for displaying dates in various international formats.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`date.toLocaleDateString([locales[, options]]);`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Default Locale</h3>
      <CodeBlock
        code={`const date = new Date();\nconsole.log(date.toLocaleDateString()); // Output: MM/DD/YYYY (based on default locale)`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Specifying Locale and Options</h3>
      <CodeBlock
        code={`const date = new Date();\nconsole.log(date.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })); // Output: 28 October 2024`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Format the date in YYYY/MM/DD format using <code>toLocaleDateString()</code>.</li>
        <li className="mt-2">Exercise 2: Create a function that displays the date in the French format.</li>
      </ul>
    </div>
  );
};

export default toLocaleDateString;
