/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.write('<div id="preloder">'+
        '<div class="loader"></div>'+
        '</div>'+
        '<header class="header">'+
        '<div class="header__top">'+
            '<div class="container">'+
                '<div class="row">'+
                    '<div class="col-lg-6 col-md-6">'+
                        '<div class="header__top__left">'+
                            '<ul>'+
                                '<li><span id="spaceEmailid"></span> &nbsp;&nbsp;<i class="fa fa-phone"></i> <span id="spacePhoneNum"></span></li>'+
                                '<!--<li></li>-->'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-lg-6 col-md-6">'+
                        '<div class="header__top__right">'+
                            '<div class="header__top__right__social">'+
                                '<a href="#"><i class="fa fa-facebook"></i></a>'+
                                '<a href="#"><i class="fa fa-twitter"></i></a>'+
                                '<a href="#"><i class="fa fa-linkedin"></i></a>'+
                                '<a href="#"><i class="fa fa-pinterest-p"></i></a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="container">'+
            '<div class="row">'+
                '<div class="col-lg-3">'+
                    '<div class="header__logo">'+
                        '<a href="index.html"><img src="lithe-logo12.png" alt=""></a>'+
                    '</div>'+
                '</div>'+
                '<div class="col-lg-6">'+
                    '<nav class="header__menu">'+
                        '<ul>'+

                            '<div class="">'+
//                                '<form action="#">'+
//                                    '<div class="hero__search__categories">'+
//                                        'All Categories'+
//                                        '<span class="arrow_carrot-down"></span>'+
//                                    '</div>'+
                                    '<input type="text" class="form-control iconInput" placeholder="Search Item (eg. Item Name)" name="itemSearch" id="itemSearch" onkeyup="searchItem()" autocomplete="on">'+
//                                    '<button type="" onclick="searchItem()" class="site-btn">SEARCH</button>'+
//                                '</form>'+
                            '</div>'+
                       ' </ul>'+
                    '</nav>'+
                '</div>'+
                '<div class="col-lg-3">'+
                    '<div class="header__cart">'+
                        '<ul>'+
                            
                           '<li><a href="itemCart.html"><i class="fa fa-shopping-bag" style="font-size:30px;"></i><span id="orderTotalItemCount">0</span></a> </li>'+
                           '<li><a href="orderDetail.html"><i class="fa fa-info-circle" style="font-size:30px;"></i></a> </li>'+
                        '</ul>'+
//                       ' <div class="header__cart__price">item: <span id="orderTotalItemPrice">&#8377; 00.00</span></div>'+
//                   ' </div>'+
               ' </div>'+
           ' </div>'+
//            '<div class="humberger__open">'+
//               ' <i class="fa fa-bars"></i>'+
//            '</div>'+
        '</div>'+
   ' </header>');