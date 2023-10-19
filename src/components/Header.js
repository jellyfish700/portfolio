import React from 'react'
import person from './image/person.svg'
import pc from './image/pc.svg'
import file from './image/file.svg'
import mail from './image/mail.svg'

const Header = () => {
  return (
    <header>
      <nav class="mobile">
          <button class=" btn topButton fs-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            portfolio
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
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
          </div>
        </nav>
        
        <nav class="pc">
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