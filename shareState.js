'use strict';

const listener = function() {
    this.initiate = (_this) => {
        if (typeof this.state === 'undefined') this.state = _this.state;
        if (typeof _this.state === 'undefined') _this.state = this.state;

        return window.addEventListener("testing", (event) => {
            _this.setState(event.detail);
            this.state = _this.state;
        });
    }

    this.updateState = (object) => {
        const eventTest = new CustomEvent("testing", {detail: object});
        window.dispatchEvent(eventTest);
    }   
}

module.exports = new listener;