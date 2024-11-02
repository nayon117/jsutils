import CodeBlock from "../../components/codeBlock";

const classListRemove = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.classList.remove()</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>element.classList.remove()</code> removes one or more classes from an element, which is useful for dynamically changing styling or functionality.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`element.classList.remove("class1", "class2");`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<div id="notification" class="show warning">Warning Message</div>\n\n{/* JavaScript */}\nconst notification = document.getElementById("notification");\nnotification.classList.remove("show", "warning");\n// Removes "show" and "warning" classes`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> <code>classList.remove()</code> will skip removing a class if it’s not present, so no error is raised.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a function that removes the active class from all list items except the clicked item.</li>
        <li>Exercise 2: Use <code>classList.remove()</code> to hide an element with ID modal when a button is clicked.</li>
      </ul>
    </div>
  );
};

export default classListRemove;
