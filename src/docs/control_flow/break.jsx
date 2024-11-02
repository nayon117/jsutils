import CodeBlock from "../../components/codeBlock";

const breakStatement = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">break Statement</h1>
      <p className="text-lg text-gray-700 mb-6">
        The break statement is used to exit a loop or switch statement prematurely. When executed, it stops the execution of the loop or switch block and transfers control to the statement following it.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`break;`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`for (let i = 0; i < 10; i++) {\n  if (i === 5) {\n    break;\n  }\n  console.log(i);\n}`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> The break statement can be used in loops (for, while, do...while) and switch statements.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a program that uses a loop to find the first number greater than 50.</li>
        <li>Exercise 2: Create a switch case that breaks when a certain case is matched.</li>
      </ul>
    </div>
  );
};

export default breakStatement;
