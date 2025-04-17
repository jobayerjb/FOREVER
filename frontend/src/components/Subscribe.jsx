import React from 'react'

const Subscribe = () => {

  const onSubmitHandler =(event) =>{
    event.preventDefault();
  }
  return (
    <div className='py-10'>
        <div className=" text-center">
            <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
            <p className="text-gray-400 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your email" required=""/>
            <button onSubmit={onSubmitHandler} type="submit" className="bg-black rounded-sm text-white text-xs px-10 py-4 place-items-end">SUBSCRIBE</button>
            </form>
            </div>
    </div>
  )
}

export default Subscribe