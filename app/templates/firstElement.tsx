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
    "width": "300px",
    "height": "300px",
    "font-weight": "bold",
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
        element_type: "https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/04/30/0/FNK_The-Best-Cheddar-And-Herb-Chaffle_H_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1588257306685.jpeg",
        content: "Option 1",
        styles: newStyle,
      },
      {
        element_type: "https://media.self.com/photos/5f189b76c58e27c99fbef9e3/4:3/w_1131,h_848,c_limit/blackberry-vanilla-french-toast.jpg",
        content: "Option 2",
        styles: newStyle,
      },
      {
        element_type: "https://bestfriendsforfrosting.com/wp-content/uploads/2014/03/blueberry-banana-pancakes.jpg",
        content: "Option 3",
        styles: newStyle,
      },
    ],
  };
}
