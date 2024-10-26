import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const dispatch = useDispatch();

  function handleAdd(e) {
    e.preventDefault();

    const user = {
      id: Date.now(),
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
    };

    setUsers((prevUsers) => [...prevUsers, user]);
    dispatch({ type: "ADD", payload: user });

    nameRef.current.value = "";
    ageRef.current.value = "";
    emailRef.current.value = "";
    genderRef.current.value = "male";
  }

  return (
    <div className="mx-auto  container flex flex-col items-center justify-center p-4 ">
      <h1 className="text-4xl text-blue-500 mb-6">{t("info")}</h1>
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            {t("name")}
          </label>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter name"
            className="shadow   bg-white border rounded w-full py-2 px-3 text-black text-xl leading-tight focus:outline-none focus:shadow-outline "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            {t("age")}
          </label>
          <input
            type="number"
            ref={ageRef}
            placeholder="Enter age"
            className="shadow   border   bg-white rounded w-full py-2 px-3 text-black text-xl leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter email"
            className="shadow border  bg-white rounded w-full py-2 px-3 text-black text-xl leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            {t("gender")}
          </label>
          <select
            ref={genderRef}
            className="cursor-pointer shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black text-xl leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="male">{t("option")}</option>
            <option value="female">{t("option1")}</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>

      <Cart />
    </div>
  );
}

export default Home;
