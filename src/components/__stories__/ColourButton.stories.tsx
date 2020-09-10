import React from "react";
import { storiesOf } from "@storybook/react";
import ColorButton from "../ColourButton";

storiesOf("ColourButton", module)
    .add("default",
        () => <ColorButton />
    )