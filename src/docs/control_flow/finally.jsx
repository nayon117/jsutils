import CodeBlock from "../../components/codeBlock";

const FinallyStatement = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">finally Statement</h1>
      <p className="text-lg text-gray-700 mb-6">
        The finally block is used to execute code after the try and catch blocks, regardless of whether an error was thrown or not. It is often used for cleanup actions.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`try {\n  // code that may throw an error\n} catch (error) {\n  // code to handle the error\n} finally {\n  // code that will run regardless of an error\n}`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`try {\n  let result = riskyOperation();\n} catch (error) {\n  console.error("An error occurred: " + error.message);\n} finally {\n  console.log("Cleanup actions go here.");\n}`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> The finally block is optional and can be used with try...catch statements to ensure that specific code runs regardless of whether an error occurred.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a program that attempts to read a file and always logs a message indicating that the file operation is complete.</li>
        <li>Exercise 2: Create a function that connects to a database and uses finally to ensure the connection is closed.</li>
      </ul>
    </div>
  );
};

export default FinallyStatement;
