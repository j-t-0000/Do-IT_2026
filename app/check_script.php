<?php 

    $timeout = 2;
    //Format-Check (ist die services.json korrekt geschrieben)
    $raw = file_get_contents('/app-code/services.json');
    $services = json_decode($raw, true);

    if($services === null) {         //json_decode liefert bei ungültigem JSON null
        echo "Fehler. Falsches Format.\n";
        exit;
    }
    //Semantik-Check
    $valid = [];
    foreach($services as $svc) {
        if(!is_array($svc) || !isset($svc['name']) || !isset($svc['port'])) {   //isset fragt: existiert der Schlüssel im array und ist der Wert nicht null
            echo "WARNUNG: unvollständiger Dienst-Eintrag, übersprungen: " . json_encode($svc) . "\n";
            continue;                                                           //brich diesen Schleifendurchgang ab, geh zum nächsten
        }
        $valid [] = $svc;

    }
    $services = $valid;

    $result = [];

    foreach ($services as $svc) {
        $error_code = 0;
        $error_message = '';
        $t0 = microtime(true);          //Zeit vor dem connect-Versuch
        $connect = @fsockopen($svc['name'], $svc['port'], $error_code, $error_message, $timeout);
        $t1 = microtime(true);          //Zeit nach dem connect-Versuch

        if ($connect !== false) {       //connection & dienst steht
            $state = 'up';
        } elseif ($error_code === 111) {        //connection geht
            $state = 'refused';
        }
        else {
            $state = 'down';
        }

        $latency_ms = round(($t1 - $t0)*1000, 3);

        if ($connect !== false) {               //Schließen der Ressource, falls eine angelegt wurde
            fclose($connect);
        }
        
        $result[] = [
            'name' => $svc['name'],
            'state' => $state,
            'latency_ms' => $latency_ms
        ];
        echo "Name: ". $svc['name'] . " | Status: $state | error code: $error_code | error message: $error_message | Latenz: $latency_ms ms\n";
    }

    echo json_encode($result) . "\n";