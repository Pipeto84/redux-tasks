import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import {useNavigate} from 'react-router-dom'

export const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      ></textarea>
      <button>Save</button>
    </form>
  );
};
