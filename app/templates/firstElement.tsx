import { WebflowElementSchema } from "../generateTemplate";

async function getStyle(styleName: string): Promise<Style> {
  let newStyle = await webflow.getStyleByName(styleName);
  if (!newStyle) {
    newStyle = await webflow.createStyle("beautifulStyle");
  }
  newStyle.removeAllProperties();
  newStyle.setProperties({
    "background-color": "pink",
    "font-size": "16px",
    "font-weight": "bold",
    "overflow-y": "clip"
  });
  return newStyle;
}

export async function returnSchema(styleName: string): Promise<WebflowElementSchema> {
  const newStyle = await getStyle("beautifulStyle");
  return {
    element_type: webflow.elementPresets.HFlex,

    // content: "Hello, world!",
    children: [
      {
        element_type: "app/images/basic.png",
      },
      {
        element_type: "app/images/standard.png"
      },
      {
        element_type: "app/images/elite.png",
      }
    ],
  };
}
