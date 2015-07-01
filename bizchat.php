<?php
/**
 * @package Biz_chat
 * @version 1.3
 */
/*
Plugin Name: BizChat
Plugin URI: 
Description: BizChatBox is packed with all the features you need to provide premium customer support. It is light weight, reliable, customizable and scalable chat widget. Gain your competitive advantage today.
Author: BizChatBox
Version: 1.3
Author URI: www.bizchatbox.com
*/

include 'variables.php';

add_action('admin_menu', 'biz_chat_menu');
add_action('wp_ajax_BizChat_update', 'BizChat_update');

function biz_chat_menu() {
	add_menu_page('BizChat', 'BizChat', 'manage_options', 'bizchat-menu', 'biz_chat_generateAcctPage', plugins_url( 'favicon.png', __FILE__ ));
	add_option('bizchat_widget_code', '', '', 'yes');
	add_option('bizchat_widget_name', '', '', 'yes');
	add_option('bizchat_code', '', '', 'yes'); 
}
function BizChat_update() {
	$WidgetId = sanitize_text_field($_POST['WidgetId']);
	$WidgetName = sanitize_text_field($_POST['WidgetName']);
	$BizChatId = sanitize_text_field($_POST['BizChatId']);

	update_option('bizchat_widget_code', $WidgetId);
	update_option('bizchat_widget_name', $WidgetName);
	update_option('bizchat_code', $BizChatId);	
}
function load_custom_bizchat_admin_style() {
	wp_register_style( 'Bizchat_admin_style', plugins_url( '/stylesheet/bizchatStyles.css', __FILE__ ) );
	wp_enqueue_style( 'Bizchat_admin_style' );
}
add_action( 'admin_enqueue_scripts', 'load_custom_bizchat_admin_style' );
function biz_chat_generateAcctPage(){
	global $bizchatHome;
	if (isset($_POST['WidgetId']) && isset($_POST['BizChatId']) && isset($_POST['WidgetName'])) {
		BizChat_update();
	}
	?>	
	<p>		
	<div class="bizchatbuttonbox">
		<img src="<?php echo plugins_url( 'logo.png', __FILE__ )?>"alt="BizChat logo" style="height: 100px;"></img>
		<div class = "bizchatcontentdiv">
			<?php
			if (get_option('bizchat_widget_code') == "" ) {
				?>
				<p>
				BizChat allows you to chat in real time with visitors to your WordPress site. Click the button below to get started by logging in to BizChat and selecting a chat widget!
				</p>
				The button will open a widget selector in an external page. Keep in mind that your Pure Chat account is separate from your WordPress account.
				<?php
			} else {
				?>
				<h4>Your current chat widget is:</h4>
				<h1 class="BizChatCurrentWidgetName"><?php echo get_option('bizchat_widget_name'); ?></h1>
				<p>
				Would you like to switch widgets?
				</p>
				<?php
			}
			?>
		</div>
		<form>
			<input type="button" class="bizchatbutton" value="Pick a widget!" onclick="openBizChatChildWindow()">
		</form>		
	</div>
	</p>
	<script>
		var WidgetId = localStorage.getItem("WidgetId");
		var BizChatId = localStorage.getItem("BizChatId");
		var WidgetName = localStorage.getItem("WidgetName");
		
		var BizChatChildWindow;
		function openBizChatChildWindow() {
		var data = localStorage.getItem("LoginData");
			//console.log("data",data);
			if (data) {
				window.open('<?php echo $bizchatHome;?>Plugin/remotelogin.html');
			}
			else{
				BizChatChildWindow = window.open('<?php echo $bizchatHome;?>Plugin/pagechoicewordpress.html');
			}				
		}
		window.onmessage = function (e) {
			var url = ajaxurl;
			var widgetIdToPass = e.data.WidgetId;
			var BizchatIdToPass = e.data.BizChatId;
			var widgetNameToPass = e.data.WidgetName;
			
			//wp-ajax call
			var data = {
				'action': 'BizChat_update',
				'WidgetId': widgetIdToPass,
				'BizChatId': BizchatIdToPass,
				'WidgetName': widgetNameToPass
			};
			jQuery.post(url, data)
				.done(function(){
			})
			document.getElementsByClassName('bizchatcontentdiv')[0].innerHTML = '<h4>Your current chat widget is:</h4><h1 class="BizChatCurrentWidgetName">' + widgetNameToPass   + '</h1><p>Would you like to switch widgets?'; 
		};
	</script>
	<div class="bizchatlinkbox">
		<p>
		<a href="http://dashboard.bizchatbox.com/Home/Dashboard" target="_blank">Your BizChat dashboard page</a>
		is your place to answer chats, add more widgets, customize their appearance with images and text, manage users, and more!
		</p>
	</div>
	<?php
}
//Load External script & css For BizChatBox Widgets... 
function Bizchatbox_script_style_load() {
	//jquery
	wp_enqueue_script( 'jquery' );
	 
	//jqueryui
	wp_enqueue_script( 'jquery-ui' );
    
	//my_plugin_script
	wp_register_script( 'Bizchatbox_signal_script', plugins_url('/scripts/jquery.signalR-2.2.0.js', __FILE__), array());
    wp_enqueue_script( 'Bizchatbox_signal_script' );
	
	//plugin_hubs
	wp_register_script('Bizchatbox_hubs', 'http://dashboard.bizchatbox.com/signalr/hubs', __FILE__,array());
    wp_enqueue_script('Bizchatbox_hubs');
	
	//css 
	wp_register_style( 'BizchatBox_style', plugins_url( '/stylesheet/BizChat.css', __FILE__ ));
	wp_enqueue_style( 'BizchatBox_style' );
	
	//ChatTable Additional Stylesheet
	wp_register_style( 'BiChatbox_chattable_style', plugins_url( '/stylesheet/BizchatpluginStyle.css', __FILE__ ));
	wp_enqueue_style( 'BiChatbox_chattable_style' );
} 
add_action( 'wp_enqueue_scripts', 'Bizchatbox_script_style_load');

if (!function_exists('load_BizChat_scripts')) {
	function load_BizChat_scripts() {
		global $pagenow;
		if (!is_admin() && 'wp-login.php' != $pagenow) {
		wp_deregister_script( 'Bizchat_script' );
		wp_register_script('Bizchat_script', plugins_url( '/scripts/BizChats.js', __FILE__ ), array('jquery','Bizchatbox_signal_script','Bizchatbox_hubs'), false, true);

		$biz_args = array(
		'biz_chat_plugin_path' => plugins_url( '/scripts/BizChatsPlugin.js', __FILE__ )
		);
		wp_localize_script( 'Bizchat_script', 'biz', $biz_args );

		$WidgetId = get_option('bizchat_widget_code');
		$BizChatId = get_option('bizchat_code');
		wp_localize_script('Bizchat_script', 'BizChat_widget_object', array('WidgetId' => $WidgetId,'BizChatId' => $BizChatId));
		wp_enqueue_script('Bizchat_script');
		}
	}
}
add_action('init', 'load_BizChat_scripts');