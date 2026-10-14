<?php 
$error_code = 0;
$error_message = '';
var_dump(@fsockopen("test-web-service",80,$error_code,$error_message,2));
echo "error code=$error_code error_message=$error_message\n";