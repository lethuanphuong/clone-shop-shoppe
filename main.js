function home(){
    document.querySelector('.content').classList.add('display-block')
    document.querySelector('.product-detail').classList.remove('display-block')
}
function clickLogin(){
    
    document.querySelector('.modal-login').classList.add('display')
    removeRegister()
}

function removeLogin () {
    document.querySelector('.modal-login').classList.remove('display')
}

function clickModalLogin(){
    document.querySelector('.modal-login').addEventListener('click',removeLogin())

    document.querySelector('.login-main').addEventListener('click',(e)=> {
    e.stopPropagation()
})
}

function clickRegister(){
    
    document.querySelector('.modal-register').classList.add('display')
    removeLogin()
}
function removeRegister () {
    document.querySelector('.modal-register').classList.remove('display')
}
function clickModalRegister(){
    document.querySelector('.modal-register').addEventListener('click',removeRegister())

    document.querySelector('.register-main').addEventListener('click',(e)=> {
    e.stopPropagation()
})
}

function toRegister() {
    removeLogin();
    clickRegister();
}

function toLogin() {
    removeRegister();
    clickLogin();
}
function listShopChild1() {
    document.querySelector('.list-shop-context:first-child').classList.add('color')
    document.querySelector('.temp1').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page1()
}
function removeListShopChild1(){
    document.querySelector('.list-shop-context:first-child').classList.remove('color')
    document.querySelector('.temp1').classList.remove('arrow-left')
}
function listShopChild2() {
    document.querySelector('.list-shop-context:nth-child(2)').classList.add('color')
    document.querySelector('.temp2').classList.add('arrow-left')
    removeListShopChild1();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page2()
}
function removeListShopChild2(){
    document.querySelector('.list-shop-context:nth-child(2)').classList.remove('color')
    document.querySelector('.temp2').classList.remove('arrow-left')
}
function listShopChild3() {
    document.querySelector('.list-shop-context:nth-child(3)').classList.add('color')
    document.querySelector('.temp3').classList.add('arrow-left')
    removeListShopChild1();removeListShopChild2();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page3()
}
function removeListShopChild3(){
    document.querySelector('.list-shop-context:nth-child(3)').classList.remove('color')
    document.querySelector('.temp3').classList.remove('arrow-left')
}
function listShopChild4() {
    document.querySelector('.list-shop-context:nth-child(4)').classList.add('color')
    document.querySelector('.temp4').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild1();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page4()
}
function removeListShopChild4(){
    document.querySelector('.list-shop-context:nth-child(4)').classList.remove('color')
    document.querySelector('.temp4').classList.remove('arrow-left')
}
function listShopChild5() {  
    document.querySelector('.list-shop-context:nth-child(5)').classList.add('color')
    document.querySelector('.temp5').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild1();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page5()
}
function removeListShopChild5(){
    document.querySelector('.list-shop-context:nth-child(5)').classList.remove('color')
    document.querySelector('.temp5').classList.remove('arrow-left')
}
function listShopChild6() {    
    document.querySelector('.list-shop-context:nth-child(6)').classList.add('color')
    document.querySelector('.temp6').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild1();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page1()
}
function removeListShopChild6(){
    document.querySelector('.list-shop-context:nth-child(6)').classList.remove('color')
    document.querySelector('.temp6').classList.remove('arrow-left')
}
function listShopChild7() {
    document.querySelector('.list-shop-context:nth-child(7)').classList.add('color')
    document.querySelector('.temp7').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild1();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page2()
}
function removeListShopChild7(){
    document.querySelector('.list-shop-context:nth-child(7)').classList.remove('color')
    document.querySelector('.temp7').classList.remove('arrow-left')
}
function listShopChild8() {
    document.querySelector('.list-shop-context:nth-child(8)').classList.add('color')
    document.querySelector('.temp8').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild1();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page3()
}
function removeListShopChild8(){
    document.querySelector('.list-shop-context:nth-child(8)').classList.remove('color')
    document.querySelector('.temp8').classList.remove('arrow-left')
}
function listShopChild9() {
    document.querySelector('.list-shop-context:nth-child(9)').classList.add('color')
    document.querySelector('.temp9').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild1();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page4()
}
function removeListShopChild9(){
    document.querySelector('.list-shop-context:nth-child(9)').classList.remove('color')
    document.querySelector('.temp9').classList.remove('arrow-left')
}
function listShopChild10() {
    document.querySelector('.list-shop-context:nth-child(10)').classList.add('color')
    document.querySelector('.temp10').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild1();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page5()
}
function removeListShopChild10(){
    document.querySelector('.list-shop-context:nth-child(10)').classList.remove('color')
    document.querySelector('.temp10').classList.remove('arrow-left')
}
function listShopChild11() {
    document.querySelector('.list-shop-context:nth-child(11)').classList.add('color')
    document.querySelector('.temp11').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild1();removeListShopChild12();removeListShopChild13();removeListShopChild14()
    page1()
}
function removeListShopChild11(){
    document.querySelector('.list-shop-context:nth-child(11)').classList.remove('color')
    document.querySelector('.temp11').classList.remove('arrow-left')
}
function listShopChild12() {
    document.querySelector('.list-shop-context:nth-child(12)').classList.add('color')
    document.querySelector('.temp12').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild1();removeListShopChild13();removeListShopChild14()
    page2()
}
function removeListShopChild12(){
    document.querySelector('.list-shop-context:nth-child(12)').classList.remove('color')
    document.querySelector('.temp12').classList.remove('arrow-left')
}
function listShopChild13() {
    document.querySelector('.list-shop-context:nth-child(13)').classList.add('color')
    document.querySelector('.temp13').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild1();removeListShopChild14()
    page3()
}
function removeListShopChild13(){
    document.querySelector('.list-shop-context:nth-child(13)').classList.remove('color')
    document.querySelector('.temp13').classList.remove('arrow-left')
}
function listShopChild14() {
    document.querySelector('.list-shop-context:nth-child(14)').classList.add('color')
    document.querySelector('.temp14').classList.add('arrow-left')
    removeListShopChild2();removeListShopChild3();removeListShopChild4();removeListShopChild5();removeListShopChild6();removeListShopChild7();removeListShopChild8();removeListShopChild9();removeListShopChild10();removeListShopChild11();removeListShopChild12();removeListShopChild13();removeListShopChild1()
    page4()
}
function removeListShopChild14(){
    document.querySelector('.list-shop-context:last-child').classList.remove('color')
    document.querySelector('.temp14').classList.remove('arrow-left')
}

