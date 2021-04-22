<template>
  <div class="method">
    <div class="topBar">
      <h3>Remote Method</h3>
      <Pencil
        v-if="methodView"
        @click="
          toggle('methodView', 'methodEdit')
          methodView = !methodView
        "
      />
      <Send
        title="Submit Change"
        v-else
        @click="
          toggle('methodView', 'methodEdit')
          methodView = !methodView
        "
      />
      <!-- <toggle view="view" v-on:toggle="view = " /> -->
    </div>
    <div class="methodInfo methodView" style="display: block">
      <div>
        method: <span>{{ customer.methodInfo.methodName }}</span>
      </div>
      <div>
        username: <span>{{ customer.methodInfo.username }}</span>
      </div>
      <div>
        password: <span>{{ customer.methodInfo.password }}</span>
      </div>
      <div>
        url: <span>{{ customer.methodInfo.url }}</span>
      </div>
      <div>
        notes: <span>{{ customer.methodInfo.notes }}</span>
      </div>
    </div>

    <div class="methodInfo methodEdit" style="display: none">
      <div>
        method2: <span>{{ customer.methodInfo.methodName }}</span>
      </div>
      <div>
        username: <span>{{ customer.methodInfo.username }}</span>
      </div>
      <div>
        password: <span>{{ customer.methodInfo.password }}</span>
      </div>
      <div>
        url: <span>{{ customer.methodInfo.url }}</span>
      </div>
      <div>
        notes: <span>{{ customer.methodInfo.notes }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
}
</script>

<style></style>
