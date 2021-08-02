import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

// ※Vanilla Javascriptで書いた場合のコード
// const para = document.createElement("p");
// para.textContent = "let's go started";
// document.getElementById("root").append(para);
