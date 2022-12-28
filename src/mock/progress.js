import { getUrlParams } from './util';

const data4 = [
  {
    tpk: 'ICT2',
    applicationNo: '1120090000000195',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT2',
    applicationNo: '1120090000000194',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT2',
    applicationNo: '1120090000000193',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT2',
    applicationNo: '1120090000000192',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT2',
    applicationNo: '1120090000000191',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT2',
    applicationNo: '1120090000000190',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT2',
    applicationNo: '1120090000000189',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT1',
    applicationNo: '1120090000000188',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT1',
    applicationNo: '1120090000000187',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT1',
    applicationNo: '1120090000000186',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: '4001',
    applicationNo: '1120090000000185',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: '4001',
    applicationNo: '1120090000000184',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT1',
    applicationNo: '1120090000000183',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT1',
    applicationNo: '1120090000000182',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: '4001',
    applicationNo: '1120090000000181',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: '4001',
    applicationNo: '1120090000000180',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: '4001',
    applicationNo: '1120090000000179',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT1',
    applicationNo: '1120090000000178',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: 'ICT1',
    applicationNo: '1120090000000177',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: '4001',
    applicationNo: '1120090000000176',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  },
  {
    tpk: '4001',
    applicationNo: '1120090000000175',
    proposer: '李小二',
    incomID: '4900004000',
    receivedDate: '20090302',
    status: '你的申请正处于审核阶段，请耐心等待(审核处理中)',
    mechanism: '-',
    incomChannel: '网上申请'
  }
];
const allList = {
  query: data4
};
export default {
  'get|/ccai/progress': (data) => {
    let params = getUrlParams(data.url);
    let current = 10 * (params.currentPage - 1);
    let part = params.part;
    // let newList = callList.slice(current, params.currentPage * 10)
    let newList = allList[part].slice(current, params.currentPage * 10);
    return {
      // status: 200,
      // message: 'success',
      // data: {
      //   rows: newList,
      //   total: allList[part].length
      // }
      status: '000000',
      message: 'success2',
      data: {
        GROUP: {
          TXNINF: newList,
          total: allList[part].length
        }
      }
    };
  }
};
