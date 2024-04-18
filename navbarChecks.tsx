export const checkNavbarAdded = async () => {
    const all = await webflow.getAllElements();

    const navWrapper = all[1];

    if (navWrapper.type === "NavbarWrapper") {
        await webflow.notify({
            type: "Success",
            message: "Cool navbar!",
        });
        return true;
    }
    else {
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
                message: "Good job! Now customers know whose website they are looking at.",
            });
            return true;
        }
        else {
            await webflow.notify({
              type: "Error",
              message: "Oops. Try importing an image into the Images and Gradients section!",
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
};

export const checkNavbarColor = async () => {
    const all = await webflow.getAllElements();
    const navWrapper = all[1];
    if (navWrapper.type === "NavbarWrapper" && navWrapper.styles) {
        const wrapStyles = await navWrapper.getStyles();
        const wrapProps = await wrapStyles[0].getProperties();
        console.log(wrapProps);
        if (wrapProps["background-color"] === "hsla(216.42857142857142, 91.80%, 52.16%, 1.00)") {
            await webflow.notify({
                type: "Success",
                message: "Success! What a beautiful shade of blue...",
            });
            return true;
        }
        else {
            await webflow.notify({
              type: "Error",
              message: "Oops. Try using the color dropper!",
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
};