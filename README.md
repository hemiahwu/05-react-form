

# React-Hooks

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
  email: string;
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
      setEmail('')
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
              <p>{email}</p>
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

* 拷贝1-controlled-inputs代码

`````js
import React, { useState } from 'react'

// 定义类型
interface User {
  username: string;
  email: string;
}

const ControlledInputs = () => {
  
  const [people, setPeople] = useState([])
  // 1. 定义状态  删除上方的username和email
	const [user, setUser] = useState<User>({ username: "", email: "" });

  // 5. 更新数据
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.username && user.email) {
      const newUser = { ...user, id: new Date().getTime().toString() }
      setPeople([...people, newUser])
      setUser({ username: '', email: '' })
    }
  }
	// 4. 定义事件
  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="usename">名字 : </label>
            <input
              ...
							// 2. 绑定状态
              value={user.username}
							// 3. 触发事件
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">邮箱 : </label>
            <input
             ...
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">添加</button>
        </form>
        ...
      </article>
    </>
  )
}

export default ControlledInputs
`````







##             1.     **登录**

**请求地址：**/users/checkLogin

**请求方式：**POST

**请求参数说明：**

| 参数     | 类型   | 是否必填 | 参数说明 |
| -------- | ------ | -------- | -------- |
| account  | String | 是       | 账号     |
| password | String | 是       | 密码     |



**响应参数说明：**

| 参数  | 说明                                           |
| ----- | ---------------------------------------------- |
| code  | 状态码：0代表成功，1代表失败 5001参数错误      |
| msg   | 提示信息                                       |
| token | 接口鉴权的令牌token                            |
| role  | 当前用户角色（super超级管理员 normal普通用户） |



**响应示例：**

{  "code": 0,  "msg": "欢迎你，登录成功",  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzAsImN0aW1lIjoiMjAyMC0wNS0yMFQwNzoyOTo1NC4wMDBaIiwiYWNjb3VudCI6IuWwj-iyguidiSIsInBhc3N3b3JkIjoiMTIzNDU2IiwidXNlckdyb3VwIjoi6LaF57qn566h55CG5ZGYIiwiaW1nVXJsIjoiaHR0cDovLzEyNy4wLjAuMTo1MDAwL2ltZ3MvMTY0MDc2OTkxNzcxOS5wbmciLCJpYXQiOjE2NDA3NzAzOTQsImV4cCI6MTY0MTM3NTE5NH0.R7mRV_Abeks7FOwC3izzh_KZHc2EHbfRexgpNXf74Ic",  "role": "super"}



##             2.     **添加账号**

**请求地址：**/users/add

**请求方式：**POST

**请求参数说明：**

| 参数      | 类型   | 是否必填 | 参数说明 |
| --------- | ------ | -------- | -------- |
| account   | String | 是       | 账号     |
| password  | String | 是       | 密码     |
| userGroup | String | 是       | 用户组   |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "添加账号成功!"}



##             3.     **获取账号列表**

**请求地址：**/users/list

**请求方式：**GET

**请求参数说明：**

| 参数        | 类型 | 是否必填 | 参数说明 |
| ----------- | ---- | -------- | -------- |
| currentPage | int  | 是       | 当前页码 |
| pageSize    | int  | 是       | 每页条数 |



**响应参数说明：**

| 参数      | 说明                       |
| --------- | -------------------------- |
| total     | 数据总条数                 |
| data      | 当前页码对应的数据（数组） |
| id        | 数据唯一id                 |
| ctime     | 账号创建的时间             |
| account   | 账号                       |
| userGroup | 用户组                     |
| imgUrl    | 账号头像地址               |



**响应示例：**

{  "total": 2,  "data": [    {      "id": 81,      "ctime": "2025-12-29T09:50:49.000Z",      "account": "吴老师",      "userGroup": "普通管理员",      "imgUrl": "http://127.0.0.1:5000/imgs/default.png"    },    {      "id": 80,      "ctime": "2025-12-29T09:50:01.000Z",      "account": "孙悟空",      "userGroup": "超级管理员",      "imgUrl": "http://127.0.0.1:5000/imgs/default.png"    }  ]}



