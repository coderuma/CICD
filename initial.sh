#!/bin/bash
mkdir -p /root/python-webAPP
rm -Rf /root/python-webAPP/*
rm -f *.zip *.sh
unzip /var/www/html/*.zip -d /root/python-webAPP
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
