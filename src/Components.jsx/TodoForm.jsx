import { React, useState } from 'react';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const [category, setCategory] = useState('');

  const todos = JSON.parse(localStorage.getItem('todosMemory')) || [];

  function handleFormSubmit(event) {
    event.preventDefault();
    const todo = { text: todoText, category: category };

    const newTodos = [...todos, todo];

    localStorage.setItem('todosMemory', JSON.stringify(newTodos));

    setTodoText('');
    event.target.reset();

    // setCategory('');
  }
  return (
    <section className='w-full py-8 bg-gradient-to-r from-cyan-600  to-cyan-400'>
      <div className='max-w-screen-sm mx-auto'>
        <h3>CREATE A TODO</h3>
        <form className='w-full' onSubmit={handleFormSubmit}>
          <h5>What's on your to-do list?</h5>
          <input
            type='text'
            name='todoText'
            placeholder='e.g. Learn Data Structures'
            className='w-full text-xl my-4 py-4 px-3'
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <h5 className='pb-2'>Pick a category</h5>
          <div className='w-full flex gap-4 pb-5'>
            <label className='w-full flex bg-white flex-col p-10 justify-center items-center'>
              <input
                type='radio'
                name='category'
                value='personal'
                id='per-cat'
                onChange={() => setCategory('personal')}
              />
              <span>Personal</span>
            </label>
            <label className='w-full flex bg-white flex-col p-10 justify-center items-center'>
              <input
                type='radio'
                name='category'
                value='business'
                id='bus-cat'
                onChange={() => setCategory('business')}
              />
              <span>Business</span>
            </label>
          </div>
          <input
            type='submit'
            value='Add Todo'
            className='w-full bg-blue-800 text-white py-5 cursor-pointer'
          />
        </form>
      </div>
    </section>
  );
};

export default TodoForm;
