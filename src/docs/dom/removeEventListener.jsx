import CodeBlock from "../../components/codeBlock";

const RemoveEventListener = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.removeEventListener()</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>element.removeEventListener()</code> removes an event listener that was added with <code>addEventListener</code>. This method requires the same function reference as the one used in <code>addEventListener</code>.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`element.removeEventListener("event", handlerFunction, useCapture);`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<button id="myButton">Click me</button>\n\n{/* JavaScript */}\nfunction handleClick() {\n  alert("Button clicked!");\n}\n\nconst button = document.getElementById("myButton");\nbutton.addEventListener("click", handleClick);\n\n// Remove the event listener\button.removeEventListener("click", handleClick);`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> You must provide the exact same function when adding and removing an event listener. Anonymous functions cannot be removed using <code>removeEventListener</code>.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Add an event listener to log Mouse entered in the console, then remove it after 3 seconds.</li>
        <li>Exercise 2: Write a function that toggles a click event listener on a button with each click.</li>
      </ul>
    </div>
  );
};

export default RemoveEventListener;
