"use client";

import { listReducer } from '@/reducers/listReducer';
import { listType } from '@/types/listType';
import { utimes } from 'fs';
import { useReducer, useState } from 'react';

const Page = () => {
    const [list, dispatch] = useReducer(listReducer, []);
    const [item, setItem] = useState<string>();

    const addItem = () => {
      if (item !== '') {
        dispatch({
          type: 'add',
          payload: {
            text: item
          }
        })
        setItem('');
      } 
    }

    const editItem = (id: number, newText: string) => {
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
      alert('Tem Certeza que quer apagar essa tarefa ?');
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
        <div className='flex text-2xl m-4' key={i.id}>
          <input onClick={() => checkedItem(i.id)} type="checkbox" checked={i.done} />
          <input onChange={(e) => editItem(i.id, e.target.value) } className='mx-2 bg-white w-76 p-2 text-xl rounded-md text-black' value={i.text} /> 
          <button onClick={() => removeItem(i.id)} className='cursor-pointer '>[ apagar ]</button>
        </div>
      )}
    </section>
  );
}

export default Page;