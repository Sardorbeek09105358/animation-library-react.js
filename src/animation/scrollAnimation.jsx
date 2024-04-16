import React, { useEffect } from 'react'
import AOS from 'aos'
import Typewriter from "typewriter-effect"
import "aos/dist/aos.css"
import "../animation/animation.css"
import Writter from '../typewritters/writter'
const ScrollAnimation = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="top">
        <Writter />

        <h1>Fade</h1>
        <div className="animation" data-aos="fade-up">
          <h1 className='text-center'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["welcome to react AOS animation"]
              }}
            />
          </h1>
        </div>
        <div className="animation" data-aos="fade-down">
      <h1>
      <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptas laboriosam velit unde minima deleniti. Error porro nulla."]
              }}
            />
      </h1>
        </div>
        <div className="animation" data-aos="fade-right">
        <h1>
      <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: [" consectetur adipisicing elit. Dolor voluptas laboriosam velit unde minima deleniti. Error porro nulla."]
              }}
            />
      </h1>
        </div>
        <div className="animation" data-aos="fade-left">
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["flid in react"]
              }}
            />
          </h1>
        </div>
        <Writter />
        <div className="animation" data-asos="flip-right">
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["zoomAnimation"]
              }}
            />
          </h1>
        </div>
        <Writter />
        <div className="animation" data-asos="zoom-in">
        <h3>
      <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptas laboriosam velit unde minima deleniti. Error porro nulla."]
              }}
            />
      </h3>
        </div>
      </div>
    </div>
  )
}

export default ScrollAnimation

