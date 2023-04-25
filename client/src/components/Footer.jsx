import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center gap-4'>
      <h3> Coded by: Abhinav </h3>
        |
      <a href="https://www.github.com/abhinav1312" target='_blank' rel="noreferrer" >
        <img className='h-8 w-8 object-contain' src="https://img.icons8.com/ios-filled/512/github.png" alt="github" />
      </a>
        |
      <a href="https://www.linkedin.com/in/abhinav1312" target='_blank' rel="noreferrer" >
        <img className='h-8 w-8 object-contain' src="https://img.icons8.com/fluency/2x/linkedin.png" alt="linkedin" />
      </a>
    </div>
  )
}

export default Footer
