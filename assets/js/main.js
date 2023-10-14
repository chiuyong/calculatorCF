function Calculator() {
  this.display = document.querySelector('.display');
  
  this.initialize = function() {
    this.clickButtons();
    this.pressEnter();
  }

  this.clickButtons = function() {
    document.addEventListener('click', (e) => { // using arrow function => this refers to calculator, not document anymore
      const el = e.target;
      if (el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
      if (el.classList.contains('btn-clear')) this.clearDisplay();
      if (el.classList.contains('btn-del')) this.delOne();
      if (el.classList.contains('btn-eq')) this.makeCalc();
    });
  }

  this.btnToDisplay = function(value) {
    this.display.value += value;
  }

  this.clearDisplay = function() {
    this.display.value = '';
  }

  this.delOne = function() {
    this.display.value = this.display.value.slice(0, -1);
  }
  
  this.makeCalc = function() {
    let calc = this.display.value;
    try {
      calc = eval(calc);
      if (!calc) {
        alert('Invalid calculation');
        return;
      }
      this.display.value = String(calc);
    } catch (e) {
      alert('Invalid calculation');
      return;
    }
  }
  
  this.pressEnter = function() {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) this.makeCalc();
    });
  }
}

const calculator = new Calculator();
calculator.initialize();