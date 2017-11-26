# syg-throttle
Adjust the timing of event execution.

イベントの実行タイミングを調整。

## Description
windowの scrollイベントや、 resizeイベントの実行タイミングをミリ秒間隔で指定して遅延させるもの。

## Usage
### Install
```sh
npm install syg-throttle
```

```JavaScript
import syg_throttle from 'syg-throttle';

function foo() {
    console.log("scroll");
}

window.addEventListener('scroll', syg_throttle(200, foo));
```

## License
MIT