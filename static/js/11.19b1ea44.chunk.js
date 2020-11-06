(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[11],{172:function(n,r){n.exports='#### ES6\u4e2d\u7684`Array.from()`\n\n\u6700\u8fd1\u5728\u770bES6\uff0c\u770b\u5230`Array.from()`\u8fd8\u633a\u6709\u610f\u601d\u7684\uff0c\u5b83\u7684\u4f5c\u7528\u5c31\u662f\u628a\u4e00\u4e2a\u7c7b\u6570\u7ec4\u8f6c\u5316\u6210\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u7ec4\uff0c\u8f93\u5165\u4e00\u4e2a\u7c7b\u6570\u7ec4\u7684\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u7ec4\uff0c\u633a\u7b26\u5408\u51fd\u6570\u5f0f\u7684\u601d\u60f3\uff0c\u4f46\u662f\u9057\u61be\u7684\u662f\u5b83\u53ef\u4ee5\u63a5\u53d7\u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u6ca1\u6709curry\u5316\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u53ea\u4f20\u4e00\u4e2a\u53c2\u6570\u3002\n\n\u5e73\u65f6\u6211\u4eec\u89c1\u7684\u6bd4\u8f83\u591a\u7684\u7c7b\u6570\u7ec4\u5c31\u662f\u51fd\u6570\u7684`arguments`\uff0c\u901a\u8fc7JS\u9009\u62e9DOM\u9009\u62e9\u51fa\u6765\u7684`DOM NodeList`\uff0c\u5b57\u7b26\u4e32\u4e5f\u53ef\u4ee5\u7b97\u4e3a\u7c7b\u6570\u7ec4\u3002\n\n\u62ff`arguments`\u4e3e\u4f8b\uff0c\u4ee5\u524d\u6211\u4eec\u60f3\u8981\u628a\u5b83\u8f6c\u5316\u6210\u771f\u6b63\u7684\u6570\u7ec4\uff0c\u4e00\u822c\u8fd9\u6837\u8f6c\u5316\n\n```\nlet arr = Array.prototype.slice.call(arguments)\n```\n\n\u6216\u8005\u8fd9\u6837\n\n```\nlet arr = [].slice.call(arguments)\n```\n\n\u73b0\u5728\u6709\u4e86`Array.from()`\uff0c\u53d8\u5f97\u5f88\u65b9\u4fbf\n\n```\nlet arr = Array.from(arguments)\n```\n\n\u8fd8\u6709\u4e00\u4e2a\u7528\u6cd5\uff0c\u5c31\u662f\u751f\u6210\u4e00\u4e2a\u7279\u5b9a\u6570\u76ee\u7684\u6570\u7ec4\uff0c\u7c7b\u6570\u7ec4\u6700\u91cd\u8981\u7684\u7279\u6027\u662flength\u8fd9\u4e2a\u5c5e\u6027\uff0c\u6240\u4ee5\u53ef\u4ee5\u8fd9\u6837\u751f\u6210\u4e00\u4e2a\u7279\u5b9a\u6570\u76ee\u7684\u6570\u7ec4\n\n```\n//\u751f\u6210\u4e00\u4e2a\u4e94\u4e2a\u5143\u7d20\u7684\u6570\u7ec4\n\nconst arrLike = {length: 5}\nconst arr = Array.from(arrLike)\nconsole.log(arr)\n\n// [ undefined, undefined, undefined, undefined, undefined ]\n```\n\n\u8fd9\u6837\u6709\u4ec0\u4e48\u7528\u5462\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u9700\u6c42\u662f\u8981\u751f\u6210\u4e00\u4e2a\u8fd9\u6837\u987a\u5e8f\u6392\u5217\u7684\u6570\u7ec4`[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]`\uff0c\u6211\u4eec\u4f1a\u7528for\u5faa\u73af\n\n```\nlet arr = []\nfor (let i = 0; i < 10; i++) {\n  arr.push(i + 1)\n}\nconsole.log(arr)\n```\n\n\u6211\u4eec\u8fd8\u53ef\u4ee5\u7528\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u601d\u8def\u5b9e\u73b0\u5b83\n\n```\nconst R = require("ramda")\n\nconst f = (item, index) => index + 1\nconst arr = R.addIndex(R.map)(f, Array.from({length: 10}))\nconsole.log(arr)\n```\n'}}]);