##             4.     **删除账号**

**请求地址：**/users/del

**请求方式：**GET

**请求参数说明：**

| 参数 | 类型 | 是否必填 | 参数说明       |
| ---- | ---- | -------- | -------------- |
| id   | int  | 是       | 要删除账号的id |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "删除成功!"}



##             5.     **批量删除账号**

**请求地址：**/users/batchdel

**请求方式：**POST

**请求参数说明：**

| 参数 | 类型  | 是否必填 | 参数说明             |
| ---- | ----- | -------- | -------------------- |
| ids  | Array | 是       | 批量删除数据的id数组 |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "批量删除成功!"}



##             6.     **修改账号**

**请求地址：**/users/edit

**请求方式：**POST

**请求参数说明：**

| 参数      | 类型   | 是否必填 | 参数说明       |
| --------- | ------ | -------- | -------------- |
| id        | int    | 是       | 要修改账号的id |
| account   | String | 是       | 账号           |
| userGroup | String | 是       | 用户组         |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "修改账号成功!"}



##             7.     **检查旧密码是否正确**

**请求地址：**/users/checkoldpwd

**请求方式：**GET

**请求参数说明：**

| 参数   | 类型   | 是否必填 | 参数说明 |
| ------ | ------ | -------- | -------- |
| oldPwd | String | 是       | 旧密码   |



**响应参数说明：**

| 参数 | 说明                                         |
| ---- | -------------------------------------------- |
| code | 状态码 200代表成功，201代表失败 5001参数错误 |
| msg  | 提示信息                                     |



**响应示例：**

{  "code": "00",  "msg": "旧密码正确"}



##             8.     **修改密码**

**请求地址：**/users/editpwd

**请求方式：**post

**请求参数说明：**

| 参数   | 类型   | 是否必填 | 参数说明 |
| ------ | ------ | -------- | -------- |
| newPwd | String | 是       | 新密码   |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "修改密码成功，请重新登录!"}



##             9.     **获取账号（个人中心）信息**

**请求地址：**/users/info

**请求方式：**get

**请求参数说明：**

| 参数 | 类型 | 是否必填 | 参数说明 |
| ---- | ---- | -------- | -------- |
| 无   | 无   | 否       | 无参数   |



**响应参数说明：**

| 参数      | 说明         |
| --------- | ------------ |
| Id        | 账号id       |
| ctime     | 账号创建时间 |
| account   | 账号         |
| userGroup | 用户组       |
| imgUrl    | 头像地址     |



**响应示例：**

{  "id": 80,  "ctime": "2025-12-29T09:50:01.000Z",  "account": "孙悟空",  "userGroup": "超级管理员",  "imgUrl": "http://127.0.0.1:5000/imgs/default.png"}



##             10.     **头像上传接口**

**请求地址：**/users/avatar_upload

**请求方式：**post

**请求参数说明：**

| 参数 | 类型   | 是否必填 | 参数说明     |
| ---- | ------ | -------- | ------------ |
| file | binary | 是       | 二进制数据流 |



**响应参数说明：**

| 参数   | 说明                                      |
| ------ | ----------------------------------------- |
| code   | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg    | 提示信息                                  |
| imgUrl | 上传图片名 如: xxx.jpg                    |



**响应示例：**

{  "code": 0,  "msg": "上传成功!",  "imgUrl": "http://127.0.0.1:5000/imgs/1640778223608.png"}



##             11.     **修改用户头像**

**请求地址：**/users/avataredit

**请求方式：**get

**请求参数说明：**

| 参数   | 类型   | 是否必填 | 参数说明  |
| ------ | ------ | -------- | --------- |
| imgUrl | String | 是       | 新头像url |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "修改头像成功!"}





# **☆商品管理模块：**

##             12.     **添加分类**

**请求地址：**/goods/addcate

**请求方式：**POST

**请求参数说明：**

