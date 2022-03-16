import React, { Component } from 'react'
import {connect} from 'react-redux'
class KetQua extends Component {
  render() {
      const {ketQua,soBanThang,soBanChoi} = this.props.gameOanTuTi;
    return (
      <div className="ketQua">
          <h1 className="text-warning">{ketQua}</h1>
          <p className="text-success h1">Số bàn thắng: <span className="text-warning">{soBanThang}</span></p>
          <p className="text-success h1">Số bàn chơi: <span className="text-warning">{soBanChoi}</span></p>
          <button className="btn btn-success my-3" onClick={() => { 
              let action = {
                  type: 'PLAY_GAME',
              }
              this.props.dispatch(action)
          }}>Play Game</button>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
    return {
        gameOanTuTi : rootReducer.gameOanTuTiReducer
    }
}
export default connect(mapStateToProps)(KetQua)