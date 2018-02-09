---
layout: postjp
category: JpnBlog
title: "IoT with Arduino101「アルドゥイーノ」"
language: 日本語
ref: Post-IoT-Arduino101
date: 2017-12-13
---

すみません。日本語でまだ書かなかったです。すぐに書いて終わります。。。

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
クライアントデバイスにNode.js開発言語とNobleモジュールは使われました。

On my client device, Node.js along with [Noble](https://github.com/sandeepmistry/noble) is used to search and connect to the Arduino101 over BLE.  Once client device finds the Arduino101, it looks under the assigned Service UUID for each Characteristic UUID.  Notifications are then turned on for each characteristic, and [Socket.io](https://socket.io/) is used to forward the sampling frequency and accelerometer/gyrometer data to my server.  One interesting point to note here is the use of Socket.io over [WebSockets](https://github.com/websockets/ws).  The main reason why Socket.io is used over Websockets in this project is because of [multiplexing](https://en.wikipedia.org/wiki/Multiplexing).  Socket.io's API makes it quite easy to send multiple signals over one channel.  Doing this with Websockets is a little more complex.

### Server / Webpage:
Node.js along with [Express](https://expressjs.com/) is used to set up my server and [MongoDB](https://www.mongodb.com/) is used as my database.  Socket.io once again forwards the data from my server to my webpage, where the raw data values are displayed and graphed for the user.  From the webpage, the user can also choose to change the sampling frequency of the Arduino101.  These effects take place nearly instantaneously thanks to Socket.io and Noble. The user can also see this change visually on the webpage where the rate of the incoming data will either speed up or slow down based on the new sampling time chosen.  The webpage was created using frameworks such as [Bootstrap](https://getbootstrap.com/) and [Angularjs](https://angularjs.org/). Google Charts is used to graph the acceleration values in real time.  The project is available on [github](https://github.com/JLSeto/Arduino101) and a demo is available on [youtube](https://www.youtube.com/watch?v=x961tXPIoRY&feature=youtu.be).

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
