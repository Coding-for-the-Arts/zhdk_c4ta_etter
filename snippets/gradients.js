let def = document.createElementNS(doc.svgNameSpace, "defs");

let subDef = document.createElementNS(doc.svgNameSpace, "linearGradient");
subDef.id = "g" + basics.randomID(5);
subDef.setAttributeNS(null, "x1", "0%");
subDef.setAttributeNS(null, "y1", "0%");
subDef.setAttributeNS(null, "x2", "0%");
subDef.setAttributeNS(null, "y2", "100%");

let stop1 = document.createElementNS(doc.svgNameSpace, "stop");
stop1.setAttributeNS(null, "offset", "0%");
stop1.setAttributeNS(null, "style", "stop-color:" + io.gradient[0] + "; stop-opacity:1");

let stop2 = document.createElementNS(doc.svgNameSpace, "stop");
stop2.setAttributeNS(null, "offset", "100%");
stop2.setAttributeNS(null, "style", "stop-color:" + io.gradient[1] + "; stop-opacity:1");

subDef.appendChild(stop1);
subDef.appendChild(stop2);
def.appendChild(subDef);
document.getElementById(io.parent).appendChild(def);

temp.setAttributeNS(null, "fill", "url(#" + subDef.id + ")");