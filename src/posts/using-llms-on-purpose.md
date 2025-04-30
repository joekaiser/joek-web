---
title: Using LLMs on Purpose (Not Just by Default)
description: A candid reflection on when AI coding tools help — and when they quietly make things worse.
author: Joe
date: 2025-04-29
tags:
---
Lately, I have found myself torn on the usage of LLMs when it comes to augmenting my development. The excitement (and let's be real, the promise we are given) of having an AI assistant readily available is undeniable. Who doesn't want to speed up the mundane, debug tricky code, or even generate initial drafts of documentation?

However, I'm increasingly thinking we are becoming more reliant on them. Not because they are useful, but because they are *easy*

## Let's back up a few steps.

I initially discovered ChatGPT (from now on referred to as Chad) via the WAN show from LTT. I don't recall the exact details, but I was intrigued enough to create and account and play with it. My initial thoughts were _meh_ 😒. It looked like a cool tech demo to me, but I couldn't why I would use it. Until I had my light bulb moment.

You see, I had decided I wanted to learn Rust, and I learn best just by doing. Somehow, I landed on a personalized note taking CLI app. After some searching I ran across [https://ratatui.rs](RataTUI) as the option to build by UI.

Being impatient, low on available free time, and just wanting to see something up and running, decided to just skim the [Rust Handbook](https://doc.rust-lang.org/stable/book/) and reference it when I saw a pattern or something in the language I didn't understand.

At some point, I decided to just take some Javascript and ask Chad to convert it to a Rust equivalent. I didn't care if it compiled - I just wanted to have a baseline to compare against.

This is when it clicked for me. I could use AI to speed up my learning!

## The path continues
I kind of dropped Rust (I still hope to get back to it one day) and started playing with LLMs. I'd want a simple script or test function, and instead of writing it, I'd ask Chad to do it. At that time, most of the code it would spit out was fine, _but just barely_. I often found myself massaging it to be how I wanted.

After some time, I started playing with the Cody AI plugin in VSCode. Keep in mind that at this time I didn't really know the difference between models. I actually considered it (and still do , to a point) a bad UX that I had to care or even know.

Anyway, the default model was Claude 3.5 Sonnet. It was good - so good that I could look past the "I wouldn't do it this way" feeling I had because code just worked.

## I was hooked
I started reading more about how LLMs worked. I found [Ollama](https://ollama.com) and learned I could host my own private LLM! I was sold. I wanted a new computer anyway, and this was the tipping point. I spec'd and built a modest,  computer with the purpose of learning and playing with LLMs more.

Meanwhile, In my day job I was still using Cody. I was actually speeding up my development, allowing me to ship faster. For the most part, I could just tell it what I wanted to do and it would happen. I'd give the code a quick glance, accept the changes and push the MR💪. Everyone was doing it.

## But the magic wore off
I moved to work on a performance squad. As part of profiling code, I was really looking at what was happening. The code I was seeing was just...weird.
```
function shouldUseNewPermissionsSystem(){
  const isNewPermissionSystemEnabled = featureFlags.get("newPermissionsSystem)";
  if(isNewPermissionsSystemEnabled){
    return true;
  }
  else
  {
    return false;
  }
}
```

🤨
What...Huh...Why???  This isn't _technically_ wrong, but it is objectively a weird way of doing it. And this wasn't just a one-off. I found that exact same pattern in many places.

I started asking around and I got the "Oh I had Co-Pilot write that, and didn't think twice about it". Uh...OK. This wasn't my experience with AI generated code, but I quickly found out why.

See, I was using (and personally paying for) Cody while most everyone else used Co-Pilot. I'm not saying this was a Cody _V_ Co-Pilot thing, but Cody (at the time) didn't really have the same level of integration in VSCode. Sure, it had a great chat experience, but I was still using "native"  code completion.

Sometime later, Cody shipped their AI Auto Complete. Can you guess what happened when it was turned on? I started seeing this kind of code suggested for me.

What I learned was that engineers (myself included) were using generated code by default; not with intention. And it is all to easy to just accept the code and move on.

GIGO, right? Somehow, patters like this were introduced into the code base. The LLM, just being a really good text predictor, saw this and copied it as needed.


## And I started to hate using it
Don't get me wrong, I still loved playing with LLMs. I was actually working on side projects that utilized Ollama for text summarization, classification, and embedding. But for code? I found myself spending more time trying to grok and discard what it was giving me then it would have taken me to just do the work myself.

I don't want to spend brain cycles on reviewing AI code, and I don't think you should either.

## So where does that leave us
LLMs aren’t going anywhere - and frankly, I don’t want them to. But just like any tool, we need to be intentional about how we use them. Convenience is seductive, but it shouldn’t come at the cost of clarity, craftsmanship, or understanding. The real magic happens when we stay in the loop, not when we step out of it.

 LLMs have their place. I'm not saying you should turn it off. I personally have settled on 2 main use cases
1. Creating POCs where I only care about the result; not the performance or maintainability
2. Using it as a rubber duck

But see it for what it is — a tool. One with many uses, but also many tradeoffs. Not every problem needs a hammer, and not every coding task needs an LLM. Use it with intention, not out of habit.
