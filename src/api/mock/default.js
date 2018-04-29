export default function defaultRule (MockAdapter) {
  MockAdapter.onGet('/').reply(200, {
    test: 'test success'
  })
}
