console.log(typeof jQuery);
console.log("Loaded jQuery version:", jQuery.fn.jquery);

function getNodes() {
    let countries = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/countries.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();
    let apts = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/APTs.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();
    let groups = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/groups.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();
    let malware = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/malware.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();
    let allNodes = [];
    for (var i in countries) {
        countries[i].tags += " country";
        allNodes.push(countries[i]);
    }
    for (var i in apts) {
        apts[i].tags += " APT";
        allNodes.push(apts[i]);
    }
    for (var i in groups) {
        groups[i].tags += " group";
        allNodes.push(groups[i]);
    }
    for (var i in malware) {
        malware[i].tags += " malware";
        allNodes.push(malware[i]);
    }
    return allNodes;
}

function getLinks() {
    let links = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/links.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();
    return links;
}

let nodes = getNodes();
let links = getLinks();

// Define width and height before SVG creation
const width = 14000;
const height = 10000;
const margin = 10;


// Map nodes by their labels for quick lookup
let nodeMap = {};
nodes.forEach(node => nodeMap[node.label] = node);

// Update links to use actual node references
links.forEach(link => {
    if (!nodeMap[link.source]) {
        console.log("Could not find source: ", link.source);
    }
    if (!nodeMap[link.target]) {
        console.log("Could not find target: ", link.target);
    }
    link.source = nodeMap[link.source];
    link.target = nodeMap[link.target];
});

const zoom = d3.behavior.zoom()
    .scaleExtent([0.1, 5]);

// D3.js code to create the Force-directed graph
const svg = d3.select("#graph-container")
    .append("svg")
    .attr("viewBox", `-${width / 32} ${height / 4} ${width} ${height}`) // Center and fit graph in viewport
    .call(d3.behavior.zoom().on("zoom", (event) => {
        applyZoom(d3.event.scale, d3.event.translate)
        d3.select("#zoomSlider").property("value", d3.event.scale);
    }))
    .attr("id", "graph")
    .append("g");

// Apply manual zoom logic
function applyZoom(scale, translate) {
    svg.attr("transform", "translate(" + translate + ")scale(" + scale + ")");
}

// Slider input controls the zoom
d3.select("#zoomSlider").on("input", function () {
    const zoomLevel = +this.value; // Get slider value
    zoom.scale(zoomLevel); // Update zoom scale
    applyZoom(zoom.scale(), zoom.translate()); // Apply the zoom
    console.log("Apply zoom level ", zoomLevel)
});

const linkGroup = svg.append("g").attr("class", "links");
const nodeGroup = svg.append("g").attr("class", "nodes");

let link = linkGroup.selectAll(".link")
// let link = svg.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke", "black")
    .style("stroke-width", 1);

let node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("g");

function resizeSVG() {
    const container = document.getElementById("graph-container");
    const svg = document.getElementById("graph");

    // Calculate available space
    const width = container.clientWidth - 2 * margin;
    const height = container.clientHeight - 2 * margin;

    // Set the SVG size dynamically
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
}

// Call resizeSVG on load and window resize
window.addEventListener("resize", resizeSVG);
window.addEventListener("DOMContentLoaded", resizeSVG);

function validateData(nodes, links) {
    nodes.forEach(node => {
        console.assert(node.label !== undefined, 'Node label is undefined:', node);
    });
    links.forEach(link => {
        console.assert(link.source !== undefined, 'Link source is undefined:', link);
        console.assert(link.target !== undefined, 'Link target is undefined:', link);
        console.assert(nodes.find(n => n.label === link.source.label), 'Link source node not found:', link.source);
        console.assert(nodes.find(n => n.label === link.target.label), 'Link target node not found:', link.target);
    });
    console.log("All data is valid");
}

validateData(nodes, links);
// Create the force layout
const force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    // .linkDistance(100)
    .charge(function(i) {
        if (i == 0) return -40;
        if (i < 23) return -50;
        return -15000;
    })
    .on("tick", ticked);

force.nodes(nodes)
    .links(links)
    .start();  // Start the simulation


