import React, { Component } from "react";
import Ads from "./Ads.js";
export default class ListAds extends Component {
  render() {
    return (
      <section id="promotion" className="container-fluid pt-5 pb-5">
        <h1 className="text-center text-white">PROMOTION</h1>
        <div className="container bg-light pt-5 pb-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <Ads />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <Ads />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <Ads />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
