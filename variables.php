<?php

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$domainName = "dashboard.bizchatbox.com/";

$bizchatHome = $protocol.$domainName;



//$bizchatHome = 'http://dashboard.bizchatbox.com/';