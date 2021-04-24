
<template>

    <v-row>
    </v-row>

</template>


<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'test-component',
  components: {
  }
})
export default class CMethod extends Vue {
  @Prop({required: false, type: Boolean, default: false})
  public autoReloadModel!: boolean;
}

</script>
