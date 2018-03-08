!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){var n=wp.i18n.__,a=wp.blocks,r=a.registerBlockType,c=a.RichText,l=a.MediaUpload,o=a.source,s=(o.attr,o.children,wp.components.Button);r("meh-blocks/meh-card",{title:n("meh Card"),icon:"layout",category:"common",attributes:{title:{type:"array",source:"children",selector:"h2"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},cardBody:{type:"array",source:"children",selector:".card_body"},cardActions:{type:"array",source:"children",selector:".cardActions"}},edit:function(e){var t=e.focus?e.focus.editable||"title":null,a=e.attributes;return wp.element.createElement("div",{className:e.className},wp.element.createElement("div",{className:"card__media"},wp.element.createElement(l,{onSelect:function(t){e.setAttributes({mediaURL:t.url,mediaID:t.id})},type:"image",value:a.mediaID,render:function(e){var t=e.open;return wp.element.createElement(s,{className:a.mediaID?"image-button":"button button-large",onClick:t},a.mediaID?wp.element.createElement("img",{src:a.mediaURL}):n("Upload Image"))}})),wp.element.createElement(c,{tagName:"h2",placeholder:n("Write Recipe title…"),value:a.title,onChange:function(t){e.setAttributes({title:t})},focus:"title"===t,onFocus:function(t){e.setFocus(_.extend({},t,{editable:"title"}))}}),wp.element.createElement("h3",null,n("Body")),wp.element.createElement(c,{tagName:"div",multiline:"p",className:"card_body",placeholder:n("Write the cardBody…"),value:a.cardBody,onChange:function(t){e.setAttributes({cardBody:t})},focus:"cardBody"===t,onFocus:function(t){e.setFocus(_.extend({},t,{editable:"cardBody"}))}}),wp.element.createElement("h3",null,n("Actions")),wp.element.createElement(c,{tagName:"div",multiline:"p",placeholder:n("Write a list of cardActions…"),value:a.cardActions,onChange:function(t){e.setAttributes({cardActions:t})},focus:"cardActions"===t,onFocus:function(t){e.setFocus(_.extend({},t,{editable:"cardActions"}))},className:"cardActions"}))},save:function(e){var t=e.className,n=e.attributes,a=n.title,r=n.mediaURL,c=n.cardActions,l=n.cardBody;return wp.element.createElement("div",{className:t},r&&wp.element.createElement("img",{className:"card__media",src:r}),wp.element.createElement("h2",null,a),wp.element.createElement("div",{className:"card_body"},l),wp.element.createElement("div",{className:"cardActions"},c))}})},function(e,t){var n=wp.i18n.__,a=wp.blocks,r=a.registerBlockType,c=a.RichText;a.source.children;r("gutenberg-examples/example-03-editable-esnext",{title:n("Example: Editable (esnext)"),icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"}},edit:function(e){var t=e.attributes.content,n=e.focus,a=e.className,r=e.setFocus;return wp.element.createElement(c,{className:a,onChange:function(t){e.setAttributes({content:t})},value:t,focus:n,onFocus:r})},save:function(e){return wp.element.createElement("p",null,e.attributes.content)}})},function(e,t){var n=wp.i18n.__,a=wp.blocks,r=a.registerBlockType,c=a.RichText,l=(a.source.children,a.AlignmentToolbar),o=a.BlockControls;r("gutenberg-examples/example-04-controls-esnext",{title:n("Example: Controls (esnext)"),icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"}},edit:function(e){var t=e.attributes,n=t.content,a=t.alignment,r=e.focus,s=e.className,i=e.setFocus;return wp.element.createElement("div",null,!!r&&wp.element.createElement(o,null,wp.element.createElement(l,{value:a,onChange:function(t){e.setAttributes({alignment:t})}})),wp.element.createElement(c,{className:s,style:{textAlign:a},onChange:function(t){e.setAttributes({content:t})},value:n,focus:r,onFocus:i}))},save:function(e){var t="";return e.attributes.alignment&&(t="gutenberg-examples-align-"+e.attributes.alignment),wp.element.createElement("p",{className:t},e.attributes.content)}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.settings=t.name=void 0;var a=wp.i18n.__,r=wp.blocks,c=r.registerBlockType,l=r.RichText;c("meh/versetwo",{title:a("VerseTwo"),icon:"grid-view",category:"common",keywords:[a("meh VerseTwo"),a("Verse")],attributes:{content:{type:"array",source:"children",selector:"pre"}}});t.name="meh/versetwo";var o={title:a("VerseTwo"),description:a("Write poetry and other literary expressions honoring all spaces and line-breaks."),icon:"edit",category:"formatting",keywords:[a("poetry")],attributes:{content:{type:"array",source:"children",selector:"pre"}},transforms:{from:[{type:"block",blocks:["core/paragraph"],transform:function(e){return createBlock("meh/versetwo",e)}}],to:[{type:"block",blocks:["core/paragraph"],transform:function(e){return createBlock("core/paragraph",e)}}]},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className,c=e.isSelected,o=t.content;return wp.element.createElement(l,{tagName:"pre",value:o,onChange:function(e){n({content:e})},placeholder:a("Write…"),wrapperClassName:r,formattingControls:["bold","italic","strikethrough"],isSelected:c})},save:function(e){var t=e.attributes,n=e.className;return wp.element.createElement("pre",{className:n},t.content)}};t.settings=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=wp.i18n.__,r=wp.blocks,c=r.registerBlockType,l=r.RichText,o=c("meh-blocks/meh-tile",{title:a("meh Tile"),icon:"screenoptions",category:"common",keywords:[a("meh Tile"),a("Tile")],attributes:{title:{type:"array",source:"children",selector:".block-title"},content:{type:"array",source:"children",selector:".block-content"}},edit:function(e){var t=e.focus?e.focus.editable||"title":null,n=e.attributes;return wp.element.createElement("div",{className:e.className},wp.element.createElement("div",{className:"arch-post u-1of2-md arch-content arch-card arch-no-link-title u-flexed-stretch o-cell u-shadow1 u-br"},wp.element.createElement("header",{className:"u-1of1 u-h3 u-flexed-auto u-text-display"},wp.element.createElement(l,{tagName:"h3",placeholder:a("Card title"),value:n.title,onChange:function(t){e.setAttributes({title:t})},focus:"title"===t,onFocus:function(t){e.setFocus(_.extend({},t,{editable:"title"}))},className:"block-title"})),wp.element.createElement(l,{tagName:"div",placeholder:a("Card content"),value:n.content,onChange:function(t){e.setAttributes({content:t})},focus:"content"===t,onFocus:function(t){e.setFocus(_.extend({},t,{editable:"content"}))},className:"block-content"})))},save:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("div",{className:"arch-post u-1of2-md arch-content arch-card arch-no-link-title u-flexed-stretch o-cell u-shadow1 u-br"},wp.element.createElement("header",{className:"u-1of1 u-h3 u-flexed-auto u-text-display"},wp.element.createElement("h3",{className:"block-title"},e.attributes.title)),wp.element.createElement("div",{className:"block-content"},e.attributes.content)))}});t.default=o},function(e,t,n){"use strict";n(4),n(3),n(2),n(1),n(0)}]);