<template>
  <div class="example-selection-styling">
    <BlitzTable
      selection="multiple"
      :selectionComponentProps="selectionComponentProps"
      :schemaColumns="schemaColumns"
      :schemaGrid="schemaColumns"
      :rows="rows"
      title="Users"
      flat
      bordered
    />
  </div>
</template>

<style lang="sass">
.example-selection-styling
  .table-checkbox
    cursor: pointer
</style>

<script>
import { BlitzTable } from 'blitzar'
import Vue from 'vue'

Vue.component('MyCheckbox', {
  props: { value: Boolean },
  render(h) {
    const toggle = () => this.$emit('input', !this.value)
    return h('div', { on: { click: toggle } }, this.value ? '✅' : '[　]')
  },
})

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
## Styling Selection

You can pass a custom checkbox component via `selectionComponentProps`, an object that represents a BlitzForm blueprint. Just like you would use in a schema. Eg.:

```html
<BlitzTable
  :selectionComponentProps="{ component: 'MyCheckbox', class: 'table-checkbox' }"
/>
```

The CSS for the selected rows or grid-items can also be overwritten by targeting these classes:
- `.blitz-table__row.selected`
- `.blitz-table__grid-item.selected`
 */
export default {
  components: { BlitzTable },
  data() {
    const selectionComponentProps = { component: 'MyCheckbox', class: 'table-checkbox' }
    return { rows, schemaColumns, selectionComponentProps }
  },
}
</script>
