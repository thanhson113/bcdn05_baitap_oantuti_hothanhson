const gameOanTuTi = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', banChon: true },
        { ma: 'bua', hinhAnh: './img/bua.png', banChon: false },
        { ma: 'bao', hinhAnh: './img/bao.png', banChon: false },
    ],
    ketQua: "I'm iron man, i love you 3000",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bua', hinhAnh: './img/keo.png' },
}

export const gameOanTuTiReducer = (state = gameOanTuTi, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            let mangCuocMoi = state.mangDatCuoc.map((itemCuoc) => {
                return { ...itemCuoc, banChon: false }
            })
            let itemFind = mangCuocMoi.find(item => item.ma === action.maCuoc)
            if (itemFind) {
                itemFind.banChon = true;
            }
            state.mangDatCuoc = mangCuocMoi
            return { ...state }
        }
        case 'PLAY_GAME': {
            let interger = Math.floor(Math.random() * 3);
            let itemCuoc = state.mangDatCuoc[interger]
            state.computer = itemCuoc;
            let player = state.mangDatCuoc.find(itemCuoc => itemCuoc.banChon === true)
            let computer = state.computer;
            switch (player.ma){
                case 'keo':{
                    if(computer.ma == 'keo'){
                        state.ketQua = 'Bạn hòa'
                    }else if(computer.ma == 'bua'){
                        state.ketQua = 'Bạn thua'
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000"
                        state.soBanThang++;
                    }
                    break;
                }
                case 'bua':{
                    if(computer.ma == 'bua'){
                        state.ketQua = 'Bạn hòa'
                    }else if(computer.ma == 'bao'){
                        state.ketQua = 'Bạn thua'
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000"
                        state.soBanThang++;

                    }
                    break;
                }
                case 'bao':{
                    if(computer.ma == 'bao'){
                        state.ketQua = 'Bạn hòa'
                    }else if(computer.ma == 'keo'){
                        state.ketQua = 'Bạn thua'
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000"
                        state.soBanThang++;

                    }
                    break;
                }
            }
            state.soBanChoi++;
            return { ...state }
        }
        default: return state;
    }
}