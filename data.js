let common = {
  methodInfo: { username: 'user1', password: 'pass1', url: 'domain.net' },
  serverInfo: [
    {
      name: 'server1',
      ip: '10.0.0.1',
      username: 'user1',
      password: 'pass1',
    },
    {
      name: 'server2',
      ip: '10.0.0.2',
      username: 'user1',
      password: 'pass1',
    },
  ],
  serverSetup: [],
  deviceSetup: [],
  contact: [
    { name: 'IT 1', email: 'it@domain.net', tel: '1234567890' },
    { name: 'IT 2', email: 'it2@domain.net', tel: '1234567890' },
  ],
  deviceList: ['10.0.0.9', '10.0.0.10'],
  devicePassword: [{ hp: 'aaaa' }, { kyo: 'bbbb' }],
}

export default {
  customers: [
    {
      name: 'BARTS',
      method: 'VM Ware',
      solution: 'Equitrac',
      common,
    },
    {
      name: 'ELFT',
      method: 'Carelink',
      methodInfo: { username: 'user1', password: 'pass1', url: 'domain.net' },
      common,
    },
    {
      name: 'Southampton',
      method: 'GlobalProtect',
      methodInfo: { username: 'user1', password: 'pass1', url: 'domain.net' },
      common,
    },
  ],
}
