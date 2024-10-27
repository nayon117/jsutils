import CodeBlock from "../../components/codeBlock";

const currying = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Currying</h1>

      <p className="text-lg text-gray-700 mb-6">
        Currying is a functional programming technique where a function is transformed into a series of functions, each taking a single argument. This allows for partial application of functions and can lead to more flexible and reusable code.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use currying when you want to create functions with fewer parameters, enhance code readability, or create reusable functions that can be partially applied.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`function curry(func) {\n  return function curried(...args) {\n    if (args.length >= func.length) {\n      return func(...args);\n    }\n    return function(...args2) {\n      return curried(...args, ...args2);\n    };\n  };\n}`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <p className="my-3">The parameters are the arguments that will be provided to the original function.</p>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">Returns a new function that takes fewer arguments and can be called multiple times until all arguments are provided.</p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>
      
      <h3 className="text-lg font-semibold mb-2">Example 1: Simple Addition</h3>
      <CodeBlock code={`function add(a) {\n  return function(b) {\n    return a + b;\n  };\n}\n\nconst addFive = add(5);\nconsole.log(addFive(3)); // Output: 8`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Multiplier</h3>
      <CodeBlock code={`function multiply(a) {\n  return function(b) {\n    return a * b;\n  };\n}\n\nconst double = multiply(2);\nconsole.log(double(4)); // Output: 8`} />

      <h3 className="text-lg font-semibold mb-2">Example 3: Concatenate Strings</h3>
      <CodeBlock code={`function concat(str1) {\n  return function(str2) {\n    return str1 + str2;\n  };\n}\n\nconst addHello = concat("Hello, ");\nconsole.log(addHello("World!")); // Output: "Hello, World!"`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Currying</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Create a power function.</h3>
      <p className="my-3">Description: Write a curried function that calculates the power of a number.</p>
      <CodeBlock code={`function power(exponent) {\n  return function(base) {\n    return Math.pow(base, exponent);\n  };\n}\n\nconst square = power(2);\nconsole.log(square(4)); // Output: 16`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Build a greeting function.</h3>
      <p className="my-3">Description: Implement a curried function that creates a personalized greeting message.</p>
      <CodeBlock code={`function greet(greeting) {\n  return function(name) {\n    return \`\${greeting}, \${name}!\`;\n  };\n}\n\nconst sayHello = greet("Hello");\nconsole.log(sayHello("Alice")); // Output: "Hello, Alice!"`} />

      <h3 className="text-lg font-semibold mb-2">Problem 3: Create a discount function.</h3>
      <p className="my-3">Description: Write a curried function that applies a discount to a given price.</p>
      <CodeBlock code={`function discount(discountRate) {\n  return function(price) {\n    return price - (price * discountRate);\n  };\n}\n\nconst tenPercentOff = discount(0.10);\nconsole.log(tenPercentOff(100)); // Output: 90`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a curried function that calculates the area of a rectangle.</li>
        <li className="mt-2">Exercise 2: Implement a curried function that formats a date string.</li>
        <li className="mt-2">Exercise 3: Write a curried function that builds a custom URL with query parameters.</li>
      </ul>
    </div>
  );
};

export default currying;
