type RowObj = {
  referenceId: string;
  activityType: string;
  entity: string
    operation:string,
    corporateId:string
    requestBy: string
};

const tableDataCheck: RowObj[] = [
  {
    referenceId: '1001',
    activityType: 'User Maintainance',
    entity:'CUSR',
    operation:'Created',
    corporateId:'SICORP',
    requestBy:'BANKUSER',
  },
  {
    referenceId: '1002',
    activityType: 'User Maintainance',
    entity:'CUSR',
    operation:'Created',
    corporateId:'SICORP',
    requestBy:'SUNNYKH',
  },
  {
    referenceId: '1003',
    activityType: 'User Maintainance',
    entity:'CUSR',
    operation:'Modified',
    corporateId:'SICORP',
    requestBy:'SUNNYKH',
  },
  {
    referenceId: '1004',
    activityType: 'User Maintainance',
    entity:'CUSR',
    operation:'Created',
    corporateId:'',
    requestBy:'BANKUSER',
  },
  {
    referenceId: '1005',
    activityType: 'User Maintainance',
    entity:'CUSR',
    operation:'Created',
    corporateId:'',
    requestBy:'BANKUSER',
  },
  {
    referenceId: '1006',
    activityType: 'User Maintainance',
    entity:'CUSR',
    operation:'Modified',
    corporateId:'SICORP',
    requestBy:'BANKUSER',
  },
];

export default tableDataCheck;
