---
title: Fault-Tolerance - format and normalize errors
description: An NPM package to add context and format your errors
author: Joe
date: 2019-11-06
tags:
---
Developers don't spend enough time thinking about their errors. I see too many projects that `throw Error('invalid data')` or even worse `throw 'invalid data'` 😱. That isn't useful! Give me some context, bud.

But we (myself included) aren't usually thinking about the failure case. We are thinking about the solution and (at best) are simply guarding against some bad input. That needs to change. Errors need context to be useful. String interpolation isn't good enough - it still requires thought. An error databag is what we need.

So when I was tired of seeing less than helpful errors at work, I set out to create something that was effortless to use, and would make log messages incrementally better. What I ended up with is a project I am calling [ Fault-Tolerance](https://www.npmjs.com/package/fault-tolerance). The concept behind it is trivial - extend the default Error object to format the output better.

In the most basic example you can `throw new Fault('Move along')`. In reality, though, that kind of error isn't as helpful as you want. Errors have context and we don't want to lose that.

```
function checkpoint(droids:[]){
    if(jediIsPresent) {
      throw new Fault('These are not the droids you are looking for', {droids});
    }

    droids.forEach(d => {
      if(isWanted(d)) {
        detain(d);
      }
    })
}
```

The output from that would look like:
```
Error: These are not the droids you are looking for
    at ......
    at ......
    at ......
metadata:
{
  "droids": [
      {
       "name": "R2D2",
       "owner": "Skywalker",
       "purpose": "astromech"
      },
      {
       "name": "C3PO",
       "owner": "Skywalker",
       "purpose": "comic relief"
      }
  ]
}
```

This gives you a much better way to include additional information with the added benefit of a consistent log format.

Check out the [Fault-Tolerance](https://gitlab.com/joekaiser/fault-tolerance) on Gitlab for more examples. It is also available as an [NPM package](https://www.npmjs.com/package/fault-tolerance).