function backgroupColor1(){
    document.querySelector('.popular').classList.add('backgroup-color');
    removeBackgroupColor2()
    removeBackgroupColor3()
    removeSortAToZ()
    removeSortZToA()
    removeAToZ()
    removeZToA()
    coinContext()

    page1()
}
function removeBackgroupColor1(){
    document.querySelector('.popular').classList.remove('backgroup-color');
}
function backgroupColor2(){
    document.querySelector('.newest').classList.add('backgroup-color');
    removeBackgroupColor1()
    removeBackgroupColor3()
    removeSortAToZ()
    removeSortZToA()
    removeAToZ()
    removeZToA()
    coinContext()

    page2()
}
function removeBackgroupColor2(){
    document.querySelector('.newest').classList.remove('backgroup-color');
}
function backgroupColor3(){
    document.querySelector('.salest').classList.add('backgroup-color');
    removeBackgroupColor1()
    removeBackgroupColor2()
    removeSortAToZ()
    removeSortZToA()
    removeAToZ()
    removeZToA()
    coinContext()

    page3()
}
function removeBackgroupColor3(){
    document.querySelector('.salest').classList.remove('backgroup-color');
}
function openModalCoinList(){
    document.querySelector('.coin-list').classList.add('display-block')
}
function removeOpenModalCoinList(){
    document.querySelector('.coin-list').classList.remove('display-block')
}
function sortAToZ(){
    document.querySelector('.a-z').classList.add('color');
    document.querySelector('.a-z-check').classList.add('display-flex');
    removeCoinContext()
    removeZToA()
    document.querySelector('.a-to-z').classList.add('display-flex');
    removeBackgroupColor1()
    removeBackgroupColor2()
    removeBackgroupColor3()
    removeSortZToA()
    removeCoinContext()
    removeOpenModalCoinList()

    page4()
}
function removeSortAToZ(){
    document.querySelector('.a-z').classList.remove('color');
    document.querySelector('.a-z-check').classList.remove('display-flex');
}
function removeAToZ() {
    document.querySelector('.a-to-z').classList.remove('display-flex');
}
function sortZToA(){
    document.querySelector('.z-a').classList.add('color');
    document.querySelector('.z-a-check').classList.add('display-flex');
    removeCoinContext()
    removeAToZ()
    document.querySelector('.z-to-a').classList.add('display-flex');
    removeBackgroupColor1()
    removeBackgroupColor2()
    removeBackgroupColor3()
    removeSortAToZ()
    removeOpenModalCoinList()

    page5()
}
function removeSortZToA(){
    document.querySelector('.z-a').classList.remove('color');
    document.querySelector('.z-a-check').classList.remove('display-flex');
}
function removeZToA() {
    document.querySelector('.z-to-a').classList.remove('display-flex');
}
function coinContext() {
    document.querySelector('.coin-context').classList.add('display-block');
}
function removeCoinContext() {
    document.querySelector('.coin-context').classList.remove('display-block');
}

