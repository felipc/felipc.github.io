let PANEL = `
<div class="panel-srs-inner flx">
  <button onclick="firstItem()" tabindex="-1">First Item</button>
  <button onclick="firstHeader()" tabindex="-1">First Header</button> &nbsp;&nbsp;|&nbsp;&nbsp;
  <button onclick="prevHeader()" tabindex="-1">&lt;Prev Header</button>
  <button onclick="nextHeader()" tabindex="-1">Next Header&gt;</button>
</div>
<div class="panel-srs-inner flx">
  <button onclick="prevItem()" tabindex="-1">&lt;Prev</button>&nbsp;&nbsp;|&nbsp;&nbsp;
  <button onclick="nextItem()" tabindex="-1">Next&gt;</button><!-- &nbsp;&nbsp;|&nbsp;&nbsp;
  <button onclick="aprevSibling()" tabindex="-1">&lt;Prev Sibling</button>
  <button onclick="anextSibling()" tabindex="-1">Next Sibling&gt;</button>-->
</div>
<div class="panel-srs-inner">
  <input type="checkbox" id="seethrough" onchange="updatecheck()" tabindex="-1"> See through</input>
</div>
<div class="panel-srs-inner">
  <div id="panel-srs-invisible-text" class="visible">(regular text should be visible)</div>
</div>
`;

function firstItem() {
	selectedELEM = document.body;
	N();
}

function firstHeader() {
	selectedELEM = document.body;
	N("h1,h2,h3,h4,h5,h6");
}

function nextHeader() {
	N("h1,h2,h3,h4,h5,h6");	
}

function prevHeader() {
	N("h1,h2,h3,h4,h5,h6", "backwards");
}

function prevItem() {
	N("**", "backwards");
}

function nextItem() {
	N();
}

function anextSibling() {
	N(selectedELEM.nodeName.toLowerCase(), "forward");
}

function aprevSibling() {
	N(selectedELEM.nodeName.toLowerCase(), "backwards");
}

function updatecheck() {
  document.body.classList.toggle("seethrough", document.getElementById("seethrough").checked)
}

jsPanel.ziBase = 2147483641;

jsPanel.create({
    theme:       'primary',
    headerTitle: 'Screen Reader Simulator',
    position:    'center-top 0 250',
    contentSize: '480 150',
    content:     PANEL,
    container: document.body,
    callback: function () {
        this.content.style.padding = '20px';
        selectedELEM = document.body;
    },
});