// import { arrayFind } from './util'
// import { getMenu } from './permission'

const users = [
  {
    id: 1,
    USERNO: 'admin',
    PWD: 'admin',
    name: 'Vue Master',
    role: 'admin'
  },
  {
    id: 2,
    USERNO: 'user1',
    PWD: 'password',
    name: 'User One',
    role: 'common'
  }
];

export default {
  // 'post|/auth-center/jwt/login': (options) => {
  //   let accessToken = '',
  //     status = 401,
  //     role = '',
  //     name2 = '',
  //     message = '';
  //   const user = JSON.parse(options.body);
  //   for (let i = 0; i < users.length; i++) {
  //     if (
  //       users[i]['USERNO'] === user['USERNO'] &&
  //       users[i]['PWD'] === user['PWD']
  //     ) {
  //       accessToken = 'longtimenoseeIamdyingtoseeyou';
  //       status = 200;
  //       role = users[i]['role'];
  //       name2 = users[i]['name'];
  //       message = 'success';
  //       break;
  //     }
  //   }
  //   return {
  //     status: '000000',
  //     message: 'success2',
  //     // status: status,
  //     // message: message,
  //     data: {
  //       status: 200,
  //       accessToken,
  //       // menuTree: getMenu(),
  //       userInfo: {
  //         role: role,
  //         name: name2
  //       }
  //     }
  //   };
  // },
  'get|/auth-center/jwt/authVerify': (options) => {
    const params = 'longtimenoseeIamdyingtoseeyou-1';
    const userId = parseInt(params.split('-')[1]);
    // const user = arrayFind(users, 'id', userId)
    const user = JSON.parse(options.body);
    user.name = user.USERNO;
    return {
      status: user ? 200 : 404,
      message: 'success',
      data: user
    };
  },
  'get|/auth-center/jwt/logout': () => {
    return {
      status: 200,
      message: 'success',
      data: 'ok'
    };
  },
  'get|/auth-center/jwt/refresh': () => {
    return {
      status: 200,
      message: 'success',
      data: 'ok'
    };
  }
};