| 参数     | 类型    | 是否必填 | 参数说明            |
| -------- | ------- | -------- | ------------------- |
| cateName | String  | 是       | 分类名称            |
| state    | Boolean | 是       | 是否启用true或false |
|          |         |          |                     |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "添加商品分类成功"}



##             13.     **获取分类列表**

**请求地址：**/goods/catelist

**请求方式：GET**

**请求参数说明：**

| 参数        | 类型 | 是否必填 | 参数说明 |
| ----------- | ---- | -------- | -------- |
| currentPage | Int  | 是       | 当前页   |
| pageSize    | Int  | 是       | 每页条数 |
|             |      |          |          |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "total": 11,  "data": [    {      "id": 47,      "cateName": "热销榜",      "state": **false**    },    {      "id": 48,      "cateName": "收藏门店超值专享",      "state": **false**    },    {      "id": 49,      "cateName": "新品专享",      "state": **true**    },    {      "id": 50,      "cateName": "鲜炒盖饭",      "state": **false**    },    {      "id": 51,      "cateName": "炒饭系列",      "state": **true**    },    {      "id": 52,      "cateName": "千万销量",      "state": **true**    },    {      "id": 53,      "cateName": "营养适配",      "state": **true**    },    {      "id": 54,      "cateName": "满减专区",      "state": **true**    },    {      "id": 55,      "cateName": "撸烤串",      "state": **true**    },    {      "id": 56,      "cateName": "套餐自选区",      "state": **true**    }  ]}





##             14.     **删除分类**

**请求地址：**/goods/delcate

**请求方式：**GET

**请求参数说明：**

| 参数 | 类型 | 是否必填 | 参数说明 |
| ---- | ---- | -------- | -------- |
| id   | Int  | 是       | 分类id   |
|      |      |          |          |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "删除商品分类成功"}



##             15.     **修改分类**

**请求地址：**/goods/editcate

**请求方式：**POST

**请求参数说明：**

| 参数     | 类型    | 是否必填 | 参数说明            |
| -------- | ------- | -------- | ------------------- |
| id       | Int     | 是       | 分类id              |
| cateName | String  | 是       | 分类名称            |
| state    | Boolean | 是       | 分类状态true或false |
|          |         |          |                     |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

| {  "code": 0,  "msg": "修改商品分类成功"} |
| ----------------------------------------- |
|                                           |



##             16.     **查询所有启用的分类名称**

**请求地址：**/goods/categories

**请求方式：**get

**请求参数说明：**

| 参数 | 类型 | 是否必填 | 参数说明 |
| ---- | ---- | -------- | -------- |
| 无   |      |          |          |



**响应示例：**

| [  "test",  "小吃搭饮料",  "套餐自选区",  "撸烤串",  "满减专区",  "营养适配",  "千万销量",  "炒饭系列",  "鲜炒盖饭",  "收藏门店超值专享",  "热销榜88"] |
| ------------------------------------------------------------ |
|                                                              |



##             17.     **商品图片上传接口**

**请求地址：**/goods/goods_img_upload

**请求方式：**post

**请求参数说明：**

| 参数 | 类型   | 是否必填 | 参数说明     |
| ---- | ------ | -------- | ------------ |
| file | binary | 是       | 二进制数据流 |



**响应参数说明：**

| 参数   | 说明                                      |
| ------ | ----------------------------------------- |
| code   | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg    | 提示信息                                  |
| imgUrl | 上传图片名 如: xxx.jpg                    |



**响应示例：**

{  "code": 0,  "msg": "上传成功!",  "imgUrl": "http://127.0.0.1:5000/imgs/1640781337124.png"}



##             18.     **添加商品**

**请求地址：**/goods/add

**请求方式：**POST

**请求参数说明：**

| 参数      | 类型   | 是否必填 | 参数说明     |
| --------- | ------ | -------- | ------------ |
| name      | String | 是       | 商品名称     |
| category  | String | 是       | 商品分类     |
| price     | String | 是       | 商品价格     |
| imgUrl    | String | 是       | 商品图片名字 |
| goodsDesc | String | 是       | 商品描述     |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "添加商品成功"}







##             19.     **获取商品列表**

**请求地址：**/goods/list

