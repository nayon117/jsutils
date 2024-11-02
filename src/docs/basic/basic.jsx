import CodeBlock from "../../components/codeBlock";

const basics = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">JavaScript Basics</h1>
      
      {/* Variables Section */}
      <h2 className="text-xl font-semibold mb-3">Variables</h2>
      <p className="text-lg text-gray-700 mb-6">
        In JavaScript, variables are used to store data values. You can declare variables using three keywords: <strong>let</strong>, <strong>const</strong>, and <strong>var</strong>.
      </p>

      <h3 className="text-lg font-semibold mb-2">1. let</h3>
      <p className="mb-4">
        The <code>let</code> keyword is used to declare block-scoped variables. This means the variable can only be accessed within the block it is defined.
      </p>
      <CodeBlock code={`let age = 25;`} />
      
      <h3 className="text-lg font-semibold mb-2">2. const</h3>
      <p className="mb-4">
        The <code>const</code> keyword is also block-scoped but is used to declare constants. The value of a constant cannot be changed after it is assigned.
      </p>
      <CodeBlock code={`const PI = 3.14;`} />
      
      <h3 className="text-lg font-semibold mb-2">3. var</h3>
      <p className="mb-4">
        The <code>var</code> keyword is used to declare variables that are function-scoped or globally scoped. It is less commonly used in modern JavaScript due to issues with hoisting and scope.
      </p>
      <CodeBlock code={`var name = "John";`} />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> It&quot;s recommended to use <code>let</code> and <code>const</code> for variable declarations to avoid issues with scope.
      </p>

      {/* Data Types Section */}
      <h2 className="text-xl font-semibold mb-3">Data Types</h2>
      <p className="text-lg text-gray-700 mb-6">
        JavaScript has several built-in data types. The most common are:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>number:</strong> Represents both integer and floating-point numbers.</li>
        <li><strong>string:</strong> Represents a sequence of characters enclosed in quotes.</li>
        <li><strong>boolean:</strong> Represents a logical entity and can have two values: <code>true</code> and <code>false</code>.</li>
        <li><strong>object:</strong> Represents a collection of key-value pairs.</li>
        <li><strong>array:</strong> A special type of object that holds an ordered collection of values.</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Example of Data Types</h3>
      <CodeBlock
        code={`let num = 42; // number\nlet str = "Hello, World!"; // string\nlet isActive = true; // boolean\nlet obj = { name: "Alice", age: 30 }; // object\nlet arr = [1, 2, 3]; // array`}
      />

      {/* typeof Operator Section */}
      <h2 className="text-xl font-semibold mb-3">typeof - Check Data Type</h2>
      <p className="text-lg text-gray-700 mb-6">
        The <code>typeof</code> operator returns a string indicating the type of the unevaluated operand. 
      </p>
      <CodeBlock
        code={`console.log(typeof num); // "number"\nconsole.log(typeof str); // "string"\nconsole.log(typeof isActive); // "boolean"\nconsole.log(typeof obj); // "object"\nconsole.log(typeof arr); // "object"`} 
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> For arrays, <code>typeof</code> returns object because arrays are a type of object.
      </p>

      {/* Type Conversion Section */}
      <h2 className="text-xl font-semibold mb-3">Type Conversion</h2>
      <p className="text-lg text-gray-700 mb-6">
        JavaScript provides several functions to convert values between types:
      </p>

      <h3 className="text-lg font-semibold mb-2">1. Number()</h3>
      <p className="mb-4">
        The <code>Number()</code> function converts a value to a number.
      </p>
      <CodeBlock
        code={`let strNumber = "123";\nlet num = Number(strNumber); // 123`}
      />

      <h3 className="text-lg font-semibold mb-2">2. Boolean()</h3>
      <p className="mb-4">
        The <code>Boolean()</code> function converts a value to a boolean. All values are truthy unless they are false, 0, &quot; &quot;, null, undefined, or NaN.
      </p>
      <CodeBlock
        code={`let truthyValue = Boolean("Hello"); // true\nlet falsyValue = Boolean(0); // false`}
      />

      <h3 className="text-lg font-semibold mb-2">3. String()</h3>
      <p className="mb-4">
        The <code>String()</code> function converts a value to a string.
      </p>
      <CodeBlock
        code={`let numValue = 123;\nlet strValue = String(numValue); // "123"`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> Type conversion is often implicit in JavaScript, where the engine automatically converts types as needed.
      </p>

      {/* Exercises Section */}
      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Declare variables using <code>let</code>, <code>const</code>, and <code>var</code> and log their values and types.</li>
        <li>Exercise 2: Create an array with mixed data types and use <code>typeof</code> to check each elements type.</li>
        <li>Exercise 3: Write functions that use <code>Number</code>, <code>Boolean</code>, and <code>String</code> to convert different values and log the results.</li>
      </ul>
    </div>
  );
};

export default basics;
