import CodeBlock from "../../components/codeBlock";

const toFixedExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Number.toFixed()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>toFixed()</code> method formats a number using fixed-point notation, returning a string representation with specified decimal places.
      </p>

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const num = 5.56789;\nconsole.log(num.toFixed(2)); // Output: "5.57"`}
      />
    </div>
  );
};

export default toFixedExample;
