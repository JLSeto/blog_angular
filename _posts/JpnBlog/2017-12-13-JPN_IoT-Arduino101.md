---
layout: postjp
category: JpnBlog
title: "IoT with Arduino101「アルドゥイーノ」"
language: 日本語
ref: Post-IoT-Arduino101
date: 2017-12-13
---

## 概要:
[Arduino101](https://store.arduino.cc/usa/arduino-101)はインテルCurieモジュールとインテルQuark C1000マイクロコントローラを採用したマイクロコントローラボードです。このボードには６軸加速度計とジャイロスコープとBluetooth Low Energyが備えています。本プロジェクトにて、Arduino101は６軸加速度計のデータをまとめて、BLEでそのデータをアドバタイズします。そして、クライアントデバイスはArduino101に探して、接続してから、そのまとめているセンサデータを読み、Wifiでサーバーに送ります。サーバーはそのデータをデータベースに素存して、ウエブサイトに転送し、図表されます。そして、ユーザーはウェブサイトにArduino101のサンプリングタイムを簡単に制御でき、一瞬に変更します。ウェブサイトに子の変更は見えます。下記の図面はプロジェクトの概要です。


<div class="mb-3">
<figure>
  <img class="mx-auto d-block mb-3" style="width: 800px;" src="/assets/img/projects/arduino101/arduino101_diagram_db.png" alt="a101_diagram">
  <figcaption class="figure-caption text-center">概要図</figcaption>
</figure>
</div>

## やり方:
### Arduino101:
Arduino101ボードにArduino開発言語と「CurieBLE」と「CurieIMU」の図書館は使われました。このボードはペリフェラルとして、セットアップし、一つのサービスと七のcharacteristicがあります。一１つのcharacteristicはサンプリングしゅうはすうで、他の6他の6のは軸加速度計とジャイロスコープです。このサービスとcharacteristicsはそれぞれのUUIDを割り当てられまして、接続と登録とリード、ライトとお知らせがクライアントデバイスから使われました。


### Client Device:
クライアントデバイスにArduino101を探す、接続のために、Node.js開発言語と[Noble](https://github.com/sandeepmistry/noble)モジュールは使われました。クライアントデバイスはArduino101を見つけてから、サービスUUIDの下に、それぞれのCharacteristicのUUIDを探して、お知らせをONにつけます。そして、[Socket.io](https://socket.io/)はまとめているデータをサーバーに通信します。ところで、どうしてか[WebSockets](https://github.com/websockets/ws)を使わなくて、Socket.ioの使う理由を指摘したいです。素の理由は[multiplexing](https://en.wikipedia.org/wiki/Multiplexing)と言うことです。Socket.ioのAPIだったら、簡単に一つのチャネルの中で複数の合図を送れますが、もしWebsocketsを使うなら、もうちょっと複雑です。

### Server / Webpage:
サーバーはNode.js開発言語と[Express](https://expressjs.com/)ののフレームワークから作られました。[MongoDB](https://www.mongodb.com/)はデータベースです。Socket.ioはもう一度使われて、サーバーから、ウェブページにデータを送って、ウェブサイトにデータは表示されました。ユーザーもウェブサイトから、Arduino101のサンプリングタイムを変更することができます。そのSocket.ioとNobleのおかげで、変更は一瞬で行いし、ユーザーはウエブサイトにもこの変更を見えます。ユーザーの選んだデータに対して、来るデータの早さは遅くなるとか早くなるからです。このウェブページはは[Bootstrap](https://getbootstrap.com/)と[Angularjs](https://angularjs.org/)から作られました。GoogleChartsは可視化するために、使われました。このプロジェクトは[github](https://github.com/JLSeto/Arduino101)にあり、デモは[youtube](https://www.youtube.com/watch?v=x961tXPIoRY&feature=youtu.be)にあります。

## ハードウェア:
- Arduino101
- Laptop (Ubuntu OS)
- Optional: Intel Edison or Raspberry Pie (set up as a client device)

## ソフトウェア:
- Node.js
- Socket.io
- Noble
- Express
- Angularjs
- BootStrap
- Google Charts
- HTML, CSS, JavaScript

## 参考:
[CurieBLE](https://www.arduino.cc/en/Reference/CurieBLE)<br>
[Multiplexing using Websockets](https://www.rabbitmq.com/blog/2012/02/23/how-to-compose-apps-using-websockets/)<br>
