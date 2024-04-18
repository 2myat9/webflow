export const checkCenterAlign = async () => {
  const all = await webflow.getAllElements();
  const body = all[0];
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
    console.log(properties);
    if (
      properties &&
      properties["align-items"] === "center" &&
      properties["justify-content"] === "center"
    ) {
      await webflow.notify({
        type: "Success",
        message: "Congrats! You have completed the Flexbox Basics game.",
      });
      return true;
    } else {
      await webflow.notify({
        type: "Error",
        message: "Oops. Try again!",
      });
      return false;
    }
  }
};
