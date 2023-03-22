import React, { FormEvent, useState } from "react";

// // JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// // React
// const handleChange = (e) => {};
// <input value={text} onChange={(e) => handleChange} />;

interface Person {
  id: string;
  username: string;
  title: string;
}

function App() {
  const [username, setUsername] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [people, setPeople] = useState<Person[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && title) {
      // 定义数据
      const person = { id: crypto.randomUUID(), username, title };

      // 更新数据
      setPeople((prev: Person[]) => {
        return [...prev, person];
      });

      setUsername("");
      setTitle("");
    }
  };
  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="usename">名字 : </label>
          <input
            type="text"
            id="usename"
            name="usename"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="title">岗位 : </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button type="submit">添加</button>
      </form>

      {people.map((person: Person) => {
        const { id, username, title } = person;
        return (
          <div className="item" key={id}>
            <h4>{username}</h4>
            <p>{title}</p>
          </div>
        );
      })}
    </article>
  );
}

export default App;
