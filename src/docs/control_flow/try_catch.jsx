import CodeBlock from "../../components/codeBlock";

const tryCatch = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">try...catch Statement</h1>
      <p className="text-lg text-gray-700 mb-6">
        The try...catch statement allows you to test a block of code for errors. If an error occurs, the catch block will handle it, allowing the program to continue running without crashing.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`try {\n  // code that may throw an error\n} catch (error) {\n  // code to handle the error\n}`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`try {\n  let result = riskyOperation();\n} catch (error) {\n  console.error("An error occurred: " + error.message);\n}`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> You can also use the finally block to execute code after the try and catch blocks, regardless of whether an error occurred or not.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a program that safely parses JSON and handles any errors that may occur.</li>
        <li>Exercise 2: Create a function that performs division and handles division by zero gracefully.</li>
      </ul>
    </div>
  );
};

export default tryCatch;
