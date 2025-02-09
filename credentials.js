const keytar = require('keytar');
const Configstore = require('configstore');

const CONFIGSTORE_EMAIL_KEY = "ethernal.email";
const KEYCHAIN_NAMESPACE = "ethernal:firebase";

const configstore = new Configstore(CONFIGSTORE_EMAIL_KEY);

var _setEmail = async function(email) {
    return await configstore.set(CONFIGSTORE_EMAIL_KEY, email);
};

var _setPassword = async function(email, password) {
    return await keytar.setPassword(KEYCHAIN_NAMESPACE, email, password);
}

module.exports = {
    getEmail: async () => {
        return process.env.ETHERNAL_EMAIL ? await new Promise((resolve) => resolve(process.env.ETHERNAL_EMAIL)) : await configstore.get(CONFIGSTORE_EMAIL_KEY);
    },
    getPassword: async (email) => {
        return process.env.ETHERNAL_PASSWORD ? await new Promise((resolve) => resolve(process.env.ETHERNAL_PASSWORD)) : await keytar.getPassword(KEYCHAIN_NAMESPACE, email);
    },
    set: async (email, password) => {
        await _setEmail(email);
        await _setPassword(email, password);
    },
};
