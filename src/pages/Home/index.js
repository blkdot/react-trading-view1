import React, { Component } from "react";
import "./index.scss";
import TradingViewChart from "../../components/TradingViewChart";

function getLocalLanguage() {
  return navigator.language.split('-')[0] || 'en'
}
export default class Home extends Component {
  constructor() {
    super();
    this.cOptions = {
      symbol: "BTCUSDT",
      interval: "D",
      timezone: "Etc/UTC",
      width: "100%",
      height: "900px",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      studies: [
        "MACD@tv-basicstudies",
      ],
    }
  }

  render() {
    return (
      <div className="container">
        <div className="trading-chart">
          <TradingViewChart
            chartProperties={this.cOptions} 
          />
        </div>
      </div>
    );
  }
}
