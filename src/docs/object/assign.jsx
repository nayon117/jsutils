import CodeBlock from "../../components/codeBlock";

const ObjectAssignMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.assign()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Object.assign()</code> method is used to copy the values of all enumerable properties from one or more source objects to a target object. This method is often used for merging objects or adding properties to an existing object.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>Object.assign()</code> when you want to combine properties from multiple objects, clone an object, or add new properties to an existing object.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Object.assign(target, ...sources);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>target</strong>: The object to which properties will be copied.
        </li>
        <li>
          <strong>sources</strong>: One or more objects from which properties will be copied.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns the target object after properties have been copied.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Merging Objects</h3>
      <CodeBlock code={`const obj1 = { a: 1, b: 2 };\nconst obj2 = { b: 3, c: 4 };\nconst merged = Object.assign({}, obj1, obj2);\nconsole.log(merged); // Output: { a: 1, b: 3, c: 4 }`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Cloning an Object</h3>
      <CodeBlock code={`const original = { a: 1, b: 2 };\nconst clone = Object.assign({}, original);\nconsole.log(clone); // Output: { a: 1, b: 2 }`} />

      <h3 className="text-lg font-semibold mb-2">Example 3: Adding New Properties</h3>
      <CodeBlock code={`const person = { name: "John" };\nconst additionalInfo = { age: 30, city: "New York" };\nObject.assign(person, additionalInfo);\nconsole.log(person); // Output: { name: "John", age: 30, city: "New York" }`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Object.assign()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Merge Multiple Objects</h3>
      <p className="my-3">Description: Use <code>Object.assign()</code> to merge three objects into one.</p>
      <CodeBlock code={`const obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconst obj3 = { c: 3 };\nconst merged = Object.assign({}, obj1, obj2, obj3);\nconsole.log(merged); // Output: { a: 1, b: 2, c: 3 }`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Default Values for Missing Properties</h3>
      <p className="my-3">Description: Create a function that takes an object and provides default values for missing properties using <code>Object.assign()</code>.</p>
      <CodeBlock code={`function setDefaults(obj) {\n  const defaults = { name: "Unknown", age: 18 };\n  return Object.assign({}, defaults, obj);\n}\n\nconst user = { age: 25 };\nconst completeUser = setDefaults(user);\nconsole.log(completeUser); // Output: { name: "Unknown", age: 25 }`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Merge two objects representing products and display their combined properties.</li>
        <li className="mt-2">Exercise 2: Clone an object and modify the clone without affecting the original object.</li>
        <li className="mt-2">Exercise 3: Write a function that combines properties of an object with a default configuration.</li>
      </ul>
    </div>
  );
};

export default ObjectAssignMethod;
