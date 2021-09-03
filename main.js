menu_list_array = ["Veg Margherita Pizza","Peppy panner","margherita","Cheese margherita","Dulex veggie"
                    ];
function getmenu(){
var htmldata;
htmldata= "<olclass= 'menulist'>"
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
     }
     htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;
 
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='card'>";
        for(var i=0;i<menu_list_array.length;i++){
   htmldata=htmldata+'<div class="card">'+'<img src="Pizza 2.PNG" style="width: 100px; height:80px;"/>'+menu_list_array+'</div>';
        }
        htmldata=htmldata+"</section>"
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
