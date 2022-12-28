// import { getUrlParams } from '../util';
const templateList = [
  {
    id: '1',
    name: '测试模板',
    status: 0,
    modifier: '张三',
    editTime: '2021-01-01',
    parentMenuId: 'authorityManage',
    parentMenuCode: 'authorityManage',
    menuTitle: '新增菜单1'
  },
  {
    id: '2',
    name: '测试模板2',
    status: 1,
    modifier: '叶一',
    editTime: '2019-05-12',
    parentMenuId: 'authorityManage',
    parentMenuCode: 'authorityManage',
    menuTitle: '新增菜单2'
  },
  {
    id: '3',
    name: '测试模板3',
    status: 2,
    modifier: '三毛',
    editTime: '2009-10-05',
    parentMenuId: 'processCenter',
    parentMenuCode: 'processCenter',
    menuTitle: '新增菜单3'
  },
  {
    id: '4',
    name: '新增',
    status: 2,
    modifier: '李四',
    editTime: '2021-01-06',
    parentMenuId: 'processCenter',
    parentMenuCode: 'processCenter',
    menuTitle: '新增菜单3'
  }
];
const templateDetail = {
  1: {
    name: '模板111',
    blocks: [
      {
        blockId: '1586853519886795',
        type: 'pie',
        dataSetId: 'datav_1',
        queryParams: [],
        label: 'name',
        value: 'number'
      },
      {
        blockId: '1586853519886896',
        type: 'bar',
        dataSetId: 'datav_8',
        queryParams: [],
        xaxis: 'feeType',
        yaxis: [{ code: 'sunFees', label: '费用总额' }]
      },
      {
        blockId: '1586853519886152',
        type: 'table',
        dataSetId: 'datav_2',
        queryParams: [
          {
            code: 'code',
            name: '基金代码',
            type: 0,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '',
            formItem: ''
          },
          {
            code: 'date',
            name: '日期',
            type: 2,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '',
            formItem: ''
          }
        ],
        columns: [
          {
            label: '基金代码',
            prop: 'code',
            fieldCode: 'code',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true
          },
          {
            label: '日期',
            prop: 'date',
            fieldCode: 'date',
            align: 'center',
            headerAlign: 'center',
            fieldType: 2,
            showOverflowTooltip: true,
            format: 'yyyy-MM-dd'
          },
          {
            label: '基金收益率',
            prop: 'yield',
            fieldCode: 'yield',
            align: 'center',
            headerAlign: 'center',
            fieldType: 1,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '是否过期',
            prop: 'isOutDate',
            fieldCode: 'isOutDate',
            align: 'center',
            headerAlign: 'center',
            fieldType: 3,
            showOverflowTooltip: true
          }
        ]
      }
    ],
    style:
      'W3siaWQiOjEsIndpZHRoIjoyLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6MywiZ3JpZFJvd1N0YXJ0IjoxLCJncmlkUm93RW5kIjoyLCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6dHJ1ZSwiY2FuQmFja0xlZnQiOnRydWUsImNhbkJhY2tVcCI6ZmFsc2UsImNhbkJhY2tEb3duIjpmYWxzZSwiZ29vZHMiOiIxNTg2ODUzNTE5ODg2Nzk1In0seyJpZCI6Mywid2lkdGgiOjEsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjozLCJncmlkQ29sdW1uRW5kIjo0LCJncmlkUm93U3RhcnQiOjEsImdyaWRSb3dFbmQiOjIsImNhbkRyb3AiOjAsImVtcHR5IjpmYWxzZSwiY2FuTGVmdCI6ZmFsc2UsImNhblJpZ2h0IjpmYWxzZSwiY2FuVXAiOmZhbHNlLCJjYW5Eb3duIjpmYWxzZSwiY2FuQmFja1JpZ2h0IjpmYWxzZSwiY2FuQmFja0xlZnQiOmZhbHNlLCJjYW5CYWNrVXAiOmZhbHNlLCJjYW5CYWNrRG93biI6ZmFsc2UsImdvb2RzIjoiMTU4Njg1MzUxOTg4Njg5NiIsImRyYWdnYWJsZSI6ZmFsc2V9LHsiaWQiOjQsIndpZHRoIjozLCJoZWlnaHQiOjIsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6NCwiZ3JpZFJvd1N0YXJ0IjoyLCJncmlkUm93RW5kIjo0LCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6dHJ1ZSwiY2FuQmFja0xlZnQiOnRydWUsImNhbkJhY2tVcCI6dHJ1ZSwiY2FuQmFja0Rvd24iOnRydWUsImdvb2RzIjoiMTU4Njg1MzUxOTg4NjE1MiJ9XQ=='
  },
  2: {
    name: '表单块测试',
    blocks: [
      {
        blockId: '1587117906160475',
        type: 'doubleForm',
        formAttribute: {
          labelPosition: 'right',
          labelSuffix: ':',
          labelWidth: '80',
          formList: [
            {
              type: 'doubleForm',
              formItemType: 'text',
              key: 'ellov3zjoxl',
              span: 12,
              label: '名称',
              placeholder: '请输入名称',
              value: '张三'
            },
            {
              type: 'doubleForm',
              formItemType: 'select',
              key: 'ogs3yn2u7hq',
              span: 12,
              label: '下拉框',
              placeholder: '请选择',
              value: '',
              multiple: false,
              options: [
                { value: '3wxq6syo81v', label: '选项1' },
                { value: '0cxbu2be5w2', label: '选项2' },
                { value: 'j8nu747gefl', label: '选项3' }
              ]
            },
            {
              type: 'doubleForm',
              formItemType: 'date',
              key: '5ekdc36yn3x',
              span: 12,
              label: '生产日期',
              placeholder: '请选择生产日期',
              value: ''
            },
            {
              type: 'doubleForm',
              formItemType: 'time',
              key: 't8brp7c5jz',
              span: 12,
              label: '时间时间',
              placeholder: '请选择',
              value: ''
            },
            {
              type: 'doubleForm',
              formItemType: 'radioGroup',
              key: '628s1vep0ab',
              span: 12,
              label: '性别',
              value: 'r9itq2qgi',
              options: [
                { value: 'xnudnuckife', label: '男' },
                { value: 'r9itq2qgi', label: '女' }
              ]
            },
            {
              type: 'doubleForm',
              formItemType: 'checkboxGroup',
              key: '8jbrowbutit',
              span: 12,
              label: '爱好',
              value: ['跳舞', '耍大刀'],
              options: [
                { value: 'kfprvnqh2kr', label: '唱歌' },
                { value: 'pg4fxydhjco', label: '跳舞' },
                { value: 'xm9gfm2bu2', label: '耍大刀' }
              ]
            },
            {
              type: 'doubleForm',
              formItemType: 'upload',
              key: 'r06a4bjwx6k',
              span: 12,
              btnProp: { buttonText: '上传照骗' },
              iconProps: { iconClass: 'upload-icon' }
            },
            {
              type: 'doubleForm',
              formItemType: 'button',
              key: 'erdzk14ydta',
              span: 12,
              btnProp: { buttonText: '好的啦' }
            },
            {
              type: 'doubleForm',
              formItemType: 'textarea',
              key: 'vahushcvjs',
              span: 12,
              label: '备注',
              placeholder: '请输入备注',
              value: '我说啥'
            }
          ]
        },
        blockName: '表单块'
      },
      {
        blockId: '1587117906161356',
        dataSetId: 'datav_8',
        type: 'bar',
        xaxis: 'feeType',
        yaxis: [{ code: 'sunFees' }],
        queryParams: []
      },
      {
        blockId: '1587117906161403',
        dataSetId: 'datav_2',
        type: 'table',
        columns: [
          {
            label: '基金代码',
            prop: 'code',
            fieldCode: 'code',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true
          },
          {
            label: '日期',
            prop: 'date',
            fieldCode: 'date',
            align: 'center',
            headerAlign: 'center',
            fieldType: 2,
            showOverflowTooltip: true,
            format: 'yyyy-MM-dd'
          },
          {
            label: '基金收益率',
            prop: 'yield',
            fieldCode: 'yield',
            align: 'center',
            headerAlign: 'center',
            fieldType: 1,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '是否过期',
            prop: 'isOutDate',
            fieldCode: 'isOutDate',
            align: 'center',
            headerAlign: 'center',
            fieldType: 3,
            showOverflowTooltip: true
          }
        ],
        queryParams: [
          {
            code: 'code',
            name: '基金代码',
            type: 0,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '',
            formItem: ''
          },
          {
            code: 'date',
            name: '日期',
            type: 2,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '',
            formItem: ''
          }
        ]
      }
    ],
    style:
      'W3siaWQiOjEsIndpZHRoIjoyLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6MywiZ3JpZFJvd1N0YXJ0IjoxLCJncmlkUm93RW5kIjoyLCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6dHJ1ZSwiY2FuQmFja0xlZnQiOnRydWUsImNhbkJhY2tVcCI6ZmFsc2UsImNhbkJhY2tEb3duIjpmYWxzZSwiZ29vZHMiOiIxNTg3MTE3OTA2MTYwNDc1IiwiZHJhZ2dhYmxlIjpmYWxzZX0seyJpZCI6Mywid2lkdGgiOjEsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjozLCJncmlkQ29sdW1uRW5kIjo0LCJncmlkUm93U3RhcnQiOjEsImdyaWRSb3dFbmQiOjIsImNhbkRyb3AiOjAsImVtcHR5IjpmYWxzZSwiY2FuTGVmdCI6ZmFsc2UsImNhblJpZ2h0IjpmYWxzZSwiY2FuVXAiOmZhbHNlLCJjYW5Eb3duIjpmYWxzZSwiY2FuQmFja1JpZ2h0IjpmYWxzZSwiY2FuQmFja0xlZnQiOmZhbHNlLCJjYW5CYWNrVXAiOmZhbHNlLCJjYW5CYWNrRG93biI6ZmFsc2UsImdvb2RzIjoiMTU4NzExNzkwNjE2MTM1NiIsImRyYWdnYWJsZSI6ZmFsc2V9LHsiaWQiOjQsIndpZHRoIjozLCJoZWlnaHQiOjIsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6NCwiZ3JpZFJvd1N0YXJ0IjoyLCJncmlkUm93RW5kIjo0LCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6dHJ1ZSwiY2FuQmFja0xlZnQiOnRydWUsImNhbkJhY2tVcCI6dHJ1ZSwiY2FuQmFja0Rvd24iOnRydWUsImdvb2RzIjoiMTU4NzExNzkwNjE2MTQwMyIsImRyYWdnYWJsZSI6ZmFsc2V9XQ=='
  },
  3: {
    name: '模板带参数预览',
    blocks: [
      {
        blockId: '1585882928992163',
        dataSetId: 'datav_1',
        type: 'table',
        columns: [
          {
            label: '产品代码',
            prop: 'code',
            fieldCode: 'code',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true
          },
          {
            label: '产品名称',
            prop: 'name',
            fieldCode: 'name',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true
          },
          {
            label: '数量',
            prop: 'number',
            fieldCode: 'number',
            align: 'right',
            headerAlign: 'center',
            fieldType: 1,
            showOverflowTooltip: true,
            format: 'thousand'
          },
          {
            label: '金额',
            prop: 'amount',
            fieldCode: 'amount',
            align: 'right',
            headerAlign: 'center',
            fieldType: 1,
            showOverflowTooltip: true,
            format: 'amount'
          },
          {
            label: '成立日期',
            prop: 'date',
            fieldCode: 'date',
            align: 'center',
            headerAlign: 'center',
            fieldType: 2,
            showOverflowTooltip: true,
            format: 'yyyy/MM/dd'
          },
          {
            label: '合同风险准备金率',
            prop: 'agRiskReserveRate',
            fieldCode: 'agRiskReserveRate',
            align: 'center',
            headerAlign: 'center',
            fieldType: 1,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '资管新规风险准备金率',
            prop: 'imRiskReserveRate',
            fieldCode: 'imRiskReserveRate',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true
          }
        ],
        queryParams: []
      },
      {
        blockId: '1585882928992386',
        blockName: '基金收益率普通饼图',
        dataSetId: 'datav_2',
        type: 'pie',
        label: 'code',
        pieType: '2',
        value: 'yield',
        queryParams: [
          {
            code: 'code',
            name: '基金代码',
            type: 0,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '001',
            formItem: ''
          },
          {
            code: 'date',
            name: '日期',
            type: 2,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '2020',
            formItem: ''
          }
        ]
      },
      {
        blockId: '1585882928992505',
        blockName: '基金收益率环形图',
        dataSetId: 'datav_2',
        type: 'pie',
        label: 'code',
        pieType: '0',
        value: 'yield',
        queryParams: [
          {
            code: 'code',
            name: '基金代码',
            type: 0,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '002',
            formItem: ''
          },
          {
            code: 'date',
            name: '日期',
            type: 2,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '2019',
            formItem: ''
          }
        ]
      },
      {
        blockId: '1585882928992625',
        blockName: '基金收益率南丁格尔图',
        dataSetId: 'datav_2',
        type: 'pie',
        label: 'code',
        pieType: '1',
        value: 'yield',
        queryParams: [
          {
            code: 'code',
            name: '基金代码',
            type: 0,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '003',
            formItem: ''
          },
          {
            code: 'date',
            name: '日期',
            type: 2,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            customDefaultValue: '2018',
            formItem: ''
          }
        ]
      },
      {
        blockId: '1585882928992736',
        blockName: '产品柱状图',
        dataSetId: 'datav_1',
        type: 'bar',
        xaxis: 'name',
        yaxis: [{ code: 'number' }],
        queryParams: []
      },
      {
        blockId: '1585882928992500',
        blockName: '员工折线图',
        dataSetId: 'datav_5',
        type: 'line',
        xaxis: 'name',
        yaxis: [{ code: 'number1' }, { code: 'number2' }],
        queryParams: [
          {
            code: 'name',
            name: '员工名称',
            type: 0,
            required: 1,
            defaultValue: 'P',
            valueBy: '0',
            customDefaultValue: '',
            formItem: ''
          },
          {
            code: 'code',
            name: '员工编号',
            type: 0,
            required: 1,
            defaultValue: 'c',
            valueBy: '0',
            customDefaultValue: '',
            formItem: ''
          },
          {
            code: 'status',
            name: '状态',
            type: 0,
            required: 1,
            defaultValue: '2',
            valueBy: '0',
            customDefaultValue: '',
            formItem: ''
          }
        ]
      }
    ],
    style:
      'W3siaWQiOjEsIndpZHRoIjozLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6NCwiZ3JpZFJvd1N0YXJ0IjoxLCJncmlkUm93RW5kIjoyLCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6dHJ1ZSwiY2FuQmFja0xlZnQiOnRydWUsImNhbkJhY2tVcCI6ZmFsc2UsImNhbkJhY2tEb3duIjpmYWxzZSwiZ29vZHMiOiIxNTg1ODgyOTI4OTkyMTYzIiwiZHJhZ2dhYmxlIjpmYWxzZX0seyJpZCI6NCwid2lkdGgiOjEsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjoxLCJncmlkQ29sdW1uRW5kIjoyLCJncmlkUm93U3RhcnQiOjIsImdyaWRSb3dFbmQiOjMsImNhbkRyb3AiOjAsImVtcHR5IjpmYWxzZSwiY2FuTGVmdCI6ZmFsc2UsImNhblJpZ2h0IjpmYWxzZSwiY2FuVXAiOmZhbHNlLCJjYW5Eb3duIjpmYWxzZSwiY2FuQmFja1JpZ2h0IjpmYWxzZSwiY2FuQmFja0xlZnQiOmZhbHNlLCJjYW5CYWNrVXAiOmZhbHNlLCJjYW5CYWNrRG93biI6ZmFsc2UsImdvb2RzIjoiMTU4NTg4MjkyODk5MjM4NiJ9LHsiaWQiOjUsIndpZHRoIjoxLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MiwiZ3JpZENvbHVtbkVuZCI6MywiZ3JpZFJvd1N0YXJ0IjoyLCJncmlkUm93RW5kIjozLCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6ZmFsc2UsImNhbkJhY2tMZWZ0IjpmYWxzZSwiY2FuQmFja1VwIjpmYWxzZSwiY2FuQmFja0Rvd24iOmZhbHNlLCJnb29kcyI6IjE1ODU4ODI5Mjg5OTI1MDUiLCJkcmFnZ2FibGUiOmZhbHNlfSx7ImlkIjo2LCJ3aWR0aCI6MSwiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjMsImdyaWRDb2x1bW5FbmQiOjQsImdyaWRSb3dTdGFydCI6MiwiZ3JpZFJvd0VuZCI6MywiY2FuRHJvcCI6MCwiZW1wdHkiOmZhbHNlLCJjYW5MZWZ0IjpmYWxzZSwiY2FuUmlnaHQiOmZhbHNlLCJjYW5VcCI6ZmFsc2UsImNhbkRvd24iOmZhbHNlLCJjYW5CYWNrUmlnaHQiOmZhbHNlLCJjYW5CYWNrTGVmdCI6ZmFsc2UsImNhbkJhY2tVcCI6ZmFsc2UsImNhbkJhY2tEb3duIjpmYWxzZSwiZ29vZHMiOiIxNTg1ODgyOTI4OTkyNjI1IiwiZHJhZ2dhYmxlIjpmYWxzZX0seyJpZCI6Nywid2lkdGgiOjMsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjoxLCJncmlkQ29sdW1uRW5kIjo0LCJncmlkUm93U3RhcnQiOjMsImdyaWRSb3dFbmQiOjQsImNhbkRyb3AiOjAsImVtcHR5IjpmYWxzZSwiY2FuTGVmdCI6ZmFsc2UsImNhblJpZ2h0IjpmYWxzZSwiY2FuVXAiOmZhbHNlLCJjYW5Eb3duIjpmYWxzZSwiY2FuQmFja1JpZ2h0Ijp0cnVlLCJjYW5CYWNrTGVmdCI6dHJ1ZSwiY2FuQmFja1VwIjpmYWxzZSwiY2FuQmFja0Rvd24iOmZhbHNlLCJnb29kcyI6IjE1ODU4ODI5Mjg5OTI3MzYiLCJkcmFnZ2FibGUiOmZhbHNlfSx7ImlkIjoiMTU4NDk1NDU4NTEzMjQzMSIsIndpZHRoIjozLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6NCwiZ3JpZFJvd1N0YXJ0Ijo0LCJncmlkUm93RW5kIjo1LCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6dHJ1ZSwiY2FuQmFja0xlZnQiOnRydWUsImNhbkJhY2tVcCI6ZmFsc2UsImNhbkJhY2tEb3duIjpmYWxzZSwiZ29vZHMiOiIxNTg1ODgyOTI4OTkyNTAwIn1d'
  },
  4: {
    name: '新增模板',
    blocks: [
      {
        blockId: '1587696555587367',
        blockName: '内容块1',
        showBlockName: false,
        queryParams: [
          {
            code: 'name',
            name: '员工名称',
            type: 0,
            required: 1,
            defaultValue: 'P',
            valueBy: '0',
            value: 'P',
            relationFormItem: '',
            relationChart: '',
            relationChartField: ''
          },
          {
            code: 'code',
            name: '员工编号',
            type: 0,
            required: 1,
            defaultValue: 'c',
            valueBy: '0',
            value: 'c',
            relationFormItem: '',
            relationChart: '',
            relationChartField: ''
          },
          {
            code: 'status',
            name: '状态',
            type: 0,
            required: 0,
            defaultValue: '2',
            valueBy: '0',
            value: '2',
            relationFormItem: '',
            relationChart: '',
            relationChartField: ''
          }
        ],
        relationQuery: [],
        dataSetId: 'datav_5',
        type: 'table',
        columns: [
          {
            label: '员工编号',
            prop: 'code',
            fieldCode: 'code',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '员工名称',
            prop: 'name',
            fieldCode: 'name',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '状态',
            prop: 'status',
            fieldCode: 'status',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '入职天数',
            prop: 'day',
            fieldCode: 'day',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '数量1',
            prop: 'number1',
            fieldCode: 'number1',
            align: 'center',
            headerAlign: 'center',
            fieldType: 1,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '数量2',
            prop: 'number2',
            fieldCode: 'number2',
            align: 'center',
            headerAlign: 'center',
            fieldType: 1,
            showOverflowTooltip: true,
            format: ''
          }
        ]
      },
      {
        blockId: '1587696555587885',
        blockName: '内容块3',
        showBlockName: false,
        queryParams: [
          {
            code: 'code',
            name: '基金代码',
            type: 0,
            required: 1,
            defaultValue: '',
            valueBy: '3',
            customDefaultValue: '',
            formItem: '',
            relationChart: 2,
            relationChartField: 'label',
            value: null
          },
          {
            code: 'date',
            name: '日期',
            type: 2,
            required: 1,
            defaultValue: '',
            valueBy: '3',
            customDefaultValue: '',
            formItem: '',
            relationChart: 2,
            relationChartField: 'value',
            value: null
          }
        ],
        relationQuery: [1],
        dataSetId: 'datav_2',
        type: 'bar',
        xaxis: 'code',
        yaxis: [{ code: 'yield' }]
      },
      {
        blockId: '1587696555587593',
        blockName: '内容块4',
        showBlockName: true,
        queryParams: [
          {
            code: 'code',
            name: '基金代码',
            type: 0,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            value: null,
            relationFormItem: '',
            relationChart: '',
            relationChartField: ''
          },
          {
            code: 'date',
            name: '日期',
            type: 2,
            required: 1,
            defaultValue: '',
            valueBy: '0',
            value: null,
            relationFormItem: '',
            relationChart: '',
            relationChartField: ''
          }
        ],
        relationQuery: [],
        dataSetId: 'datav_2',
        type: 'line',
        xaxis: 'code',
        yaxis: [{ code: 'yield' }]
      },
      {
        blockId: '1587696555587936',
        type: 'table',
        blockName: '内容块5',
        showBlockName: false,
        dataSetId: 'datav_1',
        queryParams: [],
        columns: [
          {
            label: '产品代码',
            prop: 'code',
            fieldCode: 'code',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '产品名称',
            prop: 'name',
            fieldCode: 'name',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '产品类型代码',
            prop: 'proType',
            fieldCode: 'proType',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true,
            format: ''
          },
          {
            label: '数量',
            prop: 'number',
            fieldCode: 'number',
            align: 'center',
            headerAlign: 'center',
            fieldType: 1,
            showOverflowTooltip: true,
            format: 'thousand'
          },
          {
            label: '金额',
            prop: 'amount',
            fieldCode: 'amount',
            align: 'center',
            headerAlign: 'center',
            fieldType: 1,
            showOverflowTooltip: true,
            format: 'amount'
          },
          {
            label: '资管新规风险准备金率',
            prop: 'imRiskReserveRate',
            fieldCode: 'imRiskReserveRate',
            align: 'center',
            headerAlign: 'center',
            fieldType: 0,
            showOverflowTooltip: true,
            format: ''
          }
        ]
      },
      { blockId: '1587696555587769' },
      { blockId: '1587696555587486' },
      { blockId: '1587696555587244' }
    ],
    style:
      'W3siaWQiOjEsIndpZHRoIjoyLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6MywiZ3JpZFJvd1N0YXJ0IjoxLCJncmlkUm93RW5kIjoyLCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6dHJ1ZSwiY2FuQmFja0xlZnQiOnRydWUsImNhbkJhY2tVcCI6ZmFsc2UsImNhbkJhY2tEb3duIjpmYWxzZSwiZ29vZHMiOiIxNTg3Njk2NTU1NTg3MzY3IiwiZHJhZ2dhYmxlIjpmYWxzZX0seyJpZCI6Mywid2lkdGgiOjEsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjozLCJncmlkQ29sdW1uRW5kIjo0LCJncmlkUm93U3RhcnQiOjEsImdyaWRSb3dFbmQiOjIsImNhbkRyb3AiOjAsImVtcHR5IjpmYWxzZSwiY2FuTGVmdCI6ZmFsc2UsImNhblJpZ2h0IjpmYWxzZSwiY2FuVXAiOmZhbHNlLCJjYW5Eb3duIjpmYWxzZSwiY2FuQmFja1JpZ2h0IjpmYWxzZSwiY2FuQmFja0xlZnQiOmZhbHNlLCJjYW5CYWNrVXAiOmZhbHNlLCJjYW5CYWNrRG93biI6ZmFsc2UsImdvb2RzIjoiMTU4NzY5NjU1NTU4Nzg4NSIsImRyYWdnYWJsZSI6ZmFsc2V9LHsiaWQiOjQsIndpZHRoIjoxLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6MiwiZ3JpZFJvd1N0YXJ0IjoyLCJncmlkUm93RW5kIjozLCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6dHJ1ZSwiY2FuQmFja1JpZ2h0IjpmYWxzZSwiY2FuQmFja0xlZnQiOmZhbHNlLCJjYW5CYWNrVXAiOmZhbHNlLCJjYW5CYWNrRG93biI6ZmFsc2UsImdvb2RzIjoiMTU4NzY5NjU1NTU4NzU5MyIsImRyYWdnYWJsZSI6ZmFsc2V9LHsiaWQiOjUsIndpZHRoIjoyLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MiwiZ3JpZENvbHVtbkVuZCI6NCwiZ3JpZFJvd1N0YXJ0IjoyLCJncmlkUm93RW5kIjozLCJjYW5Ecm9wIjowLCJlbXB0eSI6ZmFsc2UsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6dHJ1ZSwiY2FuQmFja1JpZ2h0Ijp0cnVlLCJjYW5CYWNrTGVmdCI6dHJ1ZSwiY2FuQmFja1VwIjpmYWxzZSwiY2FuQmFja0Rvd24iOmZhbHNlLCJnb29kcyI6IjE1ODc2OTY1NTU1ODc5MzYifSx7ImlkIjo3LCJ3aWR0aCI6MSwiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjEsImdyaWRDb2x1bW5FbmQiOjIsImdyaWRSb3dTdGFydCI6MywiZ3JpZFJvd0VuZCI6NCwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWUsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6ZmFsc2UsImNhbkJhY2tMZWZ0IjpmYWxzZSwiY2FuQmFja1VwIjpmYWxzZSwiY2FuQmFja0Rvd24iOmZhbHNlLCJnb29kcyI6IjE1ODc2OTY1NTU1ODc3NjkifSx7ImlkIjo4LCJ3aWR0aCI6MSwiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjIsImdyaWRDb2x1bW5FbmQiOjMsImdyaWRSb3dTdGFydCI6MywiZ3JpZFJvd0VuZCI6NCwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWUsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6ZmFsc2UsImNhbkJhY2tMZWZ0IjpmYWxzZSwiY2FuQmFja1VwIjpmYWxzZSwiY2FuQmFja0Rvd24iOmZhbHNlLCJnb29kcyI6IjE1ODc2OTY1NTU1ODc0ODYifSx7ImlkIjo5LCJ3aWR0aCI6MSwiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjMsImdyaWRDb2x1bW5FbmQiOjQsImdyaWRSb3dTdGFydCI6MywiZ3JpZFJvd0VuZCI6NCwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWUsImNhbkxlZnQiOmZhbHNlLCJjYW5SaWdodCI6ZmFsc2UsImNhblVwIjpmYWxzZSwiY2FuRG93biI6ZmFsc2UsImNhbkJhY2tSaWdodCI6ZmFsc2UsImNhbkJhY2tMZWZ0IjpmYWxzZSwiY2FuQmFja1VwIjpmYWxzZSwiY2FuQmFja0Rvd24iOmZhbHNlLCJnb29kcyI6IjE1ODc2OTY1NTU1ODcyNDQifV0='
  }
};

