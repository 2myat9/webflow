export type WebflowElementSchema = {
element_type: ElementPreset<AnyElement>;
content?: string | null | undefined;
children?: WebflowElementSchema[];
styles?: Style;
};

// Function to generate a DOM tree from an HTMLElementSchema
export async function generateDOMTree(schema: WebflowElementSchema, parent: AnyElement): Promise<AnyElement> {

    const { element_type, content, children, styles } = schema;
    if (parent && parent?.children) {
        const newElement =  await parent.append(element_type);
    
        if (content && newElement?.textContent) {
            newElement.setTextContent(content);
        }
        
        // Set styles
        if (styles && newElement?.styles) {
            await newElement.setStyles([styles]);
        }
        
        // Recursively generate and append children
        if (children && newElement?.children) {
            for (let childSchema of children) {
                newElement.append(await generateDOMTree(childSchema, newElement));
            }
        }
        return newElement;
    }
    console.log("Error: No parent");
    return parent;

}




