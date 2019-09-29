# Global AppSec

This week is Global AppSec Amsterdam, including three days of training and two days of conference. I was able to visit the conference days and attended the following talks.

## Opening Keynote by Chris Kubecka
 
September 2014
 
Four incidents Saudi Embassy in The Hague
* Unauthorized access of email account
  * Password 123456 (and several other basic hygiene issues)
  * Extortions with dubious motives sent from Saudi Embassy to defame Saudi
  * Real embassy sent a warning to all embassies, using CC (not BCC)
  * Perpetrators responded to all in mail and started taunting
  * $50M or ISIS would blow up Kurhaus Scheveningen on Saudi National Day, with ambassadors, royalty and VVVIPs
  * Chris Kubecka number 2 on ISIS target list
  * Suspect was an insider, from prestigious family, reassigned to extremely dangerous country, killed in car bomb
* Rootkit on embassy
* Drones on site for observation / spying

Lessons learned
* Geopolitics intertwined with cyber securty
* Major incidents can have real human consequences
* Never trust gifts from foreign agents
* If you are a high level target, prepare your loved ones: they are the closest hop through which they can get to you
* Don't panic or it might be your last time

## [Martin Knobloch](https://twitter.com/knoblochmartin)
All talks are recorded and will be published

## Unlikely allies: How HR can help build a security-first culture by [Alison Eastaway](https://twitter.com/alisoneastaway)

Security and HR should work together, because:
* they do the same job. HR knows how people behave, what makes them tick. Social Engineering is the same thing
* Security is a people problem
* HR is more likely to be targeted by infected attachments in emails
* Spends a lot of time on designing systems to prevent unwanted behavior

How should they work together:
* We don't market or sell using FUD
* Awareness: focus on the learning aspect, not on the guilt aspect
* Cookie method: If you don't lock your laptop: "I have cookies" on Slack
  * Creates creative methods to unlock someone else's laptop

Some other notes:
* PagerDuty: phishing training
* Quarterly development demo to investors, customers, teams
* Sqreen is transparent and open to the max
* Psychological safety: believing that taking risks will not be punished
  * This is very important to have, otherwise mistakes cannot be mitigated, learning effect is stifled
  * The ability to be vulnerable
    * Good for avoiding to be vulnerable in systems
* Leadership alignment / buyin is very important
* Figure out who the influencers are, and align those as well

## Do certain types of developers write more secure code by Anita D'Amico and [Chris Horn](https://twitter.com/chornsec)

### Why investigate human factors that affect code quality & security?

* 90+ % of breaches are caused by web-applications
* Most vulnerabilities in open source code are discovered only after 2 years
* SAST tools discover on average 14% of known vulnerabilities
* Manual code reviews are very work-intensive

Human factors influence human performance
* Individual:
  * Focus
  * Memory
  * Decision making
* Group:
  * Collaboration
  * Communication
* Physiological
* Environmental

### How do we investigate human factor influence on code quality & security?
Mining existing opensource code / repositories for indirect measures of human factors
* Looking at local timezones for fatigue indicators
* Number of contributors
* Comments on the code

Compare attributes on files with vulnerabilities and without vulnerabilities

* Retrospective analysis: on software repositories
* Concurrent analysis: as they code
* Vulnerability history analysis: analyse vulnerabilities by going back in time to the commit that caused it and analyse the situations at that time

### What did we find in our investigation?

Can human factors influence code quality and security
* Trying to relate predictors (human factors) and outcomes (vulnerabilities and other quality)

Findings:
* Co-located versus distributed teams: No influence
* Time of day (circadian rhythm): Late night commits have more bugs than morning commits. Correlates to alertness
* Focus / Diffusion of attention: Unfocussed attention decreases quality. Major influence
* Number of developers: bigger teams results in decreased quality
  * Linux 9+ developers increases 16x risk on issues
  * Chromium: 68x risk
  * Apache web server: 117x risk
  * Potential Cause: bystander (I thought you did it)
