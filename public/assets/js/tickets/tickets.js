(()=>{"use strict";var e=null,t=null;$(document).ready((function(){$("#categoryFilterId,#statusFilter").select2({width:"100%"}),$("#ticketFilter").select2({width:"150px"}),$("#txtEditAssignee").select2({width:"100%",placeholder:Lang.get("messages.ticket.select_agents"),sorter:function(e){return e.sort((function(e,t){return e.text.localeCompare(t.text)}))}}),$("#categoryFilterId").on("change",(function(){e=$(this).val(),window.livewire.emit("changeFilter","categoryFilter",$(this).val())})),$("#statusFilter").on("change",(function(){t=$(this).val(),window.livewire.emit("changeFilter","statusFilter",$(this).val())})),null!=$("#ticketFilter").val()&&(t=$("#ticketFilter").val()),null!=$("#statusFilter").val()&&(t=$("#statusFilter").val()),$("#ticketFilter").on("change",(function(){t=$(this).val(),window.livewire.emit("changeFilter","ticketFilter",$(this).val())}))})),$(document).on("click",".delete-btn",(function(e){var t=$(this).attr("data-id"),n='<div class="alert alert-warning swal__alert">\n<strong class="swal__text-warning">'+deleteMessage+' "'+Lang.get("messages.ticket.ticket")+'" ?</strong><div class="swal__text-message">'+Lang.get("messages.ticket.by_deleting_this_ticket")+".</div></div>";swal({type:"input",inputPlaceholder:Lang.get("messages.ticket.type_delete_for_deletion")+" .",title:deleteHeading+" !",text:n,html:!0,showCancelButton:!0,closeOnConfirm:!1,showLoaderOnConfirm:!0,confirmButtonColor:"#5cb85c",cancelButtonColor:"#d33",cancelButtonText:noMessages,confirmButtonText:yesMessages,imageUrl:baseUrl+"assets/images/warning.png"},(function(e){return!1!==e&&(""==e||"delete"!=e.toLowerCase()?(swal.showInputError(Lang.get("messages.ticket.type_delete_for_deletion")+" ."),$(".sa-input-error").css("top","23px!important"),$(document).find(".sweet-alert.show-input :input").val(""),!1):void("delete"===e.toLowerCase()&&window.livewire.emit("deleteTicket",t)))}))})),window.addEventListener("deleted",(function(e){"Ticket can't be deleted."===e.detail?swal({title:"",text:e.detail,type:"error",confirmButtonColor:"#00b074",timer:5e3}):swal({title:Lang.get("messages.common.deleted")+" !",text:Lang.get("messages.ticket.ticket")+" "+Lang.get("messages.common.has_been_deleted")+".",type:"success",confirmButtonColor:"#00b074",confirmButtonText:Lang.get("messages.common.ok"),timer:2e3})})),$(document).on("click",".unassigned-btn",(function(e){var t=$(this).attr("data-id");swal({title:Lang.get("messages.common.attention")+" !",text:Lang.get("messages.ticket.unassigned_warning")+" ?",type:"info",showCancelButton:!0,closeOnConfirm:!1,showLoaderOnConfirm:!0,confirmButtonColor:"#00b074",cancelButtonColor:"#d33",cancelButtonText:noMessages,confirmButtonText:yesMessages},(function(){window.livewire.emit("unassignedTicket",t)}))})),window.addEventListener("unassignedFromTicket",(function(e){swal({title:Lang.get("messages.ticket.unassigned_ticket")+" !",text:Lang.get("messages.ticket.unassigned_from_ticket")+".",type:"success",confirmButtonColor:"#00b074",confirmButtonText:Lang.get("messages.common.ok"),timer:2e3})})),$(document).on("click",".change-status",(function(e){var t=$(this).attr("data-id"),n=$(this).attr("data-status");swal({title:Lang.get("messages.common.attention")+" !",text:Lang.get("messages.ticket.sure_for_change_status")+" ?",type:"info",showCancelButton:!0,closeOnConfirm:!1,showLoaderOnConfirm:!0,confirmButtonColor:"#00b074",cancelButtonColor:"#d33",cancelButtonText:noMessages,confirmButtonText:yesMessages},(function(){window.livewire.emit("changeStatus",t,n)}))})),window.addEventListener("closeAlert",(function(){swal.close()})),document.addEventListener("livewire:load",(function(n){window.Livewire.hook("message.processed",(function(){$("#categoryFilterId,#statusFilter").select2({width:"100%"}),$("#ticketFilter").select2({width:"150px"}),$('[data-toggle="tooltip"]').tooltip(),$("#categoryFilterId").val(e).trigger("change.select2"),$("#statusFilter").val(t).trigger("change.select2"),$("#ticketFilter").val(t).trigger("change.select2")}))})),$(document).on("click",".resetFilter",(function(){e=null,$("#categoryFilterId").val(null).trigger("change"),$("#statusFilter").val(activeStatus).trigger("change"),$("#ticketFilter").val(activeStatus).trigger("change")})),$(document).on("click",".edit-ticket-assignees",(function(e){var t=$(e.currentTarget).attr("data-id");startLoader(),$.ajax({url:ticketUrl+t+"/edit-assignees",type:"GET",success:function(e){if(e.success){var t=e.data.ticket,n=e.data.users;for(var s in $("#txtEditAssignee").empty(),n)n.hasOwnProperty(s)&&$("#txtEditAssignee").append($("<option>",{value:s,text:n[s]}));$("#hiddenTicketId").val(t.id);var i=e.data.assignUsers;$("#txtEditAssignee").val(i).trigger("change"),setTimeout((function(){$("#txtEditAssignee").val(e.data.assignUsers).trigger("change")}),1e3),stopLoader(),$("#EditAssigneeModal").appendTo("body").modal("show")}},error:function(e){manageAjaxErrors(e)}})})),$(document).on("click","#EditAssigneeModal #btnSaveAssignees",(function(){jQuery(this).button("loading"),window.livewire.emit("updateAssignees",$("#txtEditAssignee").val(),$("#hiddenTicketId").val())})),window.addEventListener("assigneeUpdated",(function(){var e=$("#btnSaveAssignees");$("#EditAssigneeModal").modal("hide"),$("#EditAssigneeModal").on("hidden.bs.modal",(function(){e.button("reset")})),displaySuccessMessage(Lang.get("messages.toast_message.ticket_agent_update"))}))})();