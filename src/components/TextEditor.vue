<template>
  <section>
    <div class="buttons my-32 space-y-4 m-4 text-grey-900">
      <h1 class="text-2xl font-bold">One Post</h1>

      <Toolbars />

      <div class="">
        <div
          class="p-2 hover:bg-gray-100 rounded outline-none w-1/4"
          v-for="(value, index) in content"
          :id="`content-${index}`"
          :key="index"
          contenteditable
          :tabindex="index"
          @input="event => onInput(event, index)"
          @keyup.enter="enterEvent(value.value, index)"
          @keyup.delete="backSpaceEvent(value.value, index)"
          @keydown.enter.prevent
          @keydown="keyEvent($event, index)"
        />

      </div>

    </div>
  </section>
</template>

<script>
import { markRaw } from "vue"
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"
import Toolbars from './Toolbars.vue'

export default {
  components: {
    Toolbars,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  data() {
    return {
      len: 3,
      deleteWatcher: 1,
      content: [
        { value: 'paragraph 1' },
        { value: 'paragraph 2' },
        { value: 'paragraph 3' },
      ],
    }
  },
  mounted() {
    this.updateAllContent()
  },
  methods: {
    getCaretCharacterOffsetWithin(element) {
      var caretOffset = 0;
      var doc = element.ownerDocument || element.document;
      var win = doc.defaultView || doc.parentWindow;
      var sel;
      if (typeof win.getSelection != "undefined") {
          sel = win.getSelection();
          if (sel.rangeCount > 0) {
              var range = win.getSelection().getRangeAt(0);
              var preCaretRange = range.cloneRange();
              preCaretRange.selectNodeContents(element);
              preCaretRange.setEnd(range.endContainer, range.endOffset);
              caretOffset = preCaretRange.toString().length;
          }
      } else if ( (sel = doc.selection) && sel.type != "Control") {
          var textRange = sel.createRange();
          var preCaretTextRange = doc.body.createTextRange();
          preCaretTextRange.moveToElementText(element);
          preCaretTextRange.setEndPoint("EndToEnd", textRange);
          caretOffset = preCaretTextRange.text.length;
      }
      return caretOffset;
    },




    keyEvent(e, index) {

      --index
      var target = document.getElementById('content-' + index)

      //target.focus()
      //console.log(e.target, target)
      console.log(this.getCaretCharacterOffsetWithin(e.target));

    },

    enterEvent(data, index) {
      this.add()
    },
    backSpaceEvent(value, index) {
      console.log(this.content.length)
      if ((value.length == 0) && (this.deleteWatcher > 0)) {
        this.deleteWatcher--
        console.log('Meg ne torold' + this.deleteWatcher);
      } else if ((this.deleteWatcher == 0) && (this.content.length != 1)) {
        this.deleteThisRow(index)
        this.deleteWatcher++
      } else {
        console.log('delete watcher: ' + this.deleteWatcher + ' | karakter: ' + value);
      }
    },




    onInput(event, index) {
      const value = event.target.innerText;
      this.content[index].value = value;
      console.log(this.content[index].value);
    },
    onRemove(index) {
      if (this.content.length > 1 && this.content[index].value.length === 0) {
        this.$delete(this.content, index);
        this.updateAllContent();
      }
    },
    updateAllContent() {
      this.content.forEach((c, index) => {
        const el = document.getElementById(`content-${index}`);
        el.innerText = c.value;
      });
    },

    add: function() {
      ++this.len;
      this.content.push({
        value: ''
      });
    },



    blurEvent() {
      console.log(this.blockRow)
    },
    toolbarEvent(toolbar) {

    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
