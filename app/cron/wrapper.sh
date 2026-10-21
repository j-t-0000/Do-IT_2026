#!/bin/bash
echo "-------------------Start: $(TZ="Europe/Berlin" date "+Datum: %d.%m.%Y Uhrzeit: %H:%M")-------------------"
/usr/bin/docker exec -u www-data php-fpm-container php /app-code/check_script.php
echo "------------------Ende-------------------"