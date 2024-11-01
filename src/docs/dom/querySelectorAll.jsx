import CodeBlock from "../../components/codeBlock";

const QuerySelectorAll = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">document.querySelectorAll()</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>document.querySelectorAll()</code> selects all elements that match a specified CSS selector and returns a static NodeList. Useful for selecting multiple elements with a class, tag, or other CSS selectors.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`document.querySelectorAll("CSS_selector");`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<div class="box">Box 1</div>\n<div class="box">Box 2</div>\n<div class="box">Box 3</div>\n\n{/* JavaScript */}\nconst boxes = document.querySelectorAll(".box");\n\nboxes.forEach((box, index) => {\n  console.log(\`Box \${index + 1}: \${box.textContent}\`);\n});\n// Output: \n// "Box 1: Box 1"\n// "Box 2: Box 2"\n// "Box 3: Box 3"`}
      />

      <h2 className="text-xl font-semibold mb-3">Modifying Multiple Elements Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<div class="item">Item 1</div>\n<div class="item">Item 2</div>\n<div class="item">Item 3</div>\n\n{/* JavaScript */}\nconst items = document.querySelectorAll(".item");\n\nitems.forEach((item) => {\n  item.style.color = "red";\n});`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> <code>querySelectorAll()</code> returns a static NodeList, which doesn’t update if elements are added or removed after the selection.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write code to change the background color of all <code>.box</code> elements to blue.</li>
        <li>Exercise 2: Use <code>querySelectorAll()</code> to select all <code>li</code> items in a list and add a number prefix to each.</li>
      </ul>
    </div>
  );
};

export default QuerySelectorAll;
