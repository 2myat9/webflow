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

// NAVBAR CHECKS
export const checkNavbarAdded = async () => {
  const all = await webflow.getAllElements();

  const navWrapper = all[1];

  if (navWrapper.type === "NavbarWrapper") {
    await webflow.notify({
      type: "Success",
      message: "Cool navbar!",
    });
    return true;
  } else {
    await webflow.notify({
      type: "Error",
      message: "Oops. Try again!",
    });
    return false;
  }
};

export const checkNavBrand = async () => {
  const all = await webflow.getAllElements();
  const brand = all[3];
  if (brand.type === "NavbarBrand" && brand.styles) {
    const brandStyles = await brand.getStyles();
    const brandProps = await brandStyles[0].getProperties();

    if (brandProps["background-image"] === "@img_66158d075eb483b8d3e74f7c") {
      await webflow.notify({
        type: "Success",
        message:
          "Good job! Now customers know whose website they are looking at.",
      });
      return true;
    } else {
      await webflow.notify({
        type: "Error",
        message:
          "Oops. Try importing an image into the Images and Gradients section!",
      });
      return false;
    }
  } else {
    await webflow.notify({
      type: "Error",
      message: "Oops. Try again!",
    });
    return false;
  }
};

export const checkNavbarColor = async () => {
  const all = await webflow.getAllElements();
  const navWrapper = all[1];
  if (navWrapper.type === "NavbarWrapper" && navWrapper.styles) {
    const wrapStyles = await navWrapper.getStyles();
    const wrapProps = await wrapStyles[0].getProperties();
    console.log(wrapProps);
    if (
      wrapProps["background-color"] ===
      "hsla(216.42857142857142, 91.80%, 52.16%, 1.00)"
    ) {
      await webflow.notify({
        type: "Success",
        message: "Success! What a beautiful shade of blue...",
      });
      return true;
    } else {
      await webflow.notify({
        type: "Error",
        message: "Oops. Try using the color dropper!",
      });
      return false;
    }
  } else {
    await webflow.notify({
      type: "Error",
      message: "Oops. Try again!",
    });
    return false;
  }
};

// BUTTON CHECKS
export const checkButtonAdded = async () => {
  const all = await webflow.getAllElements();

  console.log(all);
  const button = all[17];
  let buttonText;

  if (button?.children) {
    const buttonStrings = await button.getChildren();
    if (buttonStrings[0].type === "String") {
      buttonText = await buttonStrings[0].getText();
      console.log(buttonText);
    }
  }

  if (button.type === "Link" && buttonText === "Click me!") {
    await webflow.notify({
      type: "Success",
      message: "Click click!",
    });
    return true;
  } else {
    await webflow.notify({
      type: "Error",
      message: "Oops. Try again! Did you change the button text correctly?",
    });
    return false;
  }
};

export const checkButtonStyle = async () => {
  const all = await webflow.getAllElements();

  console.log(all);
  const button = all[17];
  if (button?.styles) {
    const buttonStyles = await button.getStyles();
    const hoverStyle = await webflow.getStyleByName("Hover");
    const butProp = await buttonStyles[0].getProperties();
    if (hoverStyle) {
      const secondProp = await hoverStyle.getProperties();
      console.log(secondProp);
    }

    console.log(butProp);

    if (button.type === "Link" && hoverStyle) {
      const secondProp = await hoverStyle.getProperties();
      if (
        secondProp["background-color"] === "hsla(116, 68.06%, 72.86%, 1.00)"
      ) {
        await webflow.notify({
          type: "Success",
          message: "Great job! Now you have a beautiful and working button.",
        });
        return true;
      } else {
        await webflow.notify({
          type: "Error",
          message:
            "Look for the hover animation style in the drop down style selector!",
        });
        return false;
      }
    } else {
      await webflow.notify({
        type: "Error",
        message: "Oops. Try again!",
      });
      return false;
    }
  }
};
