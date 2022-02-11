
//
// var get_by_id = document.getElementById("purchases");
// alert(get_by_id);
// alert(typeof get_by_id);

// var items = document.getElementsByTagName("li");
// alert(get_by_name);
// alert(get_by_name.length);
// alert(typeof get_by_name);
// alert(get_by_name[1].className);

// for (let i = 0; i < items.length; i++) {
//     alert(typeof items[i]);
// }
// var all_items = document.getElementsByTagName("*");
// alert(all_items.length);

// var items_by_class = document.getElementsByClassName("sales");
// alert(items_by_class.length);
// alert(typeof items_by_class);

// var shop = document.getElementById("purchases");
// var items = shop.getElementsByClassName("sales");
// alert(items.length);

// 自己实现 getElementsByClassName
// function get_element_by_class_name(node, classname){
//     if (node.getElementsByClassName){
//         return node.getElementsByClassName(classname);
//     }else {
//         var results = new Array();
//         var elems = node.getElementsByTagName("*");
//         for (let i = 0; i < elems.length; i++) {
//             if (elems[i].className.indexOf(classname) != -1){
//                 results[result.length] = elems[i]
//             }
//         }
//         return results;
//     }
// }

// var paras = document.getElementsByTagName("p");
// for (let i = 0; i < paras.length; i++) {
//     var title_text = paras[i].getAttribute("title");
//     if (title_text){
//         alert(title_text);
//         paras[i].setAttribute("title","hello!");
//         alert(paras[i].getAttribute("title"));
//     }
// }


// var items = document.getElementsByTagName("li");
//
// var new_src = items[2].getAttribute("href");
//
// var waiting_to_change = document.getElementsByTagName("img");
//
// waiting_to_change[0].setAttribute("src", new_src);





































