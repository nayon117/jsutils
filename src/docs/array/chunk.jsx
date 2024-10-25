
import CodeBlock from "../../components/codeBlock";

const chunk = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">chunk</h1>
      <p className="text-lg text-gray-600 mb-6">
        Splits an array into groups of the specified size.
      </p>
      <h2 className="text-xl font-semibold mb-3">Arguments</h2>
      <p>array (Array): The array to process.</p>
      <p>size (Number): Length of each chunk.</p>
      <h2 className="text-xl font-semibold mb-3">Returns</h2>
      <p>Array of arrays.</p>
      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`JSUtils.chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]`} />
      <h2 className="text-xl font-semibold mb-3">Additional Notes</h2>
      <p>Useful for pagination or grouping data in batches.</p>
    </div>
  );
};

export default chunk;
