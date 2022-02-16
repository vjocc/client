<template>
  <div class="space-x-2">



    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="add()">ADD PARAGRAPH</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('bold')">BOLD</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('italic')">ITALIC</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('justifyLeft')">LEFT ALIGN</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('justifyCenter')">CENTER</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('justifyRight')">RIGHT ALIGN</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('insertOrderedList')">ORDERED LIST</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('insertUnorderedList')">UNORDERED LIST</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('backColor',false,'#FFFF66')">HEIGHLIGHT</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('foreColor',false,'red')">RED TEXT</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="createLink()">CREATE LINK</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('unlink')">REMOVE LINK</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('formatBlock',false,'H1')">H1</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('underline')">UNDERLINE</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('strikeThrough')">STRIKETHROUGH</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('superscript')">SUPERSCRIPT</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('subscript')">SUBSCRIPT</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('indent')">INDENT</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('outdent')">OUTDENT</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('insertHorizontalRule')">HORIZONTAL LINE</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('insertParagraph')">INSERT PARAGRAPH</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('formatBlock',false,'BLOCKQUOTE')">BLOCK QUOTE</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('selectAll')">SELECT ALL</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('removeFormat')">REMOVE FORMAT</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('undo')">UNDO</button>
    <button class="p-1 bg-gray-100 rounded" v-on:click.prevent="stylize('redo')">REDO</button>
  </div>
</template>

<script>
export default {
  methods: {
    stylize: function(style, ui, value) {
      var inui = false;
      var ivalue = null;
      if (arguments[1]) {
        inui = ui;
      }
      if (arguments[2]) {
        ivalue = value;
      }
      document.execCommand(style, inui, ivalue);
    },
    createLink: function() {
      var link = prompt("Enter URL", "https://codepen.io");
      document.execCommand('createLink', false, link);
    },
    deleteThisRow: function(index) {
      --this.len
      this.content.splice(index, 1)
      --index
    },
    
  }
}
</script>

<style lang="css" scoped>
</style>
