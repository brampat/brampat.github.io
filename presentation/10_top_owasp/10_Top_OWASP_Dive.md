
## Deep Dive
<hr />


--

## 1: OWASP Top 10's
<hr />

![](./pics/OWASP_top10/xzibit.jpg)<!-- .element class="center-xy" style="position: fixed; box-shadow:none; width: 800px;"  -->


-- Notes --

Other Top 10's: There are so many important Top 10's. But what even is (the objective) of these Top 10's? And why can't you "be Top 10 Compliant"



--

## 1.1: OWASP Top 10 Web App Risks
<hr />

![](./pics/OWASP_top10/OWASP_Top_10_Web_Vuln.png)<!-- .element style="position: fixed; box-shadow:none; width: 800px; top: 150px; right: 0px;"  -->

* Format: A01:2021

-- Notes --

The classic
* A01:2021
* 7 releases, 8th release soon

--

## 1.2: OWASP Top 10 Mobile Risks
<hr />

* Format: M1
* 2024
* 2016
* 2014

![](./pics/OWASP_top10/OWASP_Top_10_Mobile.png)<!-- .element style="position: fixed; box-shadow:none; width: 800px; top: 150px; right: 0px;"  -->

-- Notes --

* First release in 2014
* Updated in 2016 and 2024
* 3 releases


--

## 1.3: OWASP Top 10 API Security Risks
<hr />

* Format: API1:2023
* 2023
* 2019

![](./pics/OWASP_top10/OWASP_Top_10_API.png)<!-- .element style="position: fixed; box-shadow:none; width: 600px; top: 150px; right: 0px;"  -->

-- Notes --

* First release in 2019
* Updated in 2023

--

## 1.4: OWASP Top 10 CI/CD Security Risks
<hr />

![](./pics/OWASP_top10/Top10_CICD.png)<!-- .element style="position: fixed; box-shadow:none; width: 800px; top: 150px; right: 10px;"  -->

* Format: CICD-SEC-1
* 2022

-- Notes --



--

## 1.5: OWASP Top 10 Kubernetes Risks
<hr />

* Format: K01
* 2022

![](./pics/OWASP_top10/OWASP_Top_10_Kubernetes.png)<!-- .element style="position: fixed; box-shadow:none; width: 600px; top: 150px; right: 0px;"  -->


-- Notes --



--

## 1.6: OWASP Docker Top 10 Controls
<hr />

* WIP
* Format: D01
* 2019-2021

![](./pics/OWASP_top10/OWASP_Top_10_Docker.png)<!-- .element style="position: fixed; box-shadow:none; width: 500px; top: 150px; right: 0px;"  -->

-- Notes --


--

## 1.7: OWASP Cloud-Native App Top 10
<hr />

* Format: CNAS-1
* 2022
  * CNAS-1: Insecure cloud, container or orchestration configuration
  * CNAS-2: Injection flaws (app layer, cloud events, cloud services)
  * CNAS-3: Improper authentication & authorization
  * CNAS-4: CI/CD pipeline & software supply chain flaws
  * CNAS-5: Insecure secrets storage
  * CNAS-6: Over-permissive or insecure network policies
  * CNAS-7: Using components with known vulnerabilities
  * CNAS-8: Improper assets management
  * CNAS-9: Inadequate ‘compute’ resource quota limits
  * CNAS-10: Ineffective logging & monitoring (e.g. runtime activity)


-- Notes --

