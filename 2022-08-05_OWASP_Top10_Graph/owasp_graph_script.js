
var nodes = {

    // OWASP Top 10 Web Vulnerabilities:
    "A_Broken_Auth": {name: "A01:2021 Broken Authentication", universe: "web"},
    "A_Sensitive_data_exposure": {name: "A02:2021 Cryptographic Failures", universe: "web"},
    "A_Injection": {name: "A03:2021 Injection", universe: "web"},
    "A_Insecure_Design": {name: "A04:2021 Insecure Design", universe: "web"},
    "A_Security_Misconfig": {name: "A05:2021 Security Misconfiguration", universe: "web"},
    "A_Known_Vulns": {name: "A06:2021 Vulnerable and Outdated Components", universe: "web"},
    "A_Broken_Access": {name: "A07:2021 Identification & Authentication Failures", universe: "web"},
    "A_Integrity_Failures": {name: "A08:2021 Software & Data Integrity Failures", universe: "web"},
    "A_Logging": {name: "A09:2021 Security Logging & Monitoring Failures", universe: "web"},
    "A_SSRF": {name: "A10:2021 SSRF", universe: "web"},

    "A_XXE": {name: "A04:2017 XXE", universe: "web"},
    "A_XSS": {name: "A07:2017 XSS", universe: "web"},
    "A_CSRF": {name: "A08:2013 CSRF", universe: "web"},

    // OWASP Top 10 Proactive Controls
    "C_Requirements": {name: "C1:2018 Security Requirements", universe: "pro"},
    "C_Frameworks": {name: "C2:2018 Leverage Security Frameworks & Libraries", universe: "pro"},
    "C_Database": {name: "C3:2018 Secure Database Access", universe: "pro"},
    "C_Encode_Escape": {name: "C4:2018 Encode & Escape Data", universe: "pro"},
    "C_Validate_Input": {name: "C5:2018 Validate all Inputs", universe: "pro"},
    "C_Digital_ID": {name: "C6:2018 Implement Digital Identity", universe: "pro"},
    "C_Access_Control": {name: "C7:2018 Enforce Access Control", universe: "pro"},
    "C_Protect_Data": {name: "C8:2018 Protect Data Everywhere", universe: "pro"},
    "C_Secure_Logging": {name: "C9:2018 Secure Logging & Monitoring", universe: "pro"},
    "C_Errors_Exceptions": {name: "C10:2018 Handle all Errors & Exceptions", universe: "pro"},

    // OWASP Top 10 Mobile Vulnerabilities
    "M_Improper_Platform": {name: "M1:2016 Improper Platform Usage", universe: "mob"},
    "M_Insecure_Data_Storage": {name: "M2:2016 Insecure Data Storage", universe: "mob"},
    "M_Insecure_Communication": {name: "M3:2016 Insecure Communication", universe: "mob"},
    "M_Insecure_Authentication": {name: "M4:2016 Insecure Authentication", universe: "mob"},
    "M_Insufficient_Cryptography": {name: "M5:2016 Insufficient Cryptography", universe: "mob"},
    "M_Insecure_Authorization": {name: "M6:2016 Insecure Authorization", universe: "mob"},
    "M_Client_Code_Quality": {name: "M7:2016 Client Code Quality", universe: "mob"},
    "M_Code_Tampering": {name: "M8:2016 Code Tampering", universe: "mob"},
    "M_Reverse_Engineering": {name: "M9:2016 Reverse Engineering", universe: "mob"},
    "M_Extranous_Functionality": {name: "M10:2016 Extranous Functionality", universe: "mob"},
    "M_Weak_Serverside": {name: "M1:2014 Weak Server-side Controls", universe: "mob"},
    "M_Poor_Auth": {name: "M5:2014 Poor Authorization & Authentication", universe: "mob"},
    "M_Clientside_Injection": {name: "M7:2014 Client-side Injection", universe: "mob"},

    // "M_": {name: "", universe: "mob"},
    // "M_": {name: "", universe: "mob"},
    // "M_": {name: "", universe: "mob"},
    // "M_": {name: "", universe: "mob"},
    // "M_": {name: "", universe: "mob"},
    // "M_": {name: "", universe: "mob"},

// Mitigations
    "Secure_logging": {name: "Secure Logging Design", universe: "mit"},
    "Secure_Config": {name: "Secure Configuration", universe: "mit"},
    "Secure_Local_Storage": {name: "Secure Local Storage", universe: "mit"},
    "Secure_Authentication": {name: "Secure Authentication", universe: "mit"},
    "Password_Requirements": {name: "Password Requirements", universe: "mit"},
    "Secure_Password_Recovery": {name: "Secure Password Recovery", universe: "mit"},
    "Secure_Queries": {name: "Secure Queries", universe: "mit"},
    "Secure_Communication": {name: "Secure Communication", universe: "mit"},
    "Session_Management": {name: "Session Management", universe: "mit"},
    "Log_AC_Events": {name: "Log all Access Control Events", universe: "mit"},
    "Force_AC_Checks": {name: "Force Access Control Checks", universe: "mit"},
    "Deny_Default": {name: "Deny by Default", universe: "mit"},
    "Design_AC": {name: "Design Access Control up-front", universe: "mit"},
    "Least_Privilege": {name: "Principle of Least Privilege", universe: "mit"},
    "Dont_Hardcode_Roles": {name: "Don't Hardcode Access Roles", universe: "mit"},
    "Encrypt_Transit": {name: "Encrypt Data in Transit", universe: "mit"},
    "Encrypt_Rest": {name: "Encrypt Data at Rest", universe: "mit"},
    "Classify_Data": {name: "Classify Data", universe: "mit"},
    "Secrets_Management": {name: "Secrets Management", universe: "mit"},
    "Key_Lifecycle": {name: "Key Lifecycle", universe: "mit"},
    "Sufficient_Logging": {name: "Sufficient Amount of Logging", universe: "mit"},
    "Common_Log_Format": {name: "Common Logging Format", universe: "mit"},
    "Log_Relevant": {name: "Log Relevant Data", universe: "mit"},
    "Centralize_Exception_Handling": {name: "Centralize Exception Handling", universe: "mit"},
    "Prevent_Exception_Leaking": {name: "Prevent Technical or Sensitive data in User-facing Errors", universe: "mit"},
    "OWASP_ASVS": {name: "OWASP Application Security Verification Standard", universe: "mit"},
    "OWASP_MASVS": {name: "OWASP Mobile Application Security Verification Standard", universe: "mit"},
    // "": {name: "", universe: "mit"},
    // "": {name: "", universe: "mit"},
    // "": {name: "", universe: "mit"},


    // Tools & Techniques
    "Remove_Default_Credentials": {name: "Remove Default Credentials", universe: "tt"},
    "Proper_Password_Storage": {name: "Proper Password Storage", universe: "tt"},
    "Minimize_Data": {name: "Minimize Data", universe: "tt"},
    "Throttling": {name: "Throttling on Login", universe: "tt"},
    "Secure_Session_Management": {name: "Secure Session Management", universe: "tt"},
    "MFA": {name: "MFA", universe: "tt"},
    "HTTPS_HSTS": {name: "HTTPS & HSTS", universe: "tt"},
    "Strong_Encryption": {name: "Strong Encryption", universe: "tt"},
    "Filtering": {name: "Filtering", universe: "tt"},
    "Serverside_Validation": {name: "Server-side Validation", universe: "tt"},
    "CSP": {name: "CSP", universe: "tt"},
    "SameSite": {name: "SameSite Attribute", universe: "tt"},
    "Eliminate_Unused": {name: "Eliminate Unused Components & Features", universe: "tt"},
    "Content_Escaping": {name: "Content Escaping", universe: "tt"},
    "Content_Encoding": {name: "Content Encoding", universe: "tt"},
    "Sanitization": {name: "Sanitization", universe: "tt"},
    "Input_Validation": {name: "Input Validation", universe: "tt"},
    // "": {name: "", universe: "tt"},
    // "": {name: "", universe: "tt"},
    // "": {name: "", universe: "tt"},
    // "": {name: "", universe: "tt"},
    // "": {name: "", universe: "tt"},
    // "": {name: "", universe: "tt"},


};


