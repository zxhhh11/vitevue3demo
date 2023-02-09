export default function printHtml(html, docStyle) {
  let style = getStyle(docStyle);
  let container = getContainer(html);

  document.body.appendChild(style);
  document.body.appendChild(container);

  getLoadPromise(container).then(() => {
    window.print();
    document.body.removeChild(style);
    document.body.removeChild(container);
  });
}

// 设置打印样式
function getStyle(docStyle) {
  let styleContent = docStyle
  // let styleContent = `#print-container {
  //     display: none;
  // }
  // @media print {
  //     body > :not(.print-container) {
  //         display: none;
  //     }
  //     html,
  //     body {
  //         display: block !important;
  //     }
  //     #print-container {
  //         display: block;
  //     }
  //     .test-text{
  //       color:red;
  //       font-size:30px
  //     }
  // }`;
  let style = document.createElement("style");
  style.innerHTML = styleContent;
  return style;
}

// 清空打印内容
function cleanPrint() {
  let div = document.getElementById('print-container')
  if (!!div) {
    document.querySelector('body').removeChild(div)
  }
}

// 新建DOM，将需要打印的内容填充到DOM
function getContainer(html) {
  cleanPrint()
  let container = document.createElement("div");
  container.setAttribute("id", "print-container");
  container.innerHTML = html;
  return container;
}

// 图片完全加载后再调用打印方法
function getLoadPromise(dom) {
  let imgs = dom.querySelectorAll("img");
  imgs = [].slice.call(imgs);

  if (imgs.length === 0) {
    return Promise.resolve();
  }

  let finishedCount = 0;
  return new Promise(resolve => {
    function check() {
      finishedCount++;
      if (finishedCount === imgs.length) {
        resolve();
      }
    }
    imgs.forEach(img => {
      img.addEventListener("load", check);
      img.addEventListener("error", check);
    })
  });
}
