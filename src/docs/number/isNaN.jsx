import CodeBlock from "../../components/codeBlock";

const isNaNExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Number.isNaN()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Number.isNaN()</code> method checks if the provided value is NaN (Not-a-Number). Unlike the global <code>isNaN()</code> function, it doesn’t forcefully convert the input to a number.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>Number.isNaN()</code> will return <code>true</code> only if the value is exactly <code>NaN</code>. Values like <code>undefined</code> or other non-number types will return <code>false</code>.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Number.isNaN(value);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`console.log(Number.isNaN(NaN)); // Output: true\nconsole.log(Number.isNaN("NaN")); // Output: false`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>Number.isNaN()</code> to check if <code>hello</code> is NaN.</li>
      </ul>
    </div>
  );
};

export default isNaNExample;
