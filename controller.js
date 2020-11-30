var URLCUSTOMER = 'http://localhost/product/getData.php';
var GBL_ITEM_DATA_ALL = [];

function commonAjaxCustomer(url, data, callback, msg) {
    
    
    $.ajax({
    type: 'POST',
    url: url,
    data: {
        postData: data
    },
    dataType: 'json',
    crossDomain: true,
    success: function (data, textStatus, jqXHR) {
        
        
        callback(true, data);
    },
    error: function (jqXHR, errdata, errorThrown) {
        
        callback(false, errdata, errorThrown);
    }
    });


}


function getItemData(){
    
    var postData = {
            requestCase: "getItemData",          
        };
    
    function getSpaceDetailCallBack(flag, msg){
        if (msg.status == 'SCS') {
            GBL_ITEM_DATA_ALL = msg.data;
            renderItemData(GBL_ITEM_DATA_ALL);
        }
    }
    
    commonAjaxCustomer(URLCUSTOMER, postData, getSpaceDetailCallBack, 'getting data');
    
}


function renderItemData(itemJson){

    var itemDataRender = '';
    if(itemJson.length >0){
        var itemIndex = 0;
        itemJson.forEach(function (record, index) {
            
            var itemName = record.name;
            var itemId = record.id;
            var itemPrice = record.price;
           
            $("#selectGroup").html('');
            itemDataRender += '<div class="col-lg-3 col-md-6 col-sm-8 mix oranges fresh-meat" id="itemDetailDiv_'+itemIndex+'" style="">'+
                '<div class="featured__item">'+
                    '<div class="featured__item__pic set-bg" data-setbg="">'+
                            '<img src="imgNot.jpg"/>'+
                            '<ul class="featured__item__pic__hover">'+
                                '<!--<li><a href="itemDetail.html"><i class="fa fa-info-circle"></i></a></li>-->'+
                                '<!--<li><a href="#"><i class="fa fa-retweet"></i></a></li>-->'+
                                '<li onclick="addItemInCart('+itemId+')"><a href="#"><i class="fa fa-shopping-cart"></i></a></li>'+
                            '</ul>'+
                        '</div>'+
                    '<div class="featured__item__text">'+
                        '<h6><a href="#">'+itemName+'</a></h6>'+
                        '<h5> &#8377;'+itemPrice+'</h5>'+
                    '</div>'+
                '</div>'+
            '</div>';
            itemIndex++;
            
            
        });
    }
    // hideShowLoader(1);
    $("#ItemDataListing").html(itemDataRender);


}


function searchItem(){
    var input, filter, divName, tagName, a, i, txtValue;
    input = document.getElementById("itemSearch");
    filter = input.value.toUpperCase();
    
    divName = document.getElementById("ItemDataListing");
    tagName = divName.getElementsByTagName("h6");
//    div = ul.getElementsByTagName("div");
//    console.log(tagName);
    
    for (i = 0; i < tagName.length; i++) {
        a = tagName[i].getElementsByTagName("a")[0]
        
        txtValue = a.textContent || a.innerText;
        console.log(txtValue.toUpperCase().indexOf(filter));
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tagName[i].style.display = "";
            $("#itemDetailDiv_"+[i]).show();
        } else {
            tagName[i].style.display = "none";
            $("#itemDetailDiv_"+[i]).hide();
        }
    }
}