**请求方式：**GET

**请求参数说明：**

| 参数        | 类型   | 是否必填 | 参数说明 |
| ----------- | ------ | -------- | -------- |
| currentPage | int    | 是       | 当前页码 |
| pageSize    | int    | 是       | 每页条数 |
| name        | Stirng | 否       | 商品名称 |
| category    | String | 否       | 商品分类 |



**响应参数说明：**

| 参数      | 说明                   |
| --------- | ---------------------- |
| total     | 数据总条数             |
| data      | 当前页码对应的数据数组 |
| id        | 数据唯一id             |
| name      | 商品名称               |
| category  | 商品分类               |
| price     | 商品价格               |
| imgUrl    | 商品图片地址           |
| ctime     | 商品创建时间           |
| rating    | 商品评价               |
| sellCount | 商品销量               |
| goodsDesc | 商品描述               |



**响应示例：**

{  "total": 49,  "data": [    {      "id": 104,      "ctime": "2025-05-25T12:05:11.000Z",      "name": "新版卤肉盖饭+原味蒸蛋（赠烤肠一根）",      "category": "营养适配",      "price": 22.88,      "imgUrl": "http://127.0.0.1:5000/imgs/1590408297083.webp",      "goodsDesc": "秘制卤肉+香喷喷米饭+搭配下饭菜+原味蒸蛋+例汤+赠送烤肠一根\n主要原料：香菇,猪肉",      "rating": 100,      "sellCount": 160    }  ]}



##             20.     **删除商品**

**请求地址：**/goods/del

**请求方式：**GET

**请求参数说明：**

| 参数 | 类型 | 是否必填 | 参数说明       |
| ---- | ---- | -------- | -------------- |
| id   | int  | 是       | 要删除商品的id |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "删除成功!"}





##             21.     **修改商品**

**请求地址：**/goods/edit

**请求方式：**POST

**请求参数说明：**

| 参数      | 类型   | 是否必填 | 参数说明     |
| --------- | ------ | -------- | ------------ |
| name      | String | 是       | 商品名称     |
| category  | String | 是       | 商品分类     |
| price     | String | 是       | 商品价格     |
| imgUrl    | String | 是       | 商品图片地址 |
| goodsDesc | String | 是       | 商品描述     |
| id        | int    | 是       | 商品ID       |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "修改商品成功!"}



# **☆订单管理模块：**

##             22.     **获取订单列表**

**请求地址：**/order/list

**请求方式：**get

**请求参数说明：**

| 参数        | 类型          | 是否必填 | 参数说明                                                     |
| ----------- | ------------- | -------- | ------------------------------------------------------------ |
| currentPage | int           | 是       | 当前页码                                                     |
| pageSize    | int           | 是       | 每页条数                                                     |
| orderNo     | string        | 否       | 订单号                                                       |
| consignee   | string        | 否       | 收货人                                                       |
| phone       | string        | 否       | 手机号                                                       |
| orderState  | string        | 否       | 订单状态                                                     |
| date        | Array<String> | 否       | 字符串格式数组：["2025-10-05 00:00:00","2025-10-10 00:00:00"] |



**响应参数说明：**

| 参数           | 说明                   |
| -------------- | ---------------------- |
| total          | 数据总条数             |
| data           | 当前页码对应的数据数组 |
| id             | 订单id                 |
| orderNo        | 订单号                 |
| orderTime      | 下单时间               |
| phone          | 联系电话               |
| consignee      | 收货人                 |
| deliverAddress | 送货地址               |
| deliveryTime   | 送达时间               |
| remarks        | 备注                   |
| orderAmount    | 订单金额               |
| orderState     | 订单状态               |

**响应示例：**

{  "total": 2,  "data": [    {      "id": 11,      "orderNo": "14012",      "orderTime": "2025-04-06T10:24:50.000Z",      "phone": "13614563210",      "consignee": "李四",      "deliverAddress": "北京永旺",      "deliveryTime": "0000-00-00 00:00:00",      "remarks": "微辣",      "orderAmount": 39.88,      "orderState": "派送中"    },    {      "id": 10,      "orderNo": "13015",      "orderTime": "2025-04-06T10:24:47.000Z",      "phone": "13614563210",      "consignee": "张三",      "deliverAddress": "北京永旺",      "deliveryTime": "0000-00-00 00:00:00",      "remarks": "不要辣",      "orderAmount": 49.88,      "orderState": "已完成"    }  ]}



