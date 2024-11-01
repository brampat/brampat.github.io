
## Where to start
<hr />

<i class="fas fa-thermometer-1"></i> Measure<br>
<i class="fas fa-water" style="margin-left: 30px;"></i> Start Simple

<i class="fas fa-plus"></i> Slowly add<br>
<i class="fas fa-clipboard-check" style="margin-left: 30px;"></i> Extra rules<br>
<i class="fas fa-tasks" style="margin-left: 30px;"></i> Then Quality gates

<i class="fas fa-users"></i> Team-by-team<br>
<i class="fas fa-running" style="margin-left: 30px;"></i> Front-runners first

<i class="fas fa-cogs"></i> Automate<br>


-- Notes --

* Start monitoring:
  * Measure first
    * Knowledge is power
  * Simple and few rules
  * Slowly add rules
  * Quality gates
  * Team-by-team, front-runners first
* Automate
  * Pipeline
  * Scanning
  * Deployment
    * Config & secrets
  * Consistency is key



* Start by measuring
* Start with few and only simple rules
* Add rules only if under control
* Add quality gates when maturity is decent
* Start with one or two teams

--

## Where to start
<hr />

<!-- .slide: class="table-small" -->

<span class="fragment" style="height: 2px;"><li style="color: white; height: 2px;"></li> </span>
<span class="fragment" data-fragment-index="0"><li>Dependency Check</li></span>
<span class="fragment" data-fragment-index="1"><li>Relevant Cheat Sheets</li></span>
<span class="fragment" data-fragment-index="2"><li>Code Review Checklist</li></span>
<span class="fragment" data-fragment-index="3"><li>Threat Modelling</li></span>
<span class="fragment" data-fragment-index="4"><li>Requirements</li></span>
<span class="fragment" data-fragment-index="5"><li>Integrate</li></span>
<span class="fragment" data-fragment-index="6"><li>DSOMM</li></span>
<span class="fragment" data-fragment-index="7"><li>Dep. Track</li></span>
<span class="fragment" data-fragment-index="8"><li>ZAP</li></span>


![](pics/ssdlc/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 400px; width: 800px; " -->

![](./pics/OWASP/dependency_check.png)<!-- .element class="fragment" style="position: fixed; box-shadow:none; width: 250px; top: 350px; right: 320px; " data-fragment-index="0" -->

![](./pics/OWASP/Cheatsheet_Logo.png)<!-- .element class="fragment" style="position: fixed; box-shadow:none; width: 200px; top: 160px; right: 320px; " data-fragment-index="1" -->

![](./pics/OWASP/Secure_code_review_logo.png)<!-- .element class="fragment" style="position: fixed; box-shadow:none; width: 80px; top: 520px; right: 420px;" data-fragment-index="2" -->

![](./pics/OWASP/Threat_dragon.png)<!-- .element class="fragment" style="position: fixed; box-shadow:none; width: 150px; bottom: 10px; left: 250px;" data-fragment-index="3" -->

![](./pics/OWASP/ASVS_logo.png)<!-- .element class="fragment" style="position: fixed; box-shadow:none; width: 150px; bottom: 240px; left: 180px; " data-fragment-index="4" -->

![](./pics/OWASP/defect_dojo_logo.png)<!-- .element class="fragment" style="position: fixed; box-shadow:none; width: 300px; top: 310px; right: 240px; " data-fragment-index="5" -->

![](./pics/OWASP/DSOMM_logo.png)<!-- .element class="fragment" style="position: fixed; box-shadow:none; width: 300px; top: 100px; right: 40px; " data-fragment-index="6" -->

![](./pics/OWASP/dependency_track_logo.png)<!-- .element class="fragment" style="position: fixed; box-shadow:none; width: 250px; top: 380px; right: 110px; " data-fragment-index="7" -->

![](./pics/OWASP/zap_logo.png)<!-- .element class="fragment" style="position: fixed; box-shadow:none; width: 200px; top: 530px; right: 250px; " data-fragment-index="8" -->

-- Notes --

* Start small
  * Dependency Check
  * Code reviews:
    * Use cheat sheets
    * Add Secure Code Review guide
  * Threat modelling: architecture review
    * Threat Dragon
  * Check out L1 of ASVS security requirements
  * Integrate with other tools like:
    * Sonarqube
    * Secrets Scanning
  * Look at DSOMM to check your level and find any gaps in that level
  * Aggregate SBOM data and dep. issues
  * Start hacking yourself
    * But ask permission first
    * Make sure you ZAP test env.


--

