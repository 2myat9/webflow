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
    "width": "200px",
    "max-height": "100%",
    "overflow-y": "clip"
  });
  return newStyle;
}

export async function returnSchema(styleName: string): Promise<WebflowElementSchema> {
  const newStyle = await getStyle("beautifulStyle");
  return {
    element_type: webflow.elementPresets.HFlex,

    children: [
      {
        element_type: "https://i.postimg.cc/DwTjVNNf/Screen-Shot-2024-03-25-at-10-46-35-PM.png",
        styles: newStyle
      },
      {
        element_type: "https://i.postimg.cc/GmxMbQ0F/Screen-Shot-2024-03-25-at-10-47-25-PM.png",
        styles: newStyle
      },
      {
        element_type: "https://i.postimg.cc/hG42vdgH/Screen-Shot-2024-03-25-at-10-47-36-PM.png",
        styles: newStyle
      }
    ],
  };
}
