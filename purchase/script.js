let iteminfo = [
    {
        "itemID":1, "type":1, "name":`可口可樂`, 
        "temp":{"cold":true, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":15, 
        "image":`./images/soda/soda1.jpg`
    },
    {
        "itemID":2, "type":2, "name":`美粒果柳橙汁`, 
        "temp":{"cold":true, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":29, 
        "image":`./images/juice/juice1.jpg`
    },
    {
        "itemID":3, "type":3, "name":`茶裏王英式紅茶`, 
        "temp":{"cold":true, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":20, 
        "image":`./images/tea/tea1.jpg`
    },
    {
        "itemID":4, "type":4, "name":`UCC黑咖啡`, 
        "temp":{"cold":true, "normal":true, "hot":true}, 
        "count":[10, 10, 0], "price":15, 
        "image":`./images/coffee/coffee1.jpg`
    },
    {
        "itemID":5, "type":5, "name":`經典原味洋芋片`, 
        "temp":{"cold":false, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":20, 
        "image":`./images/chip/chip1.jpg`
    },
    {
        "itemID":6, "type":6, "name":`義美鮮乳薄餅`, 
        "temp":{"cold":false, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":80, 
        "image":`./images/cookie/cookie1.jpg`
    },
    {
        "itemID":7, "type":7, "name":`海鹽羅宋麵包`, 
        "temp":{"cold":false, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":35, 
        "image":`./images/bread/bread1.jpg`
    },
    {
        "itemID":8, "type":8, "name":`來一客鮮蝦魚板風味泡麵`, 
        "temp":{"cold":false, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":25, 
        "image":`./images/instantnoodle/instantnoodle1.jpg`
    },
    {
        "itemID":9, "type":3, "name":`茶裏王無糖綠茶`, 
        "temp":{"cold":true, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":20, 
        "image":`./images/tea/tea2.jpg`
    },
    {
        "itemID":10, "type":3, "name":`茶裏王台式綠茶`, 
        "temp":{"cold":true, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":20, 
        "image":`./images/tea/tea3.jpg`
    },
    {
        "itemID":11, "type":3, "name":`茶裏王白毫烏龍`, 
        "temp":{"cold":true, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":20, 
        "image":`./images/tea/tea4.jpg`
    },
    {
        "itemID":12, "type":3, "name":`茶裏王青心烏龍`, 
        "temp":{"cold":true, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":20, 
        "image":`./images/tea/tea5.jpg`
    },
    {
        "itemID":13, "type":8, "name":`來一客牛肉蔬菜風味泡麵`, 
        "temp":{"cold":false, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":25, 
        "image":`./images/instantnoodle/instantnoodle2.jpg`
    },
    {
        "itemID":14, "type":8, "name":`來一客京燉肉骨風味泡麵`, 
        "temp":{"cold":false, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":25, 
        "image":`./images/instantnoodle/instantnoodle3.jpg`
    },
    {
        "itemID":15, "type":8, "name":`維力炸醬麵`, 
        "temp":{"cold":false, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":35, 
        "image":`./images/instantnoodle/instantnoodle4.jpg`
    },
    {
        "itemID":16, "type":8, "name":`滿漢大餐蔥燒牛肉麵`, 
        "temp":{"cold":false, "normal":true, "hot":false}, 
        "count":[10, 10, 0], "price":59, 
        "image":`./images/instantnoodle/instantnoodle5.jpg`
    },
    {
        "itemID":17, "type":4, "name":`UCC黑咖啡`, 
        "temp":{"cold":true, "normal":true, "hot":true}, 
        "count":[10, 10, 0], "price":15, 
        "image":`./images/coffee/coffee2.jpg`
    },
];
/*
itemID表示物品代號 (模型判斷用)
type表示物品分類 (模型判斷用)
├1:汽水類 (soda)
├2:果汁類 (juice)
├3:茶飲類 (tea)
├4:咖啡類 (coffee)
├5:薯片類 (chip)
├6:餅乾類 (cookie)
├7:麵包類 (bread)
└8:泡麵類 (instantnoodle)

name表示物品名稱 (UI顯示用)
price表示物品價錢 (UI顯示用)
image表示物品照片檔案 (UI顯示用)
*/
let items = ItemSorter();
const container = document.getElementById('item-container');

function ClearLocalStorage(){
    localStorage.clear();
}

function CheckLocalStorage(){
    try{
        let checker = JSON.parse(localStorage.getItem('selectitem'));
        if(!checker) throw new Error(`無資料`);
    }catch(error){
        Redirect();
    }
}

function ItemSorter(){
    let items = [];
    for(let target=1; target<=8; target++){
        for(let index=0; index<iteminfo.length; index++){
            if(!items.includes(iteminfo[index]) && iteminfo[index].type === target){
                if(iteminfo[index].temp.cold){
                    let itemcold = {
                        "itemID":iteminfo[index].itemID, 
                        "type":iteminfo[index].type, 
                        "name":`${iteminfo[index].name}(冰)`, 
                        "temp":0, 
                        "count":iteminfo[index].count[0], 
                        "price":iteminfo[index].price, 
                        "image":iteminfo[index].image
                    };
                    items.push(itemcold);
                }
                if(iteminfo[index].temp.normal){
                    let itemnormal = {
                        "itemID":iteminfo[index].itemID, 
                        "type":iteminfo[index].type, 
                        "name":`${iteminfo[index].name}(常溫)`, 
                        "temp":1, 
                        "count":iteminfo[index].count[1], 
                        "price":iteminfo[index].price, 
                        "image":iteminfo[index].image
                    };
                    items.push(itemnormal);
                }
                if(iteminfo[index].temp.hot){
                    let itemhot = {
                        "itemID":iteminfo[index].itemID, 
                        "type":iteminfo[index].type, 
                        "name":`${iteminfo[index].name}(熱)`, 
                        "temp":2, 
                        "count":iteminfo[index].count[2], 
                        "price":iteminfo[index].price, 
                        "image":iteminfo[index].image
                    };
                    items.push(itemhot);
                }
            }
        }
    }
    return items;
}

function CreatItemWrapper(item){
    let itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item-wrapper');/*創建class:item-wrapper*/

    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');/*創建class:item*/
    itemDiv.setAttribute('onclick', `SelectItem('${item.name}')`);/*設定onclick事件*/
    itemDiv.style.backgroundImage = `url(${item.image})`;/*設定item的背景圖片*/
    itemDiv.style.backgroundSize = 'cover';
    itemDiv.style.backgroundPosition = 'center';
    itemWrapper.appendChild(itemDiv);/*在item-wrapper下加入item*/

    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');/*創建class:description*/

    let priceDiv = document.createElement('div');
    priceDiv.classList.add('price');/*創建class:price*/
    priceDiv.textContent = `NT$${item.price}`;
    descriptionDiv.appendChild(priceDiv);/*在description下加入price*/

    let statusDiv = document.createElement('div');
    statusDiv.classList.add('status');/*創建class:status*/
    let tempDiv = document.createElement('div');
    tempDiv.classList.add('available');/*創建class:temp*/
    tempDiv.style.color = `white`;
    if(item.temp===0){
        tempDiv.textContent = `冰`;
        tempDiv.style.backgroundColor = `#0080FF`;
    }
    else if(item.temp===1){
        tempDiv.textContent = `常溫`;
        tempDiv.style.backgroundColor = `#ffd000`;
    }
    else if(item.temp===2){
        tempDiv.textContent = `熱`;
        tempDiv.style.backgroundColor = `#FF5151`;
    }
    statusDiv.appendChild(tempDiv);/*在status下加入temp*/

    let availabilityDiv = document.createElement('div');
    availabilityDiv.classList.add('available');/*創建class:available*/
    if(item.count>=1){
        availabilityDiv.textContent = `有庫存`;
        availabilityDiv.style.color = `white`;
        availabilityDiv.style.backgroundColor = `#44cc61`;
    }
    else{
        availabilityDiv.textContent = `無庫存`;
        availabilityDiv.style.color = `white`;
        availabilityDiv.style.backgroundColor = `#c74646`;
    }
    statusDiv.appendChild(availabilityDiv);/*在status下加入available*/
    descriptionDiv.appendChild(statusDiv);/*在description下加入status*/

    itemWrapper.appendChild(descriptionDiv);/*在item-wrapper下加入description*/
    return itemWrapper;
}

function CreatItemContainer(){
    let itemwrapper;
    for(let index=0; index<items.length; index++){
        itemwrapper = CreatItemWrapper(items[index]);
        container.appendChild(itemwrapper);
    }
}

function CreatDiscountItemWrapper(item, discount){
    let itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item-wrapper');/*創建class:item-wrapper*/

    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');/*創建class:item*/
    itemDiv.setAttribute('onclick', `SelectDiscountItem('${item.name}', ${discount})`);/*設定onclick事件*/
    itemDiv.style.backgroundImage = `url(${item.image})`;/*設定item的背景圖片*/
    itemDiv.style.backgroundSize = 'cover';
    itemDiv.style.backgroundPosition = 'center';
    itemWrapper.appendChild(itemDiv);/*在item-wrapper下加入item*/

    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');/*創建class:description*/
    
    let priceDiv = document.createElement('div');
    priceDiv.classList.add('discountprice'); /*創建class:price*/
    let originalPriceSpan = document.createElement('span');
    originalPriceSpan.textContent = `NT$${Math.round(item.price)}`;
    originalPriceSpan.style.textDecoration = 'line-through';
    let discountedPriceSpan = document.createElement('span');
    discountedPriceSpan.textContent = `NT$${item.price-Math.round(item.price*(1-discount))}`;
    priceDiv.appendChild(originalPriceSpan);
    priceDiv.appendChild(document.createElement('br'));
    priceDiv.appendChild(discountedPriceSpan);
    descriptionDiv.appendChild(priceDiv);

    let statusDiv = document.createElement('div');
    statusDiv.classList.add('status');/*創建class:status*/
    let tempDiv = document.createElement('div');
    tempDiv.classList.add('available');/*創建class:temp*/
    tempDiv.style.color = `white`;
    if(item.temp===0){
        tempDiv.textContent = `冰`;
        tempDiv.style.backgroundColor = `#0080FF`;
    }
    else if(item.temp===1){
        tempDiv.textContent = `常溫`;
        tempDiv.style.backgroundColor = `#ffd000`;
    }
    else if(item.temp===2){
        tempDiv.textContent = `熱`;
        tempDiv.style.backgroundColor = `#FF5151`;
    }
    statusDiv.appendChild(tempDiv);/*在status下加入temp*/

    let discountDiv = document.createElement('div');
    discountDiv.classList.add('discount');/*創建class:discount*/
    discountDiv.textContent = `${Math.round((1-discount)*100)}%OFF`;
    discountDiv.style.color = `white`;
    discountDiv.style.backgroundColor = `#c74646`;
    statusDiv.appendChild(discountDiv);/*在status下加入discount*/
    descriptionDiv.appendChild(statusDiv);/*在description下加入status*/

    itemWrapper.appendChild(descriptionDiv);/*在item-wrapper下加入description*/
    return itemWrapper;
}

function CreatDiscountItemContainer(){
    let usedindex = [];
    let discount=6;
    while(usedindex.length<4){
        let randomindex = Math.floor(Math.random() * items.length);/*暫用隨機選取商品*/
        if(!usedindex.includes(randomindex)){
            if(items[randomindex].count>0){
                usedindex.push(randomindex);
                let itemwrapper = CreatDiscountItemWrapper(items[randomindex], discount/10);
                container.appendChild(itemwrapper);
                discount+=1;
            }
        }
    }
    itemwrapper = document.createElement('div');
    itemwrapper.classList.add('item-wrapper');
    let returnbutton = document.createElement('button');
    returnbutton.classList.add('returnbutton');
    returnbutton.textContent = '回上頁';
    returnbutton.onclick = function() {
        Back();
    };
    itemwrapper.appendChild(returnbutton);
    container.appendChild(itemwrapper);

    itemwrapper = document.createElement('div');
    itemwrapper.classList.add('item-wrapper');
    let nothankbutton = document.createElement('button');
    nothankbutton.classList.add('nothankbutton');
    nothankbutton.textContent = '不需要';
    nothankbutton.onclick = function() {
        NoThank();
    };
    itemwrapper.appendChild(nothankbutton);
    container.appendChild(itemwrapper);
}

async function GetWeatherInfo(location){
    try{
        const response = await fetch(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-427B7265-DE60-4C1F-8AD0-4E7509C741D1&format=JSON&locationName=${location}`);
        const info = await response.json();
        if(!info.success) throw new Error(`無法取得氣象資訊。`);
        else{
            const locationinfo = info.records.location.weatherElement;
            const weather = locationinfo[0].time[0].parameter.parameterName;
            const mintemperature = locationinfo[2].time[0].parameter.parameterName;
            const maxtemperature = locationinfo[4].time[0].parameter.parameterName;
            const averagetemperature = (maxtemperature+mintemperature)/2;
            return [weather, averagetemperature];
        }
    }catch(error){
        return error;
    }
}

function SelectItem(item){
    try{
        for(let index = 0; index<items.length; index++){
            if(String(item) === items[index].name){
                if(items[index].count >= 1){
                    let selectitem = {"name":items[index].name, "price":items[index].price};
                    let choose = confirm(`您確定要購買 "${items[index].name}" 嗎?`);
                    if(choose){
                        console.log(`選擇了 : ${selectitem.name}(${selectitem.price})`);
                        localStorage.setItem('selectitem', JSON.stringify(selectitem));
                        window.location.href = "./bonus.html";
                    }
                    else return;
                }
                else alert(`${item}已無庫存!`);
            }
        }
    }
    catch(error){
        alert(`${error}`);
    }
}

function SelectDiscountItem(item, discount){
    try{
        for(let index = 0; index<items.length; index++){
            if(String(item) === items[index].name){
                let choose = confirm(`您確定要加購 "${items[index].name}" 嗎?`);
                if(choose) {
                    let discountitem = {"name":items[index].name, "price":items[index].price, "discount":discount};
                    console.log(`加購了 : ${items[index].name}(${Math.round(items[index].price*discount)})`);
                    localStorage.setItem('discountitem', JSON.stringify(discountitem));
                    window.location.href = "./cashier.html";
                }
                else return;
            }
        }
    }
    catch(error){
        alert(`${error}`);
    }
}

function Back(){
    let choose = confirm(`您確定要回上一頁?`);
    if(choose) Redirect();
    else return;
}

function NoThank(){
    let choose = confirm(`您確定不需要加購折扣商品?`);
    let discountitem = {"name":`none`, "price":`none`, "discount":`none`};
    localStorage.setItem('discountitem', JSON.stringify(discountitem));
    if(choose) window.location.href = "./cashier.html";
    else return;
}

function Calculation(){
    try{
        let cart = [];
        cart = [JSON.parse(localStorage.getItem('selectitem')), JSON.parse(localStorage.getItem('discountitem'))];
        if(cart[1].name != `none`){
            document.getElementById('itemname').innerText = `${cart[0].name}\n${cart[1].name}\n加購折扣`;
            document.getElementById('itemprice').innerText = `\u00A0NT$${cart[0].price}\n\u00A0NT$${cart[1].price}\n-NT$${Math.round(cart[1].price*(1-cart[1].discount))}`;
            document.getElementById('totalprice').innerText = `\u00A0NT$${cart[0].price+cart[1].price-Math.round(cart[1].price*(1-cart[1].discount))}`;
        }
        else{
            document.getElementById('itemname').innerText = `${cart[0].name}`;
            document.getElementById('itemprice').innerText = `\u00A0NT$${cart[0].price}`;
            document.getElementById('totalprice').innerText = `\u00A0NT$${cart[0].price}`;
        }
    }catch(error){
        console.log(error);
        Redirect();
    }
}

function Redirect(){
    window.location.href = "./index.html";
}