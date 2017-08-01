
const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
    exportPathMap: () => ({
        '/posts': { page: '/posts' },
        '/sub-section': { page: '/sub-section' }
    })
})
