## 7.1: OWASP
<hr />

<div class="flags">
 <i class="fas fa-flag" title="Flagship"></i>
 <i class="fas fa-tools" title="Tools"></i>
 <i class="fas fa-toolbox" title="Builder"></i>
 <i class="fas fa-shield" title="Defender" title="Defender"></i>
 <a class="fas fa-xs fa-external-link" target="_blank" href="https://owasp.org/www-project-dependency-check/"> </a>
</div>

![](./pics/OWASP/dependency_check.png)<!-- .element style="position: fixed; box-shadow:none; width: 450px; top: -20px; left: 260px; "  -->


![](./pics/OWASP/dependency_check_jenkins.png)<!-- .element style="position: fixed; width: 950px; bottom: 70px; right: -200px;"  -->
![](./pics/OWASP/dependency-check-results.png)<!-- .element style="position: fixed; width: 450px; bottom: 50px; left: 10px; "  -->

-- Notes --

* SCA: Software Composition Analysis
    * Specific type of SAST: Static Application Security Testing
* Automating vulnerability scanning of Software dependencies.
* Alternatives:
    * Snyk
    * NexusIQ
    * NPM Audit
* Reports can be imported into Jenkins, SonarQube etc.
* Including OWASP Dep. TRACK

--

## 7.2: OWASP
<hr />

<!-- .slide: class="ul-small" -->

<div class="flags">
 <i class="fas fa-flag" title="Flagship"></i>
 <i class="fas fa-tools" title="Tools"></i>
 <i class="fas fa-toolbox" title="Builder"></i>
 <i class="fas fa-shield" title="Defender" title="Defender"></i>
 <a class="fas fa-xs fa-external-link" target="_blank" href="https://dependencytrack.org/"> </a>
</div>

![](./pics/OWASP/dependency_track_logo.png)<!-- .element style="position: fixed; box-shadow:none; width: 450px; top: -25px; left: 250px; "  -->

![](./pics/OWASP/dependency_track_screen.png)<!-- .element style="position: fixed; width: 750px; bottom: 70px; right: -20px;"  -->


* Vulnerability Intelligence:
    * NVD
    * GitHub Adv.
    * Sonatype OSS
    * VulnDB
* Ecosystems:
    * Maven
    * NPM
    * PyPi
    * NuGet
    * Gems
    * ...
* Risks:
    * Security
    * License
    * Operational


-- Notes --

Bonus: OWASP Dependency Track: Keep track of SBOMs, dependencies and software licenses
* Integrates with:
    * Multiple vulnerability intelligence sources:
        * NIST NVD National Vulnerability Database (same as OWASP Dependency Check)
        * GitHub Advisories
        * Sonatype OSS Index
        * VulnDB from Risk Based Security
    * CycloneDX (consumes and produces) both SBOM and VEX format
        * VEX: Vulnerability Exploitability Exchange
    * EPSS: Exploit Prediction Scoring System
    * SPDX
* Ecosystems:
    * Maven (Java)
    * NPM (Javascript)
    * Pypi (Python)
    * NuGet (.NET)
    * Gems (Ruby)
    * Cargo (Rust)
    * Composer (PHP)
    * Hex (Erlang/Elixir)
* Policy Engine for Risk and compliance:
    * Security
    * License
    * Operational
* Tracks components across all applications in your organisation's portfolio:
    * What is affected and where is that app running?
        * Vulnerable
        * Out-of-date
        * Modified
        * License risk

--

## 7.3: OWASP
<hr />

<div class="flags">
 <i class="fas fa-flag" title="Flagship"></i>
 <i class="fas fa-book-open" title="Standard"></i>
 <i class="fas fa-toolbox" title="Builder"></i>
 <i class="fas fa-shield" title="Defender" title="Defender"></i>
 <a class="fas fa-xs fa-external-link" target="_blank" href="https://owasp.org/www-project-cyclonedx/"> </a>
</div>

![](./pics/OWASP/cyclonedx_logo.png)<!-- .element style="position: fixed; box-shadow:none; width: 300px; top: 0px; left: 260px; "  -->

![](./pics/OWASP/cyclonedx_format.png)<!-- .element class="center-x" style="position: fixed; width: 950px; bottom: 70px;"  -->


-- Notes --

* SBOM: Software Bill of Materials
  OWASP CycloneDX:
* Create SBOMs - Software Bill of Materials:
    * Improve trust in software
        * Verify integrity using hashes
        * Verify authenticity using signatures
    * Quickly pinpoint:
        * vulnerable dependencies
        * end-of-life dependencies
        * Review licenses (and obligations)
        * Provenance (ownership)
* Alternative: SPDX (Linux Software Foundation)
* CycloneDX Supports:
    * Vulnerability Disclosure Reports (VDR)
    * Vulnerability Exploitability eXchange (VEX)
    * CycloneDX Attestations (CDXA)
    * Software Bill of Materials (SBOM)
    * Software-as-a-Service Bill of Materials (SaaSBOM)
    * Hardware Bill of Materials (HBOM)
    * Machine Learning Bill of Materials (ML-BOM)
    * Cryptography Bill of Materials (CBOM)
    * Manufacturing Bill of Materials (MBOM)
    * Operations Bill of Materials (OBOM)



