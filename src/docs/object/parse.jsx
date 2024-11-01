import CodeBlock from "../../components/codeBlock";

const JsonParse = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">JSON.parse()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>JSON.parse()</code> method parses a JSON string and returns the corresponding JavaScript object or array.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> Ensure that the string is in valid JSON format; otherwise, <code>JSON.parse()</code> will throw an error.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`JSON.parse(jsonString);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const jsonString = '{"name": "Alice", "age": 25}';\nconst obj = JSON.parse(jsonString);\nconsole.log(obj);   // Output: { name: "Alice", age: 25 }\n\nconst jsonArray = '["apple", "banana", "cherry"]';\nconst array = JSON.parse(jsonArray);\nconsole.log(array);   // Output: ["apple", "banana", "cherry"]`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Parse the JSON string <code>&quot;{'{"city": "New York", "population": 8000000}'}&quot;</code>.</li>
        <li>Exercise 2: What happens if you parse an invalid JSON string, such as <code>{"{\"name\": \"Alice\"}"}</code>?</li>
        <li>Exercise 3: Write a function that parses a JSON string and handles errors if the string is invalid.</li>
      </ul>
    </div>
  );
};

export default JsonParse;