OWASP Top 10 ![Cloud Native Application Security](https://owasp.org/www-project-cloud-native-application-security-top-10/)


--

## 1.8: OWASP Top 10 Low Code / No Code
<hr />

![](./pics/OWASP_top10/owasp-lcnc-top10-logo.png)<!-- .element style="position: fixed; box-shadow:none; width: 300px; top: 150px; right: 0px;"  -->
![](./pics/OWASP_top10/OWASP_Top_10_LCNC.png)<!-- .element style="position: fixed; box-shadow:none; width: 800px; bottom: 20px; right: 0px;"  -->

* Format: LCNC-SEC-01
* 2022

-- Notes --

Released around 2022


--

## 1.9: OWASP Thick Client Top 10
<hr />

* Stale, no releases

-- Notes --

OWASP ![Thick Client](https://owasp.org/www-project-thick-client-top-10/) Top 10 Project

--

## 1.10: OWASP Top 10 Proactive Controls
<hr />

* Format: C1
* 2014, 2016, 2018, 2024
  * C1: Implement Access Control
  * C2: Use Cryptography the proper way
  * C3: Validate all Input & Handle Exceptions
  * C4: Address Security from the Start
  * C5: Secure By Default Configurations
  * C6: Keep your Components Secure
  * C7: Implement Digital Identity
  * C8: Leverage Browser Security Features
  * C9: Implement Security Logging and Monitoring
  * C10: Stop Server Side Request Forgery

-- Notes --



--

## 2: OWASP SAMM
<hr />

![](./pics/OWASP/SAMM_v2_diagram.png)<!-- .element class="center-x" style="position: fixed; box-shadow:none; width: 850px; top: 100px; "  -->

![](pics/ssdlc/SDLC.png)<!-- .element class="fragment" style="box-shadow:none; position: fixed; left: 40px; bottom: 20px; width: 1200px; " -->
![](./pics/OWASP/SAMM_logo.png)<!-- .element style="position: fixed; box-shadow:none; width: 250px; top: 10px; right: 10px; "  -->


-- Notes --

Software Assurance Maturity Model
* Framework to measure organisation's maturity
* Originally called ![OpenSAMM](https://www.opensamm.org/)
* Roadmap to grow maturity
* 5 Business Functions
  * Each with 3 practices
    * Each with 2 Streams
      * Each with 3 maturity levels
* 30 streams to mature up to 3 levels

![The Model](https://owaspsamm.org/about/)

--

## 2: OWASP SAMM
<hr />

![](./pics/OWASP/SAMM_logo.png)<!-- .element style="position: fixed; box-shadow:none; width: 250px; top: 10px; right: 10px; "  -->
![](./pics/OWASP/SAMM_interview.png)<!-- .element class="center-x" style="position: fixed; box-shadow:none; width: 1050px; top: 100px; "  -->
![](./pics/OWASP/SAMM_scorecard.png)<!-- .element style="position: fixed; width: 450px; bottom: 20px; left: 20px;"  -->

-- Notes --

* 30 streams to mature up to 3 levels:
  * 90 questions to evaluate you maturity
* Discover gaps in security maturity
  * Spend effort on the lowest levels, easiest levels etc.
* Scope:
  * Team:
    * Especially pushing left through the model
  * Organisation:
    * Governance
    * All the others
    * Highlights mature teams

--

## 2: OWASP SAMM
<hr />

![](./pics/OWASP/SAMM_logo.png)<!-- .element style="position: fixed; box-shadow:none; width: 250px; top: 10px; right: 10px; "  -->

* Mar 2009: v1 of OpenSAMM
* Mar 2016: v1.1
  * Adopted by OWASP
* Apr 2017: v1.5
  * Added more detailed guidance to tailor SAMM
* Jan 2020: v2.0
  * Added Design business function
  * Added Streams
* Feb 2023: v2.1



--

## 3: OWASP DSOMM
<hr />


-- Notes --

the DevSecOps Maturity Model, focussing on more technical aspects of DevOps environments, highlighting security advantages of automated CI/CD, containerization, Infra as Code, logging & monitoring, static & dynamic analysis, consolidation of test-results etc.

--

## 4: OWASP Cornucopia
<hr />

Tabletop Threat modelling card game to support threat modelling exercises
Bonus: OWASP Threat Dragon: tool to support architecture modelling in Threat modeling exercises


--

## 5: OWASP ASVS
<hr />

Application Security Verification Standard
MASVS: Mobile Application Security Verification Standard

Implementing security standards in web applications and Mobile Applications.

--

## 6: OWASP Cheat Sheet Series
<hr />

Quick guides for secure best practices in coding and design.
Highlight the most relevant cheat sheets for Java, Web, Mobile, API developers and more: "There's a cheat sheet for that"


--

## 7: OWASP Dependency-Check
<hr />


Automating vulnerability scanning in Software dependencies. Explain SCA: Software Composition Analysis. List a number of alternatives, including NexusIQ, Snyk and others
Bonus: OWASP CycloneDX: to create full SBOMs, explain what SBOMs are and how they help improve trust in your software and quickly pinpoint vulnerable dependencies
Bonus: OWASP Dependency Track: Keep track of SBOMs, dependencies and software licenses

SCA: Software Composition Analysis

--

## 8: OWASP ZAP

Zed Attack Proxy (ZAP): Assists and automates Security testing web applications. Dynamic Application Testing, either hands-on through GUI or automated in a build pipeline
DAST: Dynamic Application Security Testing

--

## 9: OWASP DefectDojo
<hr />

Consolidating vulnerabilities and other findings across development projects, imports data from tools like Dependency Check, CycloneDX, ZAP, SonarQube, Secrets scan tools, DAST and SAST tools and many others


--

## 10: OWASP Juice Shop
<hr />

Deliberately vulnerable Web apps for training. I will have a Pi cluster in Lego server case with JuiceShop to show.

--

