<template>
  <div>
    <BlitzTable
      selection="multiple"
      :selected.sync="selectionArray"
      :actionButtons="actionButtons"
      :schemaColumns="schemaColumns"
      :schemaGrid="schemaColumns"
      :rows="rows"
      title="Users"
      flat
      bordered
    />
  </div>
</template>

<style lang="sass" scoped></style>

<script>
import { BlitzTable } from 'blitzar'
import { showToast } from '../../helpers/toast'

const rows = [
  { nameFirst: 'Eleanor', nameLast: 'Shellstrop', id: 'tpmf4QaahR' },
  { nameFirst: 'Chidi', nameLast: 'Anagonye', id: 'ZhTgi3CwSJ' },
  { nameFirst: 'Jason', nameLast: 'Mendoza', id: '4YkCj0Wvwm' },
  { nameFirst: 'Tahani', nameLast: 'Al-Jamil', id: 'bODyLeO09E' },
  { nameFirst: 'Janet', nameLast: 'Della-Denunzio', id: 'YWk5iGDy3w' },
  { nameFirst: 'Michael', nameLast: 'Of the bad place', id: 'IE4abcXG3F' },
  { nameFirst: 'Shawn', nameLast: 'Of the bad place', id: 'c8IMz0ZEgs' },
  { nameFirst: 'Simone', nameLast: 'Garnett', id: 'DcgViFmNKA' },
  { nameFirst: 'Derek', nameLast: 'Hofstetler', id: 'Cf2Vx66ygY' },
  { nameFirst: 'John', nameLast: 'Wheaton', id: 'zWLyWRnSN5' },
  { nameFirst: 'Brent', nameLast: 'Norwalk', id: 'WiglplOrzO' },
  { nameFirst: 'Mindy', nameLast: 'St. Claire', id: 'ZmN7I1rUv7' },
]

const schemaColumns = [
  { id: 'nameFirst', label: 'First Name', component: 'input' },
  { id: 'nameLast', label: 'Last Name', component: 'input' },
]

/**
# Selection

By default selection is implemented for both table and grid view. Play around with the example below to see how it works.

Please note that every row NEEDS an 'id' prop in order for it to work.
 */
export default {
  components: { BlitzTable },
  data() {
    return { rows, schemaColumns, selectionArray: [] }
  },
  computed: {
    showSelectedStudentsButton() {
      const { selectionArray } = this
      return {
        component: 'button',
        slot: 'log selected students',
        showCondition: !!selectionArray.length,
        events: {
          click: () => {
            showToast('selected students:', selectionArray)
            console.log(`selectionArray → `, selectionArray)
          },
        },
      }
    },
    actionButtons() {
      return ['grid', this.showSelectedStudentsButton]
    },
  },
}
</script>
