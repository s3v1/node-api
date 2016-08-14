Intro
=====
This document will help you install and use git.


Branching model
===============
We're using a branching model called "git flow", originally based on this article: http://nvie.com/posts/a-successful-git-branching-model/

Later on it's been integrated into the standard git commands. This is the repo for that feature, and that also has some nice links to articles and movies about it: https://github.com/nvie/gitflow

Cheat sheet: http://danielkummer.github.io/git-flow-cheatsheet/

More articles:
http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/
https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow


Linux
=====
We assume you're using Ubuntu or a derivative.
Start by installing the required build-tools:

    sudo apt-get install git -y    

Test with:

    git --version 

Windows
=======
We assume that you're using windows 7 or 8, in a 64 bit edition

Install Git
-----------
You probably already have this, but if not... download the installer here: https://github.com/git-for-windows/git/releases/latest
When you install, go with defaults... except:
- Add a check for: Windows Explorer Integration -> Simple Context menu -> git BASH here
- Add a check for: Use a TrueType font in all console windows
- Choose the option: Use Git from the Windows Command Prompt


Install Git Credential Manager for Windows
------------------------------------------
This tool will remember you git credentials: https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/latest
Download and install using defaults.

Mac OSX
=======
TODO add Mac OSX instructions


Git Tips
========
Here are some git tricks:

Start over from scratch
-----------------------
To do a full reset, same as cloning the repo again, run:

    git reset --hard && git clean -d -x -f