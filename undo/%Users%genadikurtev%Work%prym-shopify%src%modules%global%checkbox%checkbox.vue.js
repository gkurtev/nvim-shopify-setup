Vim�UnDo� Mm�o&�:��<��C\	q!l���A���nŞ�   O                                  `l]�    _�                             ����                                                                                                                                                                                                                                                                                                                                       Q           V        `l]�     �                   �               �              Q   import Vue from 'vue'       Vue.component('checkbox', {   
  props: {       name: String,       label: String,       value: String,       modifier: {         type: String,         default: 'default'       },       checkedString: String,       checkedBool: Boolean,       required: Boolean     },     data () {       const data = {         isValid: true,         inputValue: false,         isChecked: false,   %      publicValue: this.value || true       }   1    if (this.checkedString || this.checkedBool) {         data.isChecked = true       }       return data     },   
  watch: {       checked () {   #      this.isChecked = this.checked       },       checkedBool (value) {         this.isChecked = value       }     },     methods: {       validateInput () {         this.isValid = (           !this.required ||   )        (this.required && this.isChecked)         )         return this.isValid       },       onChange () {   &      this.isChecked = !this.isChecked         if (this.isChecked) {   *        this.inputValue = this.publicValue         } else {           this.inputValue = false         }         this.$emit('change', {           name: this.name,           value: this.inputValue         })       }     },     template: `   9  <div class="checkbox" :class="['checkbox--'+modifier]">   #    <div class="checkbox__wrapper">   q      <label class="checkbox__label" tabindex="0" :class="[isChecked?'is-active':'', !isValid ? 'is-error': '']">   $        <div class="checkbox__icon">             <input   %            class="checkbox__icon-el"               type="checkbox"               :name="name"               :value="value"                :checked="isChecked"   !            @change="onChange" />   A            <svg class="checkbox__icon-tick" viewBox="0 0 20 20">   l              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-checkbox" x="0" y="0"></use>               </svg>   N            <svg class="checkbox__icon-loading" viewBox="0 0 456.817 456.817">   k              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-loading" x="0" y="0"></use>               </svg>             </div>   &          <span v-html="label"></span>         </label>   
    </div>     </div>     `   })5�_�                             ����                                                                                                                                                                                                                                                                                                                                      O          V        `l]�    �      -   O      
  data() {       const data = {         isValid: true,         inputValue: false,         isChecked: false,   %      publicValue: this.value || true       }   1    if (this.checkedString || this.checkedBool) {         data.isChecked = true       }       return data     },   
  watch: {       checked() {   #      this.isChecked = this.checked       },       checkedBool(value) {         this.isChecked = value       }     },     methods: {       validateInput() {         this.isValid = (           !this.required ||   )        (this.required && this.isChecked)         )         return this.isValid       },       onChange() {�      -   O        data () {       const data = {         isValid: true,         inputValue: false,         isChecked: false,   %      publicValue: this.value || true       }   1    if (this.checkedString || this.checkedBool) {         data.isChecked = true       }       return data     },   
  watch: {       checked () {   #      this.isChecked = this.checked       },       checkedBool (value) {         this.isChecked = value       }     },     methods: {       validateInput () {         this.isValid = (           !this.required ||   )        (this.required && this.isChecked)         )         return this.isValid       },       onChange () {5��