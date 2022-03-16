import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    renderDatCuoc = () => {
        const { mangDatCuoc } = this.props.gameOanTuTi;
        return mangDatCuoc.map((itemCuoc, index) => {
            let cssBoder = '';
            if (itemCuoc.banChon) {
                cssBoder = 'select';
            }
            
            return <button key={`itemCuoc${index}`} onClick={() => { this.props.datCuoc(itemCuoc.ma) }} className={`player__img-tuxi ${cssBoder}`}>
                <img src={itemCuoc.hinhAnh} alt="" />
            </button>
        })
    }
    render() {
        const { mangDatCuoc, banChon } = this.props.gameOanTuTi;
        return (
            <div className="player">
                <div className="player__img">
                    <img src={mangDatCuoc.find(item => item.banChon === true).hinhAnh} alt="" />
                </div>
                <div className="speech-bubble">
                </div>
                <div className="player__img-center">
                    <img src="./img/player.png" alt="" />
                </div>
                <div className="player__img-bottom">
                    {this.renderDatCuoc()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        gameOanTuTi: rootReducer.gameOanTuTiReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            const action = {
                type: "DAT_CUOC",
                maCuoc,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
