# JFall

Last October, I visited JFall Netherlands. JFall is the biggest Dutch free Java conference, held every year for members of the Duthc Java user group NL-JUG.
If you are a member (which costs about Euro 50,-), you can visit JFall for free, provided you are able to catch a ticket.

Below are summaries of the talks I visited. There is also a playlist of all talks on Youtube for:
* [2018](https://www.youtube.com/playlist?list=PLpQuPreMkT6DbnmOysFcrtJ-98qelhDAw)
* [2019](https://www.youtube.com/playlist?list=PLpQuPreMkT6ABGRRbFzapMOFK5yWjev3Q)
  * [Aftermovie](https://www.youtube.com/watch?v=bQClIaElO7I)

# Master your tools - [Jan-Hendrik Kuperus](https://twitter.com/jhkuperus)

Jan-Hendrik gave an early-bird talk in which he talked about lots of productivity-tools he uses on his MacBook.
Some tools also had Windows and / or Linux alternatives. Most of the tools either help you automate things or access existing workflows or functions using much easier and faster key-bindings.

His alibi for this talk was based on the psychology of our limited ability to spend conscious effort. He advocates simplifying things to free up conscious effort that can be spent on actual creative work instead of losing it to mundane, repetitive and automatable tasks. 
* Conscious effort leads to...
* Cognitive strain, too much of that leads to...
* Ego depletion (as in: "Oh no, not another meeting"-type reactions), which leads to (more impact from)...
* Distraction

Given that having to remind lots of terminal commands, requires more conscious effort, we would like to automate and simplify things alot.
He also showed us an [XKCD chart](https://xkcd.com/1205/) to quickly figure out if the time to automate is worth the effort, although he did confess he was in the grey zone (not worth it) quite a number of times.

![](pics/is_it_worth_the_time.png)

Given the time you can shave of by automating something and the number of times you perform this task, how much time could you save over a five year span. If you can automate it within that time, you have a net gain. 

## IntelliJ Idea: 
Jan-Hendrik uses IntelliJ, because of these reasons:
* It's keyboard-centric
* You can declare custom short-cuts
* You can find any action with Command + Shift + A
* It has multi cursor editing, which can
  * Add or remove a cursor
  * Do multi-cursor editing
  * Do column mode
  * Demo looked a bit like [this](https://www.youtube.com/watch?v=X8wwrXXgYQA)
* Live templates to quickly insert often used pieces of code
* Window Splitting for multiple editor windows so you can have code side-by-side
  * Command + Shift + S, then V or H: Splits vertical or horizontal
* Navigating Panels:
  * Command + 1 through 9

## Browser extensions
Jan-Hendrik showed a number of handy Browser extensions, mainly on Chrome. It is unclear how these extensions store your data (in local storage?) and whether they expose your browser-history to the extension's developers.
* Vimium - The hacker's browser: 
  * Navigate with keys H, J, K and L to scroll up, down and to start or end of a page
  * Highlight and navigate Links with key F, then "click" one using the highlighted key-combination above the link
  * Keys G, I: navigate to the first input field
  * Key ? for keymap cheatsheet (which it often is, for instance in GMail)
* Initab was a very interesting plugin for me
  * Enables you to create custom personalized start-page
* OneTab also peaked my interest
  * Aggregates all opened tabs into a single page with links
  * Very handy when you often have many tabs open (which I do, and then some)
* JSON Viewer (Duh)
* EditThisCookie (also good for hacking the apps you are currently developing)
* UA Switcher (don't know what this did anymore)

## Alfred peaked my interest
This is a replacement for Spotlight, which can: 
* Insert snippets like:
  * Mac command characters
  * ASCII art
* Define workflows like Wifi On/Off, Bluetooth On/Off, and many more examples which I don't remember, but were more complex and therefore saved more time
* Searches bookmarks

## Shell magic
* Use your prompt to indicate what you're doing
  * Your prompt mostly displays your current directory
  * Context info (like Git also does by displaying current branch)
  * Display dangerous context (like which environment am I in? Am I working on Office VPN? etc)
* Aliases
  * Shorten long commands by using aliases
* Scripts (learn to bash or Powershell, it's very powerfull. Ask any ethical hacker)
* Key bindings
  * Shortcuts in shell
  * Time tracking
  * Branch switching

## Hammerspoon was incredibly powerful
* Swiss army knife for Mac OS
* Set a key as your Hyper key to activate Hammerspoon 
  * It beats shortcut conflicts
* Can be used for Window Management / move and placement (I use Spectacle for this already)
* App Switching
  * Bind an app to Hyper + some key
* Fun thing to do: You can create a Soundboard using
  * Hyper-Command + anything

## Other
* BarTender can be used to clean up the Mac bar (top right of your screen)
* AnyBar can add icons you DO want in the Mac bar (like green indicators when your build is done)
* Configuration is saved in dotfiles

# Keynote Rabobank on fast deployment to Pivotal Cloud Foundry
The first Keynote was a very nice talk by [Vincent Oostindië](https://nl.linkedin.com/in/vincent-oostindie-7ba2511) and [Wouter Oet](https://twitter.com/wouteroet)
![](pics/Rabo_Keynote3.jpg)
![](pics/Rabo_Keynote4.jpg)
![](pics/Rabo_Keynote5.jpg)
![](pics/Rabo_Keynote6.jpg)

The main focus for them is to abstract away all container-hassle and stuff like configuration, log aggregation, cloud-challenges like scaling and routing etc.

![](pics/Rabo_Keynote7.jpg)
![](pics/Rabo_Keynote8.jpg)

Wouter was visibly nervous as he live-deployed an app (a Flappy-Duke game) to production on Pivotal Cloud Foundry.
He first let us check the [URL](https://www.rabobank.com/jfall/) to see nothing was there. Then he pushed his code to GIT, which built and deployed it to the first server instance, which gave many of the audience access to the app.
But after pushing to the second server, everyone had access. This all took just minutes from his local machine to live on PCF in production.

![](pics/Rabo_Keynote9.jpg)
![](pics/Rabo_Keynote10.jpg)
![](pics/Rabo_Keynote11.jpg)
![](pics/Rabo_Keynote12.jpg)
![](pics/Rabo_Keynote13.jpg)
![](pics/Rabo_Keynote14.jpg)
![](pics/Rabo_Keynote15.jpg)

Yes this was in minutes, maybe even within a minute. Okay, it was "just" some static resources and they skipped all the normal pipeline stuff to do like complex build, testing, quality gates and pull-requests. But still, deploying made so easy and fast is what the end-game of DevOps should be.

![](pics/Rabo_Keynote16.jpg)

As for technology they use at Rabobank, they already use Java 11 and are pushing towards 12.  

# Cryptography 101 by [Michel Schudel](https://www.twitter.com/MichelSchudel)

Michel had worked at Rabobank as well, where he created a Rabobank Crypto toolbox.
In his talk, he explained the basics of Cryptography, which included:
* Hashing
* Symmetric encryption
* Asymmetric encryption
* Signatures
* Certificates

He explained how cryptography can be used for:
* Confidentiality: preventing unauthorized people from reading something they aren't allowed to
* Integrity: making sure you know when data is altered by an unauthorized person
* Authenticity: being sure you are communicating with the person you think you are communicating

Note that in the normal CIA triade the A stands for Availability, which should make sure data and systems are available when they should be available, so things like DDoS and Ransomware prevention should handle that.

All classes you need to do all the cryptography stuff in Java isn't even that complex, but you do have to do it correctly and be aware of some small, but important details.
Cryptography is included in:
* Java Cryptography Architecture (used to be mainly the API stuff)
* Java Cryptography Extension (used to be the standard implementation)

These are some options to use as implementations for Cryptography:
* SunJCE: The standard SUN JCE implementation
* Boundy-castle: The well-known Open-source alternative
* Other CSP (like Hardware Security Modules)

The examples are all available in his Github repo [here](https://github.com/MichelSchudel/crypto-demo) and the presentation slide are [here](https://www.slideshare.net/michelschudel/cryptography-101-forjavadevelopers-fall-2019)

As for where the java security stuff is stored in different Java versions, that changed since Java 9:
* JDK8-: jre/lib/security/java.security
* JDK9+: conf/security/java.security

## Hashing

Good hashing algorithms have these properties:
* They are one-way functions, it is impossible to revert back to the same input using the hashed value, much like ```10 MOD 3 = 1``` is irreversible if you only know ```X MOD 3 = 1```.
* It always produces the same hash when feeding the same input (in the same hashing algorithm, of course).
* It produces a completely different hash even with minor changes to the input.
* It never (in practice) produces the same hash for two different inputs. This would be called a collision, which weakens the algorithm.
![](pics/hashing.png)

## Symmetric encryption
Symmetric encryption works on same-size blocks of the original input, which could mess when encrypting repeated data. Basically if the repeated data is the same size as the block size of the encryption, you will see repeated data in the encrypted output as well.
* Fix this by using CBC instead of ECB
* This uses an Initialization Vector (IV) on the first block and the output of the previous block on each next block to encrypt.
As for key-size, use proper length, which is not possible in all Java versions. Since Java8u162 you can use any keysize, since it supports unlimited key-size by default.

But with symmetric key encryption comes a challenge: How do you agree upon a shared, but secret key? That's where the Diffie-Hellman key-exchange helps out:
![](pics/diffie-hellman.png)

Unfortunately Michel forgot to mention Ralph Merkle who [conceptualized](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) the exchange method.

## Asymmetric
Asymmetric encryption is much slower and requires longer keys as the data to encrypt gets longer. So it is mostly used for:
* Key exchange to set up symmetric encryption
* Encrypting and decrypting symmetric keys
* Encrypting hashes for authenticity checks

![](pics/private_public_key_encryption.png)

In asymmetric (or private-public) key encryption, communicating partners use a key-pair which is mathematically bound to encrypt and decrypt messages or data.

One key is always private (the secret) and in possession of a single person or entity. The other is public and can be used by anyone.

In the example, Bob wants to send a secret message to Alice. 
* Bob uses the public key to encrypt the message, so it is not readable by anyone except Alice who has the private key.
* Even Bob can't read it anymore, but he may have or remember the original message.
* Alice decrypts the message with her private key and gets the original message

## Signatures

Signatures are used to authenticate data coming from a specific source. For this, we use HMAC: Keyed-hash Message Authentication Code.

![](pics/signing.png)

By combining hashing with asymmetric encryption, a sender can create a hash of a message, then encrypt this hash using his own private key, which only the sender can do.
This is exactly the other way around as the previous example, where the sender encrypted the message itself with the receiver's (public) key.
Often a combination of encrypting the message (again: with the receiver's public key) and a signature (with the sender's private key) is used to get both confidentiality and integrity.

## Certificates
These handle authenticity. 

Again, everything needed to use (store, validate etc.) certificates uses a small number of classes. Also, these can (and often will) be implemented by a Hardware Security Module, which when done properly, strengthens security of your setup.
* Tip: Don't do certificate generating in Java
* Use the ```Keytool``` to store certificates in the Java keystore.
* Based on a keystore, we can ```keytool -certreq``` and send the output as a certificate request to a Certificate Authority


# Highly Secured API's: Insight into OAuth 2.0 by [Simone Stapels](https://nl.linkedin.com/in/sstapels)

Simone talked about the different choices you can make when implementing OAuth 2.0. She explained the good, the better and the not-so-good options.

![](pics/OAuth.jpg)
![](pics/OAuth2.jpg)
![](pics/OAuth3.jpg)
![](pics/OAuth4.jpg)
![](pics/OAuth5.jpg)

Some important facts she discussed:
* Spring Security 5 handles almost everything for you and you don't even have to add anything to your code. Everything OAuth-y you need to do is handled in the application.yml.
* Implicit grant is the ultimate no-go for OAuth
* Authorization code grant is the best option in most scenario's
* Resources:
  * [Spring security](https://tools.ietf.org/html/rfc6749)
  * [ScribeJava](https://auth0.com/docs)
  * [JSON Web Tokens](www.jwt.io)
  * The [code examples](https://github.com/user/sjastapels) she used in the presentation

# IT Leadership summit
In this panel discussion, four IT C-level managers discussed a number of JFall-relevant topics, mostly on cloud, microservices and DevOps.
Let's just say that not all C-levels can be short and clear in their answers, let alone keep my attention. 
Where three panel-members could keep themselves from "selling" and stay on-topic in the discussion, the fourth member was both very wordy and constantly selling his fantastic company for all the wrong reasons. 
If I ever would consider that company in the future as an employer, this panel-discussion cured me from that urge.

# Community keynote: A brief history of Computer music by [Anders Norås](https://twitter.com/anoras)
Anders took us from the very early days of computer music all the way through to current days where popular dance and pop-music is often composed mostly or even solely using computer-music.
A lot of classic home-computers and consoles passed his presentation and a stream of retro-games and their sound-tracks were played.

I did miss some topics that I think were relevant in this context:
* Some love for the Nintendo sound-chip as it stands quite well against and in specs is more powerful than the Sega Mega Drive chip. Check out [Blake Harris's](https://twitter.com/blakejharrisNYC) [Console Wars](https://www.amazon.com/Console-Wars-Nintendo-Defined-Generation/dp/0062276700) for the full story.
* The presentation showed (played) lots of regular music performed by computers. But game-music nowadays even goes full-blown symphony with Zelda's [Symphony of the Goddesses](https://mgplive.com/zeldatour)

Notwithstanding, this was an incredibly fun presentation to (mainly) listen to and the audience was clearly very drawn into the retro vibe.

# Secure Development Pipelines by [Marten Deinum](https://twitter.com/mdeinum)

Marten talked about lots of stuff developers can already do on making the software they develop more secure, before pentesters go in.

In his intro he discussed how Security:
* Often is an afterthought, where just a few weeks before deadline a pentest is conducted
* It is often limited to the scope of authentication and authorization
* Is almost never included in automated testing

There are several free and/or opensource Static analysis (or SAST) tools:
* PMD
* Spotbugs (which can be extended with custom rules)
* Hdiv

Also Maven has several relevant plugins:
* dependency-check-maven
* spotbugs-maven-plugin with
  * findsecbugs-plugin

Marten also referenced a talk on Spring vs. OWASP Top 10. I couldn't write down the name, but I did find this excellent talk by Roberto Velasco @ Spring I/O 2019 on just about [everything OWASP](https://www.youtube.com/watch?v=nUUxLuio6rs) provides that can help you better secure the software you develop, beyond the well-known Top 10

The final tool Marten mentioned can scan your TLS/SSL configuration, which is TLS Observatory by Mozilla.

Some other "tools" that could have been mentioned are:
* [Security Headers](https://securityheaders.com/) to check your web-site's security headers
* [Report URI](https://report-uri.com/) for collecting and alerting on live security relevant data
* [Security Sidekick](https://www.securitysidekick.dev/) which helps with inventory of web assets and automatically scan and test them

# Using bleeding edge software in Lifecycle management without bleeding out by [Martin Visser](https://twitter.com/martin__visser) and [Erwin Cavas](https://twitter.com/ecavas1)
Final presentation I watched was about a Rabobank DevOps team of developers Martin and Erwin who discussed the strategy they used to break up a large monolythic application into smaller microservices.

They used the following technologies:
* Spring Boot: started with 2.0 and went live with 2.1
* Java 11

The challenges they faced:
* Seamless transition without downtime
* Maintenance on running application
* But they had high test coverage

## Migration strategy
As a migration strategy, these were the steps they planned:
* Do a small Proof of Concept
* Start by doing only one service
* Do a phased migration by only rerouting internal customers (bank employees) to the new application
 
## Performance
A thorough performance test was done using:
* JMeter
* VisualVM

This concluded that:
* Spring Cloud Gateway resulted in highly fluctuating response time between 60-100 ms
* Zuul was constant at 20 ms

![](pics/Rabo_Pivotal_Cloud_Foundry.jpg)


This was unfortunate as they wanted to migrate away from Zuul, because this was declared End of Life by Netflix.
Doubling the number of schedulers from 4 to 8 and again to 16 took performance to about 1 - 1.5x Zuul's performance, but still fluctuating too much.

## Pivotal Consultancy
They then asked Pivotal for consultation, which resulted in:
* Spring Boot 2.1 in beta, so why don't we use that?
* There's a new version of Spring Cloud Services coming

## Spring Boot 2.1 General Availability release
They tried all Spring Boot 2.1 milestones and release candidates:
* All had at least some unit-tests failing, without any changes to the code, except for upgrading Spring Boot
* Each new version fixed some test-bugs, but introduced new ones

After these troubling results with pre-release versions, they landed on the general availability release, which to their surprise:
* Showed a load of 20% CPU, where 2.0 had almost 100% CPU without any load
* Required less than 500 MB, where 2.0 claimed almost 5 GB instantly
* All tests were green, without changes other than the 2.0 to 2.1 upgrade

## Blue/green deployment

![](pics/Rabo_Pivotal_Cloud_Foundry2.jpg)

To tackle the no downtime transition they used a blue/green deployment:
* Start up a new architecture machine to add to the pool and divert 20% of load to that
* Monitor extensively
* Scale up based on success rate

## External configuration:
I'm not sure if these were final improvements they already did or which were planned, but for external configuration, they used:
* Spring Boot External Config
* Spring Cloud Config

![](pics/Rabo_Pivotal_Cloud_Foundry3.jpg)

All in all, this was a very nice insight into some challenging topics.

# Overall JFall

With every 20 meter of exhibition floor, I bumped into an old colleague, project member or someone else from my network.
Although this prevented me from spending proper time with everyone, I had an incredible time at JFall. 
I haven't been able to go for several years now, mainly focusing on Security conferences (which I will keep doing), but as I'm trying to combine AppSec with Java again, this was an incredibly valuable experience.


