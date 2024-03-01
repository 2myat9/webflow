// Define an asynchronous function to check the styles of an element in Webflow
export const checkElementStyles = async () => {
  // Retrieve the currently selected element
  const body = await webflow.getSelectedElement();
  // Check if a body element is selected and if it's of the type "Body"
  if (!body || body.type != "Body") {
    // If not, display an error notification
    await webflow.notify({
      type: "Error",
      message: "Error. Make sure the Body element is selected before you click Submit",
    });
    return; // Exit the function if the check fails
  }
  // Get the children elements of the body
  const children = await body.getChildren();
  // Select the first child of the body element
  const firstChild = children[0];
  // Check if the first child has styles defined
  if (firstChild && firstChild.styles) {
    // Retrieve the styles of the first child element
    const styles = await firstChild.getStyles();
    // Check if styles are defined or if the array of styles is empty
    if (!styles || styles.length === 0) {
      // Notify the user if no styles exist on the selected element
      await webflow.notify({
        type: "Error",
        message: "No styles exist on the selected element",
      });
    }
    // Get the properties of the first style object
    const properties = await styles[0].getProperties();

    // Log the properties to the console for debugging
    console.log("properties");
    console.log(properties);

    // Check if the 'align-items' and 'justify-content' properties are both set to 'center'
    if (
      properties &&
      properties["align-items"] === "center" &&
      properties["justify-content"] === "center"
    ) {
      // Notify the user of success if the conditions are met
      await webflow.notify({
        type: "Success",
        message: "Congrats! You have completed the tutorial.",
      });
      // Additional code could navigate the user to another page (commented out)
      // router.push("/tuto");
    } else {
      // Notify the user to try again if the conditions are not met
      await webflow.notify({
        type: "Error",
        message: "Try again!",
      });
    }
  }
}
