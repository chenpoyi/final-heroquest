"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
require("./App.css");
var NavBar_1 = require("./components/NavBar");
var selectors_1 = require("./helpers/selectors");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.fetchData = function () {
            axios_1["default"].get('/api/data') // You can simply make your requests to "/api/whatever you want"
                .then(function (response) {
                // handle success
                console.log(response.data); // The entire response from the Rails API
                console.log(response.data.message); // Just the message
                _this.setState({
                    message: response.data.message
                });
            });
        };
        _this.drawerList = selectors_1.getDrawerList();
        _this.state = {
            message: 'Click the button to load data!'
        };
        return _this;
    }
    App.prototype.render = function () {
        return (<div className="App">
        <NavBar_1["default"] drawerList={this.drawerList}/>
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchData}>
          Fetch Data
        </button>        
      </div>);
    };
    return App;
}(react_1.Component));
exports["default"] = App;