* Number of developers do NOT influence quality in other studies
  * Quality is similar but not the same as security
* Developer experience: Yes, more experience increases quality
* Developer interaction: changes on the same code by consecutive developers (changes in ways of working / preference)
  * Called "Interactive churn"
  * Though: One developer introduces vulnerability, other developer fixes it.

## Where can we learn from our findings?
Where can we learn from this?
* Transportation
* Health

Most important causes:
* Fatigue (max 80 hour week, max 11 hour day, etc)
* Knowledge, certification
* Culture (safety, security culture: raising awareness, psychological safety)
  * Cultural change is slow

Look for:
* Code committed after midnight
* Files with unfocussed attentions
* 9+ developers
* Contributors with little experience (drive by committers)
* Interactive churn (consecutive developers on the same code)

Other factors to study:
* Feature density in releases / time-periods
* Security culture (If there is management buy-in)


# The security we need: Designing usable IoT Security by [Damilare D. Fagbemi](https://twitter.com/damilarefagbemi)

* Good users do bad things. Why do they do this?
* Security is not (often) something cool / sexy
* (normal) Users are not interested. They want something that just works
* Security professionals are special forces and not pop-stars
  * We care about security, not about the fame

What if we ignore security usability?
* We get products that are only usable by experts
* Smart home: you have to maintain (secure) 20+ devices, which is not doable for non-security users

The 5 C's:
* C1: They think the experts know what they're doing
* C2: Regular users are not interested in security
* C3: Using security features is not mandatory
* C4: Barrier to security controls: how much effort do I need to do security / how easy is it to do security
  * If it's difficult to use, users will turn it off
* C5: Different people (roles) have different views on security
  * Executive, Architect, Implementer, User
  
The 10 P's
* P1: Put on user's hat
* P2: Secure defaults only. Also, assume compromise, as in: you can't assume a network where your device operates is not secured. 
* P3: Show targeted risk information
* P4: Assist users in pre-configured security levels
* P5: Design to Scale (for instance: zero-touch device provisioning, to auto update without any user required action)
* P6: Block passive or transitive authorization: Only give authorisation based on request
* P7: Implement runtime anomaly detection & health checks
  * Alert sys admin
  * When confirmed by manual inspection, revoke certificates when needed
* P8: 
* P9: Just keep secrets secret (also for the user, because they don't need to know, but probably also don't want to have to remember)
* P10: Monitor circumvention:
  * There is often a reason why this happens
  * Example: updates take to long to install -> People turn off updates

Closing notes:
* Aim for clarity & simplicity
* Keep it simple stupid
* Secure design is art

# The state of credential stuffing and the future of Account Takeovers by [Jarrod Overson](https://www.twitter.com/jsoverson)

In security, we scoff at credential stuffing, because we simply don't reuse passwords, BUT: it's a major problem.

A credential stuffing attack goes through these four stages:
1. Get credentials
2. Automate login
3. Defeat automation defenses
4. Distribute globally

Some statistics:
* 1 billion credentials leaked in 2018
* First time 2 billion attacks in one day in 2018
* First time 3 billion attacks on one domain

Manual vs. automation
* attacks switch between manual and automation when needed
* Perform manual attacks when the value is there
* Automate when the value is not there

When a system has no defenses:
* cost to attack is nearly zero
* attackers can use existing attack tools

Any defense will increase cost immediately, defenders should add defenses until cost to attack is higher than the potential value, but:
Over time, computing-cost (also of attacks) will decrease and you have to add more defenses

## Step 1: Get credentials
A terabyte of credentials can be bought for as low as $2,50 from forums like RaidForums
* Also available on torrents
* Totalling 2.3 Billion credentials

## Step 2: Automate
* Browser automation studio: attack tool
  * on websites you own, this is called a testing tool
  * on websites you don't ow this is caller an attack tools
