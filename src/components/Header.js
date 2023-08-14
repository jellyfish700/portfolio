import React from 'react'
import person from './image/person.svg'
import pc from './image/pc.svg'
import file from './image/file.svg'
import mail from './image/mail.svg'





const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href='#'><img src={person} alt="" class="icon"/>ABOUT</a>
          </li>
          <li>
            <a href='#'><img src={file} alt="" class="icon"/>WORK</a>
          </li>
          <li>
            <a href='#'><img src={pc} alt="" class="icon"/>SKILL</a>
          </li>
         
          <li>
            <a href='#'><img src={mail} alt="" class="icon"/>CONTACT</a>
          </li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header