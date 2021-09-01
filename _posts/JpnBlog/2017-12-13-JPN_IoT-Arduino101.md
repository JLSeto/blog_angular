---
layout: postjp
category: JpnBlog
title: "IoT with Arduino101「アルドゥイーノ」"
language: 日本語
ref: Post-IoT-Arduino101
date: 2017-12-13
---

## 概要:
[comment]: <> [Arduino101](https://store.arduino.cc/usa/arduino-101)はインテルCurieモジュールとインテルQuark C1000マイクロコントローラを採用したマイクロコントローラボードです。このボードには６軸加速度計とジャイロスコープとBluetooth Low Energyが備えています。本プロジェクトにて、Arduino101は６軸加速度計のデータをまとめて、BLEでそのデータをアドバタイズします。そして、クライアントデバイスはArduino101に探して、接続してから、そのまとめているセンサデータを読み、Wifiでサーバーに送ります。サーバーはそのデータをデータベースに素存して、ウエブサイトに転送し、図表されます。そして、ユーザーはウェブサイトにArduino101のサンプリングタイムを簡単に制御でき、一瞬に変更します。ウェブサイトに子の変更は見えます。下記の図面はプロジェクトの概要です。

[Arduino101](https://store.arduino.cc/usa/arduino-101) は、インテル社の Quark マイクロコントローラ C1000 を含むインテル Curie モジュ
ールを採用した、マイクロコントローラーボートです。このボードは6軸加速度計とジャイロ
スコープにて構成されてあり、また、Bluetooth Low Energy(BLE)が備え付けとなります。本プ
ロジェクトでは、Arduino101 を利用し、6 軸加速度計とジャイロスコープのデータを集め、BLE
慶友で集まったデータをアドバタイズ致します。クライアントデバイスは、Bluetooth で
Arduino101 に接続し、アドバタイズされたデータを読み取り、そのデータをまた Wi-Fi でサー
バーに送ります。それから、サーバーは Arduino101 からのデータを DB に保存し、データを
webpage に送ることによりデータがグラフ化されユーザーに表示します。ユーザーは webpage
から Arduino101 のサンプリング周波数を制御することができます。ボタンをクリックするだけ
で、ユーザーはサンプリング時間を Arduino101 にオーダーすることができます。直ちにサンプ
リング周波数をすることができ、加えて webpage からも変更内容を直接確認することができま
す。下記のダイヤグラムより、本プロジェクトの全体図をご覧くださいませ。


<div class="mb-3">
<figure>
  <img class="mx-auto d-block mb-3" style="width: 800px;" src="/assets/img/projects/arduino101/arduino101_diagram_db.png" alt="a101_diagram">
  <figcaption class="figure-caption text-center">概要図</figcaption>
</figure>
</div>

## やり方:
### Arduino101:
[comment]: <> Arduino101ボードにArduino開発言語と「CurieBLE」と「CurieIMU」の図書館は使われました。このボードはペリフェラルとして、セットアップし、一つのサービスと七のcharacteristicがあります。一１つのcharacteristicはサンプリングしゅうはすうで、他の6他の6のは軸加速度計とジャイロスコープです。このサービスとcharacteristicsはそれぞれのUUIDを割り当てられまして、接続と登録とリード、ライトとお知らせがクライアントデバイスから使われました。

Arduino101 ボードの言語を書くには、“CurieBLE”と“CurieIMU”のライブラリーに加え Arduino 言
語が使われています。ボードは 7 つの Characteristic を含む一つのサービスと共に、ペリフェラ
ルとしてセットアップします。一つの Characteristic は、ユーザー側が設定できるサンプリング
周波数(ts)です。その他 6 つの Characteristic は、加速度計とジャイロスコープの数値(ax, ay,
az, gx, gy, gz)となります。また、各サービスと Characteristic は、それぞれの UUID を割り当て
られます。これらの UUID は、クライアントデバイスが接続、登録、読み取り、書き込み、そ
して特定の Characteristic への通知の受信を行うために使われます。

### Client Device:
[comment]: <> クライアントデバイスにArduino101を探す、接続のために、Node.js開発言語と[Noble](https://github.com/sandeepmistry/noble)モジュールは使われました。クライアントデバイスはArduino101を見つけてから、サービスUUIDの下に、それぞれのCharacteristicのUUIDを探して、お知らせをONにつけます。そして、[Socket.io](https://socket.io/)はまとめているデータをサーバーに通信します。ところで、どうしてか[WebSockets](https://github.com/websockets/ws)を使わなくて、Socket.ioの使う理由を指摘したいです。素の理由は[multiplexing](https://en.wikipedia.org/wiki/Multiplexing)と言うことです。Socket.ioのAPIだったら、簡単に一つのチャネルの中で複数の合図を送れますが、もしWebsocketsを使うなら、もうちょっと複雑です。

クライアントデバイスでは、Noble に加えて Node.js を使い、BLE を通して Arduino101 を探し接
続を行います。クライアントデバイスは、Arduino101 を見つけてから割り当てられたサービス
UUID の下の Characteristic 別 の UUID を探します。それから各 Characteristic の通知が ON になり
ます。
サンプリング周波数 の転送および、加速度計とジャイロスコープデータのサーバーへの転送に
は、Socket.io が使われました。一つ興味深いところとして、WebSockets ではなく Socket.io を採
用したところを注目してください。その主な理由としては、multiplexing(多重化)がありま
す。Socket.io の API では一つのチャンネルを通じて複数のシグナルを送信することがより簡単
にできる反面、Websockets ですと少しややこしくなります。

### Server / Webpage:
[comment]: <> サーバーはNode.js開発言語と[Express](https://expressjs.com/)ののフレームワークから作られました。[MongoDB](https://www.mongodb.com/)はデータベースです。Socket.ioはもう一度使われて、サーバーから、ウェブページにデータを送って、ウェブサイトにデータは表示されました。ユーザーもウェブサイトから、Arduino101のサンプリングタイムを変更することができます。そのSocket.ioとNobleのおかげで、変更は一瞬で行いし、ユーザーはウエブサイトにもこの変更を見えます。ユーザーの選んだデータに対して、来るデータの早さは遅くなるとか早くなるからです。このウェブページはは[Bootstrap](https://getbootstrap.com/)と[Angularjs](https://angularjs.org/)から作られました。GoogleChartsは可視化するために、使われました。このプロジェクトは[github](https://github.com/JLSeto/Arduino101)にあり、デモは[youtube](https://www.youtube.com/watch?v=x961tXPIoRY&feature=youtu.be)にあります。

Express に加えて Node.js がサーバー上でのセットアップに、また MongoDB がデータベースのセ
ットアップに使われました。繰り返しとなりますが、Socket.io がデータをサーバーから
Webpage に転送します。Webpage からは、ユーザー側が Arduino101 のサンプリング周波数を
変更することができ、Socket.io と Noble により、直ちに制御されます。また、ユーザーは、デ
ータの着信速度が制御により早くなったり鈍くなったりすることを、Webpage より視覚的に確
認することができます。Webpage は Bootstrap や Angularjs のようなフレームワークを利用し創られ、リアルタイムで加速度をグラフ化するには Google Charts を使いました。プロジェクトは
GitHub で、デモは YouTube でご確認できます。

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
