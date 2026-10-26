#!/bin/bash
echo "-------------------Start: $(TZ="Europe/Berlin" date "+Datum: %d.%m.%Y Uhrzeit: %H:%M")-------------------"
/usr/bin/tar -czf /home/jt/backups/backup-$(TZ="Europe/Berlin" date "+%Y-%m-%d-%Hh-%Mm").tar.gz -C /home/jt -v certs/
echo "------------------Ende-------------------"