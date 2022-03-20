<template>
  <div class="serverList">
    <div class="topBar">
      <h3>Servers</h3>
      <Pencil
        v-if="serverListView"
        @click="
          toggle('serverView', 'serverEdit')
          serverListView = !serverListView
        "
      />
      <div v-else>
        <CloseCircle
          title="Abort Changes"
          @click="
            toggle('serverView', 'serverEdit')
            serverListView = !serverListView
          "
        />
        <SendIcon
          title="Submit Change"
          @click="
            toggle('serverView', 'serverEdit')
            serverListView = !serverListView
            updateDevicePassword()
          "
        />
      </div>
    </div>
    <dl class="serverView" style="display: block">
      <dd v-for="(d, i) in customer.serverInfo" :key="i">
        <div>
          name: <span>{{ d.name }}</span>
        </div>
        <div>
          IP: <span>{{ d.ip }}</span>
        </div>
        <div>
          username: <span>{{ d.username }}</span>
        </div>
        <div>
          password:
          <span
            ><input
              type="text"
              :value="d.password"
              readonly
              :ref="`view-server-pass-${customer._id}-${i + 1}`" />
            <ContentCopy
              :size="size"
              title="Click to copy"
              @click="copy('view-server-pass', customer._id, `${i + 1}`)"
          /></span>
        </div>
      </dd>
    </dl>

    <dl class="serverEdit" style="display: none">
      <dd v-for="(d, i) in customer.serverInfo" :key="i">
        <div>
          mm name: <span>{{ d.name }}</span>
        </div>
        <div>
          IP: <span>{{ d.ip }}</span>
        </div>
        <div>
          username: <span>{{ d.username }}</span>
        </div>
        <div>
          password:
          <span
            ><input
              type="text"
              :value="d.password"
              readonly
              :ref="`edit-server-pass-${customer._id}-${i + 1}`" />
            <ContentCopy
              :size="size"
              title="Click to copy"
              @click="copy('edit-server-pass', customer._id, `${i + 1}`)"
          /></span>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import myMixins from '~/assets/mixins'
export default {
  mixins: [myMixins],
}
</script>