Configuring an attack can also be done by someone for hire if the attacker doesn't know or doesn't care to do this. Costs are some $50 ish

## Step 3: Defeat automation defenses
* ReCapthas like typing the characters from a semi-obfuscated image
* Google's I'm not a robot reCAPTCHAs, select all pictures with cars, busses, traffic lights etc.

These can be beaten by:
* Captcha solvers / solver bypass service
  * Death by Captcha
  * XEvil

Captcha's do not work well with accessibility devices for disabled people.

## Step 4: Distribute globally

Distribute your traffic for automation to prevent IP blocking
* AWS
* Azure
* Google Cloud

## Total
To launch 100k Account Takeover attempts, the costs are:
* Step 1 Credentials: $ 0
* Step 2 automation: $50,-
* Step 3 Defeating automation defenses: $ 139 per 100k captchas
* Step 4 Distribiution: $ 39,-
Total $ 238,-

This equals to less than $ 0.0024 per attempt. Given that:
* Success rate is 0.2% - 2%
* Value per account is $2 - $150,-
An attacker will always have at least some profit, even with 0.2% success (about 200 accounts successfully hacked) and only $2,- value

## How credential stuffing has evolved

* Gen 0: basic curl get command
* Gen 1 SentryMBA: basic HTTP requests, extensible & highly configurable, tailored for specific attack use cases
  * Also supports using combo-lists

Defending:
* Iteration 1: Defeating IP rate limiting using Proxy rotating
  * Luminati network will create legitimate IP's
  * Hola VPN (Free) for region blocking
* Iteration 2: Text-based captchas
* Iteration 3: Defeating dynamic sites and Javascript defense (like image captchas)
  * PhantomJS / TrifleJS (generic purpose tools to emulate user-interaction)
  * Defense: Fingerprint header-info / environment checks
* Iteration 4:
  * Scriptable consumer browsers (like Selenium & puppeteer)
  * Defense: Browser fingerprinting (browser metadata fonts, screen-size etc.)
* Iteration 5: 
  * Randomizing Fingerprint data
  * FraudFox & AntiDetect to both battle fingerprinting and privacy, increasing anonymity
  * Defense: negative traits, like speed-typing or multiple clicking on the 0x0 coordinate of elements
* Iteration 6: behavior emulation
  * randomize mouse positions
  * stop in random places
  * random idle time
  * increases time (and thus cost)
  * Defense: browser consistency checks
    * Validating fingerprint data: are browsers actually that browser (are the fingerprints logical or random?)
* Iteration 7: Fingerprint switcher / detector
  * Imitation attacks
  * Emulating real user behavior

## Where do attackers go from here
* 2FA does not stop credential stuffing
  * 2FA only stops automated account takeovers
  * Credential stuffing still finds valid accounts, but you still need to beat 2FA
  * Bypassing 2FA is cheap and easy by phishing the target of the 2FA
    * Intercept login attempt
    * Do MitM fund-transfer
    * Capture 2FA token and ask the user
    * Transfer funds
    * Pass login successful
* Value is not going away
* We need to increase costs

### Genesis
Genesis is the newest in credential stuffing tech:
* Bots scrape computers
* These scrape accounts and cookies from machines to a market-place
* Single scrape from a single computer is sold as a single unit to only one buyer
* Configure which parts you want to emulate
* Generate the fingerprint
* Inject in your (attacker) browser and you emulate the exact properties of the victim
* Captures behavior of app's human users and automate this mimicking using bots

