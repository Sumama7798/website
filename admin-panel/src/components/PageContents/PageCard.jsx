import React from 'react'
import { useState } from 'react'
import EditWindow from './EditWindow';


const PageCard = ({card}) => {

        const [open,setOpen] = useState(false);

    



  return (
    <div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg'>
    <div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
        <img className='object-cover w-full' src={card.image} alt='product image' />
        <div className='absolute inset-0 bg-black bg-opacity-20' />
    </div>

    <div className='mt-4 px-5 pb-5'>

        <h5 className='text-xl font-semibold tracking-tight text-white'>{card.heading}</h5>

        <div className='mt-2 mb-5 flex items-center justify-between'>
            <p>
                <span className='text-base font-bold text-emerald-400'>{card.description}</span>
            </p>
        </div>

        <div className='mt-2 mb-5 flex items-center justify-between'>
            <p>
                <span className='text-base font-bold text-emerald-400'>{card.page}</span>
            </p>
        </div>

        <div className='mt-2 mb-5 flex items-center justify-between'>
            <p>
                <span className='ttext-base font-bold text-emerald-400'>{card.section}</span>
            </p>
        </div>
        
        <button
            className='flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium
             text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
            onClick={()=>setOpen(true)}

        >
            Edit
        </button>

        <EditWindow open={open} onClose={() => setOpen(false)}/>
        </div>
</div>
  )
}

export default PageCard