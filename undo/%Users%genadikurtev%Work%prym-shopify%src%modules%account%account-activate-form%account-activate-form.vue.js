Vim�UnDo� ��y��|R��O�[��<c ]���m��!�V/                                     `�)    _�                            ����                                                                                                                                                                                                                                                                                                                                                             `��     �      	   	        mixins: [validate]5�_�                          ����                                                                                                                                                                                                                                                                                                                                                  v       `��     �         
        �   	   
   
    �      
   	    5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                 v       `��    �               
  data() {       return {}     },     mixins: [validate],     methods: {       submitForm(e) {   6      const isValid = this.validateAndDisplayErrors(e)             if (!isValid) {           e.preventDefault()         }       }     },�                 data () {       return {}     },     mixins: [validate],     methods: {       submitForm (e) {�      
              methods: {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        `�&     �                   �               �                 import Vue from 'vue'   &import validate from 'mixins/validate'       %Vue.component('account-reset-form', {     data () {       return {}     },     mixins: [validate],     methods: {       submitForm (e) {   6      const isValid = this.validateAndDisplayErrors(e)             if (!isValid) {           e.preventDefault()         }       }     }       })5�_�                             ����                                                                                                                                                                                                                                                                                                                                                V        `�(    �               
  data() {       return {}     },   %  mixins: [validate, passwordsCheck],     methods: {       submitForm(e) {�                 data () {       return {}     },   %  mixins: [validate, passwordsCheck],     methods: {       submitForm (e) {5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             `��     �      	   	        mixins: [validate],    5�_�                     	        ����                                                                                                                                                                                                                                                                                                                            	           	           v       `��     �                    })5��