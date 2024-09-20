## Intro
<hr />



![](./pics/OWASP_top10/owasp_logo.png)<!-- .element class="center-xy" style="position: fixed; box-shadow:none; width: 500px;"  -->


<span>Worldwide</span><!-- .element class="fragment" style="font-size: 24px; font-weight: bold; display: block; opacity: 1; transform: rotate(-25deg); background-color: white; color: red; position: fixed; top: 400px; left: 450px; width: 90px; height: 23px;" -->


<span>Global open community that powers secure software through education, tools and collaboration</span><!-- .element class="fragment center-x" style="font-size: 18px; position: fixed; bottom: 150px; width: 740px;" -->
<span>No more insecure software</span><!-- .element class="fragment center-x" style="font-size: 40px; position: fixed; bottom: 80px; " -->


-- Notes --

Introduction:
* Formerly Open Web Application Security Project
* Open WorldWide Application Security Project
* Dec. 2001
* Non-profit
* All projects are opensource / creative commons
* Partnership / Membership
* Mission:
  * Global open community that powers secure software through education, tools and collaboration
* Vision:
  * No more insecure software


--

## THE (?) OWASP Top 10
<hr />

### Web Application Security Risks

![](./pics/OWASP_top10/OWASP_Top_10_Web_Vuln.png)<!-- .element class="center-x" style="position: fixed; box-shadow:none; width: 900px; top: 150px;"  -->

<span>Next ed. 2025 'H1: Please donate your pentest stats until December 2024</span><!-- .element class="fragment center-x" style="font-size: 25px; position: fixed; bottom: 50px; width: 800px;" -->

-- Notes --

* Started in Jan 2003
  * Based on a bug report for an online Cinema ticketing system
  * Order -2 tickets
  * Java doesn't have unsigned int
* OWASP Top 10's are awareness documents, not standards or achievements
  * They start conversation and learning
  * They are Top 10's not All 10's

--

## Shifting Left
<hr />

![](pics/ssdlc/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 400px; width: 800px; " -->
![](pics/ssdlc/bug_cost.jpg)<!-- .element style="z-index: -100; box-shadow:none; position: fixed; left: 40px; bottom: 25px; width: 750px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; left: 570px; top: 320px;" class="fragment" data-fragment-index="1" -->
![](pics/ssdlc/security_afterthought.gif)<!-- .element style="position: fixed; box-shadow:none; width: 900px; bottom: 70px;" class="fragment center-x" data-fragment-index="2" -->


-- Notes --

* Start by looking at software dev. lifecycles
  * Requirements, design, build, verify, operate, decommission, repeat
  * Early discovery leads to lower impact and cost to fix
* But security often starts with a pentest
  * Which obviously results in findings
  * But since we are just before live and there's a deadline
  * We patch the issue like so

--

## Shifting Left
<hr />

![](pics/meme/maintainability/fixing_bugs_in_prod.jpeg)<!-- .element class="center-xy" style="position: fixed; box-shadow:none; width: 850px;"  -->


-- Notes --

Which results in developers needing to fix in prod


--

## Shifting Left
<hr />

![](pics/ssdlc/bug_cost.jpg)<!-- .element style="z-index: -100; box-shadow:none; position: fixed; left: 40px; bottom: 25px; width: 750px;" -->

![](pics/ssdlc/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 400px; width: 800px; " -->

![](pics/ssdlc/SSDLC_Risk.png)<!-- .element style="box-shadow:none; position: fixed; left: 130px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; left: 240px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; left: 350px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; left: 460px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; left: 570px; top: 320px;"  -->
![](pics/ssdlc/SSDLC_Config.png)<!-- .element style="box-shadow:none; position: fixed; left: 680px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Cleanup.png)<!-- .element style="box-shadow:none; position: fixed; left: 780px; top: 320px;" class="fragment" data-fragment-index="0" -->

![](pics/ssdlc/SSDLC_Left.png)<!-- .element style="box-shadow:none; position: fixed; left: 300px; top: 220px;" class="fragment" data-fragment-index="3" -->


--