##             23.     **获取订单详情**

**请求地址：**/order/detail

**请求方式：**GET

**请求参数说明：**

| 参数 | 类型 | 是否必填 | 参数说明 |
| ---- | ---- | -------- | -------- |
| id   | int  | 是       | 订单id   |



**响应参数说明：**

| 参数           | 说明         |
| -------------- | ------------ |
| data           | 订单数据对象 |
| id             | 订单id       |
| orderNo        | 订单号       |
| orderTime      | 下单时间     |
| phone          | 联系电话     |
| consignee      | 收货人       |
| deliverAddress | 送货地址     |
| deliveryTime   | 送达时间     |
| remarks        | 备注         |
| orderAmount    | 订单金额     |
| orderState     | 订单状态     |



**响应示例：**

{  "data": {    "id": 20,    "orderNo": "16012",    "orderTime": "2025-04-06T09:07:36.000Z",    "phone": "18181358998",    "consignee": "孙悟空",    "deliverAddress": "北京永旺",    "deliveryTime": "0000-00-00 00:00:00",    "remarks": "不要辣",    "orderAmount": 60,    "orderState": "已完成"  }}





##             24.     **修改订单**

**请求地址：**/order/edit

**请求方式：**POST

**请求参数说明：**

| 参数           | 类型   | 是否必填 | 参数说明       |
| -------------- | ------ | -------- | -------------- |
| id             | int    | 是       | 要修改账号的id |
| orderNo        | String | 是       | 订单号         |
| orderTime      | String | 是       | 下单时间       |
| phone          | String | 是       | 电话           |
| consignee      | String | 是       | 收货人         |
| deliverAddress | String | 是       | 送货地址       |
| deliveryTime   | String | 是       | 送达时间       |
| remarks        | String | 是       | 备注           |
| orderAmount    | String | 是       | 订单金额       |
| orderState     | String | 是       | 订单状态       |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "修改订单成功!"}



# **☆店铺管理模块：**

##             25.     **获取店铺详情**

**请求地址：**/shop/info

**请求方式：**GET

**请求参数说明：**

| 参数 | 类型 | 是否必填 | 参数说明 |
| ---- | ---- | -------- | -------- |
| 无   | 无   | 无       | 无       |



**响应参数说明：**

| 参数          | 说明             |
| ------------- | ---------------- |
| id            | id               |
| name          | 店铺名称         |
| bulletin      | 公告             |
| avatar        | 店铺头像         |
| deliveryPrice | 配送费           |
| deliveryTime  | 送达时间         |
| description   | 描述             |
| score         | 评分             |
| sellCount     | 销量             |
| supports      | 活动 数组 []     |
| pics          | 店铺图片 数组 [] |
| date          | 营业时间 数组 [] |
| minPrice      | 起送价格         |



