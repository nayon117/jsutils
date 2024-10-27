import CodeBlock from "../../components/codeBlock";

const ObjectDefinePropertyMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.defineProperty()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Object.defineProperty()</code> method adds a property to an object or modifies an existing property, returning the object. This method allows you to control the behavior of properties, such as making them read-only, enumerable, or configurable.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>Object.defineProperty()</code> when you need to create or modify an objects property with specific attributes that control its behavior.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Object.defineProperty(obj, prop, descriptor);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>obj</strong>: The object on which to define the property.
        </li>
        <li>
          <strong>prop</strong>: The name of the property to define or modify.
        </li>
        <li>
          <strong>descriptor</strong>: An object that describes the property being defined or modified. It can have the following attributes:
          <ul className="list-disc list-inside">
            <li><strong>value</strong>: The value of the property.</li>
            <li><strong>writable</strong>: A boolean indicating if the value can be changed.</li>
            <li><strong>enumerable</strong>: A boolean indicating if the property can be enumerated in a for-in loop.</li>
            <li><strong>configurable</strong>: A boolean indicating if the property can be deleted or changed to non-writable.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns the object that was passed to it.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Defining a New Property</h3>
      <CodeBlock code={`const person = {};\nObject.defineProperty(person, 'name', {\n  value: 'Alice',\n  writable: true,\n  enumerable: true,\n  configurable: true\n});\nconsole.log(person.name); // Output: 'Alice'`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Making a Property Non-Writable</h3>
      <CodeBlock code={`const car = {};\nObject.defineProperty(car, 'brand', {\n  value: 'Toyota',\n  writable: false\n});\nconsole.log(car.brand); // Output: 'Toyota'\ncar.brand = 'Honda'; // Attempt to change the value\nconsole.log(car.brand); // Output: 'Toyota' (value did not change)`} />

      <h3 className="text-lg font-semibold mb-2">Example 3: Configurable Property</h3>
      <CodeBlock code={`const book = {};\nObject.defineProperty(book, 'title', {\n  value: '1984',\n  configurable: false\n});\nconsole.log(book.title); // Output: '1984'\nObject.defineProperty(book, 'title', {\n  value: 'Animal Farm'\n}); // Error: Cannot redefine property: title`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Object.defineProperty()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Creating Read-Only Properties</h3>
      <p className="my-3">Description: Use <code>Object.defineProperty()</code> to create a read-only property in an object.</p>
      <CodeBlock code={`const server = {};\nObject.defineProperty(server, 'host', {\n  value: 'localhost',\n  writable: false\n});\nconsole.log(server.host); // Output: 'localhost'\nserver.host = '127.0.0.1'; // Attempt to change the value\nconsole.log(server.host); // Output: 'localhost'`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Controlling Enumerability</h3>
      <p className="my-3">Description: Create a property that is non-enumerable, meaning it wont show up in loops.</p>
      <CodeBlock code={`const user = {};\nObject.defineProperty(user, 'age', {\n  value: 25,\n  enumerable: false\n});\nconsole.log(user.age); // Output: 25\nfor (let key in user) {\n  console.log(key); // No output, age is non-enumerable\n}`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Define a property with a default value and make it writable.</li>
        <li className="mt-2">Exercise 2: Create an object and define a non-configurable property.</li>
        <li className="mt-2">Exercise 3: Use <code>Object.defineProperty()</code> to create an enumerable property and test its behavior in a for-in loop.</li>
      </ul>
    </div>
  );
};

export default ObjectDefinePropertyMethod;
