export const checkElementStyles = async () => {
  const body = await webflow.getSelectedElement();
  if (!body || body.type != "Body") {
    await webflow.notify({
      type: "Error",
      message:
        "Error. Make sure the Body element is selected before you click Submit",
    });
    return;
  }
  const children = await body.getChildren();
  const firstChild = children[0];
  if (firstChild && firstChild.styles) {
    const styles = await firstChild.getStyles();
    if (!styles || styles.length === 0) {
      await webflow.notify({
        type: "Error",
        message: "No styles exist on the selected element",
      });
    }
    const properties = await styles[0].getProperties();

    console.log("properties");
    console.log(properties);

    if (
      properties &&
      properties["align-items"] === "center" &&
      properties["justify-content"] === "center"
    ) {
      await webflow.notify({
        type: "Success",
        message: "Congrats! You have completed the tutorial.",
      });
      // router.push("/tuto");
    } else {
      await webflow.notify({
        type: "Error",
        message: "Try again!",
      });
    }
  }
}