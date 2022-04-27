var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/na-613c/web-elizabot', 
        user: {
            name: 'na-613c',
            email: 'na613c613c@gmail.com' 
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)