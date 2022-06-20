const {createApp} = Vue

createApp({
    data() {
        return {
            inputValue: '',
            notes: [],
        }
    },
    methods: {
        setInputValue(event) {
            this.inputValue = event.target.value
        },
        addNote() {
            if (this.inputValue !== '')  {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(i) {
            this.notes.splice(i, 1)
        }
    }
}).mount('#app')