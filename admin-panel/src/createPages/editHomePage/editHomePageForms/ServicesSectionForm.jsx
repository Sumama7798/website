import React from 'react'

const ServicesSectionForm = () => {
  return (
    <div className=''>
    <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl font-bold'>Services Section</div>
        <div className='text-sm text-gray-500'>Edit the Card for the Services Section</div>
        <form className='flex flex-col justify-center items-center bg-slate-500 rounded-md p-4'>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-sm text-black'>Background Img</div>
                <input className='bg-gray-700 rounded-md p-2 w-80' type="text" placeholder='Background Img' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-sm text-black'>Heading</div>
                <input className='bg-gray-700 rounded-md p-2 w-80' type="text" placeholder='Heading' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-sm text-black'>Discription</div>
                <input className='bg-gray-700 rounded-md p-2 w-80 h-48 items-start' type="text" placeholder='Discription' />
            </div>
            <button className='bg-blue-500 rounded-md p-2 w-80 mt-4'>Create Card</button>
            
            
        </form>

    </div>

</div>
  )
}

export default ServicesSectionForm