import React from "react";

function Todos({ todos, addTodo }) {
  // console.log("Todos", todos);
  console.log('child render')
  return (
    <>
      <div>
        {todos.map((todo, id) => {
          return <p key={id}>{todo}</p>;
        })}
      </div>
      <div>
        <button className="btn btn-success" onClick={addTodo}>
          Add Todo
        </button>
      </div>
    </>
  );
}

export default Todos;
