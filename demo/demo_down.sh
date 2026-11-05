#!/bin/bash
/usr/bin/docker stop alpine_test_ssh_listener alpine_test_web_listener
sleep 2
/usr/bin/docker exec -u www-data php-fpm-container php /app-code/check_script.php