var links = [

    {source: "A_Injection", target: "C_Encode_Escape"},
    {source: "A_Injection", target: "C_Database"},
    {source: "A_Injection", target: "C_Validate_Input"},
    {source: "A_Injection", target: "Secure_logging"},
    {source: "A_Broken_Auth", target: "C_Digital_ID"},
    {source: "A_Broken_Auth", target: "Remove_Default_Credentials"},
    {source: "A_Broken_Auth", target: "MFA"},
    {source: "A_Broken_Auth", target: "Password_Requirements"},
    {source: "A_Broken_Auth", target: "Throttling"},
    {source: "A_Broken_Auth", target: "Secure_Session_Management"},
    {source: "A_Sensitive_data_exposure", target: "C_Errors_Exceptions"},
    {source: "A_Sensitive_data_exposure", target: "C_Protect_Data"},
    {source: "A_Sensitive_data_exposure", target: "Proper_Password_Storage"},
    {source: "A_Sensitive_data_exposure", target: "Minimize_Data"},
    {source: "A_Sensitive_data_exposure", target: "Strong_Encryption"},
    {source: "A_Sensitive_data_exposure", target: "HTTPS_HSTS"},
    {source: "A_XXE", target: "C_Validate_Input"},
    {source: "A_XXE", target: "Filtering"},
    {source: "A_Broken_Access", target: "C_Access_Control"},
    {source: "A_Broken_Access", target: "Serverside_Validation"},
    {source: "A_Security_Misconfig", target: "Secure_Config"},
    {source: "A_XSS", target: "C_Encode_Escape"},
    {source: "A_XSS", target: "C_Validate_Input"},
    {source: "A_XSS", target: "CSP"},
    {source: "A_CSRF", target: "SameSite"},
    {source: "A_Known_Vulns", target: "C_Frameworks"},
    {source: "A_Known_Vulns", target: "Eliminate_Unused"},
    {source: "A_Logging", target: "C_Secure_Logging"},
    {source: "A_SSRF", target: "C_Validate_Input"},
    {source: "A_Integrity_Failures", target: "A_Sensitive_data_exposure"},
    {source: "A_Integrity_Failures", target: "M_Insufficient_Cryptography"},
    {source: "A_Integrity_Failures", target: "M_Code_Tampering"},

    {source: "C_Requirements", target: "OWASP_ASVS"},
    {source: "C_Requirements", target: "OWASP_MASVS"},
    {source: "C_Frameworks", target: "M_Improper_Platform"},
    {source: "C_Database", target: "Secure_Config"},
    {source: "C_Database", target: "Secure_Queries"},
    {source: "C_Database", target: "Secure_Authentication"},
    {source: "C_Database", target: "Secure_Communication"},
    {source: "C_Encode_Escape", target: "M_Clientside_Injection"},
    {source: "C_Encode_Escape", target: "Content_Encoding"},
    {source: "C_Encode_Escape", target: "Content_Escaping"},
    {source: "C_Validate_Input", target: "Input_Validation"},
    {source: "C_Validate_Input", target: "Sanitization"},
    {source: "C_Digital_ID", target: "Proper_Password_Storage"},
    {source: "C_Digital_ID", target: "M_Poor_Auth"},
    {source: "C_Digital_ID", target: "Session_Management"},
    {source: "C_Digital_ID", target: "MFA"},
    {source: "C_Digital_ID", target: "Secure_Password_Recovery"},
    {source: "C_Digital_ID", target: "Password_Requirements"},
    {source: "C_Access_Control", target: "M_Poor_Auth"},
    {source: "C_Access_Control", target: "Log_AC_Events"},
    {source: "C_Access_Control", target: "Force_AC_Checks"},
    {source: "C_Access_Control", target: "Deny_Default"},
    {source: "C_Access_Control", target: "Design_AC"},
    {source: "C_Access_Control", target: "Least_Privilege"},
    {source: "C_Access_Control", target: "Dont_Hardcode_Roles"},
    {source: "C_Protect_Data", target: "Encrypt_Transit"},
    {source: "C_Protect_Data", target: "Encrypt_Rest"},
    {source: "C_Protect_Data", target: "Classify_Data"},
    {source: "C_Protect_Data", target: "Secrets_Management"},
    {source: "C_Protect_Data", target: "Key_Lifecycle"},
    {source: "C_Protect_Data", target: "M_Insecure_Data_Storage"},
    {source: "C_Secure_Logging", target: "Secure_logging"},
    {source: "C_Secure_Logging", target: "Common_Log_Format"},
    {source: "C_Secure_Logging", target: "Sufficient_Logging"},
    {source: "C_Errors_Exceptions", target: "Log_Relevant"},
    {source: "C_Errors_Exceptions", target: "Centralize_Exception_Handling"},
    {source: "C_Errors_Exceptions", target: "Prevent_Exception_Leaking"},


    // {source: "M_Improper_Platform", target: ""},
    {source: "M_Weak_Serverside", target: "Serverside_Validation"},
    {source: "M_Insecure_Data_Storage", target: "Secure_Local_Storage"},
    {source: "M_Insecure_Communication", target: "Encrypt_Transit"},
    {source: "M_Insecure_Authentication", target: "C_Access_Control"},
    {source: "M_Insecure_Authorization", target: "C_Access_Control"},
    {source: "M_Code_Tampering", target: "M_Reverse_Engineering"},
    // {source: "M_Insecure_Authorization", target: ""},
    // {source: "M_Insufficient_Cryptography", target: ""},
    // {source: "M_Client_Code_Quality", target: ""},
    // {source: "M_Code_Tampering", target: ""},
    // {source: "M_Reverse_Engineering", target: ""},
    // {source: "M_Extranous_Functionality", target: ""},
    {source: "Remove_Default_Credentials", target: "Secure_Config"},
    {source: "Minimize_Data", target: "Secure_Local_Storage"},
    // {source: "", target: ""},
    // {source: "", target: ""},
    // {source: "", target: ""},
    // {source: "", target: ""},

];



