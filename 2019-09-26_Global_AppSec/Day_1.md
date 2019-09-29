# Global AppSec

This week is Global AppSec Amsterdam, including three days of training and two days of conference. I was able to visit the conference days and attended the following talks.

## Opening statement by [Martin Knobloch](https://twitter.com/knoblochmartin)

OWASP focuses its efforts on low entry, so the OWASP membership is only $50,-. For that you get an immediate $50 discount on all OWASP conferences, so there's no reason NOT to be a member.
Also, OWASP makes a diversity commitment to support minorities in the security industry by supporting $100k each year to get a more diverse field of people at conferences.

## Keynote by [Herbert Bos](https://twitter.com/herbertbos)

Herbert talked about how we are building on a shaky foundation: sand, which also happens to be used for making silicon. But the real thread in his talk was about his terrace (you had to be there).

Some statements:
* Complexity makes it impossible to understand our systems
* We are researching new vulnerabilities, which should result in.... Big Bug Bounties

Two observations:
* Exploiting software has become really hard
  * Because in the layered architecture of Application, Software, Hardware, the top most layers are pretty well secured
* Physical attacks and software bugs are merging

2014: Security problems were caused by software bugs and misconfiguration
2019: Perfect bugless software is still vulnerable

In IT, over its lifespan up to now, everything was sacrificed to efficiency:
* Sharing is efficient (memory)
* But: sharing leads to side-channels, which can be abused
* So: sharing is not caring, because it increases risks
* over the past 10 years, we had to either reuse code or go bust
* Rowhammer: Intel is vulnerable
* If using Intel: apply patches and turn off hyperthreading
More on [MDSAttacks](https://www.mdsattacks.com)


# Cloud Native Secure CI/CD Pipelines

* Inconsistent environments -> Not just containers
* Infra controller by admins -> Infra as code
* Tedious rollback -> More infra awareness and integration (canary builds / phased roll-out)
* Static / long lived environments -> Progressive delivery

CI / Engineer shouldn't access clusters directly -> Infra via code
* Use MFA everywhere
* Commit with signatures

https://hubernetes.io/blog/2018/07/18/11-ways-not-to-get-hacked

Containers / kubernetes don't make your code and infra magically become secure
Issues to watch for:
* Insecure defaults
  * API endpoint access public by default
  * Logging disabled by default  
* Network isolation in cloud 
* Secrets management
* Asset management gets harder than ever

Do this:
* Use something like Hashicorp Vault
* Temporary (often rotating) secrets /  credentials
* Use your platform's tools (they're probably the best for that platform)


# The Zest with OWASP ZAP
* Security is important
* Yes we do security
* Until it becomes time to decide priority

Security takes:
* People
* Resources
* Knowledge
* Time

How to we add security to software development
Obstacles:
* How close is development to the company's security team
* What's your biggest obstacle to learn security

Security team:
* Not visible
* Not approachable
* Is there even a security team

Learning security:
* Seems hard

Security looks like the darknet, hooded, scary stuff
Security looks like the manager adding many more boring tasks

Solution:
* Piggybacking: 
  * Piggyback on the knowledge of testers: They know how to test what software should and should not do
* Help them learn to do security: use metaphores / analogy -> Compare with something they already know

ZAP payloads are more input values for the unhappy paths that should be handled by the application appropriately

## ZAP learning
1. Intercepting proxy
2. Using in a test toolchain with
  * SoapUI
  * Browser
  * Selenium
  * Postman

ZAP passive scanner has: PII scanner (for data like credit cards)
* Helps to find Security requirements that are not listed

ZEST is a graphical scripting engine to do security testing
* Extendable with Python and other scripting languages
* Replaces test you normally do with SoapUI
* Access to lots of logic
* Access to assertions

## Benefits
* Automated
* Flexible
* Learning
* usable with
  * Docker
  * Python (headless using python-owasp-zap)
  * Jenkins
* GUI manual
  * Headless on another port / machine
* Regression testing
* Automation in CI/CD
* API testing
* Fuzz testing
* Integration testing
* Security testing


## Links
* ZAP User groups on groups.Google.com/d/forum/zaproxy-users
* mitmproxy.org
* telerik.com/fiddler

How to's:
* owasp.org/index.php/Getting_started
* OWASP Testing guid v4
* OWASP Cheat sheets

## Playgrounds:
* https://juiceshop.herokuapp.comn
* https://google-gruyere.appspot.com
* http://dvwa.co.uk
* http://testfire.net


# Choosing the right SAST based on hard data - [Chris Horn]()

Find issues in these categories:
* Reliability
* Security
* Performance
* Maintainability

List:
Awesome static analysis (Github?)

We compare Software analyzers with 2 goals:
* Build adoption through education
* Improve market transparency

For:
* Developers and security annalists
* Makers / vendors


7 capabilities of SAST:
* Basic information
  * Active development?
  * Cloud / on premise?
  * Payment schemes?
  * Licensing
  * Documentation / learning
* Process integration
  * CI/CD and development integration (seamless please)
  * Where is it run?
  * How to get feedback? (UI, IDE, reports, issue tracking integration)
* Coverage
  * Programming language & frameworks
  * Can it find the issues I want it to scan for?
  * On average, 14% of weaknesses are detected
* Speed & scalability
  * How to scan multiple projects (and how many)
  * How large can the codebase be?
  * How long does a scan take?
  * Can it be parallelised
