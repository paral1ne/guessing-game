class GuessingGame {
  constructor() {
    this.min, this.max, this.current;
  }

  setRange(min, max) {
    (this.min = min),
      (this.max = max),
      (this.current = Math.ceil((this.max - this.min) / 2 + this.min));
  }

  guess() {
    return this.current;
  }

  lower() {
    this.max = this.current;
    this.current = Math.ceil((this.max - this.min) / 2 + this.min);
  }

  greater() {
    this.min = this.current;
    this.current = Math.ceil((this.max - this.min) / 2 + this.min);
  }
}

module.exports = GuessingGame;
