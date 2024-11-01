import CodeBlock from "../../components/codeBlock";

const QuerySelector = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">document.querySelector()</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>document.querySelector()</code> selects the first element that matches a specified CSS selector. It works with IDs, classes, tags, and more.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`document.querySelector("CSS_selector");`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<div class="box">First Box</div>\n<div class="box">Second Box</div>\n\n{/* JavaScript */}\nconst firstBox = document.querySelector(".box");\nconsole.log(firstBox.textContent);   // Output: "First Box"`}
      />

      <h2 className="text-xl font-semibold mb-3">Multiple Selectors Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<div id="header">Header</div>\n<p class="text">This is a paragraph</p>\n\n{/* JavaScript */}\nconst header = document.querySelector("#header");\nconst paragraph = document.querySelector(".text");\n\nconsole.log(header.textContent);   // Output: "Header"\nconsole.log(paragraph.textContent);   // Output: "This is a paragraph"`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> <code>querySelector()</code> returns the first match only. For multiple matches, use <code>querySelectorAll()</code>.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>querySelector()</code> to select a button with class submit and log a message when it&apos;s clicked.</li>
        <li>Exercise 2: Change the text of the first paragraph inside a <code>div</code> with ID content using <code>querySelector()</code>.</li>
      </ul>
    </div>
  );
};

export default QuerySelector;
