---
title: Using LLMs on Purpose (Not Just by Default)
description: A candid reflection on when AI coding tools help  -  and when they quietly make things worse.
author: Joe
date: 2025-04-29
tags:
---
Lately, I have found myself torn on the usage of LLMs when it comes to augmenting my development. The excitement (and let's be real, the promise we are given) of having an AI assistant readily available is undeniable. Who doesn't want to speed up the mundane, debug tricky code, or even generate initial drafts of documentation?

However, I'm starting to see we are becoming more reliant on them but in the wrong way. We are assuming "AI development == faster development". But that isn't always the case

## Let’s rewind for a minute

I initially discovered ChatGPT (from now on referred to as Chad) via the WAN show from LTT. I don't recall the exact details, but I was intrigued enough to create an account and play with it. My initial thoughts were _meh_ 😒. It looked like a cool tech demo to me, but I couldn't see why I would use it. Until I had my light bulb moment.

I had decided I wanted to learn Rust, and I learn best just by doing. Somehow, I landed on a personalized note-taking CLI app. After some searching I ran across [https://ratatui.rs](RataTUI) as the option to build my UI.

Being impatient, low on available free time, and just wanting to see something up and running, I decided to just skim the [Rust Handbook](https://doc.rust-lang.org/stable/book/). I found a few projects on Github that were also using it, and started reading code. I would reference the book when I saw a pattern or something in the language I didn't understand.

At one point I was having a hard time following some code. I ended up just giving it to Chad and asked it to explain like I was 5.

This is when it clicked for me. I could use AI to speed up my learning!

## And I leaned in

I didn’t stick with Rust (still on my to-do list), but I kept diving deeper into LLMs. I’d ask Chad to write quick scripts or test functions instead of doing it myself. The output was fine, _but just barely_. I often had to massage the code to match my style or needs.

Eventually, I discovered the Cody plugin for VSCode. At the time, I didn’t really understand the differences between models, and honestly, I still think it’s a bad UX that I *have* to. But I rolled with it. The default model (Claude 3.5 Sonnet) was *good*. Good enough that I started ignoring the “I wouldn’t write it this way” vibe because it just worked.

## I was hooked

I started reading about how these models worked. Found [Ollama](https://ollama.com), realized I could host my own LLMs, and that was it - I built a modest rig specifically to play around with them more seriously.

At the same time, I was using Cody heavily at work. It helped me move fast. I’d describe what I wanted, Cody would spit it out, I’d skim it, approve it, and move on. MR pushed. 💪

Everyone was doing it.

## But then the cracks showed

I shifted to a performance-focused team and started digging into the actual behavior of the code. And what I saw was… weird.

```js
function shouldUseNewPermissionsSystem(){
  const isNewPermissionSystemEnabled = featureFlags.get("newPermissionsSystem");
  if(isNewPermissionSystemEnabled){
    return true;
  }
  else
  {
    return false;
  }
}
```

🤨

Not *wrong*, per se. But definitely not right either. And this wasn't a one-off example.

I asked around.

“Oh yeah, I had Co-Pilot write that and didn’t think much about it.”

Yikes.

That wasn’t my experience, but I quickly realized why. I was paying for Cody, and most others were using vanilla Co-Pilot. Not saying one’s better than the other, but Cody’s auto-complete wasn’t as deep back then. I mostly used its chat interface and kept regular code completion.

Then Cody released its full AI Auto Complete. And sure enough, I started seeing the same low-effort patterns show up in my own suggestions. I found myself spending *more* time filtering out junk suggestions than it would take to just write the code myself.

That’s when it hit me: we’re using these tools *by default*. And that’s dangerous.

## I started to hate using it
LLMs are a tool. Just like any tool, they have their use. Sure, you can take a drill and use the backend to hammer an anchor into drywall, but is it the _best_ tool for that job?

That is what I'm starting to see with LLMs. We (the engineering community as a whole) are trying to figure out how to best use this tool and it is being forced into every crack of our workflow.

Programming is a skill, and like any skill, it needs regular use to stay sharp. When you offload the thinking to AI too often, you’re not leveling up - you’re slowly letting those muscles weaken. What I thought would accelerate my growth started to feel like it was slowly reversing two decades of learning.

Convenience is seductive, but it shouldn’t come at the cost of clarity, craftsmanship, or understanding.

## So where does that leave us

LLMs aren’t going anywhere - and I don’t want them to. I still use my Ollama instance daily. I have a few side projects that utilize it heavily.

The real value of LLMs isn’t in taking us *out* of the loop - it’s in helping us stay *in* it. Personally, I've settled on two main use cases for my workflow.

1. **Proof of concept code** where I care more about validating an idea than writing clean, maintainable logic.
2. **Rubber ducking** - bouncing ideas off an assistant that doesn’t get tired.

But I’m done using LLMs just because they’re there.

They’re a tool. Not a replacement. And definitely not a shortcut to thinking. We should be using them with intention, not by default.
