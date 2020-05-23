const styleStr = `
/**
 * 手把手教你怎么弄一个会动的太极图
 * 无论竖屏横屏都能完美显示哦
 * 下面我们开始吧
 * 先把各个屏幕比例下的太极大小配置好
 */
@media (max-aspect-ratio: 1/2) {
  #taiji {
    width: 80vw;
    height: 80vw;
  }
}

@media (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1) {
  #taiji {
    width: 40vh;
    height: 40vh;
  }
}

@media (min-aspect-ratio: 1/1) and (max-aspect-ratio: 2/1) {
  #taiji {
    width: 40vw;
    height: 40vw;
  }
}

@media (min-aspect-ratio: 2/1) {
  #taiji {
    width: 80vh;
    height: 80vh;
  }
}
/**
 * 定义太极的动画
 */
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

/**
 * 做个大球
 */
#taiji {
  position: relative;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}

/**
 * 做两个小球
 */
#taiji::before,
#taiji::after {
  content: "";
  display: block;
  position: absolute;
  width: 50%;
  height: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
#taiji::before {
  top: 0;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 100%
  );
}

#taiji::after {
  bottom: 0;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 25%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 100%
  );
}

/**
 * 最后让它动起来
 */
#taiji {
  animation: rotate 5s linear infinite alternate;
}
`;

let n = 0; // 当前读取字符位置
const codePanel = document.querySelector("#codePanel");
const styleContainer = document.querySelector("#codePanel style");
const codeContainer = document.querySelector("#codePanel code");
styleContainer.innerHTML = "";
codeContainer.innerHTML = "";
const step = () => {
  if (n >= styleStr.length) return;
  setTimeout(() => {
    const char = readChar();
    codeContainer.innerHTML += char;
    styleContainer.innerHTML += char;
    codePanel.scrollTo(0, 99999);
    step();
  }, 16);
  function readChar() {
    const char = styleStr[n++];
    return char;
  }
};
step();
