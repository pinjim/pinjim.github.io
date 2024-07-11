let iteminfo = [
    {"itemID":0, "type":1, "name":`可口可樂`, "count":0, "price":15, "image":`./images/soda.jpg`},
    {"itemID":1, "type":1, "name":`柳橙汁`, "count":0, "price":29, "image":`./images/juice.jpg`},
    {"itemID":2, "type":1, "name":`紅茶`, "count":10, "price":20, "image":`./images/tea.jpg`},
    {"itemID":3, "type":1, "name":`黑咖啡`, "count":0, "price":15, "image":`./images/coffee.jpg`},
    {"itemID":4, "type":2, "name":`洋芋片 34g`, "count":0, "price":20, "image":`./images/chip.jpg`},
    {"itemID":5, "type":2, "name":`鮮乳薄餅 240g`, "count":0, "price":80, "image":`./images/cookie.jpg`},
    {"itemID":6, "type":2, "name":`羅宋麵包`, "count":0, "price":35, "image":`./images/bread.jpeg`},
    {"itemID":7, "type":2, "name":`泡麵`, "count":10, "price":25, "image":`./images/ramen.jpg`},
    {"itemID":`test`, "type":`test`, "name":`窩不知道peko`, "count":10, "price":0, "image":`./images/test.jpg`},
];

const container = document.getElementById('item-container');

function ClearLocalStorage(){
    localStorage.clear();
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
    priceDiv.textContent = `TWD$ ${item.price}`;
    descriptionDiv.appendChild(priceDiv);/*在description下加入price*/

    let availabilityDiv = document.createElement('div');
    availabilityDiv.classList.add('available');/*創建class:available*/
    if(item.count>=1){
        availabilityDiv.textContent = `\u00A0仍有庫存\u00A0`;
        availabilityDiv.style.color = `white`;
        availabilityDiv.style.backgroundColor = `#44cc61`;
    }
    else{
        availabilityDiv.textContent = `\u00A0已無庫存\u00A0`;
        availabilityDiv.style.color = `white`;
        availabilityDiv.style.backgroundColor = `#c74646`;
    }
    descriptionDiv.appendChild(availabilityDiv);/*在description下加入available*/

    itemWrapper.appendChild(descriptionDiv);/*在item-wrapper下加入description*/
    return itemWrapper;
}

function CreatItemContainer(){
    for(let index=0; index<iteminfo.length; index++){
        let itemwrapper = CreatItemWrapper(iteminfo[index]);
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
    priceDiv.classList.add('price'); // 添加类名 'price'

    let originalPriceSpan = document.createElement('span');
    originalPriceSpan.textContent = `TWD$ ${Math.round(item.price)}`;
    originalPriceSpan.style.textDecoration = 'line-through';
    let discountedPriceSpan = document.createElement('span');
    discountedPriceSpan.textContent = `TWD$ ${Math.round(item.price * discount)}`;
    priceDiv.appendChild(originalPriceSpan);
    priceDiv.appendChild(document.createElement('br'));
    priceDiv.appendChild(discountedPriceSpan);
    descriptionDiv.appendChild(priceDiv);


    let discountDiv = document.createElement('div');
    discountDiv.classList.add('discount');/*創建class:discount*/
    discountDiv.textContent = `\u00A0${Math.round((1-discount)*100)}%OFF\u00A0`;
    discountDiv.style.color = `white`;
    discountDiv.style.backgroundColor = `#c74646`;
    descriptionDiv.appendChild(discountDiv);/*在description下加入discount*/

    itemWrapper.appendChild(descriptionDiv);/*在item-wrapper下加入description*/
    return itemWrapper;
}

function CreatDiscountItemContainer(){
    let usedindex = [];
    let discount=7;
    while(usedindex.length<3){
        let randomindex = Math.floor(Math.random() * iteminfo.length);/*暫用隨機選取商品*/
        if(!usedindex.includes(randomindex)){
            if(iteminfo[randomindex].count>0){
                usedindex.push(randomindex);
                let itemwrapper = CreatDiscountItemWrapper(iteminfo[randomindex], discount/10);
                container.appendChild(itemwrapper);
                discount+=1;
            }
        }
    }
    itemwrapper = document.createElement('div');
    itemwrapper.classList.add('item-wrapper');

    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = '不需要';
    button.onclick = function() {
        NoThank();
    };
    itemwrapper.appendChild(button);
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
        for(let index = 0; index<iteminfo.length; index++){
            if(String(item) === iteminfo[index].name){
                if(iteminfo[index].count >= 1){
                    let selectitem = {"name":iteminfo[index].name, "price":iteminfo[index].price};
                    let choose = confirm(`您確定要購買${iteminfo[index].name}嗎?`);
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
        for(let index = 0; index<iteminfo.length; index++){
            if(String(item) === iteminfo[index].name){
                let choose = confirm(`您確定要加購${iteminfo[index].name}嗎?`);
                if(choose) {
                    let discountitem = {"name":iteminfo[index].name, "price":Math.round(iteminfo[index].price*discount), "discount":discount};
                    console.log(`加購了 : ${iteminfo[index].name}(${Math.round(iteminfo[index].price*discount)})`);
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

function NoThank(){
    let choose = confirm(`您確定不需要加購折扣商品?`);
    let discountitem = {"name":`none`, "price":`none`, "discount":`none`};
    localStorage.setItem('discountitem', JSON.stringify(discountitem));
    if(choose) window.location.href = "./cashier.html";
    else return;
}

function Calculation(){
    let cart = [JSON.parse(localStorage.getItem('selectitem')), JSON.parse(localStorage.getItem('discountitem'))];
    if(cart && cart.length <= 0) window.location.href = "./home.html";
    else{   
        if(cart[1].name != `none`){
            document.getElementById('itemname').innerText = `${cart[0].name}\n${cart[1].name}(${100-(cart[1].discount*100)}%OFF)`;
            document.getElementById('itemprice').innerText = `NTD $${cart[0].price}\nNTD $${cart[1].price}`;
            document.getElementById('totalprice').innerText = `NTD $${cart[0].price+cart[1].price}`;
        }
        else{
            document.getElementById('itemname').innerText = `${cart[0].name}`;
            document.getElementById('itemprice').innerText = `NTD $${cart[0].price}`;
            document.getElementById('totalprice').innerText = `NTD $${cart[0].price}`;
        }
    }
}

function Redirect(){
    window.location.href = "./index.html";
}