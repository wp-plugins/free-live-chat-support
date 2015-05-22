<?php

if ( !defined( 'WP_UNINSTALL_PLUGIN' ) )
  exit();

delete_option('bizchat_widget_code');
delete_option('bizchat_widget_name');
delete_option('bizchat_code');

?>
