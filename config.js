/*
    This is the config file that contains the blog configuration data.
    
    Note: Please replace the data with your details.
*/
module.exports = {
    blog: {
        name: 'Raging Flame Blog',
        description: 'Rants about code and stuff...',
        keywords: ['Joomla! Extensions', 'JavaScript', 'Node.js', 'PHP'],
        baseUrl: '/',
        postsFolder: __dirname + '/posts',
        postsFile: './posts.json',
        url: 'http://localhost:3080',
        rss: '/rss',
        rssLimit: 10
    },
    
    author: {
        name: 'Qawelesizwe Mlilo',
        autobio: 'Hi, my name is Qawelesizwe Mlilo(or Que), I write code and build stuff on the web. I\'m at my happiest when programming in JavaScript but writing custom Joomla! extensions in PHP pays my bills.',
        email: 'qawemlilo@gmail.com',
        twitterHandle: 'ragingflameblog',
        website: 'http://www.ragingflame.co.za',
        facbookPage: '#',
        googlePage: 'https://plus.google.com/111595084798587457827/posts?hl=en&partnerid=gplp0',
        avatar: '/img/qawe.png'
    },
    
    showDate: true,
    
    showPagination: true,
    
    showShareButtons: true,
    
    externalAinNewWin: true
};
