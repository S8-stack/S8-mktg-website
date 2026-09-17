
# Context : S8 Stack
S8 stack, which is a new unified stack, which means that all key features are already supplied are tightly assembled together, with a scope integrating back, front, databases, orchestration, etc. 
Think of it as Springboot four steps ahead. The whole thing is in Java. All modules can be douns under: /Users/pc/qx/git/${module}


# deploy
The github repo is observed by Cloudflare and will autodeploy

# Objective

I need to entirely redo this website (nothing survives - just nothing).
The website puropose is to present the S8 stack in the same way https://nodejs.org is presenting the Node.js stack.

## Mission statement
Infer a vibrant mission statement from the info you have on S8 stack (sse for instance: S8-meta-API/guidelines), or this: https://x.com/pierreconvert/status/2099582538041659631?s=20
Mission statement must be one the first page

## docs
A new stack needs a string doc. VERY IMPORTANT NOTICE: documentation aims at both humans and AI!
Since eveything is tightly coupled, it is well described by the following modules:
- S8-meta-API module describes the entire S8 API. All you need to know to code against S8 stack is condensed here. So you need to thorougly described all components (in Mozilla Developer Network manner, with a scrollable list leftside, and a wide column rightside with code, methods, examples, intents and -where relevant- small stub code blocks.)  
- Additionnaly, the S8-meta-end described the module system, which kind of overlaid 
- S8-meta-build described the building system (how to setup your build.properties files, see example in any module)


## Style
The main style inspiration is node.js and possibly MDN (like for instance: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).
Code must be in coding box with a nice and professional look. If posssible, add quick copy and paste.
Use the logos supplied.

## Download
Prepare a download section on the front page with a call to action button (just like node.js). The mapping with Cloudflare R2 object will be done later on.

## Miscellaneous
Add the sections that the audience might be expecting and fill them with reasonable quibble (we will upgrade this later on).
