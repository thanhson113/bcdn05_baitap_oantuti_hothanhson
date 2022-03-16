import React, { Component } from 'react'
import Computer from './Computer'
import KetQua from './KetQua'
import Player from './Player'
import  './BTOanTuTi.css'
export default class BTOanTuTi extends Component {
  render() {
    return (
      <div className="container-fluid main">
          <div className="row">
              <div className="col-4">
                  <Player/>
              </div>
              <div className="col-4">
                  <KetQua/>
              </div>
              <div className="col-4">
                  <Computer/>
              </div>
          </div>
      </div>
    )
  }
}
