<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
  </FormProvider>
</template>

<script>
  import { Input, InputNumber } from 'ui-lib'
  import { createForm } from '@formily/core'
  import { FormProvider, createSchemaField } from '@formily/vue'

  const { SchemaField } = createSchemaField({
    components: {
      Input,
      InputNumber,
    },
  })

  export default {
    components: { FormProvider, SchemaField },
    data() {
      return {
        form: createForm(),
        schema: {
          type: 'object',
          properties: {
            input: {
              type: 'string',
              'x-component': 'Input',
              'x-component-props': {
                placeholder: '请输入',
              },
            },
            input2: {
              type: 'string',
              'x-component': 'InputNumber',
              'x-component-props': {
                placeholder: '请输入',
              },
            },
          },
        },
      }
    },
  }
</script>