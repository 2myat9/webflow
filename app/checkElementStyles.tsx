export const checkElementStyles = async () => {
    const selected = await webflow.getSelectedElement();
    if (selected && selected.type == "Block") {
      const styles = await selected.getStyles();
      if (styles) {
        const properties = await styles[0].getProperties();
        console.log("properties => ");
        console.log(properties);
        await webflow.notify({type: "Info", message: "sample notification!"})
      }
    }
}