

const bcrypt = require('bcryptjs');

export const passwordEncryptor = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};