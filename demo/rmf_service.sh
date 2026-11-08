#!/bin/bash
cp ~/demo/services_orig.json ~/app/code/services.json
/usr/bin/docker exec -u www-data php-fpm-container php /app-code/check_script.php