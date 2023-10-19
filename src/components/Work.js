import React from 'react'
import WorkCard from './WorkCard.js'

import image1 from './image/image1.svg'
import image2 from './image/image2.svg'
import image3 from './image/image3.svg'
import image5 from './image/image5.svg'

import d0 from './image/diary0.svg'
import d1 from './image/diary1.svg'
import d2 from './image/diary2.svg'
import d3 from './image/diary3.svg'
import d4 from './image/diary4.svg'
import d5 from './image/diary5.svg'
import d6 from './image/diary6.svg'
import d7 from './image/diary7.svg'
import d8 from './image/diary8.svg'

// const img = [d0,d1,d2,d3,d4,d5,d6,d7,d8];
const Work = ({title,skill,about}) => {
  return (
    <div id="work">
      <p class="fontSize2 titlePosition">WORK</p>
        <WorkCard 
          title={"ポートフォリオ"}
          image={[image1]}
          classimg={"cardImageW cardImage"}
          skill={"HTML / CSS / JavaScript / React"}
          about={"JavaScriptで作成し、ライブラリはReactを使用しています。フレームワークはBootStrapを使用しています。レスポンシブにも対応させる予定です。"}
          link={"https://github.com/jellyfish700/portfolio"}
        />
        <WorkCard 
          title={"学習向けソフトウェア"}
          image={[image2]}
          classimg={"cardImageW cardImage"}
          skill={"Python / tkinter"}
          about={"矢印をダイヤまで動かすことができます。ダイヤまで進むと、その動きをPythonで実行した時のテキストが表示されるようになっています。描画ライブラリはtkinterを使用しています。"}
        />
        <WorkCard 
          title={"チャットbot"}
          image={[image3]}
          classimg={"cardImageH cardImage"}
          skill={"Python / janome / tkinter"}
          about={"アーティスト名を入力するとそのアーティストの人気な曲が出力されるチャットbotを作成しました。入力された文字列を形態素解析するために、janomeを使用しました。描画ライブラリはtkinterを使用しています。"}
          link={"https://github.com/jellyfish700/spotify-web-api-chatbot"}
        />
        <WorkCard 
          title={"認知症予防の日記サービス"}
          image={[d0,d1,d2,d3,d4,d5,d6,d7,d8]}
          classimg={"cardImageH cardImage"}
          skill={"aws / Vue / node.js"}
          about={"株式会社エムティーアイのインターンで、チーム開発しました。日記の投稿、削除、検索、色やフォントの変更ができます。"}
          link={"https://github.com/jellyfish700/mti-intern"}
        />
        <WorkCard 
          title={"関連アーティスト可視化ソフトウェア"}
          image={[image5]}
          classimg={"image_w"}
          skill={"Java / Processing"}
          about={"指定したアーティストの関連情報が可視化できます。SpotifyAPIを使用して、関連情報を入手しています。"}
          link={"https://github.com/jellyfish700/spotify-web-api-relevance"}
        />
    </div>
  )
}

export default Work