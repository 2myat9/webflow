import { WebflowElementSchema } from "../generateTemplate";

async function getStyle(styleName: string): Promise<Style> {
  let newStyle = await webflow.getStyleByName(styleName);
  if (!newStyle) {
    newStyle = await webflow.createStyle("beautifulStyle");
  }
  newStyle.removeAllProperties();
  newStyle.setProperties({
    "background-color": "gold",
    "font-size": "16px",
    "font-weight": "bold",
  });
  return newStyle;
}

export async function returnSchema(
  styleName: string
): Promise<WebflowElementSchema> {
  const newStyle = await getStyle("beautifulStyle");
  return {
    element_type: webflow.elementPresets.HFlex,

    // content: "Hello, world!",
    children: [
      {
        element_type: webflow.elementPresets.Paragraph,
        content: "Option 1",
        styles: newStyle,
      },
      {
        element_type: webflow.elementPresets.Paragraph,
        content: "Option 2",
        styles: newStyle,
      },
      {
        element_type: webflow.elementPresets.Paragraph,
        content: "Option 3",
        styles: newStyle,
      },
    ],
  };
}
