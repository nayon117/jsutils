import CodeBlock from "../../components/codeBlock";

const ceilExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.ceil()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.ceil()</code> method returns the smallest integer greater than or equal to a given number.
      </p>

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`console.log(Math.ceil(4.1)); // Output: 5\nconsole.log(Math.ceil(-4.7)); // Output: -4`}
      />
    </div>
  );
};

export default ceilExample;
