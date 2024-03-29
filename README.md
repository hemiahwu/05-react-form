

# 05-React-Hooks-form

## 第一章 课程代码

Git仓库地址: https://github.com/hemiahwu/05-react-form

百度网盘链接: https://pan.baidu.com/s/1_-fVk2DeFpZd5OlfFBRucg?pwd=j62y 提取码: j62y



课程答疑微信: 

web1024b

## 1. 课程样式

``````css
:root {
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  --clr-primary-5: hsl(205, 78%, 60%);
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  --max-width: 1170px;
  --fixed-width: 450px;
  --clr-orange-1: hsl(12, 83%, 98%);
  --clr-orange-2: hsl(14, 91%, 95%);
  --clr-orange-3: hsl(12, 89%, 89%);
  --clr-orange-4: hsl(13, 87%, 82%);
  --clr-orange-5: hsl(13, 88%, 68%);
  --clr-orange-6: hsl(13, 88%, 55%);
  --clr-orange-7: hsl(13, 74%, 49%);
  --clr-orange-8: hsl(13, 74%, 33%);
  --clr-orange-9: hsl(13, 73%, 25%);
  --clr-orange-10: hsl(13, 73%, 16%);
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1rem;
  }

  body {
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

.section,
.container {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}

.container {
  text-align: center;
  margin-top: 5rem;
}

.btn {
  display: inline-block;
  background: var(--clr-primary-5);
  color: var(--clr-white);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1rem;
  letter-spacing: var(--spacing);
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: var(--transition);
}

.btn:hover {
  background: var(--clr-primary-1);
  color: var(--clr-primary-5);
}

.item {
  background: var(--clr-white);
  display: flex;
  justify-content: space-between;
  max-width: var(--fixed-width);
  margin: 2rem auto;
  align-items: center;
  border-radius: var(--radius);
}

.item button,
.item a {
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  letter-spacing: var(--spacing);
  cursor: pointer;
}

.item {
  padding: 1rem 2rem;
}

.item h4 {
  margin-bottom: 0;
}

.item p {
  margin-bottom: 0;
}

.modal {
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--clr-white);
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: var(--radius);
  text-transform: capitalize;
}

.modal p {
  margin-bottom: 0;
  color: var(--clr-red-dark);
}

.form {
  background: var(--clr-white);
  max-width: var(--fixed-width);
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 1rem 2rem;
  border-radius: var(--radius);
}

.form input {
  background: var(--clr-grey-10);
  border-color: transparent;
  border-radius: var(--radius);
  padding: 0.25rem 0.5rem;
}

.form-control {
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
}

.form button {
  display: inline-block;
  background: var(--clr-black);
  color: var(--clr-white);
  border-color: transparent;
  margin-top: 1rem;
  letter-spacing: var(--spacing);
  padding: 0.15rem 0.25rem;
  text-transform: capitalize;
  border-radius: var(--radius);
  cursor: pointer;
}

.nav-links {
  max-width: var(--fixed-width);
  margin: 0 auto;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.nav-links a {
  color: var(--clr-grey-5);
}

.users {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem auto;
}

.users li {
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-radius: var(--radius);
  text-align: left;
}

.users img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.users h4 {
  margin-bottom: 0.15rem;
}

.users a {
  color: var(--clr-grey-5);
  text-transform: capitalize;
}

.products {
  margin: 4rem 0;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 576px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.product {
  background: var(--clr-white);
  border-radius: var(--radius);
}

.product img {
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);

  width: 100%;
  height: 15rem;
  object-fit: cover;
}

.product h4 {
  margin-top: 1rem;
}

.product button {
  margin-bottom: 1rem;
  background: var(--clr-primary-5);
  border-radius: var(--radius);
  border-color: transparent;
  color: var(--clr-white);
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  cursor: pointer;
}

``````

## 2. Form表单的基础用法

* JS怎么实现input

``````tsx
// JS
const input = document.getElementById('myText');
const inputValue = input.value
``````

* React怎么实现input

`````tsx
// React
const handleChange = (e) => {};
<input value={text} onChange={(e) => handleChange} />;
`````

* 布局表单

`````tsx
<article>
  <form className="form">
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
`````

* 添加事件

`````tsx
<form className="form" onSubmit={handleSubmit}>
`````

* 处理事件

``````tsx
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Hello World");
};
``````

* 事件类型

`````tsx
import { FormEvent } from "react";
`````



## 3. input绑定状态

### 1. App.tsx 定义状态

``````tsx
import React, { useState } from 'react'

const ControlledInputs = () => {
  // 1. 定义状态
  const [username, setUsername] = useState<string>("");
	const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 4. 打印查看
    console.log(username, title)
  }
  return (
    <>
      ...
            <input
              ...
              // 2. 绑定属性
              value={username}
              // 3. 更改属性
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          ...
            <input
              ...
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
         ...
    </>
  )
}

export default ControlledInputs
``````



## 4. App.tsx 添加数据和展示数据

``````js
import React, { useState } from 'react'

// 定义类型
interface Person {
  id: string;
  username: string;
  title: string;
}

const ControlledInputs = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // 1. 定义状态
  const [people, setPeople] = useState<Person[]>([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    // 2. 判断数据
    if (username && email) {
      // 3. 定义数据
      const person = { id: new Date().getTime().toString(), username, email }
      console.log(person)
      // 4. 更新数据
      setPeople((prev: Person[]) => {
        return [...prev, person];
      });
      // 5. 置为空
      setUsername('')
      setTitle('')
    } else {
      console.log('empty values')
    }
  }
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          ...
        </form>
        {/* 6. 展示数据 */}
        {people.map((person: Person) => {
          const { id, username, email } = person
          return (
            <div className="item" key={id}>
              <h4>{username}</h4>
              <p>{title}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
``````



## 3. 多个input的应用

### 1. App.tsx

* 定义整合状态

`````tsx
const [user, setUser] = useState<User>({ username: "", title: "" });
`````

* 定义User类型

`````tsx
 interface User {
  username: string;
  title: string;
}
`````

* 调整状态绑定

`````tsx
<input
  ...
  // 2. 绑定状态
  value={user.username}
  // 3. 触发事件
  onChange={handleChange}
/>
`````

* 触发handleChange事件

`````tsx
const handleChange = (e: FormEvent<HTMLInputElement>) => {
  const { name, value } = e.target as NTEventTarget;
  setUser({ ...user, [name]: value });
};
`````

* 配置类型

`````tsx
interface NTEventTarget extends EventTarget {
  name: string;
  value: string;
}
`````

* 处理submit

`````tsx
const handleSubmit = (e) => {
  e.preventDefault()
  if (user.username && user.email) {
    const person = { ...user, id: crypto.randomUUID() };
    // 更新数据
    setPeople((prev: Person[]) => {
      return [...prev, person];
    });

    setUser({ username: "", title: "" });
  }
}
`````







