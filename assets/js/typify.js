export default class Typify {
  constructor(elem, {
    words = [] || "",
    start = 1000,
    pause = 3000,
    speed,
    deleteSpeed = 70,
    startTime,
  } = {}) {
    this.elem = elem;
    this.words = words;
    this.pause = pause;
    this.speed = speed;
    this.deleteSpeed = deleteSpeed;
    this.startTime = startTime;
    this.index = 0;
    this.txt = '';
    this.isDeleting = false;
    setTimeout(() => {
      this.startTime = performance.now();
      this.type();
    }, start);
  }
  type() {
    const words = this.words;
    const fullText = words[this.index] || "";
    const lastText = words.slice(-1);
    let typeSpeed = Math.floor(Math.random()*(this.speed)+5);

    this.txt = this.isDeleting ? fullText.substring(0, this.txt.length - 1) : fullText.substring(0, this.txt.length + 1);
    this.elem.innerHTML = this.txt;
    this.isDeleting && (typeSpeed = this.deleteSpeed);

    if(!this.isDeleting && this.txt === fullText && this.index < words.length - 1) {
      typeSpeed = this.pause;
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '' && this.index < words.length) {
      this.isDeleting = false;
      this.index++;
      typeSpeed = 500;
    } else if (this.txt == lastText) {
      const endTime = performance.now();
      const duration = endTime - this.startTime;
      console.log(`Typing to '${("." + this.elem.className) || ("#" + this.elem.id) || this.elem.localName || this.elem.tagName}' took ${duration} milliseconds`);
      return;
    }
    
    setTimeout(() => this.type(), typeSpeed);
  }
}