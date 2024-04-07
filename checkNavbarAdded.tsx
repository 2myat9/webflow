export const checkNavbarAdded = async () => {
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
    if (all[1].type === "NavbarWrapper") {
        await webflow.notify({
            type: "Success",
            message: "Congrats! You have completed the Flexbox Basics game.",
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