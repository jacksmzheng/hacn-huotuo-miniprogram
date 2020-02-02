/*
 * COPYRIGHT. HSBC HOLDINGS PLC 2019. ALL RIGHTS RESERVED.
 *
 * This software is only to be used for the purpose for which it has been
 * provided. No part fo it is to be reproduced, disassembled, transmitted,
 * stored in retrieval system nor translated in any human or computer
 * language in any way or for any other purposes whatever without the prior
 * written consent of HSBC Holdings plc.
 */
Component({
  properties: {
    obj: {
      type: Object,
      value: {
        show: {
          type: Boolean,
          value: false,
        },
        title: {
          type: String,
          value: '',
        },
        content: {
          type: String,
          value: '',
        },
        confirmtext: {
          type: String,
          value: '',
        },
        canceltext: {
          type: String,
          value: '',
        }
      }
    }
  },
  data: {
  },
  methods: {
    confirm: function () {
      const obj = this.data.obj
      obj.show = false
      this.setData({obj});
      this.triggerEvent('confirm');
    },
    cancel: function () {
      const obj = this.data.obj
      obj.show = false
      this.setData({ obj });
      this.triggerEvent('cancel');
    }
  }
})