import CodeBlock from "../../components/codeBlock";

const toStringMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.toString()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .toString() method returns a string representation of the specified object. This method is available on all objects in JavaScript, and can be overridden to provide a custom string representation.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .toString() when you need a string representation of an object for logging, displaying values, or when you want to concatenate objects with strings.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`object.toString();`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <p className="my-3">The .toString() method does not accept any parameters.</p>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns a string representing the object. For most built-in objects, this will be the object type. For user-defined objects, this can be customized.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>
      
      <h3 className="text-lg font-semibold mb-2">Example 1: Basic Object</h3>
      <CodeBlock code={`const obj = { name: "John", age: 30 };\nconsole.log(obj.toString()); // Output: [object Object]`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Custom toString Method</h3>
      <CodeBlock code={`class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  toString() {\n    return \`Name: \${this.name}, Age: \${this.age}\`;\n  }\n}\n\nconst person = new Person("Alice", 25);\nconsole.log(person.toString()); // Output: Name: Alice, Age: 25`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .toString()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Convert a Date Object to String.</h3>
      <p className="my-3">Description: Use .toString() to convert the current date to a string.</p>
      <CodeBlock code={`const currentDate = new Date();\nconsole.log(currentDate.toString());`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Implement a simple inventory item class.</h3>
      <p className="my-3">Description: Create a class that represents an inventory item with a custom toString method.</p>
      <CodeBlock code={`class InventoryItem {\n  constructor(name, quantity) {\n    this.name = name;\n    this.quantity = quantity;\n  }\n  toString() {\n    return \`Item: \${this.name}, Quantity: \${this.quantity}\`;\n  }\n}\n\nconst item = new InventoryItem("Apples", 50);\nconsole.log(item.toString()); // Output: Item: Apples, Quantity: 50`} />

      <h3 className="text-lg font-semibold mb-2">Problem 3: Create a simple Point class.</h3>
      <p className="my-3">Description: Write a class for a 2D point with a custom toString method that displays coordinates.</p>
      <CodeBlock code={`class Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n  toString() {\n    return \`Point(\${this.x}, \${this.y})\`;\n  }\n}\n\nconst point = new Point(5, 10);\nconsole.log(point.toString()); // Output: Point(5, 10)`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a class that represents a Book and implement a toString method to display its title and author.</li>
        <li className="mt-2">Exercise 2: Implement a toString method for a Car class that includes make, model, and year.</li>
        <li className="mt-2">Exercise 3: Write a toString method for a Rectangle class that shows its width and height.</li>
      </ul>
    </div>
  );
};

export default toStringMethod;
