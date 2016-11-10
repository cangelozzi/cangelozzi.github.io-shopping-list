$(document).ready(function(){

	$("#js-shopping-list-form").submit(function(event){
      event.preventDefault();
      var itemAdded = $("#shopping-list-entry").val();
   
    //add item  
      $(".shopping-list")
      .append('<li>' +
      '<span  class="shopping-item">' + itemAdded + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
              '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>').addClass("shopping-item"); 
    });

     //check and uncheck item
      $(".shopping-list")
        .on("click", ".shopping-item-toggle", function (event) {
        $(this)
          .closest("li")
          .toggleClass("shopping-item__checked");
      })

     //remove item
      .on("click", ".shopping-item-delete", function (event) {
        $(this).closest("li").remove();
      }) 
})