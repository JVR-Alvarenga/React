"use client";

import { listReducer } from '@/reducers/listReducer';
import { useReducer, useState } from 'react';

const Page = () => {
    const [list, dispatch] = useReducer(listReducer, []);
    const [item, setItem] = useState<string>();

    const addItem = () => {
      if (item.trim() === '') return false; 

      dispatch({
        type: 'add',
        payload: {
          text: item.trim()
        }
      })
      setItem('');
    }

    const editItem = (id: number) => {
      const item = list.find(i => i.id === id);
      if (!item) return false;

      const newText = window.prompt('Editar Tarefa', item.text);
      if (!newText || newText.trim() === '') return false;

      dispatch({
        type: 'editText',
        payload: {
          id: id,
          newText: newText
        }
      });
    }

    const checkedItem = (id: number) => {
      dispatch({
        type: 'toggleDone',
        payload: {
          id: id
        }
      });
    }

    const removeItem = (id: number) => {
      if (!window.confirm('Tem Certeza que quer apagar essa tarefa ?')) return false;
      dispatch({
        type: 'remove',
        payload: {
          id: id
        }
      });
    }

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center pt-10">
      <p className='text-5xl font-bold my-20'>Suas Tarefas</p>
      
      <input onChange={(e) => setItem(e.target.value)} value={item} type="text" className='bg-white w-76 p-3 text-xl rounded-md text-black' />
      <button onClick={addItem} className='bg-green-400 p-3 m-4 rounded-md text-3xl'>Clique para Adicionar</button>

      { list.map(i => 
        <div className='flex text-2xl w-4/5 m-4 items-center justify-center' key={i.id}>
          <input onClick={() => checkedItem(i.id)} type="checkbox" className='w-5 cursor-pointer' checked={i.done} />
          <p onClick={() => editItem(i.id)} className='mx-3'>{i.text}</p>
          <button onClick={() => editItem(i.id)} className='cursor-pointer bg-blue-500 rounded-md p-2 mr-2 hover:opacity-70'>[ editar ]</button>
          <button onClick={() => removeItem(i.id)} className='cursor-pointer bg-red-500 rounded-md p-2 hover:opacity-70'>[ apagar ]</button>
        </div>
      )}
    </section>
  );
}

export default Page;