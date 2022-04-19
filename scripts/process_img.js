const fs = require('fs')
const path = require('path');
// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');


const changeSvgColor = () => {
  try {
    const svgCode = fs.readFileSync(
      path.resolve(__dirname, "../data/images/triangle.svg"),
      "utf8"
    );

    //From example
    // coloredSvgXml = svgCode.replaceAll(
    //   "rgba(0,0,0,1)",
    //   `rgba(${r},${g},${b},${a})`
    // );
    const hex = '#FFFF';
    coloredSvgXml = svgCode.replaceAll(
        "#317b4e",
        hex
    );
    console.log("Setting color to:  " + hex);

    fs.writeFile(
       `../data/images/generated/${uuidv4()}.svg`, 
      coloredSvgXml,
      function (err) {
        if(err)
        {
            console.log("WriteFile error:" + err);
            console.log();
        }
      }
    );
    console.log("New file saved" + uuidv4() + ".svg");

  } catch (error) {
    console.log(error);
  }
};

changeSvgColor();