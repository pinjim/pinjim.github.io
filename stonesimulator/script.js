let events = [
    {
        name: `差距懸殊的茶道之戰 嘮嘮叨叨新邪馬臺國 從地獄歸來的男人`,
        startdate: `20220914`,
        enddate: `20221005`,
        image: `./images/image0.png`
    },
    {
        name: `Road to 7 [Lostbelt No.5 亞特蘭提斯]`,
        startdate: `20220928`,
        enddate: `20221005`,
        image: `./images/image1.png`
    },
    {
        name: `Road to 7 [Lostbelt No.5 奧林帕斯]`,
        startdate: `20221005`,
        enddate: `20221012`,
        image: `./images/image2.png`
    },
    {
        name: `108人的萬聖節・起義！ ～小龍娘水滸演義～`,
        startdate: `20221012`,
        enddate: `20221102`,
        image: `./images/image3.png`
    },
    {
        name: `迦勒底妖精騎士杯 ～第二代的凱旋～`,
        startdate: `20221109`,
        enddate: `20221123`,
        image: `./images/image4.png`
    },
    {
        name: `Road to 7 [Lostbelt No.6]`,
        startdate: `20221201`,
        enddate: `20221215`,
        image: `./images/image5.png`
    },
]

const container = document.getElementById('container');
let currentindex = 0;
let targetindex = 0;

function GetCurrentEvent(offset){
    try{    
        let date = new Date();
        date.setDate(date.getDate() - offset);
        let dateinfo = String(date.getFullYear())+String(date.getMonth()+1).padStart(2, '0')+String(date.getDate()).padStart(2, '0');
        const currentevent = document.getElementById('banner-container1');
        let event = document.createElement('div');
        event.classList.add('banner');
        SelectTargetEvent(false);
        for(let index=0; index<events.length; index++){
            if(events[index].startdate<=dateinfo && events[index].enddate>dateinfo){
                event.style.backgroundImage = `url(${events[index].image})`;
                currentevent.appendChild(event);
                currentindex = index;
                return;
            }
        }
        event.style.backgroundImage = `url(./images/default.png)`;
        currentevent.appendChild(event);
        return;
    }catch(error){
        alert(error);
    }
}

function SelectTargetEvent(index){
    const targetevent = document.getElementById('banner-container2');
    targetevent.innerHTML=(`目標活動`);
    let event = document.createElement('div');
    event.classList.add('banner');
    if(!index) event.style.backgroundImage = `url(./images/default.png)`;
    else event.style.backgroundImage = `url(${events[index].image})`;
    targetevent.appendChild(event);
    targetindex = index;
}

function ParseDate(dateString) {
    const year = parseInt(dateString.substring(0, 4), 10);
    const month = parseInt(dateString.substring(4, 6), 10) - 1;
    const day = parseInt(dateString.substring(6, 8), 10);
    return new Date(year, month, day);
}

function DateOffset() {
    let startdate = new Date();
    startdate.setDate(startdate.getDate() - 660);
    let enddate = ParseDate(events[targetindex].enddate);
    let diffInMs = enddate - startdate;
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return Math.round(diffInDays);
}

function Calculation(){
    try{
        let choose = confirm(`計算不包含以下類型的獎勵 :\n●維護補償\n●分享或按讚達標獎勵\n●活動關卡獎勵`);
        if(!choose) return;
        let totalstone = 0;
        const stonecount = parseInt(document.getElementById('inputField1').value);
        const piececount = parseInt(document.getElementById('inputField2').value);
        const totallogin = parseInt(document.getElementById('inputField3').value);
        const contlogin = parseInt(document.getElementById('inputField4').value);
        if(!targetindex) throw new Error(`請選擇目標活動`);
        else if(isNaN(stonecount)) throw new Error(`請輸入現在的聖晶石數量`);
        else if(isNaN(piececount)) throw new Error(`請輸入現在的聖晶片數量`);
        else if(isNaN(totallogin)) throw new Error(`請輸入現在的累計登入天數`);
        else if(isNaN(contlogin)) throw new Error(`請輸入現在的連續登入天數`);
        let offsetdays = DateOffset();
        
        totalstone += stonecount;

        totalstone += (piececount-piececount%7)/7;

        totalstone += ((offsetdays-offsetdays%7)/7)*6;

        let offset = offsetdays;
        let leftdays = 50-totallogin%50;
        if(leftdays != 50) offset-=leftdays;
        totalstone += ((offset-offset%50)/50)*30;

        console.log(`距離領取累登獎勵還差${leftdays}天\n可以領${(offsetdays-offsetdays%50)/50}次累登獎勵`);
        console.log(`天數差距 : ${offsetdays}天\n${totalstone}`);
    }catch(error){
        alert(error);
    }
}

function CreateEvent(item, index){
    let event = document.createElement('div');
    event.classList.add('event');/*創建class:event*/
    event.setAttribute('onclick', `SelectTargetEvent('${index}')`);/*設定onclick事件*/
    event.style.backgroundImage = `url(${item.image})`;/*設定item的背景圖片*/
    return event;
}

function CreateItemContainer(){
    let event;
    for(let index=0; index<events.length; index++){
        event = CreateEvent(events[index], index);
        container.appendChild(event);
    }
}
