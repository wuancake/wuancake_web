export default function defaultRule (MockAdapter) {
  MockAdapter.onGet('/').reply(200, {
    test: 'test success'
  })
    .onPost('/findAllGroupInfo').reply(200, {
      infoText: null,
      infoCode: '301',
      url: '/home',
      user_id: null,
      group_id: null,
      groups: [
        {
          id: 1,
          group_name: 'PHP组',
          deleteFlg: null,
          create_time: null,
          modify_time: null
        },
        {
          id: 2,
          group_name: 'Web前端组',
          deleteFlg: null,
          create_time: null,
          modify_time: null
        },
        {
          id: 3,
          group_name: 'UI设计组',
          deleteFlg: null,
          create_time: null,
          modify_time: null
        },
        {
          id: 4,
          group_name: 'Android组',
          deleteFlg: null,
          create_time: null,
          modify_time: null
        },
        {
          id: 5,
          group_name: '产品经理组',
          deleteFlg: null,
          create_time: null,
          modify_time: null
        },
        {
          id: 6,
          group_name: '软件测试组',
          deleteFlg: null,
          create_time: null,
          modify_time: null
        },
        {
          id: 7,
          group_name: 'Java组',
          deleteFlg: null,
          create_time: null,
          modify_time: null
        }
      ]
    })
    .onPost('/main').reply(200, {
      status: 1
    })
}