var width = 4000,
    height = 3500;

// Compute the distinct nodes from the links.
links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, icon: link.icon});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, icon: link.icon});
});


var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(180)
    // .charge(-300)
    // .charge(function(d, i) { return i==0 ? -10000 : -500; })

    // Changes distance between nodes
    .charge(function(d, i) {
        if (i == 0) return -5000;
        if (i < 23) return -2500;
        return -1250;
    })
    .on("tick", tick)
    .start();



var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link")
    .data(force.links())
    .enter().append("line")
    .attr("class", "link");

var node = svg.selectAll(".node")
    .data(force.nodes())
    .enter().append("g")
    .attr("width", "100px")
    .attr("height", "100px")
    .attr("class", "node")
    .attr("text-align", "center")
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .call(force.drag);

var circle = node.append("circle")
    .attr("r", 42)
    .attr("class", function(d) { return "container " + d.universe; })
;

node.append("foreignObject")
    // .attr("x", "-50%")
    // .attr("y", "-50%")
    .attr("x", "-40px")
    .attr("y", "-30px")
    .attr("requiredFeatures", "http://www.w3.org/TR/SVG11/feature#Extensibility")
    .attr("dominant-baseline", "middle")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .attr("width", "80px")
    .attr("height", "80px")
    .attr("fill", "red")
    .attr("font-family", "Arial")
    .attr("font-size", "15px")
    .text(function(d) { return d.name; });


function tick() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function mouseover() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 16);
}

function mouseout() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 42);
}
