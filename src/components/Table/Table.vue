<template>
  <table>
    <thead>
      <tr>
        <th v-for="item in columns" :key="item.key">{{item.title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in dataSouce" :key="record.key">
        <renderTd
          v-for="index in columns.length" :key="index"
          :value="record[columns[index - 1].dataIndex]"
          :vnode="columns[index - 1].render && columns[index - 1].render(record)"
        />
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
  table {
    border-spacing: 0;
  }
  thead {
    tr {
      background-color: #f8f8f8;
    }
  }
  tr {
    word-break: break-all;
  }
  th, td {
    padding: 16px 16px;
    border-bottom: 1px solid #e8e8e8;
  }
</style>

<script>
// h是createElement的别称
let renderTd = {
  props: ['vnode', 'value'],
  render: function (h) {
    let node = this.vnode
    console.log(node)
    if (this.value) {
      node = h('span', this.value)
    }
    return h(
      'td', // tag name 标签名称
      [node]
    )
  }
}

let btn = {
  props: ['btnClick'],
  render: h => h('span', {
    on: {
      click: this.btnClick
    }
  }, '修改')
}

export default {
  name: 'Table',
  // props: ['dataSouce'],
  data () {
    return {
      columns: [{
        title: '收货人',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '所在地区',
        dataIndex: 'location',
        key: 'location'
      }, {
        title: '详细地址',
        dataIndex: 'address',
        key: 'address'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '操作',
        render: (record) => {
          return (
            <div><span style="cursor: pointer;">修改</span> | <span style="cursor: pointer;">删除</span></div>
          )
        }
      }],
      dataSouce: [{
        name: '徐晓丽',
        location: '浙江省 绍兴市 绍兴县 柯桥街道',
        address: '柯华路958号浙江工业大学之江学院',
        phone: '15726940632',
        key: '1'
      }],
      keyList: [],
      dataList: []
    }
  },
  methods: {
    onclick: function () {
      console.log(111)
    }
  },
  components: {
    renderTd,
    btn
  }
}
</script>
