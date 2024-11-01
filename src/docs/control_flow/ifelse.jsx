import CodeBlock from "../../components/codeBlock";

const IfElse = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">if-else Statement</h1>
      <p className="text-lg text-gray-700 mb-6">
        The if-else statement executes a block of code based on a specified condition. If the condition is true, the first block runs; otherwise, the else block executes.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`if (condition) {\n  // code to be executed if condition is true\n} else {\n  // code to be executed if condition is false\n}`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`const age = 18;\nif (age >= 18) {\n  console.log("You are an adult.");\n} else {\n  console.log("You are a minor.");\n}`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> You can have multiple conditions using else if to check additional conditions.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a program that checks if a number is positive, negative, or zero.</li>
        <li>Exercise 2: Create a simple grading system based on a students score.</li>
      </ul>
    </div>
  );
};

export default IfElse;