[Buzzfeed: Apps track user behavior](https://www.buzzfeednews.com/article/craigsilverman/how-a-massive-ad-fraud-scheme-exploited-android-phones-to)

Fraud problems are human problems, and are not technical problems
* Advanced cerdential stuffing is sophisticated fraud
* Imitation is designed to blend in
* All defenses will eventually fail

# Breaches are everywhere. What's a good security leader to do? by Richard Greenberg

* Heightened awareness in boardrooms on security
  * 80% of the time it's on the agenda
  * Breaches are weekly news items
  * Relatives call OWASP / security for how they think about the news
  * USA Congress is trying to regulate / legislation security -> Compliance (not security), but does supply budget / funding
* Breaches often discovered only after 6-9 months
* Attackers get in, exfiltrate data, get out, preferably without leaving a trace

Current state of risk:
* Every company is a target
* Every IoT is a target
* IoT turned back the clock on security

Where is the improvement?
* Old vulnerabilities don't die (SQLi, DDoS on UPnP)
* Patching is still problematic
* No money allocated to security
* Phishing is still a problem

CISO is not able to work at the C-level (though C stands for Chief)

Security awareness
* 70% says senior leadership understands cybersecurity
* 77% operate with limited security & resilience
* 87% warn that they have insufficient budget

Notes:
* News always says: sophisticated attacks
  * Reality: none of the breaches are sophisticated

What should we do:
* Go on tour
* Gamify security awareness training
  * Provide incentives and gifts
* Do phishing simulations
  * Don't exclude executives
* No death by powerpoint / powerpoint overload
  * Get creative

Security patch management
* Test patches on pilot group
* Include third-party apps
* Minimize excluding any systems
* Minimize effects on users

Lunch with key executives
Meet regularly
  * With CTO
  * Division heads
  * Legal
  * Risk compliance
Learn to talk business-eese:
  * Management only cares about:
    * Risk
    * Money

Practice good configuration management
* Ensure standard OS image
  * Regularly updated
  * Regularly tested
  * Deployed everywhere, especially on admin systems
* Harden all systems
* Create and test change management process

Enforce policies & procedures
* Make it small, so they actually read it
  * Exclude procedures from the policy docs
* Review and change policies regularly

Bake security into SDLC
* Embrace & befriend application development
* Utilize SAST & DAST
* Have / hire dedicated pentester(s) for critical apps
* Everyone should to Secure Coding training
* All projects should be reviewed by infosec
  * Review and build risk-profile
  * Insert controls as needed
* Work with PMO

Don't forget physical security
* Validate vulnerability (scan-prone) access cards
* Can people leave with anything (including servers?)

Monitor & detect systems
* Detect anomalies
* Detect odd outbound traffic to odd IP's
* Monitor unusual user behavior

Create and review reporting
* Create remediation plans
* Compare reports from various tools
* Follow up on remediation efforts
* Rescan & review reports
* Look for patterns in incidents to find root-root-causes

Access management
* Include HR to enroll and de-provision employees when they leave
* Enforce de-provisioning
* Periodically Audit system access
* Require 2FA for all admin access and access to mission critical systems
  * Consider MFA for all systems
* No one should be regularly logged in with admin privilege


Patching:
* Will mitigate 75% of attacks (Hi Equifax / Struts, Hi Wannacry)


Incident response:
* Minimize damage
* Test IR plan
* Identify threats
* Identify business representatives for IR: attorneys, PR, Finance
* Keep stakeholders informed

Encrypt everything, everywhere
* Don't roll your own encryption
* Have a well thought out key-management
* Do not allow insecure protocols (Telnet or SSL, use at least TLS 1.2)

Disaster recovery
* Test the plan
* Identify acceptable risk level
* Inventorize critical systems
* Backup to cloud?

Network and collaborate
* Attend networking events
* Establish relationships
  * The Hague security Delta
  * NCSC
  * CSIRT
* Join ISSA, OWASP, ISACA
* Form new groups
* Look for meetups in your field

Keep learning, subscribe to:
  * US-CERT
  * MS-ISAC
  * Vendor alerts
  * Webcasts, blogs, podcasts
  * Classes, books, LinkedIn, Twitter
  
Teach:
* Hire students
* Train & mentor
* Speak at schools
* Suopport cyber competitions / CTF's
* Help schools with curriculum


# How to learn (and teach) hacking by Ruber Gonzalez

## 1. What is hacking

* Uses technological knowledge to overcome a problem
* Uses bugs and exploits to break into computers
* Hacker makes an application dance

What does a hacker need:
* Basic CS / Web / crypto / whatever
* An eye for attack vectors
* Creativity
* High frustration threshold

## 2. How to learn: CTFs books, courses

Theory:
* Read a lot (writeups, papers, books, advisories)
* Listen to talks
* Learn how systems and software works
  * Then think like a hacker instead of a developer

Practice:
* by playing lots of CTFs

CTF's:
* Jeopardy: Orgs run a service to hack
* Attack-defense: Teams run the service and also need to defend
* Vulnerabilities are:
  * Intentionally inserted / prepared
  * Zero-days, so not prepared
  
Think outside the box

How to learn:
0. Find a group (preferably IRL)
1. Solve challenges
2. Win CTFs
3. Do writeups
4. Repeat

[CTF Time](https://CTFtime.org)
Mind the ratings, avoid bad rated CTFs

Play CTFs for fun, not the money (do bug-bounties instead)


## 3. How to teach

Problem based learning (PBL)
* Start with a puzzle that student wants to olve
* Has to be combined with lecture that teaches the basics
* Often used in:
  * Medicine students
  * Connect the dots (condense knowledge into skills)
  * Motivate students

Four rules to PBL:
* Create authentic problems (This is the hard part)
* Work in small groups
* Tutoring, the teacher steps back (no helping)
* Individual knowledge gain

Finding an authentic problem is hard, the rest is natural in CTFs

Avoid:
* Explanatory texts (no context, just thrown into the problem)
* Mandatory "correct" solution
* Help the students
* Guessing game

Tips:
* Stick to PBL
* Do not underestimate your students
* Classical teaching and PBL go very well together
* Enjoy


# Closing Keynote: History of InfoSec By Mario Heiderich

Mario Heiderich speed-ran through history and eventually ultra-speeded through his visions of the future in a fun-laden 
and obviously not serious take on Info Security. Since the future-part was too fast, chaotic and comedic, I haven't been able to keep up.

## Act one: the past

### 1971: First computer worm called Creeper by Bob Thomas bounced between machines
* Led to Reaper: First Anti-Virus software by Ray Tomlinson (which itself was also a worm)

### 1980: Intrusion detection System by James Anderson of NSA
* Infamous group "The 414s" was founded in Milwaukee
* Early hacking
  * Caused actual financial damage

### 1981: 

### 1986:
Astronomer Cliff Stoll captured Markus Hess
 * Markus German hacker and KGB recruit
 * Stole lots of data, paswrods
 * Cliff caught him using the first honeypot
 * First Political hack
 * First documented use of cyber forensics

First actual IDS design by Dorothy E Denning assisted by Peter G Neumann
* IDES (Expert)
* Looks at both user and network level
* Check paper

### 1987:
Fred Cohen: "Impossible to detect intrusion every case and resources grow with the number of users"
Wikipedia: Positive virusses, like compression virus

### 1988:
Robert Morris:
* Measure the internet with a worm Morris Worm

Years later: Samy Kamkar

### 1989
Morris Worm damage: 100k to 10M$
Clifford Stoll saved the day and mitigates

First ransomware AIDS:
* After 90 reboots, AIDS hid directories and encrypt names of all files
* 189$ USD to Panama postbox to get stuff back

### 1990
* Hacking becomes illegal: Computer misuse act (UK)
* 

### 1991
* AntiVirus industry boom
  * Matching Checksums of binaries against database of signatures
  * Later: String-search inside binaries for suspicious data
  
### 1994
* Netscape Cookie Specification
  * Netscape 0.9
  * Internet Explorer 2.0
* Changed the web as we know it

### 1995
* World Wide Web Takes off
* Web started to be available for "free"
  * InterWorks
  * Quarterdeck Browser
  * InterAp
  * WinTapestry
  * Browserwars
* Hackers (the movie)

### 1996
* People noticed cookies and tracking
* Financial Times published tracking information and people freaked out about cookies
* Cookies discussed in US Federal Trade Commission
* Disable cookies -> PHPSESSID in url

### 1998
* SQL Injection discovered  y Jeff Forristal aka Rain.forest.puppy in Phrack #54
* Most websites didn't use MS SQL server
* Those who did almost all were vulnerable
* Microsoft said it wasn't an issue

### 1999
* XSS begins
* MSRC pioneers
* MSIE security Team
* First WAF built by Perfecto Technologies called AppShield WAF
  * Targetted e-commerce
<See picture for feature>

### 2001
* IE 6 was the best browser with 89%
  * IE all versions were 95%
* OWASP Started
* CSRF discovered

### 2002
* EU launches Directive for Privacy and Electronic Communications
  * User consent to use cookies and similar technologies
  * Possible to 
* Clickjacking discovered
  * JHesse Rudman registered the bug with Mozilla in BugZilla
  * No one understands implications
  * Now still in a secret cave
* The ModSecurity project started  

### 2003
* Anonymous started
  * International hacktivist group
  * Guy Fawkes masks sales went up
* OWASP Top 10 Vuln. project published for first time
  * Most linked project
  
### 2004
* Mass exploitation of IE bugs
  * Download.ject tens of millions of PCs through IE, backdooring through visiting infected site
* Firefox 1.0 released
  * Phoenix, but BIOS Phoenix sued
* Second Browser War (2004 to 2017)
  * April 2004 WHATWG created

### 2005
* Ransomware:
  * Gpcode, Archiveus, Krotten, MayArchive using RSA encryption
* Sammy Kamkar accidentally released XSS worm on MySpace
  * Within 20 hours more than one million infected
* Alberto Gonzales and gang steals 45.7M payment card credentials of US retailer TJX
* $256M damage

### 2007
* Cenzic files lawsuit against SPI Dynamics
  * Fault injection, every vulnerability scanner does this
  * Cenzic site hacked
  * HP bought SPI Dynamics and Cenzic settled


### 2008
* More sophisticated ransomware
  * Gpcode.AK uses 1024-bit RSA
* Clickjacking rediscovered (six years after the first)
  * Adobe Flash clickjacking
  * Adobe made them pull their OWASP New York talk in 2008

### 2013
* Ransomware becomes more expensive
  * Cryptolocker collects $27M in 4 days
* iFrames gets a sandbox to be more secure
  * Untrusted coontent loaded in iFrames, browsers start implementing sandbox

### 2014
* eBay gets hacked and lots of PII leaks
  * 145M users affected
  * Social engineering
  * 221 days in eBays network
* CEO of eBay said decline in user activity
  * Little impact bottom line
  * Revenue up 14%

### 2015
* Microsoft abandoned IE
  * Shiny new Edge, better with better security

### 2016
* CSRF is dead:
  * SameSite cookies 
* Yahoo admits a small security oops (just tiny)
  * "State sponsored" attack of 500M user data
  * December corrected to 1B accounts, but....
   
### 2017
* 3 Billion: all accounts compromised
* Chrome dominates with 60% usage
* MS IE 11 does not offer SameSite

### 2019
Everything is still a thing
* SQLI
* XSS

## Act two: The future

### 2020
* Fight CSP 4.0 vs CSP.next
* 10 different security headers
* Chrome sets samsite flag on all cookies by default
* All OWASP Conferences cancelled until 2050

### 2022
* HTTP response headers same size as the body
* Google finally buys Mozilla
* Apple iPhone 13 with no buttons noty apps

### 2023
* Apple lost phone business
* Buys Google
* iPhone 
* HTTP Response headers more bytes than body

### 2024
Mark Zuckerberg is 46th president
* Facebook buys Apple
