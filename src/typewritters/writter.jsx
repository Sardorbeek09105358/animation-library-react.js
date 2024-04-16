import React from 'react'
import Typewriter from "typewriter-effect"
const Writter = () => {
  return (
    <div className='container d-flex justify-content-center'>
        <h1 className='text-capitalize text-md-start mb-4'>
            <Typewriter
            options = {{
                autoStart: true,
                loop: true,
                strings: ["i am a frontend developer"]
            }}   
            />
        </h1>
    </div>
  )
}

export default Writter
