<?php
/*$error_code_down = 0;
$error_message_down = '';
$error_code_web = 0;
$error_message_web = '';
var_dump(@fsockopen("test-down-service", 80, $error_code_down, $error_message_down, 2));
var_dump(@fsockopen("alpine_test_web_listener", 80, $error_code_web, $error_message_web, 2));
echo "error code=$error_code_down + $error_code_web error_message=$error_message_down + $error_message_web\n";
*/

$timeout = 2;
/*$services = [
    ['name' => 'test-refused-service', 'port' => 80],
    ['name' => 'test-web-listener', 'port' => 80],
    ['name' => 'test-sql-listener', 'port' => 1433],
    ['name' => 'test-ssh-listener', 'port' => 22],
    ['name' => 'test-mail-listener', 'port' => 587]
];*/
$services = json_decode(file_get_contents('/app-code/services.json'), true);
echo "Dieses Mal mit json \n";

foreach ($services as $svc) {
    $error_code = 0;
    $error_message = '';
    $connect = @fsockopen($svc['name'], $svc['port'], $error_code, $error_message, $timeout);
    echo "Name: " . $svc['name'] . " |Port: " . $svc['port'] .
        " |fsockopen-Rückgabewert: " . $connect
        . " |Error Code:" . $error_code . " |Error Message: " . $error_message . "\n";
}
