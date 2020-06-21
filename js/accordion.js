/** handorgel v0.4.9, @license MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).handorgel=t()}(this,function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}var i="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var s,o=(function(e){var t,n;t="undefined"!=typeof window?window:i,n=function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},i=n[e]=n[e]||[];return-1==i.indexOf(t)&&i.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var i=n.indexOf(t);return-1!=i&&n.splice(i,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var i=this._onceEvents&&this._onceEvents[e],s=0;s<n.length;s++){var o=n[s];i&&i[o]&&(this.off(e,o),delete i[o]),o.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e},e.exports?e.exports=n():t.EvEmitter=n()}(s={exports:{}},s.exports),s.exports),a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;function h(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return void 0===e[t]||n&&n.writable}function l(e){for(var t,n=arguments,i=1;i<n.length;++i)if(t=n[i])for(var s in t)h(e,s)&&(e[s]=t[s]);return e}var r={},d={button:{"aria-controls":function(){return this.id+"-content"},"aria-expanded":function(){return this.expanded?"true":"false"},"aria-disabled":function(){return this.disabled?"true":"false"}},content:{role:function(){return"region"},"aria-labelledby":function(){return this.id+"-header"}}},c=40,u=38,f=33,p=34,v=35,b=36,g=function(){function t(n,i,s){e(this,t),i.handorgelFold||(this.handorgel=n,this.header=i,this.button=i.firstElementChild,this.content=s,this.header.handorgelFold=this,this.content.handorgelFold=this,r[this.handorgel.id]||(r[this.handorgel.id]=0),this.id="".concat(this.handorgel.id,"-fold").concat(++r[this.handorgel.id]),this.header.setAttribute("id",this.id+"-header"),this.content.setAttribute("id",this.id+"-content"),this.focused=!1,this.expanded=!1,this.disabled=!1,this._listeners={},this._bindEvents(),this._initAria(),this._initialOpen(),this._initialFocus())}return n(t,[{key:"open",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.expanded||(this.handorgel.emitEvent("fold:open",[this]),this.expanded=!0,this.handorgel.options.collapsible||this.disable(),this._updateAria("button","aria-expanded"),this.header.classList.add(this.handorgel.options.headerOpenClass),this.content.classList.add(this.handorgel.options.contentOpenClass),this.resize(e),e||this._opened())}},{key:"close",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.expanded&&(this.handorgel.emitEvent("fold:close",[this]),this.expanded=!1,this.handorgel.options.collapsible||this.enable(),this._updateAria("button","aria-expanded"),this.header.classList.remove(this.handorgel.options.headerOpenedClass),this.content.classList.remove(this.handorgel.options.contentOpenedClass),this.resize(e),e||this._closed())}},{key:"disable",value:function(){this.disabled=!0,this._updateAria("button","aria-disabled"),this.header.classList.add(this.handorgel.options.headerDisabledClass),this.content.classList.add(this.handorgel.options.contentDisabledClass)}},{key:"enable",value:function(){this.disabled=!1,this._updateAria("button","aria-disabled"),this.header.classList.remove(this.handorgel.options.headerDisabledClass),this.content.classList.remove(this.handorgel.options.contentDisabledClass)}},{key:"focus",value:function(){this.button.focus()}},{key:"blur",value:function(){this.button.blur()}},{key:"toggle",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.expanded?this.close(e):this.open(e)}},{key:"resize",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=0;t||(this.header.classList.add(this.handorgel.options.headerNoTransitionClass),this.content.classList.add(this.handorgel.options.contentNoTransitionClass)),this.expanded&&(n=this.content.firstElementChild.offsetHeight),this.content.style.height=n+"px",t||a(function(){e.header.classList.remove(e.handorgel.options.headerNoTransitionClass),e.content.classList.remove(e.handorgel.options.contentNoTransitionClass)})}},{key:"destroy",value:function(){this._unbindEvents(),this._cleanAria(),this.header.classList.remove(this.handorgel.options.headerOpenClass),this.header.classList.remove(this.handorgel.options.headerOpenedClass),this.header.classList.remove(this.handorgel.options.headerFocusClass),this.header.classList.remove(this.handorgel.options.headerNoTransitionClass),this.content.classList.remove(this.handorgel.options.contentOpenClass),this.content.classList.remove(this.handorgel.options.contentOpenedClass),this.content.classList.remove(this.handorgel.options.contentFocusClass),this.content.classList.remove(this.handorgel.options.contentNoTransitionClass),this.content.style.height="0px",this.header.handorgelFold=null,this.content.handorgelFold=null,this.header.removeAttribute("id"),this.content.removeAttribute("id"),this.handorgel=null}},{key:"_opened",value:function(){this.header.classList.add(this.handorgel.options.headerOpenedClass),this.content.classList.add(this.handorgel.options.contentOpenedClass),this.handorgel.emitEvent("fold:opened",[this])}},{key:"_closed",value:function(){this.header.classList.remove(this.handorgel.options.headerOpenClass),this.content.classList.remove(this.handorgel.options.contentOpenClass),this.handorgel.emitEvent("fold:closed",[this])}},{key:"_initialOpen",value:function(){var e=this;null===this.header.getAttribute(this.handorgel.options.initialOpenAttribute)&&null===this.content.getAttribute(this.handorgel.options.initialOpenAttribute)||(this.handorgel.options.initialOpenTransition?window.setTimeout(function(){e.open()},this.handorgel.options.initialOpenTransitionDelay):this.open(!1))}},{key:"_initialFocus",value:function(){null!==this.button.getAttribute("autofocus")&&this._handleFocus()}},{key:"_initAria",value:function(){this._updateAria("button"),this._updateAria("content")}},{key:"_cleanAria",value:function(){this._updateAria("button",null,!0),this._updateAria("content",null,!0)}},{key:"_updateAria",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.handorgel.options.ariaEnabled)if(t){var i=d[e][t].call(this);this[e].setAttribute(t,i)}else for(var s in d[e])if(d[e].hasOwnProperty(s))if(n)this[e].removeAttribute(s);else{var o=d[e][s].call(this);this[e].setAttribute(s,o)}}},{key:"_handleContentTransitionEnd",value:function(e){e.target===e.currentTarget&&"height"===e.propertyName&&(this.handorgel.resize(!0),this.expanded?this._opened():this._closed())}},{key:"_handleFocus",value:function(){this.focused=!0,this.header.classList.add(this.handorgel.options.headerFocusClass),this.content.classList.add(this.handorgel.options.contentFocusClass),this.handorgel.emitEvent("fold:focus",[this])}},{key:"_handleBlur",value:function(){this.focused=!1,this.header.classList.remove(this.handorgel.options.headerFocusClass),this.content.classList.remove(this.handorgel.options.contentFocusClass),this.handorgel.emitEvent("fold:blur",[this])}},{key:"_handleButtonClick",value:function(e){this.focus(),this.disabled||this.toggle()}},{key:"_handleButtonKeydown",value:function(e){if(this.handorgel.options.keyboardInteraction){var t=null;switch(e.which){case c:t="next";break;case u:t="prev";break;case b:t="first";break;case v:t="last";break;case p:e.ctrlKey&&(t="next");break;case f:e.ctrlKey&&(t="prev")}t&&(e.preventDefault(),this.handorgel.focus(t))}}},{key:"_handleContentKeydown",value:function(e){if(this.handorgel.options.keyboardInteraction&&e.ctrlKey){var t=null;switch(e.which){case p:t="next";break;case f:t="prev"}t&&(e.preventDefault(),this.handorgel.focus(t))}}},{key:"_bindEvents",value:function(){for(var e in this._listeners={bFocus:["focus",this.button,this._handleFocus.bind(this)],bBlur:["blur",this.button,this._handleBlur.bind(this)],bClick:["click",this.button,this._handleButtonClick.bind(this)],bKeydown:["keydown",this.button,this._handleButtonKeydown.bind(this)],cKeydown:["keydown",this.content,this._handleContentKeydown.bind(this)],cTransition:["transitionend",this.content,this._handleContentTransitionEnd.bind(this)]},this._listeners)if(this._listeners.hasOwnProperty(e)){var t=this._listeners[e];t[1].addEventListener(t[0],t[2])}}},{key:"_unbindEvents",value:function(){for(var e in this._listeners)if(this._listeners.hasOwnProperty(e)){var t=this._listeners[e];t[1].removeEventListener(t[0],t[2])}}}]),t}(),_=0,y=function(){function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,t),n.handorgel||(this.element=n,this.element.handorgel=this,this.id="handorgel".concat(++_),this.element.setAttribute("id",this.id),this.folds=[],this.options=l({},t.defaultOptions,i),this._listeners={},this._resizing=!1,this._bindEvents(),this._initAria(),this.update())}return n(t,[{key:"update",value:function(){this.folds=[];for(var e=this.element.children,t=0,n=e.length;t<n;t+=2){var i=e[t],s=e[t+1],o=i.handorgelFold;!o&&i&&s&&(o=new g(this,i,s)),o&&this.folds.push(o)}}},{key:"resize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.folds.forEach(function(t){t.resize(e)}),this._resizing=!1}},{key:"focus",value:function(e){for(var t=this.folds.length,n=null,i=0;i<t&&null===n;i++)this.folds[i].focused&&(n=i);if("prev"!==e&&"next"!==e||null!==n||(e="prev"===e?"last":"first"),"prev"===e&&0===n){if(!this.options.carouselFocus)return;e="last"}if("next"===e&&n===t-1){if(!this.options.carouselFocus)return;e="first"}switch(e){case"prev":this.folds[--n].focus();break;case"next":this.folds[++n].focus();break;case"last":this.folds[t-1].focus();break;case"first":default:this.folds[0].focus()}}},{key:"destroy",value:function(){this.emitEvent("destroy"),this.element.removeAttribute("id"),this.folds.forEach(function(e){e.destroy()}),this._unbindEvents(),this._cleanAria(),this.element.handorgel=null,this.emitEvent("destroyed")}},{key:"_handleFoldOpen",value:function(e){this.options.multiSelectable||this.folds.forEach(function(t){e!==t&&t.close()})}},{key:"_handleResize",value:function(){var e=this;this._resizing||(this._resizing=!0,a(function(){e.resize()}))}},{key:"_initAria",value:function(){this.options.ariaEnabled&&this.options.multiSelectable&&this.element.setAttribute("aria-multiselectable","true")}},{key:"_cleanAria",value:function(){this.element.removeAttribute("aria-multiselectable")}},{key:"_bindEvents",value:function(){this._listeners.resize=this._handleResize.bind(this),window.addEventListener("resize",this._listeners.resize),this._listeners.foldOpen=this._handleFoldOpen.bind(this),this.on("fold:open",this._listeners.foldOpen)}},{key:"_unbindEvents",value:function(){window.removeEventListener("resize",this._listeners.resize),this.off("fold:open",this._listeners.foldOpen)}}]),t}();return l(y.prototype,o.prototype),y.defaultOptions={keyboardInteraction:!0,multiSelectable:!0,ariaEnabled:!0,collapsible:!0,carouselFocus:!0,initialOpenAttribute:"data-open",initialOpenTransition:!0,initialOpenTransitionDelay:200,headerOpenClass:"handorgel__header--open",contentOpenClass:"handorgel__content--open",headerOpenedClass:"handorgel__header--opened",contentOpenedClass:"handorgel__content--opened",headerDisabledClass:"handorgel__header--disabled",contentDisabledClass:"handorgel__content--disabled",headerFocusClass:"handorgel__header--focus",contentFocusClass:"handorgel__content--focus",headerNoTransitionClass:"handorgel__header--notransition",contentNoTransitionClass:"handorgel__content--notransition"},y});