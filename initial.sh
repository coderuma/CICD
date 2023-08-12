#!/bin/bash

echo "Your Present working Directory: $PWD"
cd /root
mkdir -p python-webAPP
cp -pvr $PWD/*.tar.gz /root/python-webAPP
cd /root/python-webAPP
python -m venv env
source env/bin/activate
echo $PWD
