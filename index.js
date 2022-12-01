const { keyboard, Key } = require("@nut-tree/nut-js");
const shortid = require("shortid")

const typeAndEnter = async (numberOfEnter = 100) => {
    for (let i = 0; i < numberOfEnter; i++) {
        const text = shortid.generate();
        await keyboard.type(text)
        await keyboard.pressKey(Key.Enter)
        await keyboard.releaseKey(Key.Enter)
    }
}

typeAndEnter(100);