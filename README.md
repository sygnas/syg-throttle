# syg-throttle
Adjust the timing of event execution.

イベントの実行タイミングを調整。

## Description
windowの scrollイベントや、 resizeイベントの実行タイミングをミリ秒間隔で指定して遅延させるもの。

## Usage
### Install
```sh
npm install --save @sygnas/throttle
```

### Script
```JavaScript
import throttle from '@sygnas/throttle';

function foo() {
    console.log("scroll");
}

window.addEventListener('scroll', throttle(200, foo, this));
```

### Params
```
throttle(timing, function, scope)
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| timing | int | ミリ秒。ここで指定した時間が経過しないと function を実行しない |
| function | function | イベントで実行したい関数 |
| scope | object | 関数を実行するスコープを指定 |


## License
MIT