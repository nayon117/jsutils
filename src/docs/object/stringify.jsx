import CodeBlock from "../../components/codeBlock";

const JsonStringify = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">JSON.stringify()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>JSON.stringify()</code> method converts a JavaScript object or array into a JSON string.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> This method is commonly used to send data to a server in JSON format.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`JSON.stringify(value, replacer, space);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const obj = { name: "Alice", age: 25 };\nconst jsonString = JSON.stringify(obj);\nconsole.log(jsonString);   // Output: '{"name":"Alice","age":25}'\n\nconst array = ["apple", "banana", "cherry"];\nconst jsonArrayString = JSON.stringify(array);\nconsole.log(jsonArrayString);   // Output: '["apple","banana","cherry"]'`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Convert an array <code>&quot;[10, 20, 30]&quot;</code> into a JSON string.</li>
        <li>Exercise 2: What happens if you try to stringify a circular reference (an object that references itself)?</li>
        <li>Exercise 3: Write a function that converts an object to JSON format with indentation for readability.</li>
      </ul>
    </div>
  );
};

export default JsonStringify;
