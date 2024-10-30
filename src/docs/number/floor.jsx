import CodeBlock from "../../components/codeBlock";

const floorExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.floor()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.floor()</code> method returns the largest integer less than or equal to a given number.
      </p>

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`console.log(Math.floor(4.7)); // Output: 4\nconsole.log(Math.floor(-4.7)); // Output: -5`}
      />
    </div>
  );
};

export default floorExample;
