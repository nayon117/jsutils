import CodeBlock from "../../components/codeBlock";

const ClassListAdd = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.classList.add()</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>element.classList.add()</code> adds one or more classes to an element. It’s an effective way to apply styling or functionality by adding class selectors.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`element.classList.add("class1", "class2");`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<div id="box" class="box">Box</div>\n\n{/* JavaScript */}\nconst box = document.getElementById("box");\nbox.classList.add("highlight", "rounded");\n// Adds "highlight" and "rounded" classes to the element`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> <code>classList.add()</code> only adds a class if it’s not already present, so it doesn’t duplicate classes.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>classList.add()</code> to add a selected class to a list item when clicked.</li>
        <li>Exercise 2: Write a function that adds multiple classes to a <code>div</code> with ID box.</li>
      </ul>
    </div>
  );
};

export default ClassListAdd;
