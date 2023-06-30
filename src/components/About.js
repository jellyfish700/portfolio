import React from 'react'
import girl from './image/girl.svg'

const About = () => {
  return (
    <div>
        <p class="fs-2 tx-p2 mt-5 mb-5">ABOUT</p>
        <div class="wrap">
          <img class="imgage-girl" src={girl} alt="" />
          <div class="left about">
            <p class="fs-4 ">Name : 浅野志穂</p>
            <p class="fs-4">BirthDay : 2002.7.23</p>
            <p class="fs-4">GitHub : jellyfish700</p>
            <p class="fs-4">初めまして。法政大学情報科学部３年の浅野志穂です。
            フロントエンジニア志望で、webアプリやwebサービスの開発に興味があります。</p>
          </div>

        </div>   
    </div>
  )
}

export default About