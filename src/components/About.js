import React from 'react'
import girl from './image/girl.svg'

const About = () => {
  return (
    <div id="about">
      <p class="fontSize2 titlePosition">ABOUT</p>
      <div class="aboutWrap">
        <div class="imageWrap">
          <img class="imgageGirl" src={girl} alt="" />
        </div>
        <div class="left about">
          <p class="fontSize4">Name : 浅野志穂</p>
          <p class="fontSize4">BirthDay : 2002.7.23</p>
          <p class="fontSize4">GitHub : jellyfish700</p>
          <p class="fontSize4">初めまして。法政大学情報科学部に通っている浅野志穂です。
          フロントエンジニア志望で、webアプリやwebサービスの開発に興味があります。</p>
        </div>
      </div>   
    </div>
  )
}

export default About