import CodeBlock from "../../components/codeBlock";

const generators = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Generators</h1>

      <p className="text-lg text-gray-700 mb-6">
        Generators are a special type of function in JavaScript that can be paused and resumed, allowing you to iterate over a sequence of values on-demand. They are defined using the `function*` syntax and use the `yield` keyword to produce values.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use generators when you want to create iterators, manage asynchronous programming more easily, or handle large datasets efficiently without loading everything into memory at once.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`function* generatorFunction() {\n  // generator logic\n}`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <p className="my-3">Generators can accept parameters like regular functions, which can be used inside the generator body.</p>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">Generators return an iterator object with methods like `next()`, which returns the next value in the sequence.</p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>
      
      <h3 className="text-lg font-semibold mb-2">Example 1: Basic Generator</h3>
      <CodeBlock code={`function* countUpTo(max) {\n  let count = 1;\n  while (count <= max) {\n    yield count;\n    count++;\n  }\n}\n\nconst counter = countUpTo(3);\nconsole.log(counter.next().value); // Output: 1\nconsole.log(counter.next().value); // Output: 2\nconsole.log(counter.next().value); // Output: 3`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Fibonacci Sequence</h3>
      <CodeBlock code={`function* fibonacci() {\n  let a = 0, b = 1;\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\n\nconst fib = fibonacci();\nconsole.log(fib.next().value); // Output: 0\nconsole.log(fib.next().value); // Output: 1\nconsole.log(fib.next().value); // Output: 1\nconsole.log(fib.next().value); // Output: 2`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Generators</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Create a simple number generator.</h3>
      <p className="my-3">Description: Write a generator function that generates a sequence of numbers starting from a given value.</p>
      <CodeBlock code={`function* numberGenerator(start) {\n  let count = start;\n  while (true) {\n    yield count;\n    count++;\n  }\n}\n\nconst gen = numberGenerator(5);\nconsole.log(gen.next().value); // Output: 5\nconsole.log(gen.next().value); // Output: 6`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Generate squares of numbers.</h3>
      <p className="my-3">Description: Implement a generator that yields the squares of the first N natural numbers.</p>
      <CodeBlock code={`function* squareGenerator(n) {\n  for (let i = 1; i <= n; i++) {\n    yield i * i;\n  }\n}\n\nconst squares = squareGenerator(5);\nconsole.log(squares.next().value); // Output: 1\nconsole.log(squares.next().value); // Output: 4\nconsole.log(squares.next().value); // Output: 9`} />

      <h3 className="text-lg font-semibold mb-2">Problem 3: Random number generator.</h3>
      <p className="my-3">Description: Create a generator function that yields random numbers within a specified range.</p>
      <CodeBlock code={`function* randomNumberGenerator(min, max) {\n  while (true) {\n    yield Math.floor(Math.random() * (max - min + 1)) + min;\n  }\n}\n\nconst randomGen = randomNumberGenerator(1, 10);\nconsole.log(randomGen.next().value); // Random number between 1 and 10`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a generator that yields the squares of Fibonacci numbers.</li>
        <li className="mt-2">Exercise 2: Implement a generator for prime numbers.</li>
        <li className="mt-2">Exercise 3: Write a generator that yields character codes for a given string.</li>
      </ul>
    </div>
  );
};

export default generators;
