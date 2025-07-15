'use client';
import { listPhotos } from '@/data/listPhotos';
import { ItemPhoto } from './components/ItemPhoto';
import { useState } from 'react';

const Page = () => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const [urlSelected, setUrlSelected] = useState<string>();

  const imgSelected = (id: number) => {
    for(let i in listPhotos){
      if(listPhotos[i].id == id){
        setUrlSelected(listPhotos[i].url);
      }
    }
    setShowImage(true);
  }

  return (
    <>
      {!showImage &&
        <section className='flex flex-col w-full h-screen items-center justify-start'>
            <h1 className='text-3xl m-4'>Fotos Intergalácticas</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 h-full'>
              {listPhotos.map(item => 
                <div onClick={() => imgSelected(item.id)}>
                  <img className='w-96 object-cover' src={item.url} />
                </div>
              )}
            </div>
        </section>
      }
      {showImage &&
        <ItemPhoto imgUrl={urlSelected} closeImage={() => setShowImage(false)} />
      }
    </>
  );
}

export default Page;