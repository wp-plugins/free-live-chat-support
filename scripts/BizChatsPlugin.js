//var Url = "http://dashboard.bizchatbox.com";

var Url;

//if (window.location.protocol == "http:") {
//    Url = "http://dashboard.bizchatbox.com"
//} else if (window.location.protocol == "https:") {
    Url = "https://dashboard.bizchatbox.com"
//}

function ignoreerror() {
    return true
}
window.onerror = ignoreerror();

var UserName;
var IsContinue = false;
var IsOperatorAvailable = false;
var Rating = true;
var SignalID;
var UserId = "";
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
var IsSendRequest = true;

jQuery(function ($) {
    Key = Math.floor((Math.random() * 10000) + 1);

    //#region for HTML --------------------------------------------------------

    $('body').append('<div class="animate chatwindow"><div id="startchat" class="chatwindow  "><img class="chat-img top-img" src="" style="display:block !important;" /><table class="chattable"><tr class="chattableraw"><td id="starthead" class="hedertext"></td><td class="hederbtn"><a href="#" style="padding-left: 5px;" class="minimizebtn"><img id="minimize" class="btnimg btnmini" style="margin:auto;vertical-align: middle;" src="http://dashboard.bizchatbox.com/plugin/v2/plus.png" alt="http://dashboard.bizchatbox.com/plugin/v2/plus.png" /></a></td></tr><tr id="name-box"><td colspan="2" style="padding:0;"><div class="name-messages"><h4 class="BizchatBox_TitleInfo" id="lblintro"></h4><input id="txtname" class="nameinput" style="" /><div class="error_message" id="name_error" style=""></div><input id="txtemails" class="nameinput" /><div class="error_message" id="email_error" style=""></div><select class="nameinput DrpDepartment" style="height: 32px;width: 90%;"></select><label id="lblmsg" style="margin-left: 6%;font-weight: bold;">Message</label><textarea id="txtquestion" class="quesinput"></textarea><div class="error_message" id="qust_error" style=""></div><center><button class="btnsendreq" id="SendRequest"><a id="sendreqtext" href="#" style="text-decoration:none;color:white;padding: 0px 10px;"></a></button></center><div class="cls"></div><div class="logo-bizchat"><a target="_blank" href="http://www.bizchatbox.com/?utm_source=window.location.pathname&utm_medium=sdfgs&utm_campaign=Iref"><img src="http://dashboard.bizchatbox.com/plugin/v2/gray-logo.png" class="desaturate" width="100"></a></div></div></td></tr></table><img class="chat-img bottom-img" src="" style="display:none !important;" /><div id="spinnerRegion" class="global-spinner" style="display: none;"><div class="spinner-loader"></div></div></div><div id="Nooperator" class="chatwindow  "><img class="chat-img top-img" src="" style="display:none !important;" /><table class="chattable"><tr class="chattableraw"><td id="noophead" class="hedertext"></td><td class="hederbtn"><a href="#" style="padding-left: 5px;" class="minimizebtn"><img id="maxmizes" class="btnimg btnmini" style="margin:auto;vertical-align: middle;" src="http://dashboard.bizchatbox.com/plugin/v2/plus.png" alt="http://dashboard.bizchatbox.com/plugin/v2/plus.png" /></a></td></tr><tr id="NoOp-box"><td colspan="2" style="padding:0;"><div class="name-messages" style="padding:5px;"><label id="lblemailintro"></label><p></p><input id="noopname" class="nameinput" placeholder="Name" /><div class="error_message" id="2name_error" style=""></div><input id="noopemails" class="nameinput" placeholder="Email"/><div class="error_message" id="2email_error" style=""></div><textarea id="noopquestion" class="quesinput" placeholder="What can we help with?"></textarea><div class="error_message" id="2qust_error" style=""></div><center><button id="btnsendemail"><a id="sendnooptext" href="#" style="text-decoration:none;color:white;"></a></button></center><div class="cls"></div><div class="logo-bizchat"><a target="_blank" href="http://www.bizchatbox.com/?utm_source=window.location.pathname&utm_medium=sdfgs&utm_campaign=Iref"><img src="http://dashboard.bizchatbox.com/plugin/v2/gray-logo.png" class="desaturate" width="100"></a></div></div></td></tr></table><img class="chat-img bottom-img" src="" style="display:none !important;" /></div><div id="NooperatorSent" class="chatwindow  "><img class="chat-img top-img" src="" style="display:none !important;" /><table class="chattable"><tr class="chattableraw"><td id="noopsenthead" class="hedertext">No Operators Available</td><td id="Nooprefresh" class="hederbtn"><a href="#"><img id="refreshSendMail" style="width: 32px;" class="btnimg" src="' + Url + '/Content/images/icon/refresh.png" alt="' + Url + '/Content/images/icon/refresh.png" /></a></td><td class="hederbtn"><a href="#" style="padding-left: 4px;" class="minimizebtn"><img id="" class="btnimg btnmini" style="margin:auto;vertical-align: middle;" src="http://dashboard.bizchatbox.com/plugin/v2/plus.png" alt="http://dashboard.bizchatbox.com/plugin/v2/plus.png" /></a></td></tr><tr id="NoOpSendMail-box"><td colspan="3" style="padding:0;"><div class="name-messages" style="height: 75px;padding:10px;"><label id="lblemailSent">email is sent and should go back to the initial page waiting for new chat sessions.</label></div></td></tr></table><img class="chat-img bottom-img" src="" style="display:none !important;" /></div><div id="inchat" class="chatwindow  "><img class="chat-img top-img" src="" style="display:none !important;" /><table class="chattable"><tr class="chattableraw"><td id="inchathead" class="sendreq sendreqbtn">Welcome to LiveChat</td><td class="hederbtn chatbox1"><a href="#" style="padding-left: 4px;" class="sendreqbtn"><img class="btnimg sendreque" src="http://dashboard.bizchatbox.com/plugin/v2/plus.png" alt="http://dashboard.bizchatbox.com/plugin/v2/plus.png" /></a></td><td class="hederbtn"><a href="#"><img id="btnclosechat" style="width: 15px;" class="btnimg" src="' + Url + '/Content/images/icon/close.png" alt="' + Url + '/Content/images/icon/close.png" /></a></td></tr><tr id="message-box"><td colspan="3" style="padding:0;"><div id="operatorimgdiv" class="name-messages" style="height: 56px;overflow: hidden;border-bottom: 5px solid #dcdcdc;"><div style="width:78%; float:left;"><div style="float:left;"><img id="operatorprofileimg" style="height: 40px;width: 40px;margin: 8px;" src="' + Url + '/Content/image/customer_support-128.png" alt="" /></div><div style="float:left;"><div id="operatorname" style="font-size: 20px;font-weight: bold;line-height: 1.5em;"></div><div id="operatorrole" style="font-size:14px;"></div></div></div><div style="width:20%;float: right;margin-top: 5%;margin-right: 2%;"><div class="thumbbox"><a href="#"><img class="chatlike chatlikes" id="chatlikes" style="margin-top: 4%;" src="http://dashboard.bizchatbox.com/plugin/v2/thumbup.svg" alt="' + Url + '/Content/images/small-like-icon.png" /></a>|<a href="#"><img class="chatlike chatdislikes" id="chatdislikes" src="http://dashboard.bizchatbox.com/plugin/v2/thumbdown.svg" alt="' + Url + '/plugin/v2/small-dislike-icon.png" /></a><a style="display:none;" href="#"><img src="' + Url + '/Content/images/icon/mail-icon.png" alt="' + Url + '/Content/images/icon/mail-icon.png" /></a></div></div></div><div id="defchat" class="name-messages" style="min-height: 2px;"></div><div id="conchat" class="name-messages" style="min-height: 220px;max-height: 220px; border-bottom: white;border-top: none; word-break: break-all;overflow-y: auto; display:block!important;"><div class="messages"><div id="chatmsgs"></div></div></div><div id="imgtyping" class="name-messages" style="border-top: white;"></div><div class="name-messages sendmess" style="border-top-width:5px;"><textarea id="sendmsgtext" style="max-width:225px; float:left" class="messinput" rows="3" placeholder="Type and press[enter]" style="float: left;width: 82%;"></textarea><a href="javascript:void(0)"><img id="MessageSend" src="http://dashboard.bizchatbox.com/plugin/v2/send.png" alt="" style="margin-top: 8%;float:left;" /></a><div class="cls"></div><div class="logo-bizchat"><a target="_blank" href="http://www.bizchatbox.com/?utm_source=window.location.pathname&utm_medium=sdfgs&utm_campaign=Iref"><img src="http://dashboard.bizchatbox.com/plugin/v2/gray-logo.png" class="desaturate" width="100"></a></div></div></td></tr></table><img class="chat-img bottom-img" src="" style="display:none !important;" /></div><div id="closechat" class="chatwindow  "><img class="chat-img top-img" src="" style="display:none !important;" /><table class="chattable"><tr class="chattableraw"><td id="closehead" class="hedertext"></td><td id="clschatrefresh" class="hederbtn"><a href="#"><img id="refreshafterchats" style="width: 32px;height: 32px;" class="btnimg refreshclschats" src="' + Url + '/Content/images/icon/refresh.png" alt="' + Url + '/Content/images/icon/refresh.png" /></a></td><td class="hederbtn"><a href="#" style="padding-left: 4px;" class="minimizebtn"><img style="margin-bottom: 1px; margin:auto; vertical-align: middle;" class="btnimg btnmini" src="http://dashboard.bizchatbox.com/plugin/v2/plus.png" alt="http://dashboard.bizchatbox.com/plugin/v2/plus.png" /></a></td></tr><tr id="close-box"><td colspan="3" style="padding:0;"><div class="name-messages"><p style="text-align:center;">Thanks for chatting.</p><p class="clschatmsg"></p><br /><a href="#"><img class="like-img" id="like" src="http://dashboard.bizchatbox.com/plugin/v2/thumbup.svg" alt="" style="margin-left: 35%;" /><img style="margin-left: 7%;" class="like-img" id="dislike" src="http://dashboard.bizchatbox.com/plugin/v2/thumbdown.svg" alt="" /></a><br /><br /><br /><div class="logo-bizchat" ><a target="_blank" href="http://www.bizchatbox.com/?utm_source=window.location.pathname&utm_medium=sdfgs&utm_campaign=Iref"><img src="http://dashboard.bizchatbox.com/plugin/v2/gray-logo.png" class="desaturate" width="100"></a></div></div></td></tr></table><img class="chat-img bottom-img" src="" style="display:none !important;" /></div><div id="spinnerRegion" class="global-spinner" style="display: none;"><div class="spinner-loader" style="top: 45%; left: 49%;"></div></div></div>');

    //#endregion --------------------------------------------------------------

    $.connection.hub.url = Url + "/signalr";

    var chat = $.connection.chatHub;

    var wi = $(window).width();
    if (wi <= 370) {
        $('.chattable').css('width', wi);
    } else {
        $('.chattable').css('width', '300px');
    }

    $(window).resize(function () {
        var wi = $(window).width();
        if (wi <= 370) {
            $('.chattable').css('width', wi);
        } else {
            $('.chattable').css('width', '300px');
        }
    });

    $(document).on('click', '.sendreqbtn', function () {
        IsOperatorAvailable = false;
        chat.server.operatorCheckSend(BizChatID);

        if (lat == null || lat == undefined) {
            lat = "";
        }
        if (lang == null || lang == undefined) {
            lang = "";
        }
        if (CountryCode == null || CountryCode == undefined) {
            CountryCode = "";
        }
        if (Ip == null || Ip == undefined) {
            Ip = "";
        }
        var img = $('.sendreque')[0].src;
        var aa = img.substring(img.length - 9, img.length);
        if (json.Collapse.Position == "Bottom Left" || json.Collapse.Position == "Bottom Right") {
            if (json.Collapse.Type == "Image") {
                if (aa == "minus.png") {
                    $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $(".chattable").hide();
                    $('.top-img').show();

                    ToggleHide();
                }
                else {
                    $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $(".chattable").show();
                    $('.top-img').hide();

                    ToggleShow();
                    if (IsSendRequest) {
                        IsSendRequest = false;
                        SignalID = chat.connection.id;
                        VisitorName = "anonymous";
                        WidgetName = json.WidgetsName;
                        setTimeout(function () {
                            if (IsOperatorAvailable) {
                                if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, "anonymous");
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                    });
                                }
                            } else {
                                $('#inchat').hide();
                                NoOperator(json);
                            }
                        }, 3000);
                    }
                }
            } else if (json.Collapse.Type == "Image and Tab") {
                if (aa == "minus.png") {
                    $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $('.top-img').show();
                }
                else {
                    $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $('.top-img').hide();
                    if (IsSendRequest) {
                        IsSendRequest = false;
                        SignalID = chat.connection.id;
                        VisitorName = "anonymous";
                        WidgetName = json.WidgetsName;
                        setTimeout(function () {
                            if (IsOperatorAvailable) {
                                if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, "anonymous");
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                    });
                                }
                            } else {
                                $('#inchat').hide();
                                NoOperator(json);
                            }
                        }, 3000);
                    }
                }
                ToggleHideShow();
            } else {
                if (aa == "minus.png") {
                    $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                }
                else {
                    $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    if (IsSendRequest) {
                        IsSendRequest = false;
                        SignalID = chat.connection.id;
                        VisitorName = "anonymous";
                        WidgetName = json.WidgetsName;
                        setTimeout(function () {
                            if (IsOperatorAvailable) {
                                if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, "anonymous");
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                    });
                                }
                            } else {
                                $('#inchat').hide();
                                NoOperator(json);
                            }
                        }, 3000);
                    }
                }
                ToggleHideShow();
            }
        } else {
            if (json.Collapse.Type == "Image") {
                if (aa == "minus.png") {
                    $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $(".chattable").hide();
                    $('.bottom-img').show();

                    ToggleHide();
                }
                else {
                    $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $(".chattable").show();
                    $('.bottom-img').hide();

                    ToggleShow();
                    if (IsSendRequest) {
                        IsSendRequest = false;
                        SignalID = chat.connection.id;
                        VisitorName = "anonymous";
                        WidgetName = json.WidgetsName;
                        setTimeout(function () {
                            if (IsOperatorAvailable) {
                                if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, "anonymous");
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                    });
                                }
                            } else {
                                $('#inchat').hide();
                                NoOperator(json);
                            }
                        }, 3000);
                    }
                }
            } else if (json.Collapse.Type == "Image and Tab") {
                if (aa == "minus.png") {
                    $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $('.bottom-img').show();
                }
                else {
                    $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $('.bottom-img').hide();
                    if (IsSendRequest) {
                        IsSendRequest = false;
                        SignalID = chat.connection.id;
                        VisitorName = "anonymous";
                        WidgetName = json.WidgetsName;
                        setTimeout(function () {
                            if (IsOperatorAvailable) {
                                if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, "anonymous");
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                    });
                                }
                            } else {
                                $('#inchat').hide();
                                NoOperator(json);
                            }
                        }, 3000);
                    }
                }
                ToggleHideShow();
            } else {
                if (aa == "minus.png") {
                    $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                }
                else {
                    $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    if (IsSendRequest) {
                        IsSendRequest = false;
                        SignalID = chat.connection.id;
                        VisitorName = "anonymous";
                        WidgetName = json.WidgetsName;
                        setTimeout(function () {
                            if (IsOperatorAvailable) {
                                if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, "anonymous");
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                    });
                                }
                            } else {
                                $('#inchat').hide();
                                NoOperator(json);
                            }
                        }, 3000);
                    }
                }
                ToggleHideShow();
            }
        }

        //$("#name-box").toggle('fast');
        //$("#message-box").toggle('fast');
        //$("#close-box").toggle('fast');
        //$("#NoOp-box").toggle('fast');
        //$("#NoOpSendMail-box").toggle('fast');
    });

    $(document).on('click', '.minimizebtn', function () {
        $('#spinnerRegion').hide();
        var img = $('.btnmini')[0].src;
        var aa = img.substring(img.length - 9, img.length);
        if (json.Collapse.Position == "Bottom Left" || json.Collapse.Position == "Bottom Right") {
            if (json.Collapse.Type == "Image") {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $(".chattable").hide();
                    $('.top-img').show();
                    ToggleHide();
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $(".chattable").show();
                    $('.top-img').hide();
                    ToggleShow();
                }
            } else if (json.Collapse.Type == "Image and Tab") {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $('.top-img').show();
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $('.top-img').hide();
                }
                ToggleHideShow();
            } else {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                }
                ToggleHideShow();
            }
        } else {
            if (json.Collapse.Type == "Image") {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $(".chattable").hide();
                    $('.bottom-img').show();
                    ToggleHide();
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $(".chattable").show();
                    $('.bottom-img').hide();
                    ToggleShow();
                }
            } else if (json.Collapse.Type == "Image and Tab") {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $('.bottom-img').show();
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $('.bottom-img').hide();
                }
                ToggleHideShow();
            } else {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                }
                ToggleHideShow();
            }
        }
        //$("#name-box").toggle('fast');
        //$("#message-box").toggle('fast');
        //$("#close-box").toggle('fast');
        //$("#NoOp-box").toggle('fast');
        //$("#NoOpSendMail-box").toggle('fast');
    });

    $(document).on('click', '.top-img', function () {
        IsOperatorAvailable = false;
        chat.server.operatorCheckSend(BizChatID);

        if (lat == null || lat == undefined) {
            lat = "";
        }
        if (lang == null || lang == undefined) {
            lang = "";
        }
        if (CountryCode == null || CountryCode == undefined) {
            CountryCode = "";
        }
        if (Ip == null || Ip == undefined) {
            Ip = "";
        }
        var img = $('.btnmini')[0].src;
        var aa = img.substring(img.length - 9, img.length);
        if (json.Collapse.Position == "Bottom Left" || json.Collapse.Position == "Bottom Right") {
            if (json.Collapse.Type == "Image") {
                if (aa == "minus.png") {
                    $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $(".chattable").hide();
                    $('.top-img').show();
                    ToggleHide();
                }
                else {
                    $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $(".chattable").show();
                    $('.top-img').hide();
                    ToggleShow();
                    if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                        if (IsSendRequest) {
                            IsSendRequest = false;
                            SignalID = chat.connection.id;
                            VisitorName = "anonymous";
                            WidgetName = json.WidgetsName;
                            setTimeout(function () {
                                if (IsOperatorAvailable) {
                                    if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                        $('#spinnerRegion').show();
                                        jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                            var location = JSON.parse(data);
                                            lat = location.latitude;
                                            lang = location.longitude;
                                            CountryCode = location.country_code.toLowerCase();
                                            Ip = location.ip;
                                            //hide spinner
                                            $('#spinnerRegion').hide();
                                            InChat(InChatData, "anonymous");
                                            chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                        });
                                    }
                                } else {
                                    $('#inchat').hide();
                                    NoOperator(json);
                                }
                            }, 3000);
                        }
                    }
                }
            } else if (json.Collapse.Type == "Image and Tab") {
                if (aa == "minus.png") {
                    $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $('.top-img').show();
                }
                else {
                    $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $('.top-img').hide();
                    if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                        if (IsSendRequest) {
                            IsSendRequest = false;
                            SignalID = chat.connection.id;
                            VisitorName = "anonymous";
                            WidgetName = json.WidgetsName;
                            setTimeout(function () {
                                if (IsOperatorAvailable) {
                                    if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                        $('#spinnerRegion').show();
                                        jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                            var location = JSON.parse(data);
                                            lat = location.latitude;
                                            lang = location.longitude;
                                            CountryCode = location.country_code.toLowerCase();
                                            Ip = location.ip;
                                            //hide spinner
                                            $('#spinnerRegion').hide();
                                            InChat(InChatData, "anonymous");
                                            chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                        });
                                    }
                                } else {
                                    $('#inchat').hide();
                                    NoOperator(json);
                                }
                            }, 3000);
                        }
                    }
                }
                ToggleHideShow();
            } else {
                if (aa == "minus.png") {
                    $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                }
                else {
                    $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                        if (IsSendRequest) {
                            IsSendRequest = false;
                            SignalID = chat.connection.id;
                            VisitorName = "anonymous";
                            WidgetName = json.WidgetsName;
                            setTimeout(function () {
                                if (IsOperatorAvailable) {
                                    if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                        $('#spinnerRegion').show();
                                        jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                            var location = JSON.parse(data);
                                            lat = location.latitude;
                                            lang = location.longitude;
                                            CountryCode = location.country_code.toLowerCase();
                                            Ip = location.ip;
                                            //hide spinner
                                            $('#spinnerRegion').hide();
                                            InChat(InChatData, "anonymous");
                                            chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                        });
                                    }
                                } else {
                                    $('#inchat').hide();
                                    NoOperator(json);
                                }
                            }, 3000);
                        }
                    }
                }
                ToggleHideShow();
            }
        }

        //$("#name-box").toggle('fast');
        //$("#message-box").toggle('fast');
        //$("#close-box").toggle('fast');
        //$("#NoOp-box").toggle('fast');
        //$("#NoOpSendMail-box").toggle('fast');
    });

    $(document).on('click', '.bottom-img', function () {
        IsOperatorAvailable = false;
        chat.server.operatorCheckSend(BizChatID);

        if (lat == null || lat == undefined) {
            lat = "";
        }
        if (lang == null || lang == undefined) {
            lang = "";
        }
        if (CountryCode == null || CountryCode == undefined) {
            CountryCode = "";
        }
        if (Ip == null || Ip == undefined) {
            Ip = "";
        }
        var img = $('.btnmini')[0].src;
        var aa = img.substring(img.length - 9, img.length);

        if (json.Collapse.Type == "Image") {
            if (aa == "minus.png") {
                $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                Isopen = false;
                $(".chattable").hide();
                $('.bottom-img').show();
                ToggleHide();
            }
            else {
                $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                Isopen = true;
                $(".chattable").show();
                $('.bottom-img').hide();
                ToggleShow();
                if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                    if (IsSendRequest) {
                        IsSendRequest = false;
                        SignalID = chat.connection.id;
                        VisitorName = "anonymous";
                        WidgetName = json.WidgetsName;
                        setTimeout(function () {
                            if (IsOperatorAvailable) {
                                if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, "anonymous");
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                    });
                                }
                            } else {
                                $('#inchat').hide();
                                NoOperator(json);
                            }
                        }, 3000);
                    }
                }
            }
        } else if (json.Collapse.Type == "Image and Tab") {
            if (aa == "minus.png") {
                $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                Isopen = false;
                $('.bottom-img').show();
            }
            else {
                $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                Isopen = true;
                $('.bottom-img').hide();
                if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                    if (IsSendRequest) {
                        IsSendRequest = false;
                        SignalID = chat.connection.id;
                        VisitorName = "anonymous";
                        WidgetName = json.WidgetsName;
                        setTimeout(function () {
                            if (IsOperatorAvailable) {
                                if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, "anonymous");
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                    });
                                }
                            } else {
                                $('#inchat').hide();
                                NoOperator(json);
                            }
                        }, 3000);
                    }
                }
            }
            ToggleHideShow();
        } else {
            if (aa == "minus.png") {
                $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                Isopen = false;
            }
            else {
                $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                Isopen = true;
                if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                    if (IsSendRequest) {
                        IsSendRequest = false;
                        SignalID = chat.connection.id;
                        VisitorName = "anonymous";
                        WidgetName = json.WidgetsName;
                        setTimeout(function () {
                            if (IsOperatorAvailable) {
                                if (ChatUserInfoID == "" || ChatUserInfoID == null) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, "anonymous");
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, "anonymous", "", "", "anonymous " + json.InChat.JoinedChat, Ip, newURL, lat, lang, "0", CountryCode);
                                    });
                                }
                            } else {
                                $('#inchat').hide();
                                NoOperator(json);
                            }
                        }, 3000);
                    }
                }
            }
            ToggleHideShow();
        }
        //$("#name-box").toggle('fast');
        //$("#message-box").toggle('fast');
        //$("#close-box").toggle('fast');
        //$("#NoOp-box").toggle('fast');
        //$("#NoOpSendMail-box").toggle('fast');
    });

    $(document).on('click', '.hedertext', function () {
        $('#spinnerRegion').hide();
        var img = $('.btnmini')[0].src;
        var aa = img.substring(img.length - 9, img.length);
        if (json.Collapse.Position == "Bottom Left" || json.Collapse.Position == "Bottom Right") {
            if (json.Collapse.Type == "Image") {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $(".chattable").hide();
                    $('.top-img').show();
                    ToggleHide();
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $(".chattable").show();
                    $('.top-img').hide();
                    ToggleShow();
                }
            } else if (json.Collapse.Type == "Image and Tab") {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $('.top-img').show();
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $('.top-img').hide();
                }
                ToggleHideShow();
            } else {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                }
                ToggleHideShow();
            }
        } else {
            if (json.Collapse.Type == "Image") {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $('.bottom-img').show();
                    $(".chattable").hide();
                    ToggleHide();
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $(".chattable").show();
                    $('.bottom-img').hide();
                    ToggleShow();
                }
            } else if (json.Collapse.Type == "Image and Tab") {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                    $('.bottom-img').show();
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                    $('.bottom-img').hide();
                }
                ToggleHideShow();
            } else {
                if (aa == "minus.png") {
                    $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    Isopen = false;
                }
                else {
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                    Isopen = true;
                }
                ToggleHideShow();
            }
        }
        //$("#name-box").toggle('fast');
        //$("#message-box").toggle('fast');
        //$("#close-box").toggle('fast');
        //$("#NoOp-box").toggle('fast');
        //$("#NoOpSendMail-box").toggle('fast');
    });

    $(document).on('mouseover', '#like', function () {
        $('#like').attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbg.svg');
    });
    $(document).on('mouseover', '#dislike', function () {
        $('#dislike').attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbr.svg');
    });
    $(document).on('mouseout', '#like', function () {
        $('#like').attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbup.svg');
    });
    $(document).on('mouseout', '#dislike', function () {
        $('#dislike').attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbdown.svg');
    });

    $(document).on('mouseover', '#chatlikes', function () {
        $('#chatlikes').attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbg.svg');
    });
    $(document).on('mouseover', '#chatdislikes', function () {
        $('#chatdislikes').attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbr.svg');
    });
    $(document).on('mouseout', '#chatlikes', function () {
        $('#chatlikes').attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbup.svg');
    });
    $(document).on('mouseout', '#chatdislikes', function () {
        $('#chatdislikes').attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbdown.svg');
    });
    $(document).on('mouseover', '#MessageSend', function () {
        $('#MessageSend').css('border', '0px solid ' + json.Color + '');
    });
    $(document).on('mouseout', '#MessageSend', function () {
        $('#MessageSend').css('border', 'none');
    });

    $('#startchat').hide();
    $('#inchat').hide();
    $('#closechat').hide();
    $('#Nooperator').hide();
    $('#NooperatorSent').hide();
    //$('#defchat').hide();
    $("#imgtyping").hide();
    $('#Likechat').hide();

    $.connection.hub.start().done(function () {

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

        $(document).on('click', '#SendRequest', function () {
            $('#txtemails').css('border-color', '');
            $('#txtname').css('border-color', '');
            $('#email_error').hide();
            $('#name_error').hide();
            if (IsSendRequest) {
                IsSendRequest = false;
                IsOperatorAvailable = false;
                chat.server.operatorCheckSend(BizChatID);

                if (lat == null || lat == undefined) {
                    lat = "";
                }
                if (lang == null || lang == undefined) {
                    lang = "";
                }
                if (CountryCode == null || CountryCode == undefined) {
                    CountryCode = "";
                }
                if (Ip == null || Ip == undefined) {
                    Ip = "";
                }

                var name = $.trim($("#txtname").val());
                if (json.StartChat.AskforName != true) {
                    if (name == "") {
                        name = "anonymous";
                    }
                }

                var email = $.trim($('#txtemails').val());
                var question = $.trim($('#txtquestion').val());
                var WidgetName = json.WidgetsName;
                VisitorName = name;
                var msg = VisitorName + ' ' + json.InChat.JoinedChat;
                SignalID = chat.connection.id;
                var filter = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                //InChat(InChatData, VisitorName);

                setTimeout(function () {
                    if (IsOperatorAvailable) {
                        if (email == "") {
                            if (name != "") {
                                $('#spinnerRegion').show();
                                jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                    var location = JSON.parse(data);
                                    lat = location.latitude;
                                    lang = location.longitude;
                                    CountryCode = location.country_code.toLowerCase();
                                    Ip = location.ip;
                                    //hide spinner
                                    $('#spinnerRegion').hide();
                                    InChat(InChatData, VisitorName);
                                    chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, name, email, question, msg, Ip, newURL, lat, lang, Department, CountryCode);
                                    $('#startchat').hide();
                                    $('#inchat').show();
                                    $('#defchat').show();
                                    $('#inchathead').text("Welcome to LiveChat");
                                    $("#txtname").val("");
                                    $("#txtemails").val("");
                                    $('#txtquestion').val("");

                                });

                            } else {
                                $('#txtname').css('border-color', '#CC0000');
                                $('#name_error').show();
                                IsSendRequest = true;
                            }
                        } else {
                            if (name != "") {
                                if (filter.test(email)) {
                                    $('#spinnerRegion').show();
                                    jQuery.get(Url + "/Plugin/get_visitor_info.php", function (data) {
                                        var location = JSON.parse(data);
                                        lat = location.latitude;
                                        lang = location.longitude;
                                        CountryCode = location.country_code.toLowerCase();
                                        Ip = location.ip;
                                        //hide spinner
                                        $('#spinnerRegion').hide();
                                        InChat(InChatData, VisitorName);
                                        chat.server.requestFromVisitor(UserId, BizChatID, WidgetID, WidgetName, SignalID, name, email, question, msg, Ip, newURL, lat, lang, Department, CountryCode);
                                        $('#startchat').hide();
                                        $('#inchat').show();
                                        $('#defchat').show();
                                        $("#txtname").val("");
                                        $("#txtemails").val("");
                                        $('#txtquestion').val("");
                                    });
                                }
                                else {
                                    //alert("please enter valid email address.");
                                    $('#txtemails').css('border-color', '#CC0000');
                                    $('#email_error').show();
                                    IsSendRequest = true;
                                }
                            } else {
                                //alert("please enter Name.");
                                $('#txtname').css('border-color', '#CC0000');
                                $('#name_error').show();
                                IsSendRequest = true;
                            }
                        }
                    } else {
                        $('#closechat').hide();
                        $('#startchat').hide();
                        $('#inchat').hide();
                        NoOperator(json);
                    }
                }, 3000);

                if (!Isopen) {
                    Isopen = true;
                    //$("#name-box").toggle('fast');
                    //$("#message-box").toggle('fast');
                    //$("#close-box").toggle('fast');
                    //$("#NoOp-box").toggle('fast');
                    //$("#NoOpSendMail-box").toggle('fast');
                    $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                }
                $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
            }
        });

        $(document).on('click', '#MessageSend', function () {
            //$('#defchat').hide();
            $('#conchat').show();
            var val = $.trim($('.messinput').val());
            if (val != "") {
                SignalID = chat.connection.id;
                var DateTime = new Date();
                var Time = Pad("0", DateTime.getHours(), 2) + ':' + Pad("0", DateTime.getMinutes(), 2);
                if (ChatData != null) {
                    if (IsNoOperatorcheck) {
                        if (ChatData.ChatMessages != null || ChatData.ChatMessages != undefined) {
                            ChatData.ChatMessages.push({ ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role });
                            $('#chatmsgs').append('<div><span class="right" style="word-break: break-word;">' + val + '<lable class="righttime">' + Time + '</lable></span><div class="clear"></div></div>');
                            $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                            // inChatSend Method Name Chnage
                            chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, ChatData.ChatUserInfoID, WidgetID, WidgetName, val, new Date(), Role);
                        }
                    } else {
                        var ChatMessages = { ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role };
                        ChatData.ChatMessages.push(ChatMessages);
                        $('#chatmsgs').append('<div><span class="right" style="word-break: break-word;">' + val + '<lable class="righttime">' + Time + '</lable></span><div class="clear"></div></div>');
                        $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                        chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, ChatUserInfoID, WidgetID, "", val, new Date(), Role);
                    }
                }
                else {
                    var ChatMessages = { ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role };
                    $('#chatmsgs').append('<div><span class="right" style="word-break: break-word;">' + val + '<lable class="righttime">' + Time + '</lable></span><div class="clear"></div></div>');
                    $('#chatmsgs').append('<div class="inchatmsg">An operator has not yet connected. Dont worry, an operator will be by shortly! When they connect, they all see all the messages you have sent so far.</div>');
                    $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                    chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, null, WidgetID, "", val, new Date(), Role);
                }
            }
            $('.messinput').val("");
        });

        $('.messinput').keypress(function (e) {
            chat.server.checkTypingSend(VisitorId, VisitorName, BizChatID, VisitorId, ChatUserInfoID, WidgetID, WidgetName);
            if (e.keyCode == 13) {
                //$('#defchat').hide();
                $('#conchat').show();
                var val = $.trim($(this).val());
                if (val != "") {
                    SignalID = chat.connection.id;
                    var DateTime = new Date();
                    var Time = Pad("0", DateTime.getHours(), 2) + ':' + Pad("0", DateTime.getMinutes(), 2);
                    if (ChatData != null) {
                        if (IsNoOperatorcheck) {
                            if (ChatData.ChatMessages != null || ChatData.ChatMessages != undefined) {
                                ChatData.ChatMessages.push({ ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role });
                                $('#chatmsgs').append('<div><span class="right" style="word-break: break-word;">' + val + '<lable class="righttime">' + Time + '</lable></span><div class="clear"></div></div>');
                                $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                                // inChatSend Method Name Chnage
                                chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, ChatData.ChatUserInfoID, WidgetID, WidgetName, val, new Date(), Role);
                            }
                        } else {
                            var ChatMessages = { ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role };
                            ChatData.ChatMessages.push(ChatMessages);
                            $('#chatmsgs').append('<div><span class="right" style="word-break: break-word;">' + val + '<lable class="righttime">' + Time + '</lable></span><div class="clear"></div></div>');
                            $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                            chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, ChatUserInfoID, WidgetID, "", val, new Date(), Role);
                        }
                    }
                    else {
                        var ChatMessages = { ImageUrl: null, IsJoin: "false", MessageTime: new Date(), Messagetext: val, SenderId: VisitorId, SenderName: VisitorName, Type: Role };
                        $('#chatmsgs').append('<div><span class="right" style="word-break: break-word;">' + val + '<lable class="righttime">' + Time + '</lable></span><div class="clear"></div></div>');
                        $('#chatmsgs').append('<div class="inchatmsg">An operator has not yet connected. Dont worry, an operator will be by shortly! When they connect, they all see all the messages you have sent so far.</div>');
                        $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                        chat.server.sendMessageByVisitor(VisitorId, VisitorName, BizChatID, null, WidgetID, "", val, new Date(), Role);
                    }
                }
                $('.messinput').val("");
                chat.server.removeCheckTypingSend(VisitorId, VisitorName, BizChatID, ChatUserInfoID);
                return false;
            }
        });

        $(".messinput").blur(function () {
            chat.server.removeCheckTypingSend(VisitorId, VisitorName, BizChatID, ChatUserInfoID);
        });

        $(document).on('click', '.like-img', function () {
            setTimeout(function () {
                if (this.id == "like") {
                    chat.server.closeChatSend(UserId, SignalID, true, BizChatID, ChatUserInfoID, VisitorId, "Like");
                } else {
                    chat.server.closeChatSend(UserId, SignalID, false, BizChatID, ChatUserInfoID, VisitorId, "DisLike");
                }
                chat.server.operatorCheckSend(BizChatID);
            }, 500);
            localStorage.removeItem("StorageData");
            localStorage.removeItem("VisitorID");
            ChatUserInfoID = null;
            ChatData = null;
            IsSendRequest = true;
            $('#chatmsgs').empty();
            setTimeout(function () {
                if (IsOperatorAvailable) {
                    if (json.Collapse.Position == "Bottom Left" || json.Collapse.Position == "Bottom Right") {
                        if (json.Collapse.Type == "Image") {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('.top-img').show();
                                $('#inchat').show();
                                $('#closechat').hide();
                                $(".chattable").hide();
                            } else {
                                $('.top-img').show();
                                $('#startchat').show();
                                $('#closechat').hide();
                                $(".chattable").hide();
                            }
                        } else if (json.Collapse.Type == "Image and Tab") {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('.top-img').show();
                                $('#inchat').show();
                                $('#closechat').hide();
                            } else {
                                $('.top-img').show();
                                $('#startchat').show();
                                $('#closechat').hide();
                            }
                        } else {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('#closechat').hide();
                                $('#inchat').show();
                            } else {
                                $('#startchat').show();
                                $('#closechat').hide();
                            }
                        }
                    } else {
                        if (json.Collapse.Type == "Image") {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('.bottom-img').show();
                                $('#inchat').show();
                                $('#closechat').hide();
                                $(".chattable").hide();
                            } else {
                                $('.bottom-img').show();
                                $('#startchat').show();
                                $('#closechat').hide();
                                $(".chattable").hide();
                            }
                        } else if (json.Collapse.Type == "Image and Tab") {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('.bottom-img').show();
                                $('#inchat').show();
                                $('#closechat').hide();
                            } else {
                                $('.bottom-img').show();
                                $('#startchat').show();
                                $('#closechat').hide();
                            }
                        } else {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('#closechat').hide();
                                $('#inchat').show();
                            } else {
                                $('#startchat').show();
                                $('#closechat').hide();
                            }
                        }
                    }
                } else {
                    $('#closechat').hide();
                    $('#startchat').hide();
                    $('#inchat').hide();
                    NoOperator(json);
                }

                Isopen = false;
                $("#name-box").hide();
                $("#message-box").hide();
                $("#close-box").hide();
                $("#NoOp-box").hide();
                $("#NoOpSendMail-box").hide();
                $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
            }, 1500);
            if (!Isopen) {
                Isopen = true;
                //$("#name-box").toggle('fast');
                //$("#message-box").toggle('fast');
                //$("#close-box").toggle('fast');
                //$("#NoOp-box").toggle('fast');
                //$("#NoOpSendMail-box").toggle('fast');
                ToggleHideShow();
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
            }
        });

        $(document).on('click', '.chatlike', function () {
            if (this.id == "chatlikes") {
                chat.server.closeChatSend(UserId, SignalID, true, BizChatID, ChatUserInfoID, VisitorId, "Like");
                $('.chatdislikes').attr('id', 'chatdislikes');
                $("#chatlikes").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbg.svg');
                $('.chatlikes').removeAttr('id');
                $("#chatdislikes").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbdown.svg');
            } else if (this.id == "chatdislikes") {
                chat.server.closeChatSend(UserId, SignalID, false, BizChatID, ChatUserInfoID, VisitorId, "DisLike");
                $('.chatlikes').attr('id', 'chatlikes');
                $("#chatdislikes").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbr.svg');
                $('.chatdislikes').removeAttr('id');
                $("#chatlikes").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbup.svg');
            }
        });

        $(document).on('click', '#btnsendemail', function () {
            $('#2email_error').hide();
            $('#2qust_error').hide();
            $('#noopname').css('border-color', '');
            $('#noopemails').css('border-color', '');
            $('#noopquestion').css('border-color', '');
            var name = $.trim($("#noopname").val());
            var email = $.trim($('#noopemails').val());
            var question = $.trim($('#noopquestion').val());
            var filter = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            var CentralEmail = json.NoOperators.CentralEmail;
            if (name != "" && email != "" && question != "") {
                if (filter.test(email)) {
                    chat.server.noOperatorSend(BizChatID, name, email, question, CentralEmail);
                } else {
                    //$('#2email_error').html('please enter valid email address');
                    $('#2email_error').show();
                    $('#noopemails').css('border-color', '#CC0000');
                    //alert("please enter valid email address");
                }
            } else {
                $('#noopname').css('border-color', '#CC0000');
                $('#noopemails').css('border-color', '#CC0000');
                $('#noopquestion').css('border-color', '#CC0000');
                $('#2qust_error').show();
                //$('#2qust_error').html('Please enter Name, Email and Question.');
                // $('#name_error').html('Please update your Name...');
                //$('#qust_error').html('Please update your Question ...');
            }
            if (!Isopen) {
                Isopen = true;
                //$("#name-box").toggle('fast');
                //$("#message-box").toggle('fast');
                //$("#close-box").toggle('fast');
                //$("#NoOp-box").toggle('fast');
                //$("#NoOpSendMail-box").toggle('fast');
                ToggleHideShow();
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
            }
        });

        $(document).on('click', '#refreshSendMail', function () {
            $('#Nooperator').show();
            $('#NooperatorSent').hide();
            if (!Isopen) {
                Isopen = true;
            } else {
                Isopen = false;
                $("#name-box").hide();
                $("#message-box").hide();
                $("#close-box").hide();
                $("#NoOp-box").hide();
                $("#NoOpSendMail-box").hide();
                $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
            }
        });

        $(document).on('click', '#btnclosechat', function () {
            chat.server.closeActiveVisitorChatSend(VisitorId, BizChatID, ChatUserInfoID, "false");
        });

        $(document).keyup(function (e) {
            if ($('#inchat').css('display') == 'block') {
                if (e.keyCode == 27) {
                    if (!Isopen) {
                    } else {
                        Isopen = false;
                        //$("#name-box").toggle('fast');
                        //$("#message-box").toggle('fast');
                        //$("#close-box").toggle('fast');
                        //$("#NoOp-box").toggle('fast');
                        //$("#NoOpSendMail-box").toggle('fast');
                        ToggleHideShow();
                        $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                        $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                    }
                }
            }
        });

        $(document).on('click', '#refreshafterchats', function () {
            $('#spinnerRegion').hide();
            localStorage.removeItem("StorageData");
            localStorage.removeItem("VisitorID");
            ChatUserInfoID = null;
            ChatData = null;
            IsSendRequest = true;
            $('#chatmsgs').empty();
            setTimeout(function () {
                chat.server.operatorCheckSend(BizChatID);
            }, 500);
            setTimeout(function () {
                if (IsOperatorAvailable) {
                    if (json.Collapse.Position == "Bottom Left" || json.Collapse.Position == "Bottom Right") {
                        if (json.Collapse.Type == "Image") {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('.top-img').show();
                                $('#inchat').show();
                                $('#closechat').hide();
                                $(".chattable").hide();
                            } else {
                                $('.top-img').show();
                                $('#startchat').show();
                                $('#closechat').hide();
                                $(".chattable").hide();
                            }
                        } else if (json.Collapse.Type == "Image and Tab") {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('.top-img').show();
                                $('#inchat').show();
                                $('#closechat').hide();
                            } else {
                                $('.top-img').show();
                                $('#startchat').show();
                                $('#closechat').hide();
                            }
                        } else {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('#closechat').hide();
                                $('#inchat').show();
                            } else {
                                $('#startchat').show();
                                $('#closechat').hide();
                            }
                        }
                    } else {
                        if (json.Collapse.Type == "Image") {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('.bottom-img').show();
                                $('#inchat').show();
                                $('#closechat').hide();
                                $(".chattable").hide();
                            } else {
                                $('.bottom-img').show();
                                $('#startchat').show();
                                $('#closechat').hide();
                                $(".chattable").hide();
                            }
                        } else if (json.Collapse.Type == "Image and Tab") {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('.bottom-img').show();
                                $('#inchat').show();
                                $('#closechat').hide();
                            } else {
                                $('.bottom-img').show();
                                $('#startchat').show();
                                $('#closechat').hide();
                            }
                        } else {
                            if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                $('#closechat').hide();
                                $('#inchat').show();
                            } else {
                                $('#startchat').show();
                                $('#closechat').hide();
                            }
                        }
                    }
                } else {
                    $('#closechat').hide();
                    $('#startchat').hide();
                    $('#inchat').hide();
                    NoOperator(json);
                }

                Isopen = false;
                $("#name-box").hide();
                $("#message-box").hide();
                $("#close-box").hide();
                $("#NoOp-box").hide();
                $("#NoOpSendMail-box").hide();
                $(".sendreque").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
                $(".btnmini").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/plus.png');
            }, 1500);
            if (!Isopen) {
                Isopen = true;
                //$("#name-box").toggle('fast');
                //$("#message-box").toggle('fast');
                //$("#close-box").toggle('fast');
                //$("#NoOp-box").toggle('fast');
                //$("#NoOpSendMail-box").toggle('fast');
                ToggleHideShow();
                $(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                $(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
            }
        });

        $(document).on('click', '.likechatdwld', function () {
            var DateTime = new Date().toString();
            var TimeZone1 = DateTime.substring(DateTime.indexOf("("), DateTime.indexOf(")"));
            var TimeZone = TimeZone1.substring(1, TimeZone1.length);
            window.location = Url + "/Home/Demo?" + "chatuserinfoid=" + ChatUserInfoID + "&TimeZone=" + TimeZone;
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
                    for (var k in GetDepartments) {
                        if (GetDepartments[k]) {
                            $('.DrpDepartment').append('<option value="' + GetDepartments[k].DepartmentId + '">' + GetDepartments[k].DepartmentName + '</option>');
                        }
                    }
                    setTimeout(function () {
                        BindWidget(json);
                        if (IsOperatorAvailable) {
                            if (json.Collapse.Position == "Bottom Left" || json.Collapse.Position == "Bottom Right") {
                                if (json.Collapse.Type == "Image") {
                                    if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                        $('.top-img').show();
                                        $('#inchat').show();
                                        $('#startchat').hide();
                                        $(".chattable").hide();
                                    }
                                } else if (json.Collapse.Type == "Image and Tab") {
                                    if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                        $('.top-img').show();
                                        $('#startchat').hide();
                                        $('#inchat').show();
                                    }
                                } else {
                                    if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                        $('#startchat').hide();
                                        $('#inchat').show();
                                    }
                                }
                            } else {
                                if (json.Collapse.Type == "Image") {
                                    if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                        $('.bottom-img').show();
                                        $('#inchat').show();
                                        $('#startchat').hide();
                                        $(".chattable").hide();
                                    }
                                } else if (json.Collapse.Type == "Image and Tab") {
                                    if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                        $('.bottom-img').show();
                                        $('#startchat').hide();
                                        $('#inchat').show();
                                    }
                                } else {
                                    if (json.StartChat.AskforName == false && json.StartChat.AskforEmail == false && json.StartChat.AskforQuestion == false && json.StartChat.AskforDepartment == false) {
                                        $('#startchat').hide();
                                        $('#inchat').show();
                                    }
                                }
                            }
                        } else {
                            $('#inchat').hide();
                            NoOperator(json);
                        }
                    }, 1500);
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
            $('#operatorprofileimg').attr('src', '' + Url + '/Content/images/avatars/1avatar-operator.png');
            $('#operatorname').text("");
            $('#operatorrole').text("");
            $('#startchat').hide();
            $('#inchat').hide();
            $('#closechat').show();
            $('.messinput').val("");
            $('.chatdislikes').attr('id', 'chatdislikes');
            $("#chatdislikes").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbdown.svg');
            $('.chatlikes').attr('id', 'chatlikes');
            $("#chatlikes").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbup.svg');
            Isopen = true;
        }
    }

    chat.client.CloseActiveChat = function (GetUserId, GetBizChatID, GetChatUserInfoID, GetIspermanent) {
        if (ChatUserInfoID == GetChatUserInfoID && BizChatID == GetBizChatID) {
            localStorage.removeItem("StorageData");
            localStorage.removeItem("VisitorID");
            ChatUserInfoID = GetChatUserInfoID;
            ChatData = null;
            $('#operatorprofileimg').attr('src', '' + Url + '/Content/images/avatars/1avatar-operator.png');
            $('#operatorname').text("");
            $('#operatorrole').text("");
            $('#startchat').hide();
            $('#inchat').hide();
            $('#closechat').show();
            $('.messinput').val("");
            $('.chatdislikes').attr('id', 'chatdislikes');
            $("#chatdislikes").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbdown.svg');
            $('.chatlikes').attr('id', 'chatlikes');
            $("#chatlikes").attr('src', 'http://dashboard.bizchatbox.com/plugin/v2/thumbup.svg');
            Isopen = true;
        }
    }

    chat.client.GetFirstOperatorJoinInChat = function (GetBizChatId, GetChatUserInfoID, GetChatData, GetData, GetDesignation) {
        if (ChatData != undefined && ChatData != null) {
            if (BizChatID == GetBizChatId) {
                if (GetChatUserInfoID == ChatData.ChatUserInfoID) {
                    if (VisitorId == ChatData.VisitorId) {
                        for (var i in GetData.ChatMessages) {
                            var DateTime = new Date(GetData.ChatMessages[i].MessageTime);
                            var Time = Pad("0", DateTime.getHours(), 2) + ':' + Pad("0", DateTime.getMinutes(), 2);
                            $('#operatorname').text(GetData.ChatMessages[i].SenderName);
                            if (GetData.ChatMessages[i].ImageUrl == "") {
                                $('#operatorprofileimg').attr('src', '' + Url + '/Content/images/avatars/1avatar-operator.png');
                            } else {
                                $('#operatorprofileimg').attr('src', Url + GetData.ChatMessages[i].ImageUrl);
                            }
                            $('#operatorrole').text(GetDesignation);
                            if (GetData.ChatMessages[i].IsJoin == "true") {
                                if (GetData.ChatMessages[i].Type != "Visitor") {
                                    $('#chatmsgs').append('<div class="inchatmsg">' + GetData.ChatMessages[i].Messagetext + '</div>');
                                }
                            } else {
                                $('#chatmsgs').append('<div><div style="float: left;height: auto;margin-bottom: 0px;"><img style="width:35px;" src="' + Url + GetData.ChatMessages[i].ImageUrl + '"></div><span class="left" style="word-break: break-word;background: ' + json.Color + '"><lable class="leftname">shivak</lable>' + GetData.ChatMessages[i].Messagetext + '<lable class="lefttime">' + Time + '</lable></span><div class="clear"></div></div>');
                                $('.left').append('<style>.left:after{border-right:8px solid ' + json.Color + '}</style>');
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
                            var DateTime = new Date(GetData.ChatMessages[i].MessageTime);
                            var Time = Pad("0", DateTime.getHours(), 2) + ':' + Pad("0", DateTime.getMinutes(), 2);
                            if (GetData.ChatMessages[i].IsJoin == "true") {
                                if (GetData.ChatMessages[i].Type != "Visitor") {
                                    $('#chatmsgs').append('<div class="inchatmsg">' + GetData.ChatMessages[i].Messagetext + '</div>');
                                }
                            } else {
                                if (GetData.ChatMessages[i].ImageUrl == "") {
                                    $('#chatmsgs').append('<div><div style="float: left;height: auto;margin-bottom: 0px;"><img style="width:35px;" src="' + Url + '/Content/images/avatars/1avatar-operator.png' + '"></div><span class="left" style="word-break: break-word;background: ' + json.Color + '">' + GetData.ChatMessages[i].Messagetext + '<lable class="lefttime">' + Time + '</lable></span><div class="clear"></div></div>');
                                } else {
                                    $('#chatmsgs').append('<div><div style="float: left;height: auto;margin-bottom: 0px;"><img style="width:35px;" src="' + Url + GetData.ChatMessages[i].ImageUrl + '"></div><span class="left" style="word-break: break-word;background: ' + json.Color + '">' + GetData.ChatMessages[i].Messagetext + '<lable class="lefttime">' + Time + '</lable></span><div class="clear"></div></div>');
                                }
                                //$('#chatmsgs').append('<div><div style="float: left;height: auto;margin-bottom: 0px;"><img style="width:35px;" src="' + Url + GetData.ChatMessages[i].ImageUrl + '"></div><span class="left" style="word-break: break-word;background: ' + json.Color + '">' + GetData.ChatMessages[i].Messagetext + '<lable class="lefttime">' + Time + '</lable></span><div class="clear"></div></div>');
                                $('.left').append('<style>.left:after{border-right:8px solid ' + json.Color + '}</style>');
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
                $('#defchat').css('min-height', '40px');
                $("#imgtyping").hide();
                ChatContent(getTabdata.ChatMessages);
            }
        }
    }

    chat.client.FirstTimerChatBind = function (GetBizChatID, GetChatUserInfoID, GetOperatorId, GetOperatorName, GetRole, GetDatas, GetDesignation) {
        if (ChatData != undefined && ChatData != null) {
            if (BizChatID == GetBizChatID) {
                if (GetChatUserInfoID == ChatData.ChatUserInfoID) {
                    $('#chatmsgs').empty();
                    $("#conchat").show();
                    $("#operatorimgdiv").show();
                    $('#defchat').hide();
                    $("#imgtyping").hide();
                    ChatUserInfoID = GetChatUserInfoID;
                    ChatData.ChatMessages = GetDatas.ChatMessages;
                    for (var i in GetDatas.ChatMessages) {
                        var DateTime = new Date(GetDatas.ChatMessages[i].MessageTime);
                        var Time = Pad("0", DateTime.getHours(), 2) + ':' + Pad("0", DateTime.getMinutes(), 2);
                        $('#operatorname').text(GetDatas.ChatMessages[i].SenderName);
                        if (GetDatas.ChatMessages[i].ImageUrl == "") {
                            $('#operatorprofileimg').attr('src', '' + Url + '/Content/images/avatars/1avatar-operator.png');
                        } else {
                            $('#operatorprofileimg').attr('src', Url + GetDatas.ChatMessages[i].ImageUrl);
                        }
                        $('#operatorrole').text(GetDesignation);
                        if (GetDatas.ChatMessages[i].IsJoin == "true" || GetDatas.ChatMessages[i].IsJoin == "True") {
                            if (GetDatas.ChatMessages[i].Type != "Visitor") {
                                $('#chatmsgs').append('<div class="inchatmsg">' + GetDatas.ChatMessages[i].Messagetext + '</div>');
                            }
                        }
                        else {
                            if (GetDatas.ChatMessages[i].Type == "Visitor") {
                                $('#chatmsgs').append('<div><span class="right" style="word-break: break-word;">' + GetDatas.ChatMessages[i].Messagetext + '<lable class="righttime">' + Time + '</lable></span><div class="clear"></div></div>');
                            } else {
                                $('#chatmsgs').append('<div><div style="float: left;height: auto;margin-bottom: 0px;"><img style="width:35px;" src="' + Url + GetDatas.ChatMessages[i].ImageUrl + '"></div><span class="left" style="word-break: break-word;background: ' + json.Color + '">' + GetDatas.ChatMessages[i].Messagetext + '<lable class="lefttime">' + Time + '</lable></span><div class="clear"></div></div>');
                                $('.left').append('<style>.left:after{border-right:8px solid ' + json.Color + '}</style>');
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
                        $("#imgtyping").append('<p class="bizchat-message-pinned Typing-' + SetUserId + '-' + SetChatUserInfoID + '" >' + SetUserName + ' ' + json.InChat.Typing + '<img src ="' + Url + '/Content/images/icon/typing.gif" style="width: 16px;height: 16px;" /></p>');
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
            }
        }
    };

    chat.client.GenerateVisitorID = function (GetChatTabData) {
        if (BizChatID == GetChatTabData.BizChatId && WidgetID == GetChatTabData.WidgetId && SignalID == GetChatTabData.SignalId) {
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
                    $('#chatmsgs').append('<div class="inchatmsg">' + Message + '</div>');
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
                    $('#chatmsgs').append('<div class="inchatmsg">' + GetMsg + '</div>');
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
                    $('#chatmsgs').append('<div class="inchatmsg">' + GetMsg + '</div>');
                    $("#conchat").scrollTop($("#conchat")[0].scrollHeight);
                }
            }
        }
    }

    chat.client.NoOperator = function (GetBizChatID, GetName, GetEmail, GetQuestion) {
        if (GetBizChatID == BizChatID) {
            $("#noopname").val("");
            $("#noopemails").val("");
            $('#noopquestion').val("");
            $('#Nooperator').hide();
            $('#NooperatorSent').show();
            setTimeout(function () {
                $('#Nooperator').show();
                $('#NooperatorSent').hide();
            }, 12000);
        }
    }
});


function BindWidget(AllData) {
    jQuery('#defchat').empty();
    jQuery('#chatmsgs').empty();

    jQuery(".top-img").hide();
    jQuery(".bottom-img").hide();

    jQuery("#name-box").hide();
    jQuery("#message-box").hide();
    jQuery("#close-box").hide();
    jQuery("#NoOp-box").hide();
    jQuery("#NoOpSendMail-box").hide();

    SetPosition(AllData.Collapse);
    startchat(AllData);
    CloseChat(AllData.ChatClose);
    SetImgPosition(AllData);
    //WidgetsAnimate(AllData.Collapse);

    if (AllData.Enable) {
        jQuery('.chattableraw').attr("style", "background: " + AllData.Color + "!important ");
        jQuery('.btnsendreq').attr("style", "background: " + AllData.Color + "!important ");
        jQuery('#btnsendemail').attr("style", "background: " + AllData.Color + " !important");
        jQuery('.sendmess').css('border-top-color', '' + AllData.Color + '!important ');
        jQuery('.hedertext').attr("style", "background: " + AllData.Color + "!important ");
        jQuery('.hederbtn').attr("style", "background: " + AllData.Color + " !important");
        jQuery('#inchathead').attr("style", "background: " + AllData.Color + " !important");
        jQuery('#MessageSend').attr("style", "background: " + AllData.Color + " !important");
        // hedertext, hederbtn,inchathead
    }

    //if (AllData.Collapse.ShowWidgetHideButton) {
    //    jQuery('#btnupdown').show();
    //} else {
    //    jQuery('#btnupdown').hide();
    //}

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
                jQuery(".btnmini").attr('src', Url + '/Content/images/icon/minus.png');
                jQuery(".sendreque").attr('src', Url + '/Content/images/icon/minus.png');
            }
            jQuery('#inchat').show();
            jQuery('#startchat').hide();
            jQuery('#closechat').hide();
            jQuery('#Nooperator').hide();
            //jQuery('#defchat').hide();
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
                    jQuery('#operatorprofileimg').attr('src', Url + ChatData.OperatorImage);
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
        jQuery('.chatwindow').css({ 'bottom': '0', 'left': '10px', 'top': '', 'right': '', 'position': 'fixed', 'z-index': '999' });
        if (val.Type == "Image") {
            if (val.Image != 0) {
                jQuery(".top-img").show();
                jQuery(".bottom-img").hide();
                jQuery(".chattable").hide();
            }
            else {
                if (val.IsCustom) {
                    jQuery(".top-img").show();
                    jQuery(".bottom-img").hide();
                    jQuery(".chattable").hide();
                }
            }
        } else if (val.Type == "Image and Tab") {
            if (val.Image != 0) {
                jQuery(".top-img").show();
                jQuery(".bottom-img").hide();
            }
            else {
                if (val.IsCustom) {
                    jQuery(".top-img").show();
                    jQuery(".bottom-img").hide();
                }
            }
        }
    } else if (val.Position == "Bottom Right") {
        jQuery('.chatwindow').css({ 'bottom': '0', 'left': '', 'top': '', 'right': '10px', 'position': 'fixed', 'z-index': '999' });
        if (val.Type == "Image") {
            if (val.Image != 0) {
                jQuery(".top-img").show();
                jQuery(".bottom-img").hide();
                jQuery(".chattable").hide();
            } else {
                if (val.IsCustom) {
                    jQuery(".top-img").show();
                    jQuery(".bottom-img").hide();
                    jQuery(".chattable").hide();
                }
            }
        } else if (val.Type == "Image and Tab") {
            if (val.Image != 0) {
                jQuery(".top-img").show();
                jQuery(".bottom-img").hide();
            }
            else {
                if (val.IsCustom) {
                    jQuery(".top-img").show();
                    jQuery(".bottom-img").hide();
                }
            }
        }
    } else if (val.Position == "Top Left") {
        jQuery('.chatwindow').css({ 'bottom': '', 'left': '10px', 'top': '0', 'right': '', 'position': 'fixed', 'z-index': '999' });
        if (val.Type == "Image") {
            if (val.Image != 0) {
                jQuery(".top-img").hide();
                jQuery(".bottom-img").show();
                jQuery(".chattable").hide();
            } else {
                if (val.IsCustom) {
                    jQuery(".top-img").hide();
                    jQuery(".bottom-img").show();
                    jQuery(".chattable").hide();
                }
            }
        } else if (val.Type == "Image and Tab") {
            if (val.Image != 0) {
                jQuery(".top-img").hide();
                jQuery(".bottom-img").show();
            } else {
                if (val.IsCustom) {
                    jQuery(".top-img").hide();
                    jQuery(".bottom-img").show();
                }
            }
        }
    } else if (val.Position == "Top Right") {
        jQuery('.chatwindow').css({ 'bottom': '', 'left': '', 'top': '0', 'right': '10px', 'position': 'fixed', 'z-index': '999' });
        if (val.Type == "Image") {
            if (val.Image != 0) {
                jQuery(".top-img").hide();
                jQuery(".bottom-img").show();
                jQuery(".chattable").hide();
            } else {
                if (val.IsCustom) {
                    jQuery(".top-img").hide();
                    jQuery(".bottom-img").show();
                    jQuery(".chattable").hide();
                }
            }
        } else if (val.Type == "Image and Tab") {
            if (val.Image != 0) {
                jQuery(".top-img").hide();
                jQuery(".bottom-img").show();
            } else {
                if (val.IsCustom) {
                    jQuery(".top-img").hide();
                    jQuery(".bottom-img").show();
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
    jQuery('#txtemails').attr('placeholder', val.StartChat.AskforEmailInput);
    jQuery('#txtquestion').attr('placeholder', val.StartChat.AskforQuestionInput);
    jQuery('#sendreqtext').text(val.StartChat.RequestButton);

    //Bind Error Message
    jQuery('#name_error').text(val.ErrorMessage.NameRequired);
    jQuery('#email_error').text(val.ErrorMessage.EmailValid);
    jQuery('#2email_error').text(val.ErrorMessage.EmailValid);
    jQuery('#2qust_error').text(val.ErrorMessage.NoOperatorRequired);

    jQuery('#name_error').hide();
    jQuery('#email_error').hide();
    jQuery('#2email_error').hide();
    jQuery('#2name_error').hide();
    jQuery('#2qust_error').hide();

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
        if (jQuery('.DrpDepartment').val() != null) {
            Department = jQuery('.DrpDepartment').val();
            DepartmentVisible = true;
            jQuery('.DrpDepartment').show();
        } else {
            Department = "0";
            DepartmentVisible = false;
            jQuery('.DrpDepartment').hide();
        }
    } else {
        DepartmentVisible = false;
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
    jQuery('#noopname').attr('placeholder', val.NoOperators.YourName);
    jQuery('#noopemails').attr('placeholder', val.NoOperators.YourEmail);
    jQuery('#noopquestion').attr('placeholder', val.NoOperators.YourQuestion);
    jQuery('#lblemailSent').text(val.NoOperators.EmailSentText);
    jQuery('#sendnooptext').text(val.NoOperators.SendButton);
}

function InChat(val, VisitorName) {
    jQuery('#conchat').hide();
    // jQuery('#defchat').css('min-height', '270px');
    jQuery('#defchat').show();
    jQuery('#defchat').append('<lable>' + val.Greeting + ' ' + VisitorName + '!</lable><br/>');
    jQuery('#defchat').append('<lable>' + val.Connecting + '</lable>');
    // jQuery('#defchat').append('<img src="' + Url + '/Content/images/icon/loadingBar.gif" alt="" style="width:30px;" />');
    //jQuery('#sendmsgtext').attr('placeholder', val.SendMessage);
    setTimeout(function () {
        jQuery('#defchat').empty();
        jQuery('#defchat').append('<div style="margin-top: 4%;"><img src="' + Url + '/Content/image/50-20.png" alt="" /><span style="margin-left: 4%;" id="noopmsg" class="inchatmsg">' + val.Message + '</span></div>');
    }, 1200);
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

function Pad(padString, value, length) {
    var str = value.toString();
    while (str.length < length)
        str = padString + str;
    return str;
}

function ChatContent(InChatData) {
    jQuery("#chatmsgs").empty();
    //jQuery('#sendmsgtext').attr('placeholder', json.InChat.SendMessage);
    if (InChatData != undefined || InChatData != null) {
        if (InChatData.length > 0) {
            for (var i in InChatData) {
                var DateTime = new Date(InChatData[i].MessageTime);
                var Time = Pad("0", DateTime.getHours(), 2) + ':' + Pad("0", DateTime.getMinutes(), 2);
                if (InChatData[i].IsJoin == "true" || InChatData[i].IsJoin == "True") {
                    if (InChatData[i].Type != "Visitor") {
                        jQuery('#chatmsgs').append('<div class="inchatmsg">' + InChatData[i].Messagetext + '</div>');
                    }
                }
                else {
                    if (InChatData[i].Type == "Visitor") {
                        jQuery('#chatmsgs').append('<div><span class="right" style="word-break: break-word;">' + InChatData[i].Messagetext + '<lable class="righttime">' + Time + '</lable></span><div class="clear"></div></div>');
                    } else {
                        jQuery('#chatmsgs').append('<div><div style="float: left;height: auto;margin-bottom: 0px;"><img style="width:35px;" src="' + Url + InChatData[i].ImageUrl + '"></div><span class="left" style="word-break: break-word;background: ' + json.Color + '">' + InChatData[i].Messagetext + '<lable class="lefttime">' + Time + '</lable></span><div class="clear"></div></div>');
                        jQuery('.left').append('<style>.left:after{border-right:8px solid ' + json.Color + '}</style>');
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
            jQuery(".chat-img").attr('src', Url + val.Collapse.CustomImageUrl);
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

function ToggleHideShow() {
    if (jQuery("#name-box").is(':visible')) {
        jQuery("#name-box").hide();
    }
    else if (jQuery("#name-box").is(':hidden')) {
        jQuery("#name-box").show();
    }

    if (jQuery("#message-box").is(':visible')) {
        jQuery("#message-box").hide();
    }
    else if (jQuery("#message-box").is(':hidden')) {
        jQuery("#message-box").show();
    }

    if (jQuery("#close-box").is(':visible')) {
        jQuery("#close-box").hide();
    }
    else if (jQuery("#close-box").is(':hidden')) {
        jQuery("#close-box").show();
    }

    if (jQuery("#NoOp-box").is(':visible')) {
        jQuery("#NoOp-box").hide();
    }
    else if (jQuery("#NoOp-box").is(':hidden')) {
        jQuery("#NoOp-box").show();
    }

    if (jQuery("#NoOpSendMail-box").is(':visible')) {
        jQuery("#NoOpSendMail-box").hide();
    }
    else if (jQuery("#NoOpSendMail-box").is(':hidden')) {
        jQuery("#NoOpSendMail-box").show();
    }
}

function ToggleHide() {
    jQuery("#name-box").hide();
    jQuery("#message-box").hide();
    jQuery("#close-box").hide();
    jQuery("#NoOp-box").hide();
    jQuery("#NoOpSendMail-box").hide();
}

function ToggleShow() {
    jQuery("#name-box").show();
    jQuery("#message-box").show();
    jQuery("#close-box").show();
    jQuery("#NoOp-box").show();
    jQuery("#NoOpSendMail-box").show();
}
