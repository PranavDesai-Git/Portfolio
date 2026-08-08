# WIMP (What is my plant?!)
A plant care app

## Why
So one day I was sitting at my desk. Doomscrolling as you do. Then I feel guilty for not being productive enough
And naturally, I open up linkedin so I can doomscroll ***productively***. Which, makes it worse. 

I posted about my previous half finished project on linkedin. It got good reach. <sub>8 likes(5 of them my homies)</sub>

And then I find this post. seems to be popping off yeah, I look into it
> Impressive integrated forward thinking Solution<br>
> Solving real world problems<br>
> Computer Vision<br>
> em dashes. emojis.

Naturally, I go to the github repo. No jelousy up to this point.
> 60 lines of python<br>
> Vibe coded

So I go "is it cuz its a vision thing? should I make a vision thing myself. yeah open cv ig. lets get some linkedin validation points"
Yes I base my self worth on what other people think of me thats why I am on linkedin lets be honest no one goes on there to actually find a job.

Anyhow so I go "Okay what can we do with opencv"
And then I go "lets detect plants, plants are cute. I like plants. my parents bought plants home"
So, where do I get the data from? Plant Net gemini suggests

I decide

> Quick project, 20 minutes in and out. no over engineering. Linkedin post and out

And then I go

> I will fine tune a model with this data! how hard could it be?

I discovered you need a lotta GPUs, and I am broke. So apparently planet net has an api (bring your own api I aint paying for it)
but apparently it only returns the plant name form the image yeah. So my idea was we send that to Trefle api
Trefle returns raw data, we cant use that I want plant care info like "water it 3 times a day"

What do you do in the big 2026 when theres a small problem?<br>
THATS RIGHT. Artificial 👏. Intelligence 👏.<br>
Right so now I need artificial intelligence. I dont wanna call an api(takes money).
So I go locally hosted. locally hosted cant be on web no

So now it needs to be an app. An android app I decide (I really dont want to learn react)
Locally hosted llms are compute heavy especially on mobiles. So I cant just ship like a 12B model thats smart and can do all the things 
It needs to be a 1B model. I decided the default would be llama-3.2-1B-Instruct Q4 cuz it was running pretty well on my phone
and its small enough with 800mb

So now I need to plan how the llm will get its information. I was planning I send the trefle data directly to the llm and hope for the best
But then I remember. We have built a free source of incredible information maintained by everyone. wikipedia
Large pages take a long time for the Q&A right so I go "Hey what if we used a little model to only provide it the information it needs"
Its called a RAG apparently (gemini told me)

So now I dont really need Trefle anymore. lets just pull from wikipedia after we detect the plant.

## What is it?
To summarize what I am building is:
- Detect the plant species from plant net
- Download the Wikipedia page, store in text file 
- Split the page up into a bunch of sentances
- Do a Q/A about the plant care with the local llm
- Set reminders to water the plant
- Set the widgets on your homescreen so it reminds you

## Tech Stack
- **frontend**:Android native, jetpack compose
- **Vision**: Pl@nt Net API
- **Knowledge Base**: Wikipedia + Local RAG
- **Ai**: llama.cpp, Model of your choosing Llama-3.2-1B by default