function renderGraph(nodes, links) {
    // Update links
    const linkSelection = linkGroup.selectAll(".link")
        .data(links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("stroke-width", 1);

    // Update nodes
    const nodeSelection = nodeGroup.selectAll(".node")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(d3.behavior.drag()
            .on("dragstart", dragstarted)
            .on("drag", dragged)
            .on("dragend", dragended));

    nodeSelection.append("circle")
        .attr("dy", 30)
        .attr("x", -40)
        .attr("y", -50)
        .attr("width", 80)
        .attr("height", 100)
        .attr("r", 100)
        .attr("class", function(d) { return "container " + d.tags; })
    ;

    nodeSelection.append("foreignObject")
        .attr("x", -62)
        .attr("y", -62)
        .attr("width", 125)
        .attr("height", 125)
        .append("xhtml:div")
            .style("display", "flex")
            .style("justify-content", "center")
            .style("align-items", "center")
            .style("width", "100%")
            .style("height", "100%")
            .style("text-align", "center")
            .text(d => d.name);

    // Store the selection for later use
    window.currentNodes = nodeSelection;
}

function ticked() {
    // Update links
    svg.selectAll(".link")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    // Update nodes
    svg.selectAll(".node")
        .attr("transform", d => `translate(${d.x},${d.y})`);
}

function dragstarted(d) {
    d3.event.sourceEvent.stopPropagation();
    d3.select(this).classed("dragging", true);
    force.stop();
}

function dragged(d) {
    d.x = d3.event.x;
    d.y = d3.event.y;
    ticked();
}

function dragended(d) {
    d3.select(this).classed("dragging", false);
    force.resume();
}


// Toggle event listeners
d3.selectAll(".filter").on("change", () => {
    updateGraph();
});

// Example update function for nodes
function updateNodes() {
    const nodeGroup = svg.selectAll(".node")
        .data(nodes, d => d.id);  // Use a unique key function

    nodeSelection.append("circle")
        .attr("dy", 30)
        .attr("x", -40)
        .attr("y", -50)
        .attr("width", 80)
        .attr("height", 100)
        .attr("r", 100)
        .attr("class", function(d) { return "container " + d.tags; })
    ;

    nodeGroup.select("text")
        .text(d => d.label);

    // Enter new nodes
    const nodeEnter = nodeGroup.enter().append("g")
        .attr("class", "node")
        .call(force.drag);  // Enable drag behavior

    nodeEnter.append("foreignObject")
        .attr("x", -62)
        .attr("y", -62)
        .attr("width", 125)
        .attr("height", 125)
        .append("xhtml:div")
            .style("display", "flex")
            .style("justify-content", "center")
            .style("align-items", "center")
            .style("width", "100%")
            .style("height", "100%")
            .style("text-align", "center")
            .text(d => d.name);

    // Exit any old nodes
    nodeGroup.exit().remove();

    // Restart the force layout
    force.start();
}


function updateGraph() {
    const showChina = d3.select("#China").property("checked");
    const showRussia = d3.select("#Russia").property("checked");
    const showNorthKorea = d3.select("#NorthKorea").property("checked");
    const showSouthKorea = d3.select("#SouthKorea").property("checked");
    const showPakistan = d3.select("#Pakistan").property("checked");
    const showSouthAmerica = d3.select("#SouthAmerica").property("checked");
    const showBelarus = d3.select("#Belarus").property("checked");
    const showIndia = d3.select("#India").property("checked");
    const showSpain = d3.select("#Spain").property("checked");
    const showBrazil = d3.select("#Brazil").property("checked");
    const showArabic = d3.select("#Arabic").property("checked");
    const showLebanon = d3.select("#Lebanon").property("checked");
    const showMalware = d3.select("#Malware").property("checked");

    // Filter nodes and links based on the checkbox status
    const filteredNodes = nodes.filter(d => {
        if (d.tags.includes("China") && !showChina)               { return false; }
        if (d.tags.includes("Russia") && !showRussia)             { return false; }
        if (d.tags.includes("NorthKorea") && !showNorthKorea)     { return false; }
        if (d.tags.includes("SouthKorea") && !showSouthKorea)     { return false; }
        if (d.tags.includes("Pakistan") && !showPakistan)         { return false; }
        if (d.tags.includes("SouthAmerica") && !showSouthAmerica) { return false; }
        if (d.tags.includes("Belarus") && !showBelarus)           { return false; }
        if (d.tags.includes("India") && !showIndia)               { return false; }
        if (d.tags.includes("Spain") && !showSpain)               { return false; }
        if (d.tags.includes("Brazil") && !showBrazil)             { return false; }
        if (d.tags.includes("Arabic") && !showArabic)             { return false; }
        if (d.tags.includes("Lebanon") && !showLebanon)           { return false; }
        if (d.tags.includes("malware") && !showMalware)           { return false; }
        return true;
    });

    const hiddenNodes = nodes

    // Filter links based on the filtered nodes
    const filteredNodeIds = new Set(filteredNodes.map(d => d.label));
    const filteredLinks = links.filter(d => {
        return filteredNodeIds.has(d.source.label) && filteredNodeIds.has(d.target.label);
    });

    // Update the links selection
    let linkUpdate = linkGroup.selectAll(".link")
        .data(filteredLinks, d => d.source.label + "-" + d.target.label);

    // Remove any old links
    linkUpdate.exit().remove();

    // Enter new links
    linkUpdate.enter().append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("stroke-width", 1);

    // Update existing links
    linkUpdate.style("stroke", "black")
        .style("stroke-width", 1);

    // Update the nodes selection
    let nodeUpdate = nodeGroup.selectAll(".node")
        .data(filteredNodes, d => d.label);

    // Remove old nodes
    nodeUpdate.exit().remove();  // This removes all elements for nodes that are not in filteredNodes

    // Enter new nodes
    let nodeEnter = nodeUpdate.enter().append("g")
        .attr("class", "node")
        .call(force.drag);

    nodeEnter.append("circle")
        .attr("dy", 30)
        .attr("x", -40)
        .attr("y", -50)
        .attr("width", 80)
        .attr("height", 100)
        .attr("r", 100)
        .attr("class", function(d) { return "container " + d.tags; })
    ;

    nodeEnter.append("foreignObject")
        .attr("x", -62)
        .attr("y", -62)
        .attr("width", 125)
        .attr("height", 125)
        .append("xhtml:div")
            .style("display", "flex")
            .style("justify-content", "center")
            .style("align-items", "center")
            .style("width", "100%")
            .style("height", "100%")
            .style("text-align", "center")
            .text(d => d.name);


    // Restart the force layout simulation with collision detection
    force.nodes(filteredNodes)
        .links(filteredLinks)
        // .charge(-20)
        .linkDistance(250)
        .on("tick", function(e) {
            // Update node positions
            nodeUpdate.attr("transform", d => `translate(${d.x}, ${d.y})`);

            // Update link positions
            linkUpdate.attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);
        })
        .start();
}

