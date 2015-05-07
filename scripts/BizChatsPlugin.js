var Url = "http://dashboard.bizchatbox.com";

var UserName;
var IsContinue = false;
var IsOperatorAvailable = false;
var Rating = true;
var SignalID;
var UserId = "9500f82c";
var BizChatID = BizChatId;
var WidgetID = WidgetId;
var InChatData = [];
var VisitorId;
var Role = "Visitor";
var WidgetName;
var VisitorName;
var ChatUserInfoID;
var ChatData;
var Ip;
var lat;
var lang;
var CountryCode;
var json;
var newURL = window.location.protocol + "//" + window.location.host + "" + window.location.pathname;
var Isopen = false;
var IsNoOperatorcheck = false;
var visitormMsgArr = [];
var VisitorMessage = { VisitorID: "" };
var VisitorData;
var Key;
var InChatData;
var Department = "0";
var DepartmentVisible = false;


jQuery(function ($) {
    Key = Math.floor((Math.random() * 10000) + 1);

    //#region for HTML --------------------------------------------

    $('body').append('<div class="animate chatwindow"><div id="startchat" class="chatwindow"><img id="top-img" class="chat-img" src="" /><table class="chattable"><tr class="chattableraw"><td id="starthead" class="hedertext"></td><td class="hederbtn"><a href="#" style="padding-left: 14%;"><img id="minimize" class="btnimg btnmini" src="' + Url + '/Content/images/icon/plus.png" alt="' + Url + '/Content/images/icon/plus.png" /></a></td></tr><tr id="name-box"><td colspan="2"><div class="name-messages"><h3 style="display:none" id="lblintro"></h3><input id="txtname" class="nameinput" style="margin-top:5%;" /><input id="txtemails" class="nameinput" /><select class="nameinput DrpDepartment" style="height: 28px;width: 87%;"></select><label id="lblmsg" style="margin-left: 6%;font-family: calibri;font-weight: bold;">Message</label><textarea id="txtquestion" class="quesinput"></textarea><button class="btnsendreq" id="namebtn" style="margin-left: 35%;"></button><div style="display: block; width: 100% !important; font-size: 10px !important;font-family:Calibri; margin-bottom: 10px !important; text-align: center !important;"><span style="font-size: 12px !important;">Powered by </span><a target="_blank" href="http://www.bizchatbox.com/" style="font-size: 12px !important; text-decoration: underline !important;">BizChatBox.com</a></div></div></td></tr></table><img id="bottom-img" class="chat-img" src="" /></div><div id="Nooperator" class="chatwindow"><table class="chattable"><tr class="chattableraw"><td id="noophead" class="hedertext"></td><td class="hederbtn"><a href="#" style="padding-left: 14%;"><img id="maxmizes" class="btnimg btnmini" src="' + Url + '/Content/images/icon/plus.png" alt="' + Url + '/Content/images/icon/plus.png" /></a></td></tr><tr id="NoOp-box"><td colspan="2"><div class="name-messages"><label id="lblemailintro" style="font-style: italic;"></label><p></p><input id="noopname" class="nameinput" placeholder="Name" /><input id="noopemails" class="nameinput" placeholder="Email"/><textarea id="noopquestion" class="quesinput" placeholder="What can we help with?"></textarea><button id="btnsendemail" style="margin-left: 35%;"></button><div style="display: block; width: 100% !important; font-size: 10px !important;font-family:Calibri; margin-bottom: 10px !important; text-align: center !important;"><span style="font-size: 12px !important;">Powered by </span><a target="_blank" href="http://www.bizchatbox.com/" style="font-size: 12px !important; text-decoration: underline !important;">BizChatBox.com</a></div></div></td></tr></table></div><div id="NooperatorSent" class="chatwindow"><table class="chattable"><tr class="chattableraw"><td id="noopsenthead" class="hedertext">No Operators Available</td><td id="Nooprefresh" class="hederbtn"><a href="#"><img id="refreshSendMail" style="width: 32px;" class="btnimg" src="' + Url + '/Content/images/icon/refresh.png" alt="' + Url + '/Content/images/icon/refresh.png" /></a></td><td class="hederbtn"><a href="#" style="padding-left: 14%;"><img id="" class="btnimg btnmini" src="' + Url + '/Content/images/icon/plus.png" alt="' + Url + '/Content/images/icon/plus.png" /></a></td></tr><tr id="NoOpSendMail-box"><td colspan="3"><div class="name-messages"><label id="lblemailSent">Email Sent!</label><table style="font-style: italic;"><tr><td>Name:</td><td id="sentname"></td></tr><tr><td>Email:</td><td id="sentemail"></td></tr><tr><td>Qusetion:</td><td id="sentquestion"></td></tr></table></div></td></tr></table></div><div id="inchat" class="chatwindow"><table class="chattable"><tr class="chattableraw"><td id="inchathead" class="hedertext">Welcome to LiveChat</td><td class="hederbtn"><a href="#" style="padding-left: 14%;"><img class="btnimg btnmini" src="' + Url + '/Content/images/icon/plus.png" alt="' + Url + '/Content/images/icon/plus.png" /></a></td><td class="hederbtn"><a href="#" style="padding-left:14%;"><img id="btnclosechat" style="width: 15px;" class="btnimg" src="' + Url + '/Content/images/icon/close.png" alt="' + Url + '/Content/images/icon/close.png" /></a></td></tr><tr id="message-box"><td colspan="3"><div id="operatorimgdiv" class="name-messages" style="height: 56px;overflow: hidden;"><div style="width:72%; float:left;"><div style="width:23%; float:left; border:1px solid #808080; height: 52px; margin-right:2px;"><img id="operatorprofileimg" style="height: 52px;width: 60px;" src="' + Url + '/Content/image/customer_support-128.png" alt="" /></div><div style="width:74%; float:left;"><div id="operatorname" style="font-size: 20px;font-weight: bold;line-height: 1.5em;"></div><div id="operatorrole" style="font-size:14px;"></div></div></div><div style="width:28%; float:left; margin-top: 5%; margin-left: -5.5%;"><div style="float:right;"><a href="#" class="chatlike" id="chatlikes"><img style="margin-top: 4%;" src="' + Url + '/Content/images/icon/small-like-icon.png" alt="' + Url + '/Content/images/icon/small-like-icon.png" /></a>&nbsp;|&nbsp;<a href="#" class="chatlike" id="chatdislikes"><img src="' + Url + '/Content/images/icon/small-dislike-icon.png" alt="' + Url + '/Content/images/icon/small-dislike-icon.png" /></a>&nbsp;|&nbsp;<a href="#"><img src="' + Url + '/Content/images/icon/mail-icon.png" alt="' + Url + '/Content/images/icon/mail-icon.png" /></a></div></div></div><div id="defchat" class="name-messages" style="min-height: 270px;"></div><div id="conchat" class="name-messages" style="min-height: 270px;max-height: 270px; border-bottom: white; word-break: break-all;"><div id="joinchat"></div></div><div id="imgtyping" class="name-messages" style="border-top: white;"></div><div class="name-messages"><textarea class="messinput" placeholder="Enter Your Message and press Enter to send" style="float: left;width: 87%;"></textarea><img id="MessageSend" src="' + Url + '/Content/image/arrow-right-01-20.png" alt="" style="margin-top: 5%;float:left;" /><div style="display: block; width: 100% !important; font-size: 10px !important;font-family:Calibri; margin-bottom: 10px !important; text-align: center !important;"><span style="font-size: 12px !important;">Powered by </span><a target="_blank" href="http://www.bizchatbox.com/" style="font-size: 12px !important; text-decoration: underline !important;">BizChatBox.com</a></div></div></td></tr></table></div><div id="closechat" class="chatwindow"><table class="chattable"><tr class="chattableraw"><td id="closehead" class="hedertext"></td><td id="clschatrefresh" class="hederbtn"><a href="#"><img id="refreshafterchats" style="width: 32px;" class="btnimg refreshclschats" src="' + Url + '/Content/images/icon/refresh.png" alt="' + Url + '/Content/images/icon/refresh.png" /></a></td><td class="hederbtn"><a href="#" style="padding-left: 14%;"><img class="btnimg btnmini" src="' + Url + '/Content/images/icon/plus.png" alt="' + Url + '/Content/images/icon/plus.png" /></a></td></tr><tr id="close-box"><td colspan="3"><div class="name-messages"><p class="clschatmsg"></p><img class="like-img" id="like" src="' + Url + '/Content/images/like.png" alt="" style="margin-left: 30%;" /><img class="like-img" id="dislike" style="margin-left: 7%;" src="' + Url + '/Content/images/dislike.png" alt="" /><br /><textarea id="txtcoments" class="quesinput" placeholder="Leave your comment here (optional)"></textarea><button id="commentsend" type="button" style="margin-left: 10%;width:30%;">Send</button><button id="commentcancel" type="button" style="margin-left: 15%;width:30%;">Cancel</button><div style="display: block; width: 100% !important; font-size: 10px !important;font-family:Calibri; margin-bottom: 10px !important; text-align: center !important;"><span style="font-size: 12px !important;">Powered by </span><a target="_blank" href="http://www.bizchatbox.com/" style="font-size: 12px !important; text-decoration: underline !important;">BizChatBox.com</a></div></div></td></tr></table></div><div id="Likechat" class="chatwindow"><table class="chattable"><tr class="chattableraw"><td id="likehead" class="hedertext"></td><td id="likerefresh" class="hederbtn"><a href="#"><img id="refreshafterlike" style="width: 32px;" class="btnimg refreshclschats" src="' + Url + '/Content/images/icon/refresh.png" alt="' + Url + '/Content/images/icon/refresh.png" /></a></td><td class="hederbtn"><a href="#" style="padding-left: 14%;"><img class="btnimg btnmini" src="' + Url + '/Content/images/icon/plus.png" alt="' + Url + '/Content/images/icon/plus.png" /></a></td></tr><tr id="like-box"><td colspan="3"><div class="name-messages"><p class="clschatmsg"></p><img class="likeimg" id="likes" src="' + Url + '/Content/images/like.png" alt="" style="margin-left: 30%;" /><img class="likeimg" id="dislikes" src="' + Url + '/Content/images/dislike.png" alt="" /><p id="likemsg" class="inchatmsg"></p><p class="inchatmsg"><a class="likechatdwld" href="#"></a></p><div style="display: block; width: 100% !important; font-size: 10px !important;font-family:Calibri; margin-bottom: 10px !important; text-align: center !important;"><span style="font-size: 12px !important;">Powered by </span><a target="_blank" href="http://www.bizchatbox.com/" style="font-size: 12px !important; text-decoration: underline !important;">BizChatBox.com</a></div></div></td></tr></table></div></div>');

    //#endregion --------------------------------------------------------------

    $.connection.hub.url = Url + "/signalr";

    var chat = $.connection.chatHub;

    $(document).on('click', '.btnmini', function () {
        var img = $(this)[0].src;
        var aa = img.substring($(this)[0].src.length - 9, $(this)[0].src.length);
        if (aa == "minus.png") {
            $(".btnmini").attr('src', Url + '/Content/images/icon/plus.png');
            //$('#tdupdown').show();
            Isopen = false;
        }
        else {
            $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
            //$('#tdupdown').hide();
            Isopen = true;
        }

        $("#name-box").toggle('fast');
        $("#message-box").toggle('fast');
        $("#close-box").toggle('fast');
        $("#NoOp-box").toggle('fast');
        $('#like-box').toggle('fast');
        $("#NoOpSendMail-box").toggle('fast');
    });

    $(document).on('click', '.hedertext', function () {
        var img = $('.btnmini')[0].src;
        var aa = img.substring(img.length - 9, img.length);
        if (aa == "minus.png") {
        }
        else {
            $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
            Isopen = true;
            //$('#tdupdown').hide();
            $("#name-box").toggle('fast');
            $("#message-box").toggle('fast');
            $("#close-box").toggle('fast');
            $("#NoOp-box").toggle('fast');
            $("#NoOpSendMail-box").toggle('fast');
            $('#like-box').toggle('fast');
        }
    });

    $('#startchat').hide();
    $('#inchat').hide();
    $('#closechat').hide();
    $('#Nooperator').hide();
    $('#NooperatorSent').hide();
    $('#defchat').hide();
    $("#imgtyping").hide();
    $('#Likechat').hide();

    $.connection.hub.start().done(function () {
        jQuery.ajax({
            url: 'https://freegeoip.net/json/',
            type: 'POST',
            dataType: 'jsonp',
            success: function (location) {
                lat = location.latitude;
                lang = location.longitude;
                CountryCode = location.country_code.toLowerCase();
                Ip = location.ip;
            }
        });

        if (JSON.parse(localStorage.getItem("StorageData")) != null) {
            IsContinue = true;
            Isopen = true;
            ChatUserInfoID = JSON.parse(localStorage.getItem("StorageData")).ChatUserInfoID;
        }
        if (localStorage.getItem("VisitorID") != null) {
            IsContinue = true;
            Isopen = true;
            VisitorId = localStorage.getItem("VisitorID");
        }
        chat.server.operatorCheckSend(BizChatID);

        chat.server.getWidgetDataSend(BizChatID, ChatUserInfoID, VisitorId, WidgetID, chat.connection.id, Key);

        $(document).on('click', '#namebtn', function () {
            var name = $.trim($("#txtname").val());
            var email = $.trim($('#txtemails').val());
            var question = $.trim($('#txtquestion').val());
            if (DepartmentVisible) {
                Department = $('.DrpDepartment').val();
            }
            var WidgetName = json.WidgetsName;
            VisitorName = name;
            SignalID = chat.connection.id;
            var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
            InChat(InChatData, VisitorName);

            if (email == "") {
                if (name != "") {
                    chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, name, email, question, Ip, newURL, lat, lang, Department, CountryCode);
                    $('#startchat').hide();
                    $('#inchat').show();
                    $('#defchat').show();
                    $('#inchathead').text("Welcome to LiveChat");
                    $("#txtname").val("");
                    $("#txtemails").val("");
                    $('#txtquestion').val("");
                } else {
                    alert("please Enter Name..!");
                }
            } else {
                if (name != "") {
                    if (filter.test(email)) {
                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, name, email, question, Ip, newURL, lat, lang, Department, CountryCode);
                        $('#startchat').hide();
                        $('#inchat').show();
                        $('#defchat').show();
                        // $('#inchathead').text("chat with us!");

                        $("#txtname").val("");
                        $("#txtemails").val("");
                        $('#txtquestion').val("");
                    }
                    else {
                        alert("please Enter Valid E-mail..!");
                    }
                } else {
                    alert("please Enter Name..!");
                }
            }

            if (!Isopen) {
                Isopen = true;
                $("#name-box").toggle('fast');
                $("#message-box").toggle('fast');
                $("#close-box").toggle('fast');
                $("#NoOp-box").toggle('fast');
                $("#NoOpSendMail-box").toggle('fast');
                $('#like-box').toggle('fast');
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
            }

        });

        $(document).on('click', '#MessageSend', function () {
            $('#defchat').hide();
            $('#conchat').show();
            var val = $.trim($('.messinput').val());
            if (val != "") {
                SignalID = chat.connection.id;
                var DateTime = new Date();
                if (ChatData != null) {
                    if (IsNoOperatorcheck) {
                        if (ChatData.ChatMessages != null || ChatData.ChatMessages != undefined) {
                            ChatData.ChatMessages.push({ ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role });
                            $("#conchat").append('<div class="message-me"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url + '/Content/images/avatars/1avatar-operator.png"></div><div style="float: left;margin-left: 10px;"><strong>' + VisitorName + '</strong></div><div class="message-time"><span>' + getDateTime(new Date()) + '</span></div></div><div><span class="message">' + val + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                            $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                            // inChatSend Method Name Chnage
                            chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, ChatData.ChatUserInfoID, WidgetID, WidgetName, val, new Date(), Role);
                        }
                    } else {
                        var ChatMessages = { ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role };

                        ChatData.ChatMessages.push(ChatMessages);
                        $("#conchat").append('<div class="message-me"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url + '/Content/images/avatars/1avatar-operator.png"></div><div style="float: left;margin-left: 10px;"><strong>' + VisitorName + '</strong></div><div class="message-time"><span>' + getDateTime(new Date()) + '</span></div></div><div><span class="message">' + val + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                        $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                        chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, ChatUserInfoID, WidgetID, "", val, new Date(), Role);
                    }
                }
                else {

                    var ChatMessages = { ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role };

                    $("#conchat").append('<div class="message-me"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url + '/Content/images/avatars/1avatar-operator.png"></div><div style="float: left;margin-left: 10px;"><strong>' + VisitorName + '</strong></div><div class="message-time"><span>' + getDateTime(new Date()) + '</span></div></div><div><span class="message">' + val + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                    $('#conchat').append('<div class="inchatmsg">An operator has not yet connected. Dont worry, an operator will be by shortly! When they connect, they all see all the messages you have sent so far.</div>');
                    $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                    chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, null, WidgetID, "", val, new Date(), Role);
                }

            }
            $('.messinput').val("");
        });

        $('.messinput').keypress(function (e) {

            chat.server.checkTypingSend(VisitorId, VisitorName, BizChatID, VisitorId, ChatUserInfoID, WidgetID, WidgetName);
            if (e.keyCode == 13) {
                $('#defchat').hide();
                $('#conchat').show();
                var val = $.trim($(this).val());
                if (val != "") {
                    SignalID = chat.connection.id;
                    var DateTime = new Date();
                    if (ChatData != null) {
                        if (IsNoOperatorcheck) {
                            if (ChatData.ChatMessages != null || ChatData.ChatMessages != undefined) {
                                ChatData.ChatMessages.push({ ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role });
                                $("#conchat").append('<div class="message-me"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url + '/Content/images/avatars/1avatar-operator.png"></div><div style="float: left;margin-left: 10px;"><strong>' + VisitorName + '</strong></div><div class="message-time"><span>' + getDateTime(new Date()) + '</span></div></div><div><span class="message">' + val + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                                $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                                // inChatSend Method Name Chnage
                                chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, ChatData.ChatUserInfoID, WidgetID, WidgetName, val, new Date(), Role);
                            }
                        } else {
                            var ChatMessages = { ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role };

                            ChatData.ChatMessages.push(ChatMessages);
                            $("#conchat").append('<div class="message-me"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url + '/Content/images/avatars/1avatar-operator.png"></div><div style="float: left;margin-left: 10px;"><strong>' + VisitorName + '</strong></div><div class="message-time"><span>' + getDateTime(new Date()) + '</span></div></div><div><span class="message">' + val + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                            $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                            chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, ChatUserInfoID, WidgetID, "", val, new Date(), Role);
                        }
                    }
                    else {

                        var ChatMessages = { ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role };

                        $("#conchat").append('<div class="message-me"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url + '/Content/images/avatars/1avatar-operator.png"></div><div style="float: left;margin-left: 10px;"><strong>' + VisitorName + '</strong></div><div class="message-time"><span>' + getDateTime(new Date()) + '</span></div></div><div><span class="message">' + val + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                        $('#conchat').append('<div class="inchatmsg">An operator has not yet connected. Dont worry, an operator will be by shortly! When they connect, they all see all the messages you have sent so far.</div>');
                        $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                        chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, null, WidgetID, "", val, new Date(), Role);
                    }

                }
                $(this).val("");
                chat.server.removeCheckTypingSend(VisitorId, VisitorName, BizChatID, ChatUserInfoID);
                return false;
            }
        });
        $(".messinput").blur(function () {
            chat.server.removeCheckTypingSend(VisitorId, VisitorName, BizChatID, ChatUserInfoID);
        });

        $(document).on('click', '.like-img', function () {
            if (this.id == "like") {
                chat.server.closeChatSend(UserId, SignalID, true, BizChatID, ChatUserInfoID, VisitorId, "Like");
                $('#likes').show();
                $('#dislikes').hide();
                $('#likes').attr('style', 'margin-left: 42%');

            } else {
                chat.server.closeChatSend(UserId, SignalID, false, BizChatID, ChatUserInfoID, VisitorId, "DisLike");
                $('#likes').hide();
                $('#dislikes').show();
                $('#dislikes').attr('style', 'margin-left: 42%');
            }
            $('#closechat').hide();
            $('#Likechat').show();
            $('#likehead').text("Thank you for contacting us!");
            if (!Isopen) {
                Isopen = true;
                $("#name-box").toggle('fast');
                $("#message-box").toggle('fast');
                $("#close-box").toggle('fast');
                $("#NoOp-box").toggle('fast');
                $("#NoOpSendMail-box").toggle('fast');
                $('#like-box').toggle('fast');
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
            }
            $('#likemsg').text(json.ChatClose.RatingThanks);
            $('.likechatdwld').text(json.ChatClose.Download);
        });

        $(document).on('click', '.chatlike', function () {
            if (this.id == "chatlikes") {
                chat.server.closeChatSend(UserId, SignalID, true, BizChatID, ChatUserInfoID, VisitorId, "Like");
            } else {
                chat.server.closeChatSend(UserId, SignalID, false, BizChatID, ChatUserInfoID, VisitorId, "DisLike");
            }
        });

        $(document).on('click', '#commentsend', function () {
            var Comment = $('#txtcoments').val();
            if (Comment != "") {
                chat.server.commentSend(BizChatID, VisitorId, Comment);
            }
            localStorage.removeItem("StorageData");
            localStorage.removeItem("VisitorID");
            ChatUserInfoID = null;
            ChatData = null;
            location.reload();
        });

        $(document).on('click', '#commentcancel', function () {
            chat.server.commentSend(BizChatID, VisitorId, "");
            localStorage.removeItem("StorageData");
            localStorage.removeItem("VisitorID");
            ChatUserInfoID = null;
            ChatData = null;
            location.reload();
        });

        $(document).on('click', '#btnsendemail', function () {
            var name = $.trim($("#noopname").val());
            var email = $.trim($('#noopemails').val());
            var question = $.trim($('#noopquestion').val());
            var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
            if (name != "" && email != "" && question != "") {
                if (filter.test(email)) {
                    chat.server.noOperatorSend(BizChatID, name, email, question);
                    $("#noopname").val("");
                    $("#noopemails").val("");
                    $('#noopquestion').val("");
                } else {
                    alert("Please Enter Vaild Email..!");
                }
            } else {
                alert("Please Enter Name, Email and Question..!");
            }
            if (!Isopen) {
                Isopen = true;
                $("#name-box").toggle('fast');
                $("#message-box").toggle('fast');
                $("#close-box").toggle('fast');
                $("#NoOp-box").toggle('fast');
                $("#NoOpSendMail-box").toggle('fast');
                $('#like-box').toggle('fast');
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
            }
        });

        $(document).on('click', '#refreshSendMail', function () {
            $('#Nooperator').show();
            $('#NooperatorSent').hide();
            if (!Isopen) {
                Isopen = true;
            } else {
                Isopen = false;
                $("#name-box").toggle('fast');
                $("#message-box").toggle('fast');
                $("#close-box").toggle('fast');
                $("#NoOp-box").toggle('fast');
                $("#NoOpSendMail-box").toggle('fast');
                $('#like-box').toggle('fast');
                $(".btnmini").attr('src', Url + '/Content/images/icon/plus.png');
            }
        });

        $(document).on('click', '#btnclosechat', function () {
            chat.server.closeActiveVisitorChatSend(VisitorId, BizChatID, ChatUserInfoID, "false")
        });

        $(document).on('click', '#refreshafterchats', function () {
            localStorage.removeItem("StorageData");
            localStorage.removeItem("VisitorID");
            ChatUserInfoID = null;
            ChatData = null;
            location.reload();

        });

        $(document).on('click', '#refreshafterlike', function () {
            localStorage.removeItem("StorageData");
            localStorage.removeItem("VisitorID");
            ChatUserInfoID = null;
            ChatData = null;
            location.reload();

        });

        $(document).on('click', '.likechatdwld', function () {
            var DateTime = new Date().toString();
            var TimeZone1 = DateTime.substring(DateTime.indexOf("("), DateTime.indexOf(")"));
            var TimeZone = TimeZone1.substring(1, TimeZone1.length);
            window.location = "/Home/Demo?" + "chatuserinfoid=" + ChatUserInfoID + "&TimeZone=" + TimeZone;
        });
    });

    chat.client.OperatorAvailable = function (GetBizChatID, GetStatus) {
        if (GetBizChatID == BizChatID) {
            if (GetStatus == true) {
                IsOperatorAvailable = true;
            } else {
                IsOperatorAvailable = false;
            }
        }
    }

    chat.client.GetWidgetData = function (Data, ChatInfo, VisitorMessageData, GetBizChatID, GetKey, GetDepartments) {
        if (BizChatID == GetBizChatID) {
            if (Key == GetKey) {
                if (ChatInfo.ChatUserInfoID != null) {
                    if (ChatInfo.ChatStatus != "Close") {
                        VisitorName = ChatInfo.VisitorName;
                        ChatUserInfoID = ChatInfo.ChatUserInfoID;
                        VisitorId = ChatInfo.VisitorId;
                        ChatData = ChatInfo;
                    }
                    else {
                        localStorage.removeItem("StorageData");
                        localStorage.removeItem("VisitorID");
                        ChatUserInfoID = null;
                        ChatData = null;
                        location.reload();
                    }
                }
                if (VisitorMessageData.VisitorId != null) {

                    VisitorName = VisitorMessageData.VisitorName;
                    VisitorId = VisitorMessageData.VisitorId;
                    VisitorData = VisitorMessageData;
                }
                if (Data.JsonString != null) {
                    json = JSON.parse(Data.JsonString);
                    InChatData = json.InChat;
                    for (var i in GetDepartments) {
                        $('.DrpDepartment').append('<option value="' + GetDepartments[i].DepartmentId + '">' + GetDepartments[i].DepartmentName + '</option>');
                    }
                    setTimeout(function () {
                        BindWidget(json);
                    }, 1000);
                }
            }
        }
    };

    chat.client.CloseActiveVisitorChat = function (GetVisitorId, GetBizChatID, GetChatUserInfoID, GetIspermanent) {
        if (VisitorId == GetVisitorId && ChatUserInfoID == GetChatUserInfoID && BizChatID == GetBizChatID) {
            localStorage.removeItem("StorageData");
            localStorage.removeItem("VisitorID");
            ChatUserInfoID = GetChatUserInfoID;
            ChatData = null;
            $('#startchat').hide();
            $('#inchat').hide();
            $('#closechat').show();
            if (!Isopen) {
                Isopen = true;
                $("#name-box").toggle('fast');
                $("#message-box").toggle('fast');
                $("#close-box").toggle('fast');
                $("#NoOp-box").toggle('fast');
                $('#like-box').toggle('fast');
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
            }
        }
    }

    chat.client.CloseActiveChat = function (GetUserId, GetBizChatID, GetChatUserInfoID, GetIspermanent) {
        if (ChatUserInfoID == GetChatUserInfoID && BizChatID == GetBizChatID) {
            localStorage.removeItem("StorageData");
            localStorage.removeItem("VisitorID");
            ChatUserInfoID = GetChatUserInfoID;
            ChatData = null;
            $('#startchat').hide();
            $('#inchat').hide();
            $('#closechat').show();
            $('#like-box').toggle('fast');
            if (!Isopen) {
                Isopen = true;
                $("#name-box").toggle('fast');
                $("#message-box").toggle('fast');
                $("#close-box").toggle('fast');
                $("#NoOp-box").toggle('fast');
                $('#like-box').toggle('fast');
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
            }
        }
    }

    chat.client.GetFirstOperatorJoinInChat = function (GetBizChatId, GetChatUserInfoID, GetChatData, GetData, GetDesignation) {
        if (ChatData != undefined && ChatData != null) {
            if (BizChatID == GetBizChatId) {
                if (GetChatUserInfoID == ChatData.ChatUserInfoID) {
                    if (VisitorId == ChatData.VisitorId) {
                        for (var i in GetData.ChatMessages) {
                            $('#operatorname').text(GetData.ChatMessages[i].SenderName);
                            if (GetData.ChatMessages[i].ImageUrl == "") {
                                $('#operatorprofileimg').attr('src', '' + Url + '/Content/images/avatars/1avatar-operator.png');
                            } else {
                                $('#operatorprofileimg').attr('src', Url + GetData.ChatMessages[i].ImageUrl);
                            }
                            $('#operatorrole').text(GetDesignation);
                            if (GetData.ChatMessages[i].IsJoin == "true") {
                                //$('#inchathead').text("chat with  " + GetData.ChatMessages[i].SenderName);
                                $('#conchat').append('<div class="inchatmsg">' + GetData.ChatMessages[i].Messagetext + '</div>');
                            } else {
                                $("#conchat").append('<div class="message-you"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url + GetData.ChatMessages[i].ImageUrl + '"></div><div style="float: left;margin-left: 10px;"><strong>' + GetData.ChatMessages[i].SenderName + '</strong></div><div class="message-time"><span>' + getDateTime(GetData.ChatMessages[i].MessageTime) + '</span></div></div><div><span class="message">' + GetData.ChatMessages[i].Messagetext + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                                $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                                $("#conchat").show();
                                $('#defchat').hide();
                            }
                            ChatData.ChatMessages.push(GetData.ChatMessages[i]);
                        }
                    }
                }
            }
        }
    };

    chat.client.GetOperatorMessageInChat = function (GetBizChatId, GetChatUserInfoID, GetChatData, GetData, GetDesignation) {
        if (ChatData != undefined && ChatData != null) {
            if (BizChatID == GetBizChatId) {
                if (GetChatUserInfoID == ChatData.ChatUserInfoID) {
                    if (VisitorId == ChatData.VisitorId) {
                        for (var i in GetData.ChatMessages) {
                            //$('#operatorname').text(GetData.ChatMessages[i].SenderName);
                            //$('#operatorprofileimg').attr('src', GetData.ChatMessages[i].ImageUrl);
                            //$('#operatorrole').text(GetDesignation);
                            if (GetData.ChatMessages[i].IsJoin == "true") {
                                //$('#inchathead').text("chat with  " + GetData.ChatMessages[i].SenderName);
                                $('#conchat').append('<div class="inchatmsg">' + GetData.ChatMessages[i].Messagetext + '</div>');
                            } else {
                                $("#conchat").append('<div class="message-you"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url+GetData.ChatMessages[i].ImageUrl + '"></div><div style="float: left;margin-left: 10px;"><strong>' + GetData.ChatMessages[i].SenderName + '</strong></div><div class="message-time"><span>' + getDateTime(GetData.ChatMessages[i].MessageTime) + '</span></div></div><div><span class="message">' + GetData.ChatMessages[i].Messagetext + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                                $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                                $("#conchat").show();
                                $('#defchat').hide();
                            }
                            ChatData.ChatMessages.push(GetData.ChatMessages[i]);
                        }
                    }
                }
            }
        }
    };

    chat.client.StartChatWithVisitor = function (getTabdata, GetUserId) {
        flag = true;
        if (BizChatID == getTabdata.BizChatId) {
            if (VisitorId == getTabdata.VisitorId) {
                IsNoOperatorcheck = true;
                localStorage.setItem("StorageData", JSON.stringify(getTabdata));
                UserName = getTabdata.OperatorName;
                ChatUserInfoID = getTabdata.ChatUserInfoID;
                ChatData = getTabdata;
                $("#conchat").show();
                $("#operatorimgdiv").show();
                $('#defchat').hide();
                $("#imgtyping").hide();
                //$('#inchathead').text("chat with  " + getTabdata.OperatorName);
                // $('#operatorname').text(getTabdata.OperatorName);
                //$('#operatorprofileimg').attr('src', getTabdata.OperatorImage);
                //for (var i in getTabdata.ChatUserLists) {
                //    if (getTabdata.ChatUserLists[i].Type != "Visitor") {
                //        $('#operatorrole').text(getTabdata.ChatUserLists[i].Type);
                //    }
                //}
                ChatContent(getTabdata.ChatMessages);
            }
        }
    }

    chat.client.FirstTimerChatBind = function (GetBizChatID, GetChatUserInfoID, GetOperatorId, GetOperatorName, GetRole, GetDatas, GetDesignation) {
        if (ChatData != undefined && ChatData != null) {
            if (BizChatID == GetBizChatID) {
                if (GetChatUserInfoID == ChatData.ChatUserInfoID) {
                    $('#conchat').empty();
                    $("#conchat").show();
                    $("#operatorimgdiv").show();
                    $('#defchat').hide();
                    $("#imgtyping").hide();
                    ChatUserInfoID = GetChatUserInfoID;
                    ChatData.ChatMessages = GetDatas.ChatMessages;
                    for (var i in GetDatas.ChatMessages) {
                        $('#operatorname').text(GetDatas.ChatMessages[i].SenderName);
                        if (GetDatas.ChatMessages[i].ImageUrl == "") {
                            $('#operatorprofileimg').attr('src', '' + Url + '/Content/images/avatars/1avatar-operator.png');
                        } else {
                            $('#operatorprofileimg').attr('src', Url+GetDatas.ChatMessages[i].ImageUrl);
                        }
                        $('#operatorrole').text(GetDesignation);
                        if (GetDatas.ChatMessages[i].IsJoin == "true" || GetDatas.ChatMessages[i].IsJoin == "True") {
                            $('#conchat').append('<div class="inchatmsg">' + GetDatas.ChatMessages[i].Messagetext + '</div>');
                        }
                        else {
                            if (GetDatas.ChatMessages[i].Type == "Visitor") {
                                $("#conchat").append('<div class="message-me"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url + '/Content/images/avatars/1avatar-operator.png"></div><div style="float: left;margin-left: 10px;"><strong>' + GetDatas.ChatMessages[i].SenderName + '</strong></div><div class="message-time"><span>' + getDateTime(GetDatas.ChatMessages[i].MessageTime) + '</span></div></div><div><span class="message">' + GetDatas.ChatMessages[i].Messagetext + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                            } else {
                                $("#conchat").append('<div class="message-you"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + GetDatas.ChatMessages[i].ImageUrl + '"></div><div style="float: left;margin-left: 10px;"><strong>' + GetDatas.ChatMessages[i].SenderName + '</strong></div><div class="message-time"><span>' + getDateTime(GetDatas.ChatMessages[i].MessageTime) + '</span></div></div><div><span class="message">' + GetDatas.ChatMessages[i].Messagetext + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                            }
                        }
                        $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                    }
                }
            }
        }
    }

    chat.client.CheckTyping = function (SetUserId, SetUserName, SetBizChatID, SetVisitorId, SetChatUserInfoID, SetWidgetID, SetWidgetName) {
        UserName = SetUserName;
        if (SetBizChatID == BizChatID) {
            if (SetChatUserInfoID == ChatUserInfoID) {
                if (SetUserId != VisitorId) {
                    $("#imgtyping").empty();
                    $("#imgtyping").show();
                    if ($('#imgtyping').hasClass('Typing-' + SetUserId + '-' + SetChatUserInfoID)) {
                    } else {
                        $("#imgtyping").append('<p class="bizchat-message-pinned Typing-' + SetUserId + '-' + SetChatUserInfoID + '" >' + SetUserName + ' is typing<img src ="' + Url + '/Content/images/icon/typing.gif" style="width: 16px;height: 16px;" /></p>');
                        $('.Typing-' + SetUserId + '-' + SetChatUserInfoID).show();
                        $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                    }
                }
            }
        }
    };

    chat.client.RemoveCheckTyping = function (SetUserId, SetUserName, SetBizChatID, SetChatUserInfoID) {
        if (SetBizChatID == BizChatID) {
            if (SetChatUserInfoID == ChatUserInfoID) {
                $("#imgtyping").hide();
                //$('.Typing-' + SetUserId + '-' + SetChatUserInfoID).remove();
            }
        }
    };
    //get First Response from Operator 

    chat.client.GenerateVisitorID = function (GetChatTabData) {
        if (BizChatID == GetChatTabData.BizChatId && SignalID == GetChatTabData.SignalId && WidgetID == GetChatTabData.WidgetId) {
            ChatData = GetChatTabData;
            VisitorId = GetChatTabData.VisitorId;
            VisitorMessage.VisitorID = GetChatTabData.VisitorId;
            localStorage.setItem("VisitorID", GetChatTabData.VisitorId);
        }
    }

    chat.client.AddNewOperatorInCurrentChat = function (SetTabData, SetOperatorId, Time, Message) {
        if (ChatData != undefined && ChatData != null) {
            if (SetTabData.BizChatId == BizChatID) {
                if (SetTabData.ChatUserInfoID == ChatData.ChatUserInfoID) {
                    ChatData.ChatUserLists = SetTabData.ChatUserLists;
                    ChatData.ChatMessages = SetTabData.ChatMessages;
                    $('#conchat').append('<div class="inchatmsg">' + Message + '</div>');
                    $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                }
            }
        }
    }

    chat.client.LeftUserInChat = function (GetVisitorId, GetUserId, GetBizChatID, GetChatUserInfoID, GetWidgetID, GetWidgetName, GetVisitorName, GetMsg, GetTimes, GetRole, GetUserName) {
        if (ChatData != undefined && ChatData != null) {
            if (BizChatID == GetBizChatID && WidgetID == GetWidgetID) {
                if (GetChatUserInfoID == ChatData.ChatUserInfoID) {
                    ChatData.ChatMessages.push({ ImageUrl: null, IsJoin: "true", MessageTime: GetTimes, Messagetext: GetMsg, SenderId: GetUserId, SenderName: GetUserName, Type: GetRole });
                    $('#conchat').append('<div class="inchatmsg">' + GetMsg + '</div>');
                    $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                }
            }
        }
    }

    chat.client.LeaveUserInChat = function (GetVisitorId, GetUserId, GetBizChatID, GetChatUserInfoID, GetWidgetID, GetWidgetName, GetVisitorName, GetMsg, GetTimes, GetRole, GetUserName) {
        if (ChatData != undefined && ChatData != null) {
            if (BizChatID == GetBizChatID && WidgetID == GetWidgetID) {
                if (GetChatUserInfoID == ChatData.ChatUserInfoID) {
                    ChatData.ChatMessages.push({ ImageUrl: null, IsJoin: "true", MessageTime: GetTimes, Messagetext: GetMsg, SenderId: GetUserId, SenderName: GetUserName, Type: GetRole });
                    $('#conchat').append('<div class="inchatmsg">' + GetMsg + '</div>');
                    $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                }
            }
        }
    }

    chat.client.NoOperator = function (GetBizChatID, GetName, GetEmail, GetQuestion) {
        if (GetBizChatID == BizChatID) {
            $('#Nooperator').hide();
            $('#NooperatorSent').show();

            $('#sentname').text(GetName);
            $('#sentemail').text(GetEmail);
            $('#sentquestion').text(GetQuestion);
        }
    }
});

function BindWidget(AllData) {
    jQuery('#defchat').empty();
    jQuery('#conchat').empty();

    jQuery("#top-img").hide();
    jQuery("#bottom-img").hide();
    jQuery("#name-box").toggle();
    jQuery("#message-box").toggle();
    jQuery("#close-box").toggle();
    jQuery("#NoOp-box").toggle();
    jQuery("#NoOpSendMail-box").toggle();
    jQuery("#like-box").toggle();

    SetPosition(AllData.Collapse);
    startchat(AllData);
    CloseChat(AllData.ChatClose);
    SetImgPosition(AllData);
    WidgetsAnimate(AllData.Collapse)

    if (AllData.Enable) {
        jQuery('.chattableraw').css('background-color', AllData.Color);
        jQuery('.btnsendreq').css('background-color', AllData.Color);
        jQuery('#btnsendemail').css('background-color', AllData.Color);
        jQuery('#commentsend').css('background-color', AllData.Color);
        jQuery('#commentcancel').css('background-color', AllData.Color);
    }

    if (AllData.Collapse.ShowWidgetHideButton) {
        jQuery('#btnupdown').show();
    } else { jQuery('#btnupdown').hide(); }
    if (IsOperatorAvailable) {
        if (IsContinue) {
            if (!Isopen) {
                Isopen = true;

            } else {
                Isopen = false;
                jQuery("#name-box").toggle('fast');
                jQuery("#message-box").toggle('fast');
                jQuery("#close-box").toggle('fast');
                jQuery("#NoOp-box").toggle('fast');
                jQuery("#NoOpSendMail-box").toggle('fast');
                jQuery('#like-box').toggle('fast');
                jQuery(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
            }
            jQuery('#inchat').show();
            jQuery('#startchat').hide();
            jQuery('#closechat').hide();
            jQuery('#Nooperator').hide();
            jQuery('#defchat').hide();
            jQuery('#conchat').show();
            jQuery('#operatorimgdiv').show();
            if (ChatUserInfoID != null && ChatUserInfoID != undefined && ChatUserInfoID != "") {
                // jQuery('#inchathead').text("chat with  " + ChatData.OperatorName);
                if (ChatData.OperatorName == "") {
                    jQuery('#operatorname').text("");
                } else {
                    jQuery('#operatorname').text(ChatData.OperatorName);
                }
                if (ChatData.OperatorImage == "") {
                    jQuery('#operatorprofileimg').attr('src', '' + Url + '/Content/images/avatars/1avatar-operator.png');
                } else {
                    jQuery('#operatorprofileimg').attr('src', ChatData.OperatorImage);
                }
                if (ChatData.Designation == null) {
                    jQuery('#operatorrole').text("");
                } else {
                    jQuery('#operatorrole').text(ChatData.Designation);
                }

                ChatContent(ChatData.ChatMessages);
            }
            else if (VisitorId != null && VisitorId != undefined) {
                // jQuery('#inchathead').text("chat with us!");
                ChatContent(VisitorData.VisitorMessages);
            }

        } else {
            jQuery('#defchat').show();
            jQuery('#conchat').hide();
        }
    } else {
        NoOperator(json);
        jQuery('#startchat').hide();
    }
}

//#region for Date

function getDateTime(val) {
    date = new Date(val);
    var minut = date.getMinutes();
    var hour = date.getHours();
    var ampm = hour >= 12 ? 'pm' : 'am';
    var day = date.getDate();
    var month = (date.getMonth() + 1);
    var year = date.getFullYear();

    return hour + ":" + minut + ampm + "." + " " + getSetFormate(day) + " " + getMonthName(month) + " " + year;
}

function getMonthName(val) {
    var month = val;
    var monthyer;
    if (month == 1) {
        monthyer = "Jan";
    } else if (month == 2) {
        monthyer = "Feb";
    } else if (month == 3) {
        monthyer = "Mar";
    } else if (month == 4) {
        monthyer = "Apr";
    } else if (month == 5) {
        monthyer = "May";
    } else if (month == 6) {
        monthyer = "Jun";
    } else if (month == 7) {
        monthyer = "Jul";
    } else if (month == 8) {
        monthyer = "Aug";
    } else if (month == 9) {
        monthyer = "Sep";
    } else if (month == 10) {
        monthyer = "Oct";
    } else if (month == 11) {
        monthyer = "Nov";
    } else if (month == 12) {
        monthyer = "Dec";
    }
    return monthyer;
}

function getSetFormate(val) {
    var number = val;
    var str;
    if (val.toString().length != 1) {
        number = parseInt(val.toString().substring(val.toString().length - 1, val.toString().length));
    }
    if (number == 1) {
        str = "st";
    }
    else if (number == 2) {
        str = "nd";
    }
    else if (number == 1) {
        str = "rd";
    }
    else if (number == 1) {
        str = "rd";
    }
    else if (number == 0 || number >= 4 || number <= 9) {
        str = "th";
    }
    return val + str;
}

//#endregion

function SetPosition(val) {
    //jQuery("#Position").select2("val", val.Position);
    if (val.Position == "Bottom Left") {
        jQuery('.chatwindow').css({ 'bottom': '0', 'left': '0', 'top': '', 'right': '', 'position': 'fixed' });
        jQuery('#btnupdown').attr('src', Url + '/Content/images/icon/arrow-down.png');
        if (val.Type == "Image" || val.Type == "Image and Tab") {

            if (val.Image != 0) {
                jQuery("#top-img").show();
                jQuery("#bottom-img").hide();
            }
            else {
                if (val.IsCustom) {
                    jQuery("#top-img").show();
                    jQuery("#bottom-img").hide();
                }
            }
        }
    } else if (val.Position == "Bottom Right") {
        jQuery('.chatwindow').css({ 'bottom': '0', 'left': '', 'top': '', 'right': '0', 'position': 'fixed' });
        jQuery('#btnupdown').attr('src', Url + '/Content/images/icon/arrow-down.png');
        if (val.Type == "Image" || val.Type == "Image and Tab") {
            if (val.Image != 0) {
                jQuery("#top-img").show();
                jQuery("#bottom-img").hide();
            } else {
                if (val.IsCustom) {
                    jQuery("#top-img").show();
                    jQuery("#bottom-img").hide();
                }
            }
        }
    } else if (val.Position == "Top Left") {
        jQuery('.chatwindow').css({ 'bottom': '', 'left': '0', 'top': '0', 'right': '', 'position': 'fixed' });
        jQuery('#btnupdown').attr('src', Url + '/Content/images/icon/arrow-up.png');
        if (val.Type == "Image" || val.Type == "Image and Tab") {
            if (val.Image != 0) {
                jQuery("#top-img").hide();
                jQuery("#bottom-img").show();
            } else {
                if (val.IsCustom) {
                    jQuery("#top-img").hide();
                    jQuery("#bottom-img").show();
                }
            }
        }
    } else if (val.Position == "Top Right") {
        jQuery('.chatwindow').css({ 'bottom': '', 'left': '', 'top': '0', 'right': '0', 'position': 'fixed' });
        jQuery('#btnupdown').attr('src', Url + '/Content/images/icon/arrow-up.png');
        if (val.Type == "Image" || val.Type == "Image and Tab") {
            if (val.Image != 0) {
                jQuery("#top-img").hide();
                jQuery("#bottom-img").show();
            } else {
                if (val.IsCustom) {
                    jQuery("#top-img").hide();
                    jQuery("#bottom-img").show();
                }
            }
        }
    }
}

function startchat(val) {
    jQuery('#startchat').show();

    jQuery('#starthead').text(val.StartChat.Title);
    jQuery('#lblintro').text(val.StartChat.IntroText);
    jQuery('#txtname').attr('placeholder', val.StartChat.AskforNameInput);
    jQuery('#txtemails').attr('placeholder', 'Email');
    jQuery('#txtemails').val("");
    jQuery('#txtquestion').attr('placeholder', val.StartChat.AskforQuestionInput);
    jQuery('#namebtn').text(val.StartChat.RequestButton);

    if (val.StartChat.AskforName) {
        jQuery('#txtname').show();
    } else {
        jQuery('#txtname').hide();
    }

    if (val.StartChat.AskforEmail) {
        jQuery('#txtemails').show();
    } else {
        jQuery('#txtemails').hide();
    }

    if (val.StartChat.AskforQuestion) {
        jQuery('#txtquestion').show();
        jQuery('#lblmsg').show();
    } else {
        jQuery('#txtquestion').hide();
        jQuery('#lblmsg').hide();
    }

    if (val.StartChat.AskforDepartment) {
        DepartmentVisible = true;
        jQuery('.DrpDepartment').show();
    } else {
        jQuery('.DrpDepartment').hide();
    }
}

function NoOperator(val) {
    jQuery('#noophead').text(val.NoOperators.Title);
    if (val.NoOperators.Action == "Hide Widget") {
        jQuery('#Nooperator').hide();
    } else if (val.NoOperators.Action == "Show Unavailable Message") {
        jQuery('#Nooperator').show();
        jQuery('#lblemailintro').text(val.NoOperators.Message);
        jQuery('#noopname').hide();
        jQuery('#noopemails').hide();
        jQuery('#noopquestion').hide();
        jQuery('#btnsendemail').hide();
    } else if (val.NoOperators.Action == "Show Email Form") {
        jQuery('#Nooperator').show();
        jQuery('#lblemailintro').text(val.NoOperators.EmailIntro);
        jQuery('#noopname').show();
        jQuery('#noopemails').show();
        jQuery('#noopquestion').show();
        jQuery('#btnsendemail').show();
    }
    jQuery('#btnsendemail').text(val.NoOperators.SendButton);
}

function InChat(val, VisitorName) {
    jQuery('#defchat').append('<lable>' + val.Greeting + ' ' + VisitorName + '!</lable><br/>');
    jQuery('#defchat').append('<lable>' + val.Connecting + '</lable>');
    jQuery('#defchat').append('<img src="' + Url + '/Content/images/icon/loadingBar.gif" alt="" style="margin-left: 35%;margin-top: 22%;" />');

    setTimeout(function () {
        jQuery('#defchat').empty();
        jQuery('#defchat').append('<div style="margin-top: 4%;"><img src="' + Url + '/Content/image/50-20.png" alt="" /><span style="margin-left: 4%;" id="noopmsg" class="inchatmsg">' + val.Message + '</span></div>');
    }, 500);
}

function CloseChat(val) {

    if (val.AskforRating) {
        jQuery('#like').show();
        jQuery('#dislike').show();
    } else { jQuery('#like').hide(); jQuery('#dislike').hide(); }

    if (val.CustomLinkButton) {
        jQuery('#btntext').show();
    } else { jQuery('#btntext').hide(); }

    jQuery('#closehead').text(val.Title);
    jQuery('.clschatmsg').text(val.ChatClosed);
    jQuery('#btntext').text(val.ButtonText);
    jQuery('.likechatdwld').text(val.Download);
}

function ChatContent(InChatData) {
    jQuery("#conchat").empty();
    if (InChatData != undefined || InChatData != null) {
        if (InChatData.length > 0) {
            for (var i in InChatData) {
               
                if (InChatData[i].IsJoin == "true" || InChatData[i].IsJoin == "True") {
                    jQuery('#conchat').append('<div class="inchatmsg">' + InChatData[i].Messagetext + '</div>');
                }
                else {
                    if (InChatData[i].Type == "Visitor") {
                        jQuery("#conchat").append('<div class="message-me"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + Url + '/Content/images/avatars/1avatar-operator.png"></div><div style="float: left;margin-left: 10px;"><strong>' + InChatData[i].SenderName + '</strong></div><div class="message-time"><span>' + getDateTime(InChatData[i].MessageTime) + '</span></div></div><div><span class="message">' + InChatData[i].Messagetext + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                    } else {
                        jQuery("#conchat").append('<div class="message-you"><div style="height: 42px;"><div style="float: left;height: auto;"><img style="border-radius: 20px;" height="40" width="40" src="' + InChatData[i].ImageUrl + '"></div><div style="float: left;margin-left: 10px;"><strong>' + InChatData[i].SenderName + '</strong></div><div class="message-time"><span>' + getDateTime(InChatData[i].MessageTime) + '</span></div></div><div><span class="message">' + InChatData[i].Messagetext + '<i class="cus-emoticon-tongue"></i></span></div></div><br />');
                    }
                }
            }
            jQuery("#conchat").scrollTop(jQuery("#conchat")[0].scrollHeight);
        }
    }
}

function SetImgPosition(val) {
    //jQuery("#CollapsedImageId").select2("val", val.Collapse.Image);
    if (val.Collapse.Image != 0) {
        jQuery(".chat-img").attr('src', Url + '/Content/img/TabImg-' + val.Collapse.Image + '.png');
    }
    else {
        if (val.Collapse.IsCustom) {
            jQuery(".chat-img").attr('src', val.Collapse.CustomImageUrl);
        }
    }
    jQuery(".chat-img").css('width', '' + val.Collapse.Scale + '%');
    if (val.Collapse.ImageinfrontofTab == false) {
        jQuery('.chat-img').css({ 'position': '' });
        jQuery('.chattable').css({ 'position': 'relative' });
    } else {
        jQuery('.chat-img').css({ 'position': 'relative' });
        jQuery('.chattable').css({ 'position': '' });
    }

    if (val.Collapse.Position == "Bottom Left" || val.Collapse.Position == "Bottom Right") {
        var vertic = 50 - val.Collapse.Vertical;
        jQuery(".chat-img").css('margin-top', '');
        jQuery(".chat-img").css('margin-bottom', '' + vertic + '%');
    } else {
        var vertic = 50 - val.Collapse.Vertical;
        jQuery(".chat-img").css('margin-bottom', '');
        jQuery(".chat-img").css('margin-top', '' + vertic + '%');
    }

    if (val.Collapse.Position == "Bottom Left" || val.Collapse.Position == "Top Left") {
        if (val.Collapse.Horizontal > 50) {
            var first = (val.Collapse.Horizontal * 130) / 50;
            var second = (first * val.Collapse.Horizontal) / 100;
            var third = second - val.Collapse.Horizontal;
            jQuery(".chat-img").css('margin-left', '' + third + '%');
        } else if (val.Collapse.Horizontal < 50) {
            var first = val.Collapse.Horizontal - 52;
            jQuery(".chat-img").css('margin-left', '' + first + '%');
        } else {
            var first = 25;
            jQuery(".chat-img").css('margin-left', '' + first + '%');
        }

    } else {
        if (val.Collapse.Horizontal > 50) {
            var first = (val.Collapse.Horizontal * 25) / 50;
            var second = first - 25;
            var third = (second * 2);
            var fourth = first + third;
            jQuery(".chat-img").css('margin-left', '' + fourth + '%');
        } else if (val.Collapse.Horizontal < 50) {
            var first = (val.Collapse.Horizontal * 25) / 50;
            var second = first - 25;
            var third = (second * 2);
            var fourth = (first + third) * 2;
            jQuery(".chat-img").css('margin-left', '' + fourth + '%');
        } else {
            var first = 25;
            jQuery(".chat-img").css('margin-left', '' + first + '%');
        }

    }

}

function WidgetsAnimate(val) {
    if (val.PageLoad == "highlight") {
        var options = { direction: '' };
        jQuery(".animate").effect("highlight", options, 1000);
    } else if (val.PageLoad == "puff") {
        var options = { direction: '' };
        jQuery(".animate").hide();
        jQuery(".animate").show("puff", options, 1000);
    } else if (val.PageLoad == "pulsate") {
        var options = { direction: '' };
        jQuery(".animate").effect("pulsate", options, 1000);
    } else if (val.PageLoad == "fold") {
        var options = { direction: '' };
        jQuery(".animate").hide();
        jQuery(".animate").show("fold", options, 1000);
    } else if (val.PageLoad == "fade") {
        var options = { direction: '' };
        jQuery(".animate").hide();
        jQuery(".animate").show("fade", options, 1000);
    } else if (val.PageLoad == "clip") {
        var options = { direction: '' };
        jQuery(".animate").hide();
        jQuery(".animate").show("clip", options, 1000);
    } else if (val.PageLoad == "slideInUp") {
        var options = { direction: 'up' };
        jQuery(".animate").effect("slide", "slow");
    } else if (val.PageLoad == "slideInDown") {
        var options = { direction: 'down' };
        jQuery(".animate").effect("slide", options, 1000);
    } else if (val.PageLoad == "slideInLeft") {
        var options = { direction: 'left' };
        jQuery(".animate").effect("slide", options, 1000);
    } else if (val.PageLoad == "slideInRight") {
        var options = { direction: 'right' };
        jQuery(".animate").effect("slide", options, 1000);
    } else if (val.PageLoad == "bounceIn") {
        var options = { direction: '' };
        jQuery(".animate").effect("bounce", "slow");
    } else if (val.PageLoad == "bounceInUp") {
        var options = { direction: 'up' };
        jQuery(".animate").effect("bounce", options, 1000);
    } else if (val.PageLoad == "bounceInDown") {
        var options = { direction: 'down' };
        jQuery(".animate").effect("bounce", options, 1000);
    } else if (val.PageLoad == "bounceInLeft") {
        var options = { direction: 'left' };
        jQuery(".animate").effect("bounce", options, 1000);
    } else if (val.PageLoad == "bounceInRight") {
        var options = { direction: 'right' };
        jQuery(".animate").effect("bounce", options, 1000);
    }
    json.Collapse.Animate = false;
}