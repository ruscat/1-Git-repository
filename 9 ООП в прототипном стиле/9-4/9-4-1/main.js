'use strict';
/*

*/
function CoffeeMachine(power) {
    this._waterAmount=0;
    this._WATER_HEAT_CAPACITY = 4200;
    this._power=power;

}
CoffeeMachine.prototype.run=function() {
    setTimeout(function() {
        alert( 'Кофе готов!' );
    }, this.getTimeToBoil());
};
CoffeeMachine.prototype.setWaterAmount=function(amount) {
    this._waterAmount = amount;
};
CoffeeMachine.prototype.getTimeToBoil=function() {
    return this._waterAmount *this._WATER_HEAT_CAPACITY * 80 / this._power;
};


let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
