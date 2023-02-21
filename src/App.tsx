import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./models/models";


// let name: string;
// let name: unknown;
// let age: number;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string]; //tuple

// type Person = {
//   name: string;
//   age?: number; //question mark means age is optional you can choose to add or not add it
// }

// let person: Person = {
//   name: "Smith"
// }

// let lotsOfPeople:  Person[];
// let printName: Function;
// function printName(name: string) {
//   console.log(name)
// }

// interface Person  {
//   name: string;
//   age?: number; 
// } using an interface instead of type keyword


// let printName: (name: string) => void; //define a function that takes in a parameter name and returns nothing (void), it could as well return a number, string etc



const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
