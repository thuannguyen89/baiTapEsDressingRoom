import Data from "./../data/data.json" assert { type: "json" };

// Lấy element theo id
const getEle = (id) => {
    return document.getElementById(id);
}

// Get list product
const getListProduct = () => {
    renderUI(Data);
}

const renderUI = (Data) => {
    let contentPillsTab = '';
    let contentPillsTabContent = '';
    const navPills = Data.navPills;
    const tabPanes = Data.tabPanes;

    // 1. Render pills-tab
    navPills.forEach((navPill, index) => {
        contentPillsTab += `
        <li class="nav-item">
            <a class="nav-link ${index == 0 ? 'active' : ''}" id="${navPill.tabName}-tab" data-toggle="pill" href="#pills-${navPill.type}" role="tab" aria-controls="pills-${navPill.type}" aria-selected="${index == 0 ? true : false}">${navPill.showName}</a>
        </li>
        `;
    });
    getEle("pills-tab").innerHTML = contentPillsTab;

    // 2. Render pills-tabContent
    let prepareTabPanesKey = [];
    let prepareTabPanesProducts = [];
    tabPanes.forEach((tabPane) => {
        if (typeof prepareTabPanesProducts[tabPane.type] === 'undefined') {
            prepareTabPanesKey.push(tabPane.type);
            prepareTabPanesProducts[tabPane.type] = [tabPane];
        } else {
            prepareTabPanesProducts[tabPane.type].push(tabPane);
        }
    });
    prepareTabPanesKey.forEach((type, index) => {
        if (typeof prepareTabPanesProducts[type] !== 'undefined') {
            contentPillsTabContent += `
            <div class="tab-pane fade ${type == 'topclothes' ? 'show active' : ''}" id="pills-${type}" role="tabpanel" aria-labelledby="pills-${type}-tab">
            <div class="container">    
            <div class="row">
            `;

            prepareTabPanesProducts[type].forEach((product) => {
                contentPillsTabContent += `
                <div class="col-md-3">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top"
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                            alt="Thumbnail [100%x225]" style="width: 100%; display: block;"
                            src="${product.imgSrcJpg}"
                            data-holder-rendered="true">
                        <div class="card-body">
                            <h4>${product.name}</h4>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-dark" data-type=${type} data-imgsrcpng=${product.imgSrcPng} onclick="tryDoIt()">Thử đồ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });
        }
        
        contentPillsTabContent += `
                </div>
            </div>
        </div>
        `;
        
    });
    getEle("pills-tabContent").innerHTML = contentPillsTabContent;
}

// Render pills-tab and pills-tabContent
getListProduct();

function tryDoIt() {
    const type = event.currentTarget.dataset.type;
    const imgSrcPng = event.currentTarget.dataset.imgsrcpng;
    switch (type) {
        case 'topclothes':
            // Change 'Áo';
            changeTopClothes(imgSrcPng);
            break;
        case 'botclothes':
            // Change 'Quần';
            changeBotClothes(imgSrcPng);
        case 'shoes':
            // Change 'Giày dép';
            changeShoes(imgSrcPng);
            break;
        case 'handbags':
            // Change 'Túi xách';
            changeHandBags(imgSrcPng);
            break;
        case 'necklaces':
            // Change 'Dây chuyền';
            changeNecklaces(imgSrcPng);
            break;
        case 'hairstyle':
            // Change 'Kiểu tóc';
            changeHairStyle(imgSrcPng);
            break;
        case 'background':
            // Change 'Nền';
            changeBackground(imgSrcPng);
            break;
    }
}
window.tryDoIt = tryDoIt;

function changeTopClothes(imgSrcPng) {
    const curEle = document.querySelector('.contain .bikinitop');
    curEle.style.cssText = `
        background: url(${imgSrcPng});
        width: 500px;
        height: 500px;
        position: absolute;
        top: -9%;
        left: -5%;
        z-index: 3;
        transform: scale(0.5);
    `;
}

function changeBotClothes(imgSrcPng) {
    const curEle = document.querySelector('.contain .bikinibottom');
    curEle.style.cssText = `
        background: url(${imgSrcPng});
        width: 500px;
        height: 1000px;
        position: absolute;
        top: -30%;
        left: -5%;
        z-index: 2;
        transform: scale(0.5);
    `;
}

function changeShoes(imgSrcPng) {
    const curEle = document.querySelector('.contain .feet');
    curEle.style.cssText = `
        background: url(${imgSrcPng});
        width: 500px;
        height: 1000px;
        position: absolute;
        bottom: -37%;
        right: -3.5%;
        z-index: 1;
        transform: scale(0.5);
    `;
}

function changeHandBags(imgSrcPng) {
    const curEle = document.querySelector('.contain .handbag');
    curEle.style.cssText = `
        background: url(${imgSrcPng});
        width: 500px;
        height: 1000px;
        position: absolute;
        bottom: -40%;
        right: -3.5%;
        z-index: 4;
        transform: scale(0.5);
    `;
}

function changeNecklaces(imgSrcPng) {
    const curEle = document.querySelector('.contain .necklace');
    curEle.style.cssText = `
        background: url(${imgSrcPng});
        width: 500px;
        height: 1000px;
        position: absolute;
        bottom: -40%;
        right: -3.5%;
        z-index: 4;
        transform: scale(0.5);
    `;
}


function changeHairStyle(imgSrcPng) {
    const curEle = document.querySelector('.contain .hairstyle');
    curEle.style.cssText = `
        background: url(${imgSrcPng});
        width: 1000px;
        height: 1000px;
        position: absolute;
        top: -75%;
        right: -57%;
        z-index: 4;
        transform: scale(0.15);
    `;
}

function changeBackground(imgSrcPng) {
    const curEle = document.querySelector('.contain .background');
    curEle.style.cssText = `
        background: url(${imgSrcPng});
        background-size: cover;
        background-repeat: no-repeat;
        width: 900px;
        height: 1500px;
        position: absolute;
        bottom: -90%;
        right: -50%;
        z-index: -1;
        transform: scale(0.5);
    `;
}