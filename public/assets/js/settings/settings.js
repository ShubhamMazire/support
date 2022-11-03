(()=>{"use strict";function e(e){return e.replace(/\s/g,"").length}$(document).on("change","#logo",(function(){isValidFile($(this),"#validationErrorsBox")&&displayPhoto(this,"#logoPreview"),$(".alert").delay(5e3).slideUp(300)})),window.displayFavicon=function(e,a){var t=!0;if(e.files&&e.files[0]){var i=new FileReader;i.onload=function(e){var i=new Image;i.src=e.target.result,i.onload=function(){if(!(16==i.height&&16==i.width||32==i.height&&32==i.width))return $("#favicon").val(""),$("#validationErrorsBox").removeClass("d-none"),$("#validationErrorsBox").html(Lang.get("messages.setting.fav_icon_tooltip")).show(),$(".alert").delay(5e3).slideUp(300),!1;$(a).attr("src",e.target.result),t=!0}},t&&(i.readAsDataURL(e.files[0]),$(a).show())}},window.isValidFavicon=function(e,a){var t=$(e).val().split(".").pop().toLowerCase();return-1==$.inArray(t,["gif","png","ico"])?($(e).val(""),$(a).removeClass("d-none"),$(a).html(Lang.get("messages.validation.image_type_valid")).show(),$(".alert").delay(5e3).slideUp(300),!1):($(a).hide(),!0)},$(document).on("change","#favicon",(function(){$("#validationErrorsBox").addClass("d-none"),isValidFavicon($(this),"#validationErrorsBox")&&displayFavicon(this,"#faviconPreview")})),$(document).on("click","#btn-reset",(function(){for(var e=1;e<100;)$("#company_description").summernote("undo"),e++})),$(document).on("submit","#editForm",(function(e){e.preventDefault();var a=$("#btnSave");a.button("loading"),$("#editForm").find("input:text:visible:first").focus();var t=$("#facebookUrl").val(),i=$("#twitterUrl").val(),n=($("#googlePlusUrl").val(),$("#linkedInUrl").val()),s=new RegExp(/^(https?:\/\/)?((m{1}\.)?)?((w{2,3}\.)?)facebook.[a-z]{2,3}\/?.*/i),o=new RegExp(/^(https?:\/\/)?((m{1}\.)?)?((w{2,3}\.)?)twitter\.[a-z]{2,3}\/?.*/i),r=(new RegExp(/^(https?:\/\/)?(plus\.)?(google\.[a-z]{2,3})\/?(([a-zA-Z 0-9._])?).*/i),new RegExp(/^(https?:\/\/)?((w{2,3}\.)?)linkedin\.[a-z]{2,3}\/?.*/i));return""!=t&&!t.match(s)?(displayErrorMessage(Lang.get("messages.validation.facebook_url")),a.button("reset"),!1):""!=i&&!i.match(o)?(displayErrorMessage(Lang.get("messages.validation.twitter_url")),a.button("reset"),!1):""!=n&&!n.match(r)?(displayErrorMessage(Lang.get("messages.validation.linkedin_url")),a.button("reset"),!1):($("#editForm")[0].submit(),!0)})),$(document).on("submit","#settingForm",(function(a){a.preventDefault();var t=$("#btnSave"),i=$("#application_name").val(),n=$("#aboutUs").val(),s=$("#company_address").val();if(!e(i))return displayErrorMessage(Lang.get("messages.validation.application_name_white_space")),!1;if(!e(n))return displayErrorMessage(Lang.get("messages.validation.about_us_white_space")),!1;if(!e(s))return displayErrorMessage(Lang.get("messages.validation.address_white_space")),!1;var o=$("#email").val(),r=new RegExp(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/);return""==o||!o.match(r)?(displayErrorMessage(Lang.get("messages.validation.email_valid")),!1):""!==$("#error-msg").text()?($("#phoneNumber").focus(),!1):(t.button("loading"),$("#settingForm")[0].submit(),!0)}))})();