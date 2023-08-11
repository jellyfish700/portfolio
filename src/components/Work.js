import React from 'react'
import Card from 'react-bootstrap/Card';

import image1 from './image/image1.svg'
import image2 from './image/image2.svg'
import image3 from './image/image3.svg'
import image4 from './image/image4.svg'
const Work = () => {
  return (
    <div>
      <p class="fs-2 tx-p2 mb-5">WORK</p> 

      <Card className="card left card-row-m">
        <Card.Img class="image-card image-height-m" variant="top" src={image1} />
        <Card.Body>
          <Card.Title class="fs-3 tx-p3">ポートフォリオ</Card.Title>
          <p class="fs-4 tx-p2">HTML / CSS / JavaScript / React</p>
          <p class="fs-5 tx-p2">JavaScriptで作成し、ライブラリはReactを使用しています。フレームワークはBootStrapを使用しています。レスポンシブにも対応させる予定です。</p>
        </Card.Body>
      </Card>

      <Card className="card left card-row-m">
        <Card.Img class="image-card image-height-m" variant="top" src={image2} />
        <Card.Body>
          <Card.Title class="fs-3 tx-p3">学習向けソフトウェア</Card.Title>
          <p class="fs-4 tx-p2">Python / tkinter</p>
          <p class="fs-5 tx-p2">矢印をダイヤまで動かすことができます。ダイヤまで進むと、その動きをPythonで実行した時のテキストが表示されるようになっていて、学習者向けのソフトウェアを作成しました。描画ライブラリはtkinterを使用しています。</p>
        </Card.Body>
      </Card>

      <Card className="card left card-row-l">
        <Card.Img class="image-card image-height-l" variant="top" src={image3} />
        <Card.Body>
          <Card.Title class="fs-3 tx-p3">チャットbot</Card.Title>
          <p class="fs-4 tx-p2">Python / janome / tkinter</p>
          <p class="fs-5 tx-p2">アーティスト名を入力するとそのアーティストの人気な曲が出力されるチャットbotを作成しました。入力された文字列を形態素解析するために、janomeを使用しました。描画ライブラリはtkinterを使用しています。</p>
        </Card.Body>
      </Card>

      <Card className="card left card-row-l">
        <Card.Img class="image-card image-height-l" variant="top" src={image4} />
        <Card.Body>
          <Card.Title class="fs-3 tx-p3">認知症予防の日記サービス</Card.Title>
          <p class="fs-4 tx-p2">aws / Vue / node.js</p>
          <p class="fs-5 tx-p2">株式会社エムティーアイのインターンで、チーム開発しました。日記の投稿、削除、検索、色やフォントの変更ができます。</p>
        </Card.Body>
      </Card>

    </div>
  )
}

export default Work