{  "data": {    "id": 1,    "name": "粥品香坊",    "bulletin": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",    "avatar": "1589416716107.jpg",    "deliveryPrice": 4,    "deliveryTime": 38,    "description": "蜂鸟专送",    "score": 4.5,    "sellCount": 100,    "supports": [      "单人精彩套餐",      "VC无限橙果汁全场8折",      "在线支付满28减5"    ],    "pics": [      "1589589155004.jpg",      "1589589160189.jpg"    ],    "date": [      "1970-01-01 08:00:00",      "1970-01-01 22:30:00"    ],    "minPrice": 20  }}





##             26.     **店铺图片上传接口**

**请求地址：**/shop/upload

**请求方式：**post

**请求参数说明：**

| 参数 | 类型   | 是否必填 | 参数说明     |
| ---- | ------ | -------- | ------------ |
| file | binary | 是       | 二进制数据流 |



**响应参数说明：**

| 参数   | 说明                                      |
| ------ | ----------------------------------------- |
| code   | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg    | 提示信息                                  |
| imgUrl | 上传图片名 如:  xxx.jpg                   |



**响应示例：**

{  "code": 0,"msg": "上传成功!","imgUrl": "14532623632.jpg"}



##             27.     **店铺内容修改**

**请求地址：**/shop/edit

**请求方式：**post

**请求参数说明：**

| 参数          | 类型 | 是否必填 | 参数说明     |
| ------------- | ---- | -------- | ------------ |
| id            |      | 是       | 店铺id       |
| name          |      | 是       | 店铺名称     |
| bulletin      |      | 是       | 店铺公告     |
| avatar        |      | 是       | 店铺头像名字 |
| deliveryPrice |      | 是       | 起送价格     |
| deliveryTime  |      | 是       | 送达时间     |
| description   |      | 是       | 店铺描述     |
| score         |      | 是       | 店铺好评率   |
| sellCount     |      | 是       | 店铺销量     |
| supports      |      | 是       | 活动支持     |
| date          |      | 是       | 营业时间     |
| pics          |      | 是       | 店铺图片     |



**响应参数说明：**

| 参数 | 说明                                      |
| ---- | ----------------------------------------- |
| code | 状态码，0代表成功，1代表失败 5001参数错误 |
| msg  | 提示信息                                  |



**响应示例：**

{  "code": 0,  "msg": "修改店铺信息成功"}





# **☆报表统计：**

##             28.     **首页报表接口**

**请求地址：**/order/totaldata

**请求方式：**GET

**请求参数说明：**

| 参数 | 类型 | 是否必填 | 参数说明 |
| ---- | ---- | -------- | -------- |
| 无   | 无   | 无       | 无       |



**响应参数说明：**

| 参数        | 说明       |
| ----------- | ---------- |
| xData       | x轴数据    |
| orderData   | 订单数据   |
| amountData  | 金额数据   |
| totalOrder  | 总订单     |
| totalAmount | 总销售额   |
| todayOrder  | 今日订单   |
| totayAmount | 今日销售额 |



**响应示例：**

{    "totalOrder": 5486,    "totalAmount": 202466,    "todayOrder": 189,    "totayAmount": 2189,    "xData": [        "2025/11/17",        "2025/11/18",        "2025/11/19",        "2025/11/20",        "2025/11/21",        "2025/11/22",        "2025/11/23"    ],    "orderData": [        120,        132,        101,        134,        90,        230,        210    ],    "amountData": [        220,        282,        191,        234,        290,        330,        310    ]}



##             29.     **订单报表接口**

**请求地址：**/order/ordertotal

**请求方式：**GET

**请求参数说明：**

| 参数 | 类型   | 是否必填 | 参数说明                                                     |
| ---- | ------ | -------- | ------------------------------------------------------------ |
| date | string | 是       | 字符串格式数组，如["2019-10-01 00:00:00", "2019-10-10 00:00:00"] |



**响应参数说明：**

| 参数        | 说明         |
| ----------- | ------------ |
| data        | 所有订单数据 |
| orderTime   | 下单时间     |
| orderAmount | 订单金额     |



**响应示例：**

{    "data": [        {            "orderTime": "2025-10-01T02:46:07.000Z",            "orderAmount": 59.05        },        {            "orderTime": "2025-10-02T02:29:28.000Z",            "orderAmount": 86.55        },        {            "orderTime": "2025-10-04T14:46:19.000Z",            "orderAmount": 38.88        },        {            "orderTime": "2025-10-05T01:03:44.000Z",            "orderAmount": 25.99        },        {            "orderTime": "2025-10-06T01:03:52.000Z",            "orderAmount": 49        },        {            "orderTime": "2025-10-07T01:03:56.000Z",            "orderAmount": 25.99        },        {            "orderTime": "2025-10-08T01:04:00.000Z",            "orderAmount": 49        },        {            "orderTime": "2025-10-09T01:04:04.000Z",            "orderAmount": 25.99        }    ]}
