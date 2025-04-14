

<!-- .slide: class="table-small" -->

## 5: OWASP
<hr />

![](./pics/OWASP/ASVS_logo.png)<!-- .element style="position: fixed; box-shadow:none; width: 150px; top: -20px; left: 240px; "  -->

<div class="flags">
 <i class="fas fa-xs fa-flag" title="Flagship"></i>
 <i class="fas fa-xs fa-book" title="Documentation"></i>
 <i class="fas fa-xs fa-toolbox" title="Builder"></i>
 <i class="fas fa-xs fa-shield" title="Defender"></i>
 <i class="fas fa-xs fa-user-secret" title="Breaker"></i>
 <a class="fas fa-xs fa-external-link" target="_blank" href="https://owasp.org/www-project-application-security-verification-standard/"> </a>
</div>

![](./pics/OWASP/asvs_40_levels.png)<!-- .element style="position: fixed; box-shadow:none; width: 1050px; top: 370px;" -->


| No.    | Descr.                                                                                       | L1 | L2 | L3 | CWE  |
|--------|----------------------------------------------------------------------------------------------|----|----|----|------|
| 1.5.3  | input validation is enforced on a trusted service layer. (C5)                                |    | ✓  | ✓  | 602  |
| 1.5.4  | output encoding occurs close to or by the interpreter for which it is intended. (C4)         |    | ✓  | ✓  | 116  |
| 1.7.1  | Verify that a common logging format and approach is used across the system. (C9)             |    | ✓  | ✓  | 1009 |
| 2.1.1  | Verify that user set passwords are at least 12 characters in length (C6)                     | ✓  | ✓  | ✓  | 521  |
| 4.1.5  | Verify that access controls fail securely including when an exception occurs. (C10)          | ✓  | ✓  | ✓  | 285  |
| 5.1.3  | Verify that all input is validated using positive validation (allow lists). (C5)             | ✓  | ✓  | ✓  | 20   |
| 5.3.10 | Verify that the application protects against XPath injection or XML injection attacks. (C4)  | ✓  | ✓  | ✓  | 643  |





-- Notes --

* Application Security Verification Standard
* MASVS: Mobile Application Security Verification Standard

Aim:
* Basis for testing web app technical security controls
* Help define requirements for devs to do secure software development

Used as:
* Metric: Assess degree of trust in your web applications
* Guidance: to decide which controls to build for application security requirements
* Procurement: Security verification requirements in contracts for buying off-the-shelve

