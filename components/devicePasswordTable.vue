<template>
  <div class="devicePassword">
    <div class="topBar">
      <h3>Device Password</h3>
    </div>

    <div class="table">
      <div class="tableHeader">
        <div class="tableDeviceMake">Make</div>
        <div class="tableDeviceUsername">Username</div>
        <div class="tableDevicePassword">Password</div>
      </div>
      <div
        v-for="(d, i) in customer.devicePassword"
        class="tableContent"
        :key="i"
      >
        <div class="">
          <input
            class="view-make"
            type="text"
            :value="d.make"
            readonly
            :ref="`view-device-make-${customer._id}-${i + 1}`"
            :id="`view-device-make-${customer._id}-${i + 1}`"
            @dblclick="
              show(
                `edit-device-make-${customer._id}-${i + 1}`,
                `view-device-make-${customer._id}-${i + 1}`
              )
            "
          />
          <input
            class="edit-make"
            type="text"
            :value="d.make"
            :ref="`edit-device-make-${customer._id}-${i + 1}`"
            :id="`edit-device-make-${customer._id}-${i + 1}`"
            @blur="
              updateDeviceMake(
                `edit-device-make-${customer._id}-${i + 1}`,
                `view-device-make-${customer._id}-${i + 1}`,
                `${d._id}`
              )
            "
          />
        </div>
        <div class="">
          <input
            class="view-username"
            type="text"
            :value="d.username"
            readonly
            :ref="`view-device-username-${customer._id}-${i + 1}`"
            :id="`view-device-username-${customer._id}-${i + 1}`"
            @dblclick="
              show(
                `edit-device-username-${customer._id}-${i + 1}`,
                `view-device-username-${customer._id}-${i + 1}`
              )
            "
          />
          <input
            class="edit-username"
            type="text"
            :value="d.username"
            :ref="`edit-device-username-${customer._id}-${i + 1}`"
            :id="`edit-device-username-${customer._id}-${i + 1}`"
            @blur="
              updateDeviceUsername(
                `edit-device-username-${customer._id}-${i + 1}`,
                `view-device-username-${customer._id}-${i + 1}`,
                `${d._id}`
              )
            "
          />
        </div>
        <div>
          <div class="view-password">
            <input
              class=""
              type="text"
              :value="d.password"
              readonly
              :ref="`view-device-password-${customer._id}-${i + 1}`"
              :id="`view-device-password-${customer._id}-${i + 1}`"
              @dblclick="
                show(
                  `edit-device-password-${customer._id}-${i + 1}`,
                  `view-device-password-${customer._id}-${i + 1}`
                )
              "
            />
            <ContentCopy
              :size="size"
              title="Click to copy"
              @click="copy('view-device-pass', customer._id, `${i + 1}`)"
            />
            <Pencil
              :size="size"
              title="Click to copy"
              @click="copy('view-device-pass', customer._id, `${i + 1}`)"
            />
          </div>
          <div class="edit-password">
            <input
              class="edit-password"
              type="text"
              :value="d.password"
              :ref="`edit-device-password-${customer._id}-${i + 1}`"
              :id="`edit-device-password-${customer._id}-${i + 1}`"
              @blur="
                updateDevicePassword(
                  `edit-device-password-${customer._id}-${i + 1}`,
                  `view-device-password-${customer._id}-${i + 1}`,
                  `${d._id}`
                )
              "
            />
            <CloseCircle
              :size="size"
              title="Click to copy"
              @click="copy('view-device-pass', customer._id, `${i + 1}`)"
            />
            <Send
              :size="size"
              title="Click to copy"
              @click="copy('view-device-pass', customer._id, `${i + 1}`)"
            />
          </div>
        </div>
      </div>
    </div>

    <dl class="devicePassword" style="display: block">
      <dd v-for="(d, i) in customer.devicePassword" :key="i">
        <div>
          <span> make: </span>
          <div>
            <input
              type="text"
              :value="d.make"
              readonly
              :ref="`view-device-make-${customer._id}-${i + 1}`"
            />
            <input
              class="edit-pass"
              type="text"
              :value="d.make"
              readonly
              :ref="`view-device-make-${customer._id}-${i + 1}`"
            />
          </div>
        </div>
        <div>
          <span> password: </span>
          <div>
            <input
              type="text"
              :value="d.password"
              readonly
              :ref="`view-device-password-${customer._id}-${i + 1}`"
              :id="`view-device-password-${customer._id}-${i + 1}`"
              @dblclick="
                show(
                  `edit-device-password-${customer._id}-${i + 1}`,
                  `view-device-password-${customer._id}-${i + 1}`
                )
              "
            />
            <input
              class="edit-pass"
              type="text"
              :value="d.password"
              :ref="`edit-device-password-${customer._id}-${i + 1}`"
              :id="`edit-device-password-${customer._id}-${i + 1}`"
              @blur="
                hide(
                  `edit-device-password-${customer._id}-${i + 1}`,
                  `view-device-password-${customer._id}-${i + 1}`,
                  `${d._id}`
                )
              "
            />
            <ContentCopy
              :size="size"
              title="Click to copy"
              @click="copy('view-device-pass', customer._id, `${i + 1}`)"
            />
          </div>
        </div>
      </dd>
    </dl>

    <dl class="devicePassword" style="display: none">
      <dd v-for="(d, i) in customer.devicePassword" :key="i">
        <div>
          make:
          <span
            ><input
              type="text"
              :value="d.make"
              :ref="`edit-device-make-${customer._id}-${i + 1}`"
          /></span>
        </div>
        <div>
          password:
          <span
            ><input
              type="text"
              :value="d.password"
              :ref="`edit-device-pass-${customer._id}-${i + 1}`"
            />
          </span>
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
