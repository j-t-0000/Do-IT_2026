<?php 
    header('Content-Type: application/json; charset=utf-8');  //header-typ setzen, um zu sagen, dass json folgt

    $content = @file_get_contents('/data/status.json');

    if(!$content) {
        $error = ['error' => 'Datei fehlt oder ist nicht lesbar'];
        echo json_encode($error) . "\n";  //hier gibt es kein Datei-Gegenstück \n ist also in Ordnung
        exit;
    }

    echo "$content";                                //hier kein \n, da es die Byte-Identität zur Quelldatei brechen würde (vereinfacht debugging)