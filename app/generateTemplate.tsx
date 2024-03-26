export type WebflowElementSchema = {
element_type: ElementPreset<AnyElement> | string;   // either the element type OR img src as string
content?: string | null | undefined;
children?: WebflowElementSchema[];
styles?: Style;
};



// Function to generate a DOM tree from an HTMLElementSchema
export async function generateDOMTree(schema: WebflowElementSchema, parent: AnyElement): Promise<AnyElement> {

    const { element_type, content, children, styles } = schema;
    let newElement = null;
    if (parent && parent?.children) {
        if (typeof element_type === "string") {
            newElement = await parent.append(webflow.elementPresets.DOM);
            newElement.setTag("img");
            if (newElement?.type === "DOM") {
                await newElement.setAttribute("src", element_type);
            }
        }
        else {
            newElement = await parent.append(element_type);
            if (content && newElement?.textContent) {
                newElement.setTextContent(content);
            }
            
            // Recursively generate and append children
            if (children && newElement?.children) {
                for (let childSchema of children) {
                    newElement.append(await generateDOMTree(childSchema, newElement));
                }
            }
        }
        // Set styles
        if (styles && newElement?.styles) {
            // let newStyle = await webflow.getStyleByName(styleName);
            // if (!newStyle) {
            //     newStyle = await webflow.createStyle("beautifulStyle");
            // }
            await newElement.setStyles([styles]);
        }
        
        return newElement;
    }
    console.log("Error: No parent");
    return parent;

}




