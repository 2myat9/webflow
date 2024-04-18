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
    
    if (button.type === "Link"  && buttonText === "Click me!") {
        await webflow.notify({
            type: "Success",
            message: "Click click!",
        });
        return true;
    }
    else {
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
            if (secondProp["background-color"] === "hsla(116, 68.06%, 72.86%, 1.00)") {
                await webflow.notify({
                    type: "Success",
                    message: "Great job! Now you have a beautiful and working button.",
                });
                return true;
            }
            else {
                await webflow.notify({
                  type: "Error",
                  message: "Look for the hover animation style in the drop down style selector!",
                });
                return false;
            }
        }
        else {
            await webflow.notify({
              type: "Error",
              message: "Oops. Try again!",
            });
            return false;
        }
    }
    
};