* Results quality
  * Understanding results
    * Explanation
    * Confidence
    * Context around warning
  * How well does it detect
* Reporting
  * GUI
  * Centralized reporting (and role-based access)
  * Suppression of results (even after code changes)
* Support: Assistance and guidance
  * Installation
  * User guide
  * Integration
  * Project health (Linux CHAOSS (Community Health Analytics OSS))


[Kompar system](https://kompar.tools)
* Progress
* Plans
  * [Trello](https://trello.com/b/qzrRyvAE) todo-list cataloging activity

* Test suites
* Automation to orchestrate running analyzers against test suites
* Content to educate users
* Metrics and scores on analyzers
* Side by side comparisons
* Automation of flagging true / false positive status


# OWASP SAMM 2 - Bart de Win

[OWASP SAMM](https://owaspsamm.org)
Software Assurance Maturity Model

Helps with these questions
* What am I doing
* What should I be doing
* How do I get there

It is:
* Iterative
* Risk-based / driven
* Detailed enough for non-security people
* Technology and process agnostic
* Can act as Umbrella project for all other OWASP projects

Why?
* Measurable
* Actionable
* Versatile

Business functions:
* Governance
  * Strategy & Metrics
  * Policy & Compliance
  * Education & Guidance
* Construction
  * Design
    * Threat assessment
    * Security Requirements
    * Security Architecture
  * Implementation
    * Secure build
    * Secure deployment
    * Defect management
* Verification
  * Architecture assessment
  * Requirements testing
* Operations

Streams:
* Verification of do's
* Verification of misuse / abuse (trying to hack)

2.0:
* Split Construction into Design & Implementation
* Split into 2 dimensions:
  * Coverage: How often do you do this
    * Verified by questions
  * Quality: How useful is what you do (does it make sense?)
    * Quality criteria (Mandatory quality criteria)

# Secure Agile development with OWASP SAMM - Rob van der Veer

SIG - Software Improvement Group
* Measure and advise on Software Improvement

Book: Agile Application Security (O'Reilly)

Quotes:
* We need to show nice features every demo. No priority for security / non-functional
  * Include security in demo / story (include incidents and how you mitigated)
* We do security in separate sprints
  * 
* We have a wiki in 400 rules and we'll see results in the next pentest in 6 months
  * Too long of a feedback loop
* We run this tool every sprint and voila, we are secure
  * By far not everything can be automated 
* We made John responsible for security, so it's not my problem
  * Security cannot be delegated

SAMM Agile notes
* Add notes to activities that describe Agile specific activities / example
* Extension to SAMM 2.0
* Gathering from clients, peers and literature
* By Rob van der Veer, SAMM Working group and notably Michael Kuipers (Centric)

Main principles:
* Collaboration dev-test-ops-security
* Automate verification
* Incrementalize: Base manual work on change
* Minimize repeated expert work
  * Use (secure) components and frameworks
  * Takes time and also experts make mistakes
  * Build it into prepared tests
  * Minimal set of prepared instruction for developers
  * Situational (specific for their task, functionality they're building, role): prefer hardening / hygiene over analysis

Per system:
* Select & Prepare requirements, tests and triggers
* Generic requirements
* Pick lists of specific requiremnts
* Threat model
* Per story (in refinement phase):
  * Relevant requirements to story acceptance criteria
  * User stories wit acceptance criteria (instructions & tests)
* Assess maturity
* Agile testing
* Accept risks to risk overview

[Agile Notes](https://owaspsamm.org/head/agile-guidance/agilenotes)

# State of IAM

Traditional:
* IAM is part of application

Modern way:
* Federation (requires trust)
* SSO
* Aggregation enables security risks (multiple logins over different applications with suspicious properties, like locations don't match)

OpenID connect

OpenID foundation has working groups like:
* Financial organisation for financial OID


Uses JWT: JSON Web Token:
* Header
* Claim (allowed)
* Signature (made by IAM Provider)

OAuth 2 is a framework
OID: Implementation of OAuth 2

OpenID Connect discovery:
openid-connect-configuration


OpenID COnnect Certified:
* Keycloak
* AppAuth
* Identity server


FIDO2 works with OpenID connect
* CTAP (Client to Authenticator Protocol), WebAuthn 
* Strong and easy to implement
* Protects against Phishing, MitM, Replay attacks

Try out [WebAuthn](https://webauthn.me) with realtime architecture model


# Closing keynote by Mikko Hypponen

Future:
* Smart devices go online:
  * TV's can show Netflix
  * Refrigerators can show its contents on your phone when you go shopping
* Non-smart devices go online
  Why do we need this?

All these devices run code, so they can be hacked

Ideas seem innovative at first, but we find out are terrible afterwards (IT asbestos)
* No software update possibilities
* Default and/or hardcoded credentials
* Detecting malware: Linux malware (targeting IoT devices) have now superseded Windows malware
* Why is there still Telnet traffic detected?

APT: Advanced Persistent Threat
The keyword is Persistent. They do not give up.
More specifically: they target someone or something and they don't switch to an easier target when the first target becomes to hard to hack.


Machine learning and AI are used at this moment for defense
In the future (think about deep-fake), it will be used for offense
The one who masters AI Offense, will become the ruler of the world - **Putin**

 

