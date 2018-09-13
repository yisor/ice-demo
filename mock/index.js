module.exports = {
  'GET /api/profile': {
    name: '淘小宝',
    department: '技术部',
    avatar: 'https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png',
    userid: 10001,
  },

  'POST /api/login': (req, res) => {
    const { password, account } = req.body;
    if (account === 'admin' && password === 'admin') {
      res.send({
        code: "0000",
        data:{
          currentAuthority: 'admin',
        },
        message: 'ok',
        successful: true
      });
    } else if (account === 'user' && password === 'user') {
      res.send({
        code: "0000",
        data:{
          currentAuthority: 'user',
        },
        message: 'ok',
        successful: true
      });
    } else {
      res.send({
        code: "401",
        data:{
          currentAuthority: 'guest',
        },
        message: 'unauthorized',
        successful: true
      });
    }
  },

  'POST /api/register': (req, res) => {
    res.send({
      status: 200,
      statusText: 'ok',
      currentAuthority: 'user',
    });
  },

  'POST /api/logout': (req, res) => {
    res.send({
      status: 200,
      statusText: 'ok',
      currentAuthority: 'guest',
    });
  },
};
