<template>
  <div class="container">
    <Header title="Task Tracker" @add-task-toggle="addTaskToggle" />
    <AddTask
      :showAddTask="showAddTask"
      @add-task="addTask"
    />
    <Tasks
      :tasks="tasks"
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script>
  import Header from './components/Header'
  import AddTask from './components/AddTask'
  import Tasks from './components/Tasks'

  export default {
    name: 'App',
    components: {
      Header,
      AddTask,
      Tasks,
    },
    data() {
      return {
        tasks: [],
        showAddTask: false,
        lastTaskId: 3,
      };
    },
    methods: {
      addTaskToggle() {
        this.showAddTask = !this.showAddTask;
        console.log(this.showAddTask)
      },
      addTask(task) {
        this.lastTaskId++;
        task.id = this.lastTaskId;
        this.tasks.push(task);
      },
      toggleReminder(id) {
        for (let i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i].id === id) {
            this.tasks[i].reminder = !this.tasks[i].reminder;
            break;
          }
        }
      },
      deleteTask(id) {
        if (!confirm("Delete this task?")) return;
        for (let i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i].id === id) {
            this.tasks.splice(i, 1);
            break;
          }
        }
      },
    },
    created() {
      this.tasks = [
        {
          "id": "1",
          "text": "Doctors Appointment",
          "day": "March 5th at 2:30pm",
          "reminder": true
        },
        {
          "id": "2",
          "text": "Meeting with boss",
          "day": "March 6th at 1:30pm",
          "reminder": true
        },
        {
          "id": "3",
          "text": "Food shopping",
          "day": "March 7th at 2:00pm",
          "reminder": false
        }
      ];
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
  .container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
  }
  .btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }
  .btn:focus {
    outline: none;
  }
  .btn:active {
    transform: scale(0.98);
  }
  .btn-block {
    display: block;
    width: 100%;
  }
</style>
