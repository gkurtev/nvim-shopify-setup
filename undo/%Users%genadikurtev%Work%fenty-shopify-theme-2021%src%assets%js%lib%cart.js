Vim�UnDo� �+}�o�@�,�]���O˖m���G�f$�)�   \                                   `S�4    _�                            ����                                                                                                    
                                                                                                                                                                                                                                                        `S�4     �         \       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                            `S�4     �         ]          zavisim5�_�                             ����                                                                                                                                                                                                                                                                                                                                                v       `S�M     �                asdads5�_�                     	        ����                                                                                                                                                                                                                                                                                                                                                             `S��    �       ]       g    import nanoajax from "nanoajax";       /**   1 * Here, we provide an easy to use, Promise-based   4 * interface for communicating with the Shopify Cart    * API.    *    * Examples:    * import cart from 'lib/cart'    *    * cart   
 *  .get()    *  .then(data => {    *    console.log(data)    *  })    *    * cart   & *  .add({id: variantID, quantity: 1})    *  .then(data => {    *    console.log(data)    *  })    *    * cart   ) *  .update({id: variantID, quantity: 1})    *  .then(data => {    *    console.log(data)    *  })    */   class Cart {   	  get() {   %    return new Promise((resolve) => {         nanoajax.ajax(   	        {             url: "/cart.js",             method: "get",   
        },   *        (code, responseText, request) => {   0          const cart = JSON.parse(responseText);             resolve(cart);   	        }         );       });     }       D  generateShopifyCartBody(mode, { id, quantity, properties = {} }) {   )    const props = Object.keys(properties)         .reduce((arr, key) => {   :        arr.push(`properties[${key}]=${properties[key]}`);           return arr;         }, [])         .join("&");       if (mode === "add") {   H      return `quantity=${quantity}&id=${id}${props ? "&" + props : ""}`;       } else {   E      return `updates[${id}]=${quantity}${props ? "&" + props : ""}`;       }     }         update(data) {   -    return new Promise((resolve, reject) => {         nanoajax.ajax(   	        {   !          url: "/cart/update.js",             method: "post",   =          body: this.generateShopifyCartBody("update", data),   
        },   *        (code, responseText, request) => {   0          const cart = JSON.parse(responseText);   %          if (Number(code) !== 200) {   -            cart.errors = [cart.description];             }             resolve(cart);   	        }         );       });     }         /**   '   * Adds a product to the Shopify cart      *   8   * @param {Object} data {id: <id>, quantity: <Number>}      */     add(data) {   %    return new Promise((resolve) => {         nanoajax.ajax(   	        {             url: "/cart/add.js",             method: "post",   :          body: this.generateShopifyCartBody("add", data),   
        },   *        (code, responseText, request) => {   0          const cart = JSON.parse(responseText);   %          if (Number(code) !== 200) {   -            cart.errors = [cart.description];             }             resolve(cart);   	        }         );       });     }   }       export default new Cart();�       h       g   import nanoajax from 'nanoajax'       /**   1 * Here, we provide an easy to use, Promise-based   4 * interface for communicating with the Shopify Cart    * API.    *    * Examples:    * import cart from 'lib/cart'    *    * cart   
 *  .get()    *  .then(data => {    *    console.log(data)    *  })    *    * cart   & *  .add({id: variantID, quantity: 1})    *  .then(data => {    *    console.log(data)    *  })    *    * cart   ) *  .update({id: variantID, quantity: 1})    *  .then(data => {    *    console.log(data)    *  })    */   class Cart {   
  get () {   %    return new Promise((resolve) => {         nanoajax.ajax(   	        {             url: '/cart.js',             method: 'get'   
        },   *        (code, responseText, request) => {   /          const cart = JSON.parse(responseText)             resolve(cart)   	        }         )       })     }       E  generateShopifyCartBody (mode, { id, quantity, properties = {} }) {   )    const props = Object.keys(properties)         .reduce((arr, key) => {   9        arr.push(`properties[${key}]=${properties[key]}`)           return arr         }, [])         .join('&')       if (mode === 'add') {   G      return `quantity=${quantity}&id=${id}${props ? '&' + props : ''}`       } else {   D      return `updates[${id}]=${quantity}${props ? '&' + props : ''}`       }     }         update (data) {   -    return new Promise((resolve, reject) => {         nanoajax.ajax(   	        {   !          url: '/cart/update.js',             method: 'post',   <          body: this.generateShopifyCartBody('update', data)   
        },   *        (code, responseText, request) => {   /          const cart = JSON.parse(responseText)   %          if (Number(code) !== 200) {   ,            cart.errors = [cart.description]             }             resolve(cart)   	        }         )       })     }         /**   '   * Adds a product to the Shopify cart      *   8   * @param {Object} data {id: <id>, quantity: <Number>}      */     add (data) {   %    return new Promise((resolve) => {         nanoajax.ajax(   	        {             url: '/cart/add.js',             method: 'post',   9          body: this.generateShopifyCartBody('add', data)   
        },   *        (code, responseText, request) => {   /          const cart = JSON.parse(responseText)   %          if (Number(code) !== 200) {   ,            cart.errors = [cart.description]             }             resolve(cart)   	        }         )       })     }   }       export default new Cart()5��