//https://blog.logrocket.com/reading-writing-xml-node-js/

var fs = require('fs');
var path = require('path');
var { 
  parse: svgsonParse,
  stringify: svgsonStringify
} = require('svgson')

const colors = {
  color1: '#FF0000', 
  color2: '#00FF00'
};

const updateSVGColor = () => {
    // colors provided to stylize the SVG image
    console.log("color1: " + colors.color1);  

    // load the original SVG image from the server's file system
    var svgImageXML = loadSVGImageXML('triangle_template.svg');

    // use svgson to convert the SVG XML to a JSON object
    svgsonParse(svgImageXML).then(json => {

      // get the shape container that contains the paths to be manipulated
      gElement = json.children.find(elem => elem.name == 'defs');      
      console.log("gElemnt: " + gElement.name);

      // update styles on specific path shapes
      updatePathStyleById(gElement, 'stop1', colors.color1);
      updatePathStyleById(gElement, 'stop2', colors.color2);

      // convert JSON object back to SVG XML
      svgImageXML = svgsonStringify(json);

      fs.writeFile(
        `../data/images/generated/newfile.svg`, 
       svgImageXML,
       () => {}
      );
    });
};

function updatePathStyleById(containerElem, pathId, newStyle) {
  let pathElem = containerElem.children[0].children.find(elem => elem.attributes.id == pathId);
  pathElem.attributes["stop-color"] = newStyle;
}

function loadSVGImageXML(filename) {
  var svgImagePath = path.join(__dirname, '..', 'data', 'images', filename);
  return fs.readFileSync(svgImagePath, 'utf8');
}

updateSVGColor();