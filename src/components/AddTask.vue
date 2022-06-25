<template>
  <form
    class="add-form"
    @submit="onSubmit"
    :style="`${showAddTask ? 'display:block;' : 'display:none;'}`"
  >
    <div class="form-control">
      <label for="task-text-input">Task</label>
      <input
        id="task-text-input"
        type="text"
        v-model="text" 
        name="text" 
        placeholder="Add Task"
        required
      />
    </div>
    <div class="form-control">
      <label for="date-input">Day & Time</label>
      <input
        id="date-input"
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label for="reminder-check">Set Reminder</label>
      <input
        id="reminder-check"
        type="checkbox"
        v-model="reminder"
        name="reminder" />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
  export default {
    name: 'AddTask',
    props: {
      showAddTask: Boolean,
    },
    data() {
      return {
        text: '',
        day: '',
        reminder: false,
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault()
        this.$emit('add-task', {
          text: this.text,
          day: this.day,
          reminder: this.reminder,
        });
        this.text = ''
        this.day = ''
        this.reminder = false
      },
    },
  };
</script>

<style scoped>
  .add-form {
    margin-bottom: 40px;
  }
  .form-control {
    margin: 20px 0;
  }
  .form-control label {
    display: block;
  }
  .form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  .form-control-check {
    display: flex;
    align-items: center;
  }
  .form-control-check input {
    margin-left: 12px;
    height: 20px;
    width: 20px;
  }
</style>