let searchTimeout; // To manage the debounce timeout

// Trigger search on "Enter" or debounce when typing
document.getElementById("searchInput").addEventListener("keyup", (event) => {
    const query = event.target.value.trim().toLowerCase();

    // Trigger search on "Enter" key press
    if (event.key === "Enter") {
        triggerSearch(query);
        return;
    }

    // Debounce search for 500ms after typing at least 3 characters
    clearTimeout(searchTimeout); // Clear any existing timeout
    if (query.length >= 3) {
        searchTimeout = setTimeout(() => {
            console.log("Search triggered by debounce.");
            triggerSearch(query);
        }, 500);
    } else {
        // Reset highlights if query is less than 3 characters
        resetHighlights();
    }
});

// Trigger search on button click
document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    triggerSearch(query);
});

// Reset highlights
function resetHighlights() {
    window.currentNodes.classed("highlighted", false).attr("opacity", 1);
}

// Search logic
function triggerSearch(query) {
    if (!query) {
        resetHighlights();
        return;
    }

    let foundAny = false;

    window.currentNodes.classed("highlighted", d => {
        const isMatch = d.label.toLowerCase().includes(query) ||
            d.name.toLowerCase().includes(query) ||
            (d.tags && d.tags.toLowerCase().includes(query));
        if (isMatch) foundAny = true;
        return isMatch;
    });

    window.currentNodes.attr("opacity", d => {
        return d.label.toLowerCase().includes(query) ||
        d.name.toLowerCase().includes(query) ||
        (d.tags && d.tags.toLowerCase().includes(query)) ? 1 : 0.2;
    });

    if (!foundAny) {
        console.log(`No nodes found matching '${query}'`);
    }
}


// Reset highlights when clicking outside the graph
svg.on("click", () => {
    node.classed("highlighted", false).attr("opacity", 1); // Reset styles
});


// Initial call to render the graph
renderGraph(nodes, links);

// Call updateGraph() whenever the data changes (e.g., due to filtering)
updateGraph();


