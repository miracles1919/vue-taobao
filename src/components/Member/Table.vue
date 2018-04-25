<template>
  <table style="width: 100%;">
    <thead>
      <tr>
        <th v-for="item in columns" :key="item.key">{{item.title}}</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(record, i) in data" :key="record.key">
        <renderTd
          v-for="index in columns.length" :key="index"
          :value="record[columns[index - 1].dataIndex]"
          :vnode="columns[index - 1].render && columns[index - 1].render(record)"
          :click="columns[index - 1].click && columns[index - 1].click.bind(this, index)"
          :index="index"
        />
        <td>
          <span style="cursor: pointer;">修改</span>
          |
          <span style="cursor: pointer;" @click="del(i)">删除</span>
        </td>
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
  props: ['vnode', 'value', 'click', 'index'],
  render: function (h) {
    let node = this.vnode
    if (this.value) {
      node = h('span', this.value)
    }
    return h(
      'td', // tag name 标签名称
      [node]
    )
  }
}

export default {
  name: 'Table',
  props: ['data'],
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
      }]
    }
  },
  methods: {
    del: function (index) {
      this.$emit('del', index)
    }
  },
  components: {
    renderTd
  }
}
</script>
