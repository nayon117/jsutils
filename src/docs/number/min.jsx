import CodeBlock from "../../components/codeBlock";

const MathMin = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.min()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.min()</code> method returns the smallest number from a list of numbers provided as arguments.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> If no arguments are provided, <code>Math.min()</code> returns <code>Infinity</code>.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Math.min(value1, value2, ...);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`console.log(Math.min(3, 7, -2, 15)); // Output: -2\nconsole.log(Math.min(1, 5, 10));    // Output: 1\nconsole.log(Math.min());            // Output: Infinity`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Find the smallest number among <code>4, 18, -5, 6</code>.</li>
        <li>Exercise 2: Use <code>Math.min()</code> without arguments. What is the result?</li>
        <li>Exercise 3: Write a function that takes three numbers as arguments and returns the smallest using <code>Math.min()</code>.</li>
      </ul>
    </div>
  );
};

export default MathMin;
