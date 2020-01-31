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
    status:{
      type: String,
      value: '0'
    },
    obj: {
      type: Object,
      value: {
        hasLabel: {
          type: Boolean,
          value: true,
        },
        hideLabel: {
          type: Boolean,
          value: false,
        },
        isMandatory: {
          type: Boolean,
          value: false,
        },
        isCRSRelated: {
          type: Boolean,
          value: false,
        },
        isDisabled: {
          type: Boolean,
          value: false,
        },
        hasWarning: {
          type: Boolean,
          value: false
        },
        label: {
          type: String,
          value: '',
        },
        eg: {
          type: String,
          value: '',
        },
        placeholder: {
          type: String,
          value: '',
        },
        desc: {
          type: String,
          value: '',
        },
        content: {
          type: String,
          value: '',
        },
        warningLabel: {
          type: String,
          value: '',
        },
        num: {
          type: String,
          value: '0',
        },
        maxlength: {
          type: String,
          value: '200',
        },
        type: {
          type: String,
          value: '',
        },
        bindInputName: {
          type: String,
          value: 'inputEvent',
        }
      }
    }
  },
  data: {
    someData: {}
  },
  methods: {
    focus: function (e) {
      this.setData({status: '1'})
    },
    blur: function (e) {
      this.setData({status: '0'})
    },
    inputEvent: function (e) {
      this.triggerEvent(this.data.obj.bindInputName, { e: e })
    }
  }
})