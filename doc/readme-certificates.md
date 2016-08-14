Intro
=====
This document will help you create and use SSL certificates.
You only need this if you want to make certificates. You don't need it when just using pre-created certificates

Linux
=====
You proable have openssl installed already.

Make a self-signed certificate
------------------------------
Run these commands in a shell - 'openssl.cfg' needs to be in the same folder

    export OPENSSL_CONF=openssl.cfg
    openssl req -x509 -batch -nodes -sha512 -days 3650 -newkey rsa:4096 -keyout crowdio-ss.key -out crowdio-ss.crt
	

Mac OSX
=======
TODO add Mac OSX instructions

Windows
=======
We assume that you're using windows 7 or 8, in a 64 bit edition

Install
-------
Get the installer here:  http://slproweb.com/products/Win32OpenSSL.html
Pick the newest 64-bit version in the "light" edition

At the time of writing, this version was the newest/best: http://slproweb.com/download/Win64OpenSSL_Light-1_0_2d.exe

Run the installer and choose defaults, except:
- Choose "The OpenSSL binaries (/bin) directory"
- Uncheck the donate checkbox, unless you feel like donating

Make a self-signed certificate
------------------------------
Run these commands in a command prompt - 'openssl.cfg' needs to be in the same folder

    set OPENSSL_CONF=openssl.cfg
    c:\OpenSSL-Win64\bin\openssl req -x509 -batch -nodes -sha512 -days 3650 -newkey rsa:4096 -keyout crowdio-ss.key -out crowdio-ss.crt
	
Trust the certificate
---------------------
Run these commands in a ELEVATED/ADMINISTRATOR command prompt: 

	certutil -addstore Root crowdio-selfsigned.crt
    
...to add the self-signed certificate as a Root certificate. 
That will give you a "green" SSL when you access any *.crowdio.com or localhost server