const layoutList = [
  {
    id: 1,
    style:
      'W3siaWQiOjEsIndpZHRoIjoyLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6MywiZ3JpZFJvd1N0YXJ0IjoxLCJncmlkUm93RW5kIjoyLCJjYW5Ecm9wIjowLCJlbXB0eSI6dHJ1ZX0seyJpZCI6NCwid2lkdGgiOjEsImhlaWdodCI6MiwiZ3JpZENvbHVtblN0YXJ0IjoxLCJncmlkQ29sdW1uRW5kIjoyLCJncmlkUm93U3RhcnQiOjIsImdyaWRSb3dFbmQiOjQsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfSx7ImlkIjo1LCJ3aWR0aCI6MSwiaGVpZ2h0IjoyLCJncmlkQ29sdW1uU3RhcnQiOjIsImdyaWRDb2x1bW5FbmQiOjMsImdyaWRSb3dTdGFydCI6MywiZ3JpZFJvd0VuZCI6NSwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWV9LHsiaWQiOjYsIndpZHRoIjoxLCJoZWlnaHQiOjQsImdyaWRDb2x1bW5TdGFydCI6MywiZ3JpZENvbHVtbkVuZCI6NCwiZ3JpZFJvd1N0YXJ0IjoxLCJncmlkUm93RW5kIjo1LCJjYW5Ecm9wIjowLCJlbXB0eSI6dHJ1ZX0seyJpZCI6IjE1ODU4ODQ0NDc2NDk5NDMiLCJ3aWR0aCI6MywiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjEsImdyaWRDb2x1bW5FbmQiOjQsImdyaWRSb3dTdGFydCI6NSwiZ3JpZFJvd0VuZCI6NiwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWV9LHsiaWQiOiIxNTg1ODg0NDc2MDYzNTk0Iiwid2lkdGgiOjIsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjoxLCJncmlkQ29sdW1uRW5kIjozLCJncmlkUm93U3RhcnQiOjYsImdyaWRSb3dFbmQiOjcsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfSx7ImlkIjoiMTU4NTg4NDUxODgyMzYwMSIsIndpZHRoIjoxLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MiwiZ3JpZENvbHVtbkVuZCI6MywiZ3JpZFJvd1N0YXJ0IjoyLCJncmlkUm93RW5kIjozLCJjYW5Ecm9wIjowLCJlbXB0eSI6dHJ1ZX0seyJpZCI6IjE1ODU4ODQ2MTgxOTM5NDIiLCJ3aWR0aCI6MSwiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjEsImdyaWRDb2x1bW5FbmQiOjIsImdyaWRSb3dTdGFydCI6NCwiZ3JpZFJvd0VuZCI6NSwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWV9LHsiaWQiOiIxNTg1ODg0NjIxNjYzNzQyIiwid2lkdGgiOjEsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjozLCJncmlkQ29sdW1uRW5kIjo0LCJncmlkUm93U3RhcnQiOjYsImdyaWRSb3dFbmQiOjcsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfV0='
  },
  {
    id: 2,
    style:
      'W3siaWQiOjEsIndpZHRoIjozLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6NCwiZ3JpZFJvd1N0YXJ0IjoxLCJncmlkUm93RW5kIjoyLCJjYW5Ecm9wIjowLCJlbXB0eSI6dHJ1ZX0seyJpZCI6NCwid2lkdGgiOjEsImhlaWdodCI6MiwiZ3JpZENvbHVtblN0YXJ0IjoxLCJncmlkQ29sdW1uRW5kIjoyLCJncmlkUm93U3RhcnQiOjIsImdyaWRSb3dFbmQiOjQsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfSx7ImlkIjo1LCJ3aWR0aCI6MiwiaGVpZ2h0IjoyLCJncmlkQ29sdW1uU3RhcnQiOjIsImdyaWRDb2x1bW5FbmQiOjQsImdyaWRSb3dTdGFydCI6MiwiZ3JpZFJvd0VuZCI6NCwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWV9LHsiaWQiOiIxNTg0MDg0NDkwODI0NTYwIiwid2lkdGgiOjMsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjoxLCJncmlkQ29sdW1uRW5kIjo0LCJncmlkUm93U3RhcnQiOjQsImdyaWRSb3dFbmQiOjUsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfV0='
  },
  {
    id: 3,
    style:
      'W3siaWQiOjEsIndpZHRoIjoxLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6MiwiZ3JpZFJvd1N0YXJ0IjoxLCJncmlkUm93RW5kIjoyLCJjYW5Ecm9wIjowLCJlbXB0eSI6dHJ1ZX0seyJpZCI6Miwid2lkdGgiOjEsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjoyLCJncmlkQ29sdW1uRW5kIjozLCJncmlkUm93U3RhcnQiOjEsImdyaWRSb3dFbmQiOjIsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfSx7ImlkIjozLCJ3aWR0aCI6MSwiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjMsImdyaWRDb2x1bW5FbmQiOjQsImdyaWRSb3dTdGFydCI6MSwiZ3JpZFJvd0VuZCI6MiwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWV9LHsiaWQiOjQsIndpZHRoIjoxLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6MiwiZ3JpZFJvd1N0YXJ0IjoyLCJncmlkUm93RW5kIjozLCJjYW5Ecm9wIjowLCJlbXB0eSI6dHJ1ZX0seyJpZCI6NSwid2lkdGgiOjEsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjoyLCJncmlkQ29sdW1uRW5kIjozLCJncmlkUm93U3RhcnQiOjIsImdyaWRSb3dFbmQiOjMsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfSx7ImlkIjo2LCJ3aWR0aCI6MSwiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjMsImdyaWRDb2x1bW5FbmQiOjQsImdyaWRSb3dTdGFydCI6MiwiZ3JpZFJvd0VuZCI6MywiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWV9LHsiaWQiOjcsIndpZHRoIjoxLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6MiwiZ3JpZFJvd1N0YXJ0IjozLCJncmlkUm93RW5kIjo0LCJjYW5Ecm9wIjowLCJlbXB0eSI6dHJ1ZX0seyJpZCI6OCwid2lkdGgiOjEsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjoyLCJncmlkQ29sdW1uRW5kIjozLCJncmlkUm93U3RhcnQiOjMsImdyaWRSb3dFbmQiOjQsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfSx7ImlkIjo5LCJ3aWR0aCI6MSwiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjMsImdyaWRDb2x1bW5FbmQiOjQsImdyaWRSb3dTdGFydCI6MywiZ3JpZFJvd0VuZCI6NCwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWV9XQ=='
  },
  {
    id: 4,
    style:
      'W3siaWQiOjEsIndpZHRoIjoxLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MSwiZ3JpZENvbHVtbkVuZCI6MiwiZ3JpZFJvd1N0YXJ0IjoxLCJncmlkUm93RW5kIjoyLCJjYW5Ecm9wIjowLCJlbXB0eSI6dHJ1ZX0seyJpZCI6Miwid2lkdGgiOjIsImhlaWdodCI6MSwiZ3JpZENvbHVtblN0YXJ0IjoyLCJncmlkQ29sdW1uRW5kIjo0LCJncmlkUm93U3RhcnQiOjEsImdyaWRSb3dFbmQiOjIsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfSx7ImlkIjo0LCJ3aWR0aCI6MSwiaGVpZ2h0IjoyLCJncmlkQ29sdW1uU3RhcnQiOjEsImdyaWRDb2x1bW5FbmQiOjIsImdyaWRSb3dTdGFydCI6MiwiZ3JpZFJvd0VuZCI6NCwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWV9LHsiaWQiOjUsIndpZHRoIjoxLCJoZWlnaHQiOjEsImdyaWRDb2x1bW5TdGFydCI6MiwiZ3JpZENvbHVtbkVuZCI6MywiZ3JpZFJvd1N0YXJ0IjoyLCJncmlkUm93RW5kIjozLCJjYW5Ecm9wIjowLCJlbXB0eSI6dHJ1ZX0seyJpZCI6Niwid2lkdGgiOjEsImhlaWdodCI6MiwiZ3JpZENvbHVtblN0YXJ0IjozLCJncmlkQ29sdW1uRW5kIjo0LCJncmlkUm93U3RhcnQiOjIsImdyaWRSb3dFbmQiOjQsImNhbkRyb3AiOjAsImVtcHR5Ijp0cnVlfSx7ImlkIjo4LCJ3aWR0aCI6MSwiaGVpZ2h0IjoxLCJncmlkQ29sdW1uU3RhcnQiOjIsImdyaWRDb2x1bW5FbmQiOjMsImdyaWRSb3dTdGFydCI6MywiZ3JpZFJvd0VuZCI6NCwiY2FuRHJvcCI6MCwiZW1wdHkiOnRydWV9XQ=='
  }
];

export default {
  'get|/page-management/page-template/list': () => {
    return {
      status: 200,
      message: 'success',
      data: {
        rows: templateList,
        total: templateList.length
      }
    };
  },
  'post|/page-management/page-template/delete': () => {
    return {
      status: 200,
      message: 'success'
    };
  },
  'post|/page-management/page-template/edit': () => {
    return {
      status: 200,
      message: 'success'
    };
  },
  'post|/page-management/page-template/release': () => {
    return {
      status: 200,
      message: 'success'
    };
  },
  'post|/page-management/page-template/addLayout': () => {
    return {
      status: 200,
      message: 'success'
    };
  },
  'post|/page-management/page-template/deleteLayout': () => {
    return {
      status: 200,
      message: 'success'
    };
  },
  'get|/page-management/page-template/layoutList': () => {
    return {
      status: 200,
      message: 'success',
      data: layoutList
    };
  }
};
