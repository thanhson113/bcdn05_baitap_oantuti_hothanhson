import React, { Component } from 'react'
import {connect} from 'react-redux'
class Computer extends Component {
    render() {
        const {computer} = this.props.gameOanTuTi
        return (
            <div className="computer">
                <div className="player__img">
                    <img src={computer.hinhAnh} alt="" />
                </div>
                <div className="speech-bubble">
                </div>
                <div className="player__img-center">
                    <img src="./img/playerComputer.png" alt="" />
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
export default connect(mapStateToProps)(Computer)
