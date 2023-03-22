import React, { FormEvent } from "react";

// // JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// // React
// const handleChange = (e) => {};
// <input value={text} onChange={(e) => handleChange} />;

function App() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Hello World");
  };
  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="usename">名字 : </label>
          <input type="text" id="usename" name="usename" />
        </div>
        <div className="form-control">
          <label htmlFor="title">岗位 : </label>
          <input type="text" id="title" name="title" />
        </div>

        <button type="submit">添加</button>
      </form>
    </article>
  );
}

export default App;
