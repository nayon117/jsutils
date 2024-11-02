import CodeBlock from "../../components/codeBlock";

const whileLoop = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">while Loop</h1>
      <p className="text-lg text-gray-700 mb-6">
        The while loop executes a block of code as long as the specified condition is true. It checks the condition before executing the block of code.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`while (condition) {\n  // code to be executed while condition is true\n}`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`let i = 0;\nwhile (i < 5) {\n  console.log("Iteration: " + i);\n  i++;\n}`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> Ensure that the condition eventually becomes false; otherwise, the loop will run indefinitely.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a program that finds the first 10 even numbers.</li>
        <li>Exercise 2: Create a countdown timer that counts down from 10 to 0.</li>
      </ul>
    </div>
  );
};

export default whileLoop;
