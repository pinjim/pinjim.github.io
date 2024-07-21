let events = [
    {
        name: `差距懸殊的茶道之戰 嘮嘮叨叨新邪馬臺國 從地獄歸來的男人`,
        count: 5,
        startdate: `20220914`,
        enddate: `20221005`,
        image: `./images/image0.png`
    },
    {
        name: `Road to 7 [Lostbelt No.5 亞特蘭提斯]`,
        count: 3,
        startdate: `20220928`,
        enddate: `20221005`,
        image: `./images/image1.png`
    },
    {
        name: `Road to 7 [Lostbelt No.5 奧林帕斯]`,
        count: 3,
        startdate: `20221005`,
        enddate: `20221012`,
        image: `./images/image2.png`
    },
    {
        name: `108人的萬聖節・起義！ ～小龍娘水滸演義～`,
        count: 5,
        startdate: `20221012`,
        enddate: `20221102`,
        image: `./images/image3.png`
    },
    {
        name: `迦勒底妖精騎士杯 ～第二代的凱旋～`,
        count: 5,
        startdate: `20221109`,
        enddate: `20221123`,
        image: `./images/image4.png`
    },
    {
        name: `Road to 7 [Lostbelt No.6]`,
        count: 3,
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

function Calculation(){
    const stonecount = document.getElementById('inputField1');
    const piececount = document.getElementById('inputField2');
    const totallogin = document.getElementById('inputField3');
    const contlogin = document.getElementById('inputField4');
    if(!targetindex) alert(`請選擇一個目標活動`);
    console.log(`到 "${events[targetindex].name}" 開始時\n聖晶石數量為 : ${stonecount.value}\n聖晶片數量為 : ${piececount.value}\n累積登入天數為 : ${stonecount.value}\n連續登入天數為 : ${stonecount.value}\n`);
}

function CreatEvent(item, index){
    let event = document.createElement('div');
    event.classList.add('event');/*創建class:event*/
    event.setAttribute('onclick', `SelectTargetEvent('${index}')`);/*設定onclick事件*/
    event.style.backgroundImage = `url(${item.image})`;/*設定item的背景圖片*/
    return event;
}

function CreatItemContainer(){
    let event;
    for(let index=0; index<events.length; index++){
        event = CreatEvent(events[index], index);
        container.appendChild(event);
    }
}