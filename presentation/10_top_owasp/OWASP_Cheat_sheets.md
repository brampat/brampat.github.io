## 6.1: OWASP Cheat Sheet Series
<hr />

![](./pics/OWASP/Cheatsheet_Logo.png)<!-- .element class="center-x" style="position: fixed; box-shadow:none; width: 650px; bottom: 50px; "  -->
<div class="flags">
 <i class="fas fa-xs fa-flag" title="Flagship"></i>
 <i class="fas fa-xs fa-book" title="Documentation"></i>
 <i class="fas fa-xs fa-toolbox" title="Builder"></i>
 <i class="fas fa-xs fa-shield" title="Defender"></i>
 <i class="fas fa-xs fa-user-secret" title="Breaker"></i>
 <a class="fas fa-xs fa-external-link" target="_blank" href="https://owasp.org/www-project-application-security-verification-standard/"> </a>
</div>



-- Notes --

* Currently ~100 Quick guides for Security best practices in coding, design, vulnerabilities / attacks etc..

--

## 6.1: OWASP Cheat Sheet Series
<hr />

![](./pics/OWASP/Theres_a_cheat_sheet_for_that.jpg)<!-- .element class="center-x" style="position: fixed; box-shadow:none; width: 850px; bottom: 50px; "  -->
<div class="flags">
 <i class="fas fa-xs fa-flag" title="Flagship"></i>
 <i class="fas fa-xs fa-book" title="Documentation"></i>
 <i class="fas fa-xs fa-toolbox" title="Builder"></i>
 <i class="fas fa-xs fa-shield" title="Defender"></i>
 <a class="fas fa-xs fa-external-link" target="_blank" href="https://cheatsheetseries.owasp.org/"> </a>
</div>

-- Notes --

* Relevant cheat sheets for Java, Web, Mobile, API developers and more:
    * "There's a cheat sheet for that"

--

<!-- .slide: data-state="two-columns" -->

## 6.1: OWASP Cheat Sheet Series
<hr />

<div class="flags">
 <i class="fas fa-xs fa-flag" title="Flagship"></i>
 <i class="fas fa-xs fa-book" title="Documentation"></i>
 <i class="fas fa-xs fa-toolbox" title="Builder"></i>
 <i class="fas fa-xs fa-shield" title="Defender"></i>
 <a class="fas fa-xs fa-external-link" target="_blank" href="https://cheatsheetseries.owasp.org/"> </a>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

* Java
* Mobile Application Security
* NPM Security
* NodeJS Security
* DotNet
* Ruby on Rails
* Bean Validation
* REST Security
* Authentication
* Credential Stuffing
* MFA
* Password Storage
* SAML Security

</div>
<div>

* CI/CD Security
* Software Supply Chain Security
* Infra as Code Security
* Secrets Management
* Docker Security
* Kubernetes Security
* HTTP Headers
* Database Security
* Cross Site Scripting
* Injection Prevention
* Input Validation

</div>
</div>

--

## 6.2: Code Review Guide
<hr />

<div class="flags">
 <i class="fas fa-xs fa-flask" title="Lab"></i>
 <i class="fas fa-xs fa-book" title="Documentation"></i>
 <i class="fas fa-xs fa-toolbox" title="Builder"></i>
 <i class="fas fa-xs fa-shield" title="Defender"></i>
 <a class="fas fa-xs fa-external-link" target="_blank" href="https://owasp.org/www-project-code-review-guide/"> </a>
</div>

![](./pics/OWASP/Secure_code_review.png)<!-- .element class="center-y" style="position: fixed; width: 650px; left: 0px;"  -->
![](./pics/OWASP/Secure_code_review_logo.png)<!-- .element style="position: fixed; box-shadow:none; width: 350px; bottom: 40px; right: 0px;"  -->
* v2.0 - 2017

-- Notes --

3 parts:
* Why and how code reviews
    * Spoiler: Manual review still most effective in finding issues
* Vulnerability types and how to detect them in:
    * OWASP Top 10 (2013), 8 of those are still in Top 10 2021
    * Other types, including many web-concepts
* Appendix:
    * Do's & dont's
    * Code Review checklist
    * Threat modelling example
    * Code crawling (or which keywords to search for in code )

