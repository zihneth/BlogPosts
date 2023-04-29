const path = require('path');

module.exports = () => {
    return {
        resolve: {
            alias: {
                BlogPosts: path.join(__dirname, '..', 'src')
            }
        }
    };
};