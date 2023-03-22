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

interface User {
  username: string;
  title: string;
}

interface NTEventTarget extends EventTarget {
  name: string;
  value: string;
}

function App() {
  // const [username, setUsername] = useState<string>("");
  // const [title, setTitle] = useState<string>("");

  const [user, setUser] = useState<User>({ username: "", title: "" });

  const [people, setPeople] = useState<Person[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.username && user.title) {
      // 定义数据
      const person = { ...user, id: crypto.randomUUID() };

      // 更新数据
      setPeople((prev: Person[]) => {
        return [...prev, person];
      });

      setUser({ username: "", title: "" });
    }
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    // 动态属性赋值
    const { name, value } = e.target as NTEventTarget;
    // console.log({ [name]: value });
    setUser({ ...user, [name]: value });
  };

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="usename">名字 : </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="title">岗位 : </label>
          <input
            type="text"
            id="title"
            name="title"
            value={user.title}
            onChange={handleChange}
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
