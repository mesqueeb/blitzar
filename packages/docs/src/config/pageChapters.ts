import { ROUTE_NAMES } from '../router/routes'

export const routeNamePageChaptersMap: { [key in ROUTE_NAMES]: string[] } = {
  [ROUTE_NAMES.FORM]: [
    'Basics.vue',
    'Frameworks.md',
    'Quasar Framework.vue',
    'Slots.vue',
    'Slots - 2.vue',
    'Modes.vue',
    'Action Buttons.vue',
    'Styling via CSS.vue',
    'Events.vue',
    'Events - 2.vue',
    'Events - 3.vue',
    'Nested Data.vue',
    'Evaluated Props.vue',
    'Evaluated Props - 2.vue',
    'Evaluated Props - 3.vue',
    'Evaluated Props - 4.vue',
    'Evaluated Props - 5.vue',
    'Computed Fields.vue',
    'Computed Fields - 2.vue',
    'Computed Fields - 3.vue',
    'Validation.vue',
    'Validation - 2.vue',
  ],
  [ROUTE_NAMES.TABLE]: [
    'Basics.vue',
    'Advanced.vue',
    'Computed Columns.vue',
    'Selection.vue',
    'Slots.vue',
    'Edit on Button Click.vue',
    'Edit on Row Click.vue',
    'Styling via CSS.vue',
  ],
}
