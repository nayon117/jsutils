import CodeBlock from "../../components/codeBlock";

const ContinueStatement = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">continue Statement</h1>
      <p className="text-lg text-gray-700 mb-6">
        The continue statement skips the current iteration of a loop and continues with the next iteration. It can be used in any type of loop.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`continue;`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`for (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) {\n    continue;\n  }\n  console.log(i);\n}`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> The continue statement can be used with a label to specify which loop to continue if you have nested loops.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a program that prints all odd numbers between 1 and 20.</li>
        <li>Exercise 2: Create a loop that skips a certain value (e.g., 5) when encountered.</li>
      </ul>
    </div>
  );
};

export default ContinueStatement;
