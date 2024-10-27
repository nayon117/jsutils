import CodeBlock from "../../components/codeBlock";

const closure = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Closures</h1>

      <p className="text-lg text-gray-700 mb-6">
        A closure is a feature in JavaScript where an inner function retains access to the outer function&apos;s variables even after the outer function has executed. This allows for data encapsulation and privacy.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use closures when you need to maintain state in an asynchronous environment, create private variables, or encapsulate functionality without exposing it globally.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`function outerFunction() {\n  let outerVariable = 'I am from outer!';\n  function innerFunction() {\n    console.log(outerVariable);\n  }\n  return innerFunction;\n}`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <p className="my-3">
        Closures can take parameters just like regular functions, but they retain access to their outer function&apos;s variables.
      </p>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        A closure returns a function that has access to the outer function&apos;s scope, allowing you to execute the inner function while retaining the outer state.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // Output: 1\nconsole.log(counter()); // Output: 2`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Closures</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Create a private variable.</h3>
      <p className="my-3">Description: Write a function that creates a private variable and exposes a method to access it.</p>
      <CodeBlock code={`function secret() {\n  let privateVariable = 'This is secret!';\n  return function() {\n    return privateVariable;\n  };\n}\n\nconst getSecret = secret();\nconsole.log(getSecret()); // Output: "This is secret!"`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Use closures for data encapsulation.</h3>
      <p className="my-3">Description: Implement a function that tracks the number of times it has been called.</p>
      <CodeBlock code={`function callTracker() {\n  let count = 0;\n  return function() {\n    count++;\n    console.log(\`Called \${count} times\`);\n  };\n}\n\nconst tracker = callTracker();\ntracker(); // Output: "Called 1 times"\ntracker(); // Output: "Called 2 times"`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a closure that maintains a list of items and allows adding items to that list.</li>
        <li className="mt-2">Exercise 2: Write a function that returns a greeting function with a predefined name using closures.</li>
      </ul>
    </div>
  );
};

export default closure;
