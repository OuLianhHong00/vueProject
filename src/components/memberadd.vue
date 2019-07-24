<template>
    <div class="memberadd_content">
        <div class="inputmember">
           <h1>成员管理页面</h1>
        </div>
        <div class="studentdata">
    <Grid ref="grid"
          :style="{height: '440px'}"
          :data-items="gridData"
          :edit-field="'inEdit'"
          @edit="edit"
          @remove="remove"
          @save="save"
          @cancel="cancel"
          @itemchange="itemChange"
          :columns="columns">
        <GridToolbar>
            <button title="Add new"
                    class="k-button k-primary"
                    @click='insert'>
                添加
            </button>
            <button v-if="hasItemsInEdit"
                    title="Cancel current changes"
                    class="k-button"
                    @click="cancelChanges">
                取消
            </button>
        </GridToolbar>
        <GridNoRecords>
            暂无数据
        </GridNoRecords>
    </Grid>
        </div>
    </div>
</template>
<script>
import DropDownCell from './editgrid/dropdowncell.vue'
import CommandCell from './editgrid/commandcell.vue'

var sampleProducts=[{
    "studentId":1,
    "sName":'chia',
    "sGrade":'2019级',
    'sClass':'1606',
    'sProject':'软件工程'
},{
     "studentId":2,
    "sName":'chia',
    "sGrade":'2019级',
    'sClass':'1606',
    'sProject':'软件工程'
},{
     "studentId":3,
    "sName":'chia',
    "sGrade":'2019级',
    'sClass':'1606',
    'sProject':'软件工程'
},{
     "studentId":4,
    "sName":'chia',
    "sGrade":'2019级',
    'sClass':'1606',
    'sProject':'软件工程'
}]

export default {
    components: {
        DropDownCell,
        CommandCell
     },
     data: function () {
        return {
            gridData: sampleProducts.slice(0),
            updatedData: [],
            editID: null,
            group: [ { field: 'UnitsInStock' } ],
            expandedItems: [],
            columns: [
                { field: 'studentId', editable: false, title: 'ID', width: '50px' },
                { field: 'sName', title: '姓名' },
                { field: 'sGrade', title: '年级' },
                { field: 'sClass', title: '班级'},
                { field: 'sProject', title: '专业'},
                { cell: CommandCell, width: '180px' }
            ]
        };
    },
    computed: {
        hasItemsInEdit() {
            return this.gridData.filter(p => p.inEdit).length > 0;
        }
    },
    mounted () {
      this.updatedData = JSON.parse(JSON.stringify(this.gridData));
    },
    methods: {
        itemChange: function (e) {
           if (e.dataItem.studentId) {
              let item = this.gridData.find(p => p.studentId === e.dataItem.studentId);
              let index = this.gridData.findIndex(p => p.studentId === item.studentId);
              this.$set(item, e.field, e.value);
            } else {
              this.$set(e.dataItem, e.field, e.value);
            }
        },
        insert() {
            const dataItem = { inEdit: true};
            const newproducts = this.gridData.slice();
            newproducts.unshift(dataItem);
            this.$set(this, "gridData", newproducts);
        },
        edit: function (e) {
            this.$set(e.dataItem, 'inEdit', true);
        },
        save: function(e) {
            this.$set(e.dataItem, 'inEdit', undefined);
            let item = this.gridData.find(p => p.studentId === e.dataItem.studentId);
            let index = this.gridData.findIndex(p => p.studentId === item.studentId);

             this.$set(this.gridData, index, this.update(this.gridData.slice(), item));
             this.$set(this.gridData[index], 'inEdit', undefined);
            this.updatedData = JSON.parse(JSON.stringify(this.gridData));
        },
        update(data, item, remove) {
            let updated;
            let index = data.findIndex(p => item.studentId && p.studentId=== item.studentId);
            if (index >= 0) {
                updated = Object.assign({}, item);
                data[index] = updated;
            } else {
                let id = 1;
                data.forEach(p => { if (p.studentId) { id = Math.max(p.studentId + 1, id); } });
                updated = Object.assign({}, item, { studentId: id });
                data.unshift(updated);
                index = 0;
            }

            if (remove) {
                data = data.splice(index, 1);
            }
            return data[index];
        },
        cancel(e) {
            // if (e.dataItem.studentId) {
            //     let originalItem = this.updatedData.find(p => p.studentId === e.dataItem.studentId);
            //     let index = this.updatedData.findIndex(p => p.studentId === originalItem.studentId);

            //      //this.$set(originalItem, 'inEdit', undefined);
            //      this.$set(e.dataItem,'inEdit',undefined)
            //     //this.$set(this.gridData, index, originalItem);
            // } else {
            //     this.update(this.gridData, e.dataItem, true);
            // }
             let editedItems = this.updatedData.filter(p => p.inEdit === true);
             if(editedItems.length){
                editedItems.forEach(
                    item => {
                       Vue.set(item, 'inEdit', undefined);
                     });
             }
            this.$set(this, 'gridData', this.updatedData.slice());
    
        },
        remove(e) {
            e.dataItem.inEdit = undefined;
            this.update(this.gridData, e.dataItem, true);
            this.update(this.updatedData, e.dataItem, true);
            this.gridData = this.gridData.slice();
        },
        cancelChanges () {
             let editedItems = this.updatedData.filter(p => p.inEdit === true);
             if(editedItems.length){
                editedItems.forEach(
                    item => {
                       Vue.set(item, 'inEdit', undefined);
                     });
             }
            this.$set(this, 'gridData', this.updatedData.slice());
        }
}
}
</script>