function page1(){
    document.querySelector('.page1').classList.add('display-flex')
    removePage2()
    removePage3()
    removePage4()
    removePage5()
}
function removePage1(){
    document.querySelector('.page1').classList.remove('display-flex')
}
function page2(){
    document.querySelector('.page2').classList.add('display-flex')
    removePage1()
    removePage3()
    removePage4()
    removePage5()
}
function removePage2(){
    document.querySelector('.page2').classList.remove('display-flex')
}
function page3(){
    document.querySelector('.page3').classList.add('display-flex')
    removePage1()
    removePage2()
    removePage4()
    removePage5()
}
function removePage3(){
    document.querySelector('.page3').classList.remove('display-flex')
}
function page4(){
    document.querySelector('.page4').classList.add('display-flex')
    removePage1()
    removePage2()
    removePage3()
    removePage5()
}
function removePage4(){
    document.querySelector('.page4').classList.remove('display-flex')
}
function page5(){
    document.querySelector('.page5').classList.add('display-flex')
    removePage1()
    removePage2()
    removePage3()
    removePage4()
}
function removePage5(){
    document.querySelector('.page5').classList.remove('display-flex')
}

function   pagination1(){
    document.querySelector('.pagination1').classList.add('pagination-click')
    removePagination2()
    removePagination3()
    removePagination4()
    removePagination5()
    page1()
}
function   removePagination1(){
    document.querySelector('.pagination1').classList.remove('pagination-click')
}

function   pagination2(){
    document.querySelector('.pagination2').classList.add('pagination-click')
    removePagination1()
    removePagination3()
    removePagination4()
    removePagination5()
    page2()
}
function   removePagination2(){
    document.querySelector('.pagination2').classList.remove('pagination-click')
}
function   pagination3(){
    document.querySelector('.pagination3').classList.add('pagination-click')
    removePagination1()
    removePagination2()
    removePagination4()
    removePagination5()
    page3()
}
function   removePagination3(){
    document.querySelector('.pagination3').classList.remove('pagination-click')
}
function   pagination4(){
    document.querySelector('.pagination4').classList.add('pagination-click')
    removePagination1()
    removePagination2()
    removePagination3()
    removePagination5()
    page4()
}
function   removePagination4(){
    document.querySelector('.pagination4').classList.remove('pagination-click')
}
function   pagination5(){
    document.querySelector('.pagination5').classList.add('pagination-click')
    removePagination1()
    removePagination2()
    removePagination3()
    removePagination4()
    page5()
}
function   removePagination5(){
    document.querySelector('.pagination5').classList.remove('pagination-click')
}
function openProductDetail(){
    document.querySelector('.content').classList.remove('display-block')
    document.querySelector('.product-detail').classList.add('display-block')
}
function openImgDetail1() {
    document.querySelector('.product-left-img-1').classList.add('display-block')
    document.querySelector('.sm-img-detail1').classList.add('border-red')
    removeImgDetail2()
    removeImgDetail3()
    removeImgDetail4()
    removeImgDetail5()
}
function removeImgDetail1() {
    document.querySelector('.product-left-img-1').classList.remove('display-block')
    document.querySelector('.sm-img-detail1').classList.remove('border-red')
}
function openImgDetail2() {
    document.querySelector('.product-left-img-2').classList.add('display-block')
    document.querySelector('.sm-img-detail2').classList.add('border-red')
    removeImgDetail1()
    removeImgDetail3()
    removeImgDetail4()
    removeImgDetail5()
}
function removeImgDetail2() {  
    document.querySelector('.product-left-img-2').classList.remove('display-block')
    document.querySelector('.sm-img-detail2').classList.remove('border-red')
}
function openImgDetail3() {
    document.querySelector('.product-left-img-3').classList.add('display-block')
    document.querySelector('.sm-img-detail3').classList.add('border-red')
    removeImgDetail1()
    removeImgDetail2()
    removeImgDetail4()
    removeImgDetail5()
}
function removeImgDetail3() {  
    document.querySelector('.product-left-img-3').classList.remove('display-block')
    document.querySelector('.sm-img-detail3').classList.remove('border-red')
}
function openImgDetail4() {
    document.querySelector('.product-left-img-4').classList.add('display-block')
    document.querySelector('.sm-img-detail4').classList.add('border-red')
    removeImgDetail1()
    removeImgDetail2()
    removeImgDetail3()
    removeImgDetail5()
}
function removeImgDetail4() {  
    document.querySelector('.product-left-img-4').classList.remove('display-block')
    document.querySelector('.sm-img-detail4').classList.remove('border-red')
}
function openImgDetail5() {
    document.querySelector('.product-left-img-5').classList.add('display-block')
    document.querySelector('.sm-img-detail5').classList.add('border-red')
    removeImgDetail1()
    removeImgDetail2()
    removeImgDetail3()
    removeImgDetail4()
}
function removeImgDetail5() {  
    document.querySelector('.product-left-img-5').classList.remove('display-block')
    document.querySelector('.sm-img-detail5').classList.remove('border-red')
}
