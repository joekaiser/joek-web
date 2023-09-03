---
title: How I upgraded my laptop without any hardware changes
description: An exploratory look into a remote-dev machine
author: Joe
date: 2020-05-27
tags:
---
I want a new laptop. I know I don't need it, but I feel like it would be a quality-of-life upgrade. I currently own a 2017 Razer Blade Stealth; it does the job 80% of the time.  Although, it does start to show its age when I am working on a project. Build times are getting longer, the fan sounds like a drone is on my desk, and general frustration ensues.

However, I like my laptop. I have everything set up just right - my terminal, fonts, apps, OS Settings, and everything else. I don't really want a *new* laptop. I just don't want to have to wait so long for angular to compile a site, or `npm build` to take as long. So, I started to think about what I could do.

I am most productive when everything just works. I don't want to have to take any extra time waiting on something or switching context. So even though it sounds small, having to wait ~20 seconds for something to rebuild and be ready can add up over time.

With that in mind, my laptop isn't the problem - the build is. I knew Visual Studio Code allows for remote development, and I started to wonder if I could just switch to that. The bar was high though. I have everything just so. With 4 keyboard shortcuts I can

- launch a terminal with mongod, mongo shell, the app, and any dependent services running
- open vsCode pointed to whatever project I need to work on

Whatever I changed has to support that. I don't want to manually ssh into a server and set things up. It just needs to work when I say so.

So I went looking at Azure VMs. I picked out a "compute optimized" sever and instantly ran into snag. You are initially limited to 4vCPUs in a region, and I was getting one with 8. It wasn't looking good, but I downgraded to one with 4 cores and gave it a try. I figured I can always go down the upgrade path when/if this worked out.

I spent the rest of the evening getting it set up. Installing mongo, node, setting up ssh, moving my terminal aliases over, everything. The hardest part was integrating it into my workflow.

I found ways to still keep my keyboard shortcuts locally, but just modified the commands to do everything remote. I just can't figure out how to automatically launch vsCode and have it connect to the remote server. I still have to do it the long way. 😣

Overall, I am a mostly impressed. That server cut my build times down by about 80%, and with the tooling in vsCode I really don't even notice. I set up port forwarding so `localhost:xxxx` traffic is sent over the ssh connection, and it feels perfect.

The best part is the price. I manually start/stop the VM when I need to, so it only runs for a short while. I'm guessing it will cost $17/month. Not bad! I could do that for years before getting a new laptop would have been cheaper.

Bonus points for my fan not whining at me the entire time :) A quiet computer is a good computer.
