(()=>{"use strict";window.setLastSeenOfUser=function(s){$.ajax({type:"post",url:setLastSeenURL,data:{status:s},success:function(s){}})},setLastSeenOfUser(1),window.onbeforeunload=function(){Echo.leave("user-status"),setLastSeenOfUser(0)},Echo.join("user-